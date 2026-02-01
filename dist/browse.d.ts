/**
 * Music Assistant library browsing.
 *
 * Browse artists, albums, tracks, playlists, radio stations via HA REST API.
 * Supports hierarchical navigation (artist → albums → tracks).
 */
import { z } from "zod";
import { HaClient } from "./ha-client.js";
/** Media type for library browsing */
export type BrowseMediaType = "artists" | "albums" | "tracks" | "playlists" | "radio";
/** Options for browsing the library */
export interface BrowseOptions {
    /** The type of media to browse */
    mediaType: BrowseMediaType;
    /** Parent ID for hierarchical navigation (e.g., artist ID to get albums) */
    parentId?: string;
    /** Limit the number of results */
    limit?: number;
    /** Offset for pagination */
    offset?: number;
}
/** Schema for a library item */
export declare const LibraryItemSchema: z.ZodObject<{
    item_id: z.ZodString;
    name: z.ZodString;
    media_type: z.ZodString;
    uri: z.ZodOptional<z.ZodString>;
    artist: z.ZodOptional<z.ZodString>;
    album: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodNumber>;
    image_url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    item_id: string;
    media_type: string;
    uri?: string | undefined;
    artist?: string | undefined;
    album?: string | undefined;
    duration?: number | undefined;
    image_url?: string | undefined;
}, {
    name: string;
    item_id: string;
    media_type: string;
    uri?: string | undefined;
    artist?: string | undefined;
    album?: string | undefined;
    duration?: number | undefined;
    image_url?: string | undefined;
}>;
export type LibraryItem = z.infer<typeof LibraryItemSchema>;
/** Schema for browse response */
export declare const BrowseResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        item_id: z.ZodString;
        name: z.ZodString;
        media_type: z.ZodString;
        uri: z.ZodOptional<z.ZodString>;
        artist: z.ZodOptional<z.ZodString>;
        album: z.ZodOptional<z.ZodString>;
        duration: z.ZodOptional<z.ZodNumber>;
        image_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        item_id: string;
        media_type: string;
        uri?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        duration?: number | undefined;
        image_url?: string | undefined;
    }, {
        name: string;
        item_id: string;
        media_type: string;
        uri?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        duration?: number | undefined;
        image_url?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        name: string;
        item_id: string;
        media_type: string;
        uri?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        duration?: number | undefined;
        image_url?: string | undefined;
    }[];
}, {
    items: {
        name: string;
        item_id: string;
        media_type: string;
        uri?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        duration?: number | undefined;
        image_url?: string | undefined;
    }[];
}>;
export type BrowseResponse = z.infer<typeof BrowseResponseSchema>;
/**
 * Browse the Music Assistant library via Home Assistant service call.
 *
 * @param client - Home Assistant client
 * @param options - Browse options
 * @returns Browse response with items
 */
export declare function browseLibrary(client: HaClient, options: BrowseOptions): Promise<BrowseResponse>;
//# sourceMappingURL=browse.d.ts.map