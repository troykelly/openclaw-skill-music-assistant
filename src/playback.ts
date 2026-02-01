/**
 * Playback control for Music Assistant.
 *
 * Control media playback on speakers via Home Assistant service calls.
 */

import { HaClient } from "./ha-client.ts";

/** Enqueue mode for playback */
export type EnqueueMode = "play" | "replace" | "next" | "add";

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
 * Play media on a speaker.
 */
export async function playMedia(client: HaClient, options: PlayMediaOptions) {
  const { entityId, uri, mediaType = "music", enqueue } = options;

  const data: Record<string, unknown> = {
    entity_id: entityId,
    media_content_id: uri,
    media_content_type: mediaType,
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
  const { entityId, uri, mediaType = "music" } = options;

  return client.callService("media_player", "play_media", {
    entity_id: entityId,
    media_content_id: uri,
    media_content_type: mediaType,
    enqueue: "add",
  });
}
