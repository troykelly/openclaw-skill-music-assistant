/**
 * Playback control for Music Assistant.
 *
 * Control media playback on speakers via Home Assistant service calls.
 */
/**
 * Play media on a speaker.
 */
export async function playMedia(client, options) {
    const { entityId, uri, mediaType = "music", enqueue } = options;
    const data = {
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
export async function pauseMedia(client, options) {
    return client.callService("media_player", "media_pause", {
        entity_id: options.entityId,
    });
}
/**
 * Stop media on a speaker.
 */
export async function stopMedia(client, options) {
    return client.callService("media_player", "media_stop", {
        entity_id: options.entityId,
    });
}
/**
 * Skip to the next track.
 */
export async function nextTrack(client, options) {
    return client.callService("media_player", "media_next_track", {
        entity_id: options.entityId,
    });
}
/**
 * Go to the previous track.
 */
export async function prevTrack(client, options) {
    return client.callService("media_player", "media_previous_track", {
        entity_id: options.entityId,
    });
}
/**
 * Set volume level on a speaker.
 */
export async function setVolume(client, options) {
    const level = Math.max(0, Math.min(1, options.level));
    return client.callService("media_player", "volume_set", {
        entity_id: options.entityId,
        volume_level: level,
    });
}
/**
 * Add media to the queue.
 */
export async function addToQueue(client, options) {
    const { entityId, uri, mediaType = "music" } = options;
    return client.callService("media_player", "play_media", {
        entity_id: entityId,
        media_content_id: uri,
        media_content_type: mediaType,
        enqueue: "add",
    });
}
//# sourceMappingURL=playback.js.map