/**
 * Music Assistant search.
 *
 * Search for music by name, artist, genre, decade, year, or mood.
 * Supports structured query filters and fuzzy matching.
 */
import { z } from "zod";
import { discoverMaEntryIds } from "./ma-discovery.js";
/** Schema for a search result item */
export const SearchResultSchema = z.object({
    item_id: z.string(),
    name: z.string(),
    media_type: z.string(),
    uri: z.string().optional(),
    artist: z.string().optional(),
    album: z.string().optional(),
    genre: z.string().optional(),
    year: z.number().optional(),
    duration: z.number().optional(),
    score: z.number().optional(),
});
/** Schema for search response */
export const SearchResponseSchema = z.object({
    results: z.array(SearchResultSchema),
});
/**
 * Parse a search query to extract filters.
 *
 * Supports:
 * - artist:name or artist:"multi word" - search by artist
 * - album:name or album:"multi word" - search by album
 * - genre:name - search by genre
 * - decade:90s - search by decade
 * - year:1999 - search by year
 * - mood:happy - search by mood
 *
 * Remaining text becomes the general search term.
 */
export function parseSearchQuery(query) {
    const filters = {};
    // Match filters with optional quoted values: key:value or key:"quoted value"
    const filterRegex = /(artist|album|genre|decade|year|mood):(?:"([^"]+)"|(\S+))/gi;
    // Extract all filters
    let match;
    const filterMatches = [];
    while ((match = filterRegex.exec(query)) !== null) {
        const [fullMatch, key, quotedValue, unquotedValue] = match;
        const value = quotedValue ?? unquotedValue;
        filters[key.toLowerCase()] = value;
        filterMatches.push(fullMatch);
    }
    // Remove filters from query to get remaining text
    let text = query;
    for (const filterMatch of filterMatches) {
        text = text.replace(filterMatch, "");
    }
    text = text.trim().replace(/\s+/g, " ");
    return { text, filters };
}
/**
 * Build the MA search payload from parsed query.
 *
 * Uses the Music Assistant service schema:
 * - name: required search term
 * - artist: optional artist filter
 * - album: optional album filter
 * - media_type: optional media type filter (array)
 * - limit: optional result limit
 * - library_only: optional filter to library items only
 */
function buildSearchPayload(options, parsed, configEntryId) {
    const payload = {
        config_entry_id: configEntryId,
    };
    // Build the search name - combine text and filters
    const nameParts = [];
    // Add text search
    if (parsed.text) {
        nameParts.push(parsed.text);
    }
    // Add genre/decade/year/mood to name if no text provided
    if (parsed.filters.genre) {
        nameParts.push(parsed.filters.genre);
    }
    if (parsed.filters.decade) {
        nameParts.push(parsed.filters.decade);
    }
    if (parsed.filters.year) {
        nameParts.push(parsed.filters.year);
    }
    if (parsed.filters.mood) {
        nameParts.push(parsed.filters.mood);
    }
    // name is required
    payload.name = nameParts.join(" ") || "music";
    // Use structured filters where MA supports them
    if (parsed.filters.artist) {
        payload.artist = parsed.filters.artist;
    }
    if (parsed.filters.album) {
        payload.album = parsed.filters.album;
    }
    if (options.limit) {
        payload.limit = options.limit;
    }
    if (options.mediaType) {
        // MA expects media_type as an array
        payload.media_type = [options.mediaType];
    }
    return payload;
}
/** Schema for MA search API response */
const MaSearchResponseSchema = z.object({
    artists: z.array(z.object({
        media_type: z.string(),
        uri: z.string(),
        name: z.string(),
    }).passthrough()).optional().default([]),
    albums: z.array(z.object({
        media_type: z.string(),
        uri: z.string(),
        name: z.string(),
        artists: z.array(z.object({
            name: z.string(),
        }).passthrough()).optional(),
    }).passthrough()).optional().default([]),
    tracks: z.array(z.object({
        media_type: z.string(),
        uri: z.string(),
        name: z.string(),
        artists: z.array(z.object({
            name: z.string(),
        }).passthrough()).optional(),
        album: z.object({
            name: z.string(),
        }).passthrough().optional(),
    }).passthrough()).optional().default([]),
    playlists: z.array(z.object({
        media_type: z.string(),
        uri: z.string(),
        name: z.string(),
    }).passthrough()).optional().default([]),
    radio: z.array(z.object({
        media_type: z.string(),
        uri: z.string(),
        name: z.string(),
    }).passthrough()).optional().default([]),
});
/**
 * Transform MA API response to our SearchResponse format.
 */
function transformMaResponse(maResponse, limit) {
    const results = [];
    // Add artists
    for (const item of maResponse.artists) {
        results.push({
            item_id: item.uri,
            name: item.name,
            media_type: item.media_type,
            uri: item.uri,
        });
    }
    // Add albums
    for (const item of maResponse.albums) {
        results.push({
            item_id: item.uri,
            name: item.name,
            media_type: item.media_type,
            uri: item.uri,
            artist: item.artists?.[0]?.name,
        });
    }
    // Add tracks
    for (const item of maResponse.tracks) {
        results.push({
            item_id: item.uri,
            name: item.name,
            media_type: item.media_type,
            uri: item.uri,
            artist: item.artists?.[0]?.name,
            album: item.album?.name,
        });
    }
    // Add playlists
    for (const item of maResponse.playlists) {
        results.push({
            item_id: item.uri,
            name: item.name,
            media_type: item.media_type,
            uri: item.uri,
        });
    }
    // Add radio
    for (const item of maResponse.radio) {
        results.push({
            item_id: item.uri,
            name: item.name,
            media_type: item.media_type,
            uri: item.uri,
        });
    }
    // Apply limit
    if (limit && results.length > limit) {
        return { results: results.slice(0, limit) };
    }
    return { results };
}
/**
 * Search Music Assistant library.
 *
 * @param client - Home Assistant client
 * @param prisma - Prisma client for config entry discovery
 * @param options - Search options
 * @returns Search response with results
 */
export async function searchMusic(client, prisma, options) {
    // Get or discover config entry ID
    let configEntryId = options.configEntryId;
    if (!configEntryId) {
        const discovery = await discoverMaEntryIds(prisma, client, true);
        if (discovery.entry_ids.length === 0) {
            throw new Error("No Music Assistant integration found in Home Assistant");
        }
        configEntryId = discovery.entry_ids[0];
    }
    const parsed = parseSearchQuery(options.query);
    const payload = buildSearchPayload(options, parsed, configEntryId);
    // Call the Music Assistant search service via HA REST API with return_response
    const response = await client.callServiceWithResponse("music_assistant", "search", payload);
    // Parse and validate the MA response format
    const maResult = MaSearchResponseSchema.safeParse(response);
    if (!maResult.success) {
        throw new Error(`Invalid search response from Music Assistant: ${maResult.error.message}`);
    }
    // Transform to our format
    return transformMaResponse(maResult.data, options.limit);
}
//# sourceMappingURL=search.js.map