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

export type SearchResult = z.infer<typeof SearchResultSchema>;

/** Schema for search response */
export const SearchResponseSchema = z.object({
  results: z.array(SearchResultSchema),
});

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
export function parseSearchQuery(query: string): ParsedQuery {
  const filters: SearchFilters = {};

  // Match filters with optional quoted values: key:value or key:"quoted value"
  const filterRegex = /(artist|album|genre|decade|year|mood):(?:"([^"]+)"|(\S+))/gi;

  // Extract all filters
  let match: RegExpExecArray | null;
  const filterMatches: string[] = [];

  while ((match = filterRegex.exec(query)) !== null) {
    const [fullMatch, key, quotedValue, unquotedValue] = match;
    const value = quotedValue ?? unquotedValue;
    filters[key.toLowerCase() as keyof SearchFilters] = value;
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
 */
function buildSearchPayload(
  options: SearchOptions,
  parsed: ParsedQuery
): Record<string, unknown> {
  const payload: Record<string, unknown> = {};

  // Build the search query
  const queryParts: string[] = [];

  // Add text search
  if (parsed.text) {
    queryParts.push(parsed.text);
  }

  // Add filters to query (MA might accept these in different ways)
  if (parsed.filters.artist) {
    queryParts.push(parsed.filters.artist);
  }
  if (parsed.filters.genre) {
    queryParts.push(parsed.filters.genre);
  }
  if (parsed.filters.decade) {
    queryParts.push(parsed.filters.decade);
  }
  if (parsed.filters.year) {
    queryParts.push(parsed.filters.year);
  }
  if (parsed.filters.mood) {
    queryParts.push(parsed.filters.mood);
  }

  payload.query = queryParts.join(" ");

  if (options.limit) {
    payload.limit = options.limit;
  }

  if (options.mediaType) {
    payload.media_type = options.mediaType;
  }

  return payload;
}

/**
 * Search Music Assistant library.
 *
 * @param client - Home Assistant client
 * @param options - Search options
 * @returns Search response with results
 */
export async function searchMusic(
  client: HaClient,
  options: SearchOptions
): Promise<SearchResponse> {
  const parsed = parseSearchQuery(options.query);
  const payload = buildSearchPayload(options, parsed);

  // Call the Music Assistant search service via HA REST API
  const response = await client.callService("music_assistant", "search", payload);

  // Parse and validate response
  const parsed2 = SearchResponseSchema.safeParse(response);
  if (!parsed2.success) {
    throw new Error(`Invalid search response: ${parsed2.error.message}`);
  }

  // Apply limit if needed (in case MA doesn't respect it)
  let results = parsed2.data.results;
  if (options.limit && results.length > options.limit) {
    results = results.slice(0, options.limit);
  }

  return { results };
}
