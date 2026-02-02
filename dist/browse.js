/**
 * Music Assistant library browsing.
 *
 * Browse artists, albums, tracks, playlists, radio stations via HA REST API.
 * Supports hierarchical navigation (artist → albums → tracks).
 */
import { z } from "zod";
import { discoverMaEntryIds } from "./ma-discovery.js";
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
/** Schema for MA get_library API response */
const MaLibraryResponseSchema = z.object({
    items: z.array(z.object({
        media_type: z.string(),
        uri: z.string(),
        name: z.string(),
        image: z.string().nullable().optional(),
        artists: z.array(z.object({
            name: z.string(),
        }).passthrough()).optional(),
        album: z.object({
            name: z.string(),
        }).passthrough().optional(),
    }).passthrough()),
    limit: z.number().optional(),
    offset: z.number().optional(),
    media_type: z.string().optional(),
    order_by: z.string().optional(),
});
/**
 * Transform MA API response to our BrowseResponse format.
 */
function transformMaLibraryResponse(maResponse) {
    const items = maResponse.items.map((item) => ({
        item_id: item.uri,
        name: item.name,
        media_type: item.media_type,
        uri: item.uri,
        artist: item.artists?.[0]?.name,
        album: item.album?.name,
        image_url: item.image ?? undefined,
    }));
    return { items };
}
/**
 * Browse the Music Assistant library via Home Assistant service call.
 *
 * Uses the get_library service with return_response to fetch library items.
 *
 * @param client - Home Assistant client
 * @param prismaOrOptions - Prisma client for config entry discovery, or options if configEntryId is provided
 * @param optionsOrUndefined - Browse options (when prisma is provided)
 * @returns Browse response with items
 */
export async function browseLibrary(client, prismaOrOptions, optionsOrUndefined) {
    // Support both signatures:
    // browseLibrary(client, prisma, options) - full signature
    // browseLibrary(client, options) - when configEntryId is provided in options
    let prisma;
    let options;
    if (optionsOrUndefined !== undefined) {
        // Called with (client, prisma, options)
        prisma = prismaOrOptions;
        options = optionsOrUndefined;
    }
    else {
        // Called with (client, options) - configEntryId must be in options
        options = prismaOrOptions;
        prisma = undefined;
    }
    const { mediaType, parentId, limit, offset } = options;
    // Get or discover config entry ID
    let configEntryId = options.configEntryId;
    if (!configEntryId) {
        if (!prisma) {
            throw new Error("configEntryId is required when prisma client is not provided");
        }
        const discovery = await discoverMaEntryIds(prisma, client, true);
        if (discovery.entry_ids.length === 0) {
            throw new Error("No Music Assistant integration found in Home Assistant");
        }
        configEntryId = discovery.entry_ids[0];
    }
    // Build service call payload
    // Note: MA uses singular media_type names (artist, album, track, playlist, radio)
    // but the CLI uses plural (artists, albums, tracks, playlists, radio)
    const singularType = mediaType.replace(/s$/, "");
    const payload = {
        config_entry_id: configEntryId,
        media_type: singularType,
    };
    // Note: MA get_library doesn't support parent_id directly
    // For hierarchical navigation, you'd need to use a different approach
    if (parentId) {
        // Store parent_id for potential future use, but MA may not support it
        payload.search = parentId;
    }
    if (limit !== undefined) {
        payload.limit = limit;
    }
    if (offset !== undefined) {
        payload.offset = offset;
    }
    // Call the Music Assistant get_library service with return_response
    const response = await client.callServiceWithResponse("music_assistant", "get_library", payload);
    // Parse and validate the MA response format
    const maResult = MaLibraryResponseSchema.safeParse(response);
    if (!maResult.success) {
        throw new Error(`Invalid browse response from Music Assistant: ${maResult.error.message}`);
    }
    return transformMaLibraryResponse(maResult.data);
}
//# sourceMappingURL=browse.js.map