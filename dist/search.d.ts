/**
 * Music Assistant search.
 *
 * Search for music by name, artist, genre, decade, year, or mood.
 * Supports structured query filters and fuzzy matching.
 */
import { z } from "zod";
import { HaClient } from "./ha-client.js";
/** Search filters extracted from query */
export interface SearchFilters {
    artist?: string;
    album?: string;
    genre?: string;
    decade?: string;
    year?: string;
    mood?: string;
}
/** Parsed search query */
export interface ParsedQuery {
    text: string;
    filters: SearchFilters;
}
/** Search options */
export interface SearchOptions {
    /** The search query (can include filters like artist:name) */
    query: string;
    /** Maximum number of results to return */
    limit?: number;
    /** Filter by media type (track, artist, album, playlist) */
    mediaType?: string;
}
/** Schema for a search result item */
export declare const SearchResultSchema: z.ZodObject<{
    item_id: z.ZodString;
    name: z.ZodString;
    media_type: z.ZodString;
    uri: z.ZodOptional<z.ZodString>;
    artist: z.ZodOptional<z.ZodString>;
    album: z.ZodOptional<z.ZodString>;
    genre: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodNumber>;
    score: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    item_id: string;
    media_type: string;
    uri?: string | undefined;
    artist?: string | undefined;
    album?: string | undefined;
    duration?: number | undefined;
    genre?: string | undefined;
    year?: number | undefined;
    score?: number | undefined;
}, {
    name: string;
    item_id: string;
    media_type: string;
    uri?: string | undefined;
    artist?: string | undefined;
    album?: string | undefined;
    duration?: number | undefined;
    genre?: string | undefined;
    year?: number | undefined;
    score?: number | undefined;
}>;
export type SearchResult = z.infer<typeof SearchResultSchema>;
/** Schema for search response */
export declare const SearchResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        item_id: z.ZodString;
        name: z.ZodString;
        media_type: z.ZodString;
        uri: z.ZodOptional<z.ZodString>;
        artist: z.ZodOptional<z.ZodString>;
        album: z.ZodOptional<z.ZodString>;
        genre: z.ZodOptional<z.ZodString>;
        year: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
        score: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        item_id: string;
        media_type: string;
        uri?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        duration?: number | undefined;
        genre?: string | undefined;
        year?: number | undefined;
        score?: number | undefined;
    }, {
        name: string;
        item_id: string;
        media_type: string;
        uri?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        duration?: number | undefined;
        genre?: string | undefined;
        year?: number | undefined;
        score?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    results: {
        name: string;
        item_id: string;
        media_type: string;
        uri?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        duration?: number | undefined;
        genre?: string | undefined;
        year?: number | undefined;
        score?: number | undefined;
    }[];
}, {
    results: {
        name: string;
        item_id: string;
        media_type: string;
        uri?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        duration?: number | undefined;
        genre?: string | undefined;
        year?: number | undefined;
        score?: number | undefined;
    }[];
}>;
export type SearchResponse = z.infer<typeof SearchResponseSchema>;
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
export declare function parseSearchQuery(query: string): ParsedQuery;
/**
 * Search Music Assistant library.
 *
 * @param client - Home Assistant client
 * @param options - Search options
 * @returns Search response with results
 */
export declare function searchMusic(client: HaClient, options: SearchOptions): Promise<SearchResponse>;
//# sourceMappingURL=search.d.ts.map