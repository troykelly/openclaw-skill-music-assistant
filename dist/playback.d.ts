/**
 * Playback control for Music Assistant.
 *
 * Control media playback on speakers via Home Assistant service calls.
 */
import { HaClient } from "./ha-client.js";
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
    level: number;
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
export declare function playMedia(client: HaClient, options: PlayMediaOptions): Promise<unknown>;
/**
 * Pause media on a speaker.
 */
export declare function pauseMedia(client: HaClient, options: PlaybackOptions): Promise<unknown>;
/**
 * Stop media on a speaker.
 */
export declare function stopMedia(client: HaClient, options: PlaybackOptions): Promise<unknown>;
/**
 * Skip to the next track.
 */
export declare function nextTrack(client: HaClient, options: PlaybackOptions): Promise<unknown>;
/**
 * Go to the previous track.
 */
export declare function prevTrack(client: HaClient, options: PlaybackOptions): Promise<unknown>;
/**
 * Set volume level on a speaker.
 */
export declare function setVolume(client: HaClient, options: VolumeOptions): Promise<unknown>;
/**
 * Add media to the queue.
 */
export declare function addToQueue(client: HaClient, options: QueueOptions): Promise<unknown>;
//# sourceMappingURL=playback.d.ts.map