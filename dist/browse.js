/**
 * Music Assistant library browsing.
 *
 * Browse artists, albums, tracks, playlists, radio stations via HA REST API.
 * Supports hierarchical navigation (artist → albums → tracks).
 */
import { z } from "zod";
/** Schema for a library item */
export const LibraryItemSchema = z.object({
    item_id: z.string(),
    name: z.string(),
    media_type: z.string(),
    uri: z.string().optional(),
    artist: z.string().optional(),
    album: z.string().optional(),
    duration: z.number().optional(),
    image_url: z.string().optional(),
});
/** Schema for browse response */
export const BrowseResponseSchema = z.object({
    items: z.array(LibraryItemSchema),
});
/**
 * Browse the Music Assistant library via Home Assistant service call.
 *
 * @param client - Home Assistant client
 * @param options - Browse options
 * @returns Browse response with items
 */
export async function browseLibrary(client, options) {
    const { mediaType, parentId, limit, offset } = options;
    // Build service call payload
    const payload = {
        media_type: mediaType,
    };
    if (parentId) {
        payload.parent_id = parentId;
    }
    if (limit !== undefined) {
        payload.limit = limit;
    }
    if (offset !== undefined) {
        payload.offset = offset;
    }
    // Call the Music Assistant service via HA REST API
    const response = await client.callService("music_assistant", "browse_media", payload);
    // Parse and validate response
    const parsed = BrowseResponseSchema.safeParse(response);
    if (!parsed.success) {
        throw new Error(`Invalid browse response: ${parsed.error.message}`);
    }
    return parsed.data;
}
//# sourceMappingURL=browse.js.map