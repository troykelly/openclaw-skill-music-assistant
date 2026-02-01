/**
 * Music Assistant library browsing.
 *
 * Browse artists, albums, tracks, playlists, radio stations via HA REST API.
 * Supports hierarchical navigation (artist → albums → tracks).
 */

import { z } from "zod";
import { HaClient } from "./ha-client.ts";

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

export type LibraryItem = z.infer<typeof LibraryItemSchema>;

/** Schema for browse response */
export const BrowseResponseSchema = z.object({
  items: z.array(LibraryItemSchema),
});

export type BrowseResponse = z.infer<typeof BrowseResponseSchema>;

/**
 * Browse the Music Assistant library via Home Assistant service call.
 *
 * @param client - Home Assistant client
 * @param options - Browse options
 * @returns Browse response with items
 */
export async function browseLibrary(
  client: HaClient,
  options: BrowseOptions
): Promise<BrowseResponse> {
  const { mediaType, parentId, limit, offset } = options;

  // Build service call payload
  const payload: Record<string, unknown> = {
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
