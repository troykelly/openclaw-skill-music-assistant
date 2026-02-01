/**
 * Music Assistant library browsing.
 *
 * Browse artists, albums, tracks, playlists, radio stations via HA REST API.
 * Supports hierarchical navigation (artist → albums → tracks).
 */

import { z } from "zod";
import { HaClient } from "./ha-client.js";
import { PrismaClient } from "./generated/prisma/client.js";
import { discoverMaEntryIds } from "./ma-discovery.js";

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
  /** Music Assistant config entry ID (auto-discovered if not provided) */
  configEntryId?: string;
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
function transformMaLibraryResponse(
  maResponse: z.infer<typeof MaLibraryResponseSchema>
): BrowseResponse {
  const items: LibraryItem[] = maResponse.items.map((item) => ({
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
 * @param prisma - Prisma client for config entry discovery
 * @param options - Browse options
 * @returns Browse response with items
 */
export async function browseLibrary(
  client: HaClient,
  prisma: PrismaClient,
  options: BrowseOptions
): Promise<BrowseResponse> {
  const { mediaType, parentId, limit, offset } = options;

  // Get or discover config entry ID
  let configEntryId = options.configEntryId;
  if (!configEntryId) {
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
  const payload: Record<string, unknown> = {
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
  const response = await client.callServiceWithResponse(
    "music_assistant",
    "get_library",
    payload
  );

  // Parse and validate the MA response format
  const maResult = MaLibraryResponseSchema.safeParse(response);
  if (!maResult.success) {
    throw new Error(`Invalid browse response from Music Assistant: ${maResult.error.message}`);
  }

  return transformMaLibraryResponse(maResult.data);
}
