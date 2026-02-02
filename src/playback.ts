/**
 * Playback control for Music Assistant.
 *
 * Control media playback on speakers via Home Assistant service calls.
 * Uses Music Assistant's play_media service for MA URIs (library://, spotify://, etc.)
 * and falls back to standard media_player.play_media for regular URLs.
 *
 * Media type behavior with play_media:
 * - track, album, artist: Support search-based playback (media_id can be a search term)
 * - playlist, radio, podcast: Require URI (search term will cause 500 error)
 *
 * For playlist/radio/podcast, use playBySearch() which searches first then plays by URI.
 */

import { z } from "zod";
import { HaClient } from "./ha-client.js";

/** Enqueue mode for playback */
export type EnqueueMode = "play" | "replace" | "next" | "add" | "replace_next";

/** Media types that support search-based playback */
export const SEARCH_PLAYABLE_TYPES = ["track", "album", "artist"] as const;

/** Media types that require URI-based playback (search term causes 500) */
export const URI_ONLY_TYPES = ["playlist", "radio", "podcast", "audiobook", "folder"] as const;

/** All supported media types */
export type MediaType = (typeof SEARCH_PLAYABLE_TYPES)[number] | (typeof URI_ONLY_TYPES)[number];

/** Options for playing media */
export interface PlayMediaOptions {
  entityId: string;
  /** URI (library://..., spotify://...) or search term (for supported types) */
  uri: string;
  mediaType?: string;
  enqueue?: EnqueueMode;
  /** Enable radio mode for continuous playback */
  radioMode?: boolean;
}

/** Options for playing by search */
export interface PlayBySearchOptions {
  entityId: string;
  /** Search query */
  query: string;
  /** Media type to search for and play */
  mediaType: MediaType;
  /** Music Assistant config entry ID (required for search) */
  configEntryId: string;
  enqueue?: EnqueueMode;
  radioMode?: boolean;
}

/** Options for basic playback commands */
export interface PlaybackOptions {
  entityId: string;
}

/** Options for volume control */
export interface VolumeOptions {
  entityId: string;
  level: number; // 0.0 to 1.0
}

/** Options for adding to queue */
export interface QueueOptions {
  entityId: string;
  uri: string;
  mediaType?: string;
}

/**
 * Check if a URI is a Music Assistant URI that needs to go through MA service.
 * MA URIs include: library://, spotify://, qobuz://, tidal://, ytmusic://, etc.
 */
export function isMusicAssistantUri(uri: string): boolean {
  // MA URIs have a custom scheme (not http/https)
  // Common patterns: library://, spotify://, opensubsonic--xxx://
  if (uri.startsWith("http://") || uri.startsWith("https://")) {
    return false;
  }
  // Check for scheme:// pattern
  return /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(uri);
}

/**
 * Check if a media type supports search-based playback.
 */
export function supportsSearchPlayback(mediaType: string): boolean {
  return (SEARCH_PLAYABLE_TYPES as readonly string[]).includes(mediaType.toLowerCase());
}

/**
 * Infer media type from URI scheme and path.
 */
function inferMediaType(uri: string): string | undefined {
  const match = uri.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/([^/]+)/);
  if (!match) return undefined;

  const type = match[1].toLowerCase();
  const validTypes = ["artist", "album", "track", "playlist", "radio", "audiobook", "podcast", "folder"];
  if (validTypes.includes(type)) {
    return type;
  }

  // Check path for type hints
  if (uri.includes("/track/")) return "track";
  if (uri.includes("/album/")) return "album";
  if (uri.includes("/artist/")) return "artist";
  if (uri.includes("/playlist/")) return "playlist";

  return undefined;
}

// Schema for search response
const SearchResultItemSchema = z.object({
  media_type: z.string(),
  uri: z.string(),
  name: z.string(),
}).passthrough();

const SearchResponseSchema = z.object({
  artists: z.array(SearchResultItemSchema).optional().default([]),
  albums: z.array(SearchResultItemSchema).optional().default([]),
  tracks: z.array(SearchResultItemSchema).optional().default([]),
  playlists: z.array(SearchResultItemSchema).optional().default([]),
  radio: z.array(SearchResultItemSchema).optional().default([]),
  audiobooks: z.array(SearchResultItemSchema).optional().default([]),
  podcasts: z.array(SearchResultItemSchema).optional().default([]),
});

/**
 * Play media on a speaker.
 *
 * For Music Assistant URIs (library://, spotify://, etc.), uses the
 * music_assistant.play_media service which can resolve and stream these URIs.
 *
 * For regular HTTP URLs, uses the standard media_player.play_media service.
 *
 * IMPORTANT: For playlist/radio/podcast types, passing a search term instead of
 * a URI will cause a 500 error. Use playBySearch() for those types.
 */
export async function playMedia(client: HaClient, options: PlayMediaOptions) {
  const { entityId, uri, mediaType, enqueue, radioMode } = options;

  if (isMusicAssistantUri(uri)) {
    // Use Music Assistant's play_media service for MA URIs
    const data: Record<string, unknown> = {
      entity_id: entityId,
      media_id: uri,
    };

    // Add media_type if provided or can be inferred
    const type = mediaType ?? inferMediaType(uri);
    if (type) {
      data.media_type = type;
    }

    if (enqueue) {
      data.enqueue = enqueue;
    }

    if (radioMode !== undefined) {
      data.radio_mode = radioMode;
    }

    return client.callService("music_assistant", "play_media", data);
  }

  // For non-URI input (search term), check if the media type supports it
  const type = mediaType?.toLowerCase();
  if (type && !supportsSearchPlayback(type)) {
    throw new Error(
      `Media type "${type}" does not support search-based playback. ` +
      `Use a URI (e.g., library://playlist/...) or use playBySearch() to search first.`
    );
  }

  // If it's a search term with a supported type, use MA's play_media
  if (type && supportsSearchPlayback(type)) {
    const data: Record<string, unknown> = {
      entity_id: entityId,
      media_id: uri, // MA will search for this
      media_type: type,
    };

    if (enqueue) {
      data.enqueue = enqueue;
    }

    if (radioMode !== undefined) {
      data.radio_mode = radioMode;
    }

    return client.callService("music_assistant", "play_media", data);
  }

  // Fall back to standard media_player.play_media for HTTP URLs
  const data: Record<string, unknown> = {
    entity_id: entityId,
    media_content_id: uri,
    media_content_type: mediaType ?? "music",
  };

  if (enqueue) {
    data.enqueue = enqueue;
  }

  return client.callService("media_player", "play_media", data);
}

/**
 * Play media by searching first, then playing the first result.
 *
 * This is required for media types that don't support search-based playback:
 * - playlist
 * - radio
 * - podcast
 * - audiobook
 *
 * The function will:
 * 1. Search Music Assistant for items matching the query
 * 2. Get the URI from the first matching result
 * 3. Call play_media with the URI
 *
 * @throws Error if no matching items are found
 */
export async function playBySearch(client: HaClient, options: PlayBySearchOptions): Promise<{
  played: boolean;
  uri?: string;
  name?: string;
  searchResults: number;
}> {
  const { entityId, query, mediaType, configEntryId, enqueue, radioMode } = options;

  // Search for matching items
  const searchResponse = await client.callServiceWithResponse(
    "music_assistant",
    "search",
    {
      config_entry_id: configEntryId,
      name: query,
      media_type: [mediaType],
      limit: 5,
    }
  );

  const parsed = SearchResponseSchema.safeParse(searchResponse);
  if (!parsed.success) {
    throw new Error(`Invalid search response: ${parsed.error.message}`);
  }

  // Find matching items based on media type
  let items: { uri: string; name: string }[] = [];
  
  switch (mediaType) {
    case "track":
      items = parsed.data.tracks;
      break;
    case "album":
      items = parsed.data.albums;
      break;
    case "artist":
      items = parsed.data.artists;
      break;
    case "playlist":
      items = parsed.data.playlists;
      break;
    case "radio":
      items = parsed.data.radio;
      break;
    case "podcast":
      items = parsed.data.podcasts;
      break;
    case "audiobook":
      items = parsed.data.audiobooks;
      break;
    default:
      // Try all categories
      items = [
        ...parsed.data.tracks,
        ...parsed.data.albums,
        ...parsed.data.artists,
        ...parsed.data.playlists,
        ...parsed.data.radio,
      ];
  }

  if (items.length === 0) {
    return {
      played: false,
      searchResults: 0,
    };
  }

  // Play the first result
  const firstResult = items[0];
  await playMedia(client, {
    entityId,
    uri: firstResult.uri,
    mediaType,
    enqueue,
    radioMode,
  });

  return {
    played: true,
    uri: firstResult.uri,
    name: firstResult.name,
    searchResults: items.length,
  };
}

/**
 * Pause media on a speaker.
 */
export async function pauseMedia(client: HaClient, options: PlaybackOptions) {
  return client.callService("media_player", "media_pause", {
    entity_id: options.entityId,
  });
}

/**
 * Stop media on a speaker.
 */
export async function stopMedia(client: HaClient, options: PlaybackOptions) {
  return client.callService("media_player", "media_stop", {
    entity_id: options.entityId,
  });
}

/**
 * Skip to the next track.
 */
export async function nextTrack(client: HaClient, options: PlaybackOptions) {
  return client.callService("media_player", "media_next_track", {
    entity_id: options.entityId,
  });
}

/**
 * Go to the previous track.
 */
export async function prevTrack(client: HaClient, options: PlaybackOptions) {
  return client.callService("media_player", "media_previous_track", {
    entity_id: options.entityId,
  });
}

/**
 * Set volume level on a speaker.
 */
export async function setVolume(client: HaClient, options: VolumeOptions) {
  const level = Math.max(0, Math.min(1, options.level));

  return client.callService("media_player", "volume_set", {
    entity_id: options.entityId,
    volume_level: level,
  });
}

/**
 * Add media to the queue.
 */
export async function addToQueue(client: HaClient, options: QueueOptions) {
  const { entityId, uri, mediaType } = options;

  // Reuse playMedia with enqueue mode
  return playMedia(client, {
    entityId,
    uri,
    mediaType,
    enqueue: "add",
  });
}
