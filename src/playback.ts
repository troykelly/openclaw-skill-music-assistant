/**
 * Playback control for Music Assistant.
 *
 * Control media playback on speakers via Home Assistant service calls.
 * Uses Music Assistant's play_media service for MA URIs (library://, spotify://, etc.)
 * and falls back to standard media_player.play_media for regular URLs.
 */

import { HaClient } from "./ha-client.js";

/** Enqueue mode for playback */
export type EnqueueMode = "play" | "replace" | "next" | "add" | "replace_next";

/** Options for playing media */
export interface PlayMediaOptions {
  entityId: string;
  uri: string;
  mediaType?: string;
  enqueue?: EnqueueMode;
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
function isMusicAssistantUri(uri: string): boolean {
  // MA URIs have a custom scheme (not http/https)
  // Common patterns: library://, spotify://, opensubsonic--xxx://
  if (uri.startsWith("http://") || uri.startsWith("https://")) {
    return false;
  }
  // Check for scheme:// pattern
  return /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(uri);
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

/**
 * Play media on a speaker.
 *
 * For Music Assistant URIs (library://, spotify://, etc.), uses the
 * music_assistant.play_media service which can resolve and stream these URIs.
 *
 * For regular HTTP URLs, uses the standard media_player.play_media service.
 */
export async function playMedia(client: HaClient, options: PlayMediaOptions) {
  const { entityId, uri, mediaType, enqueue } = options;

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
