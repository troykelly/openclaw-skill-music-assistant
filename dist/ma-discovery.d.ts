/**
 * Music Assistant discovery and caching.
 *
 * Discovers Music Assistant config entry IDs from Home Assistant
 * and caches them in the local database to avoid repeated API calls.
 */
import { PrismaClient } from "./generated/prisma/client.js";
import { HaClient } from "./ha-client.js";
export interface MaConfigResult {
    entry_ids: string[];
    cached: boolean;
}
/**
 * Get cached Music Assistant entry IDs for a specific HA instance.
 */
export declare function getCachedMaEntryIds(prisma: PrismaClient, haUrl: string): Promise<string[] | null>;
/**
 * Cache Music Assistant entry IDs for a specific HA instance.
 */
export declare function cacheMaEntryIds(prisma: PrismaClient, haUrl: string, entries: Array<{
    entry_id: string;
    title?: string;
}>): Promise<void>;
/**
 * Clear cached Music Assistant entry IDs for a specific HA instance.
 */
export declare function clearMaCache(prisma: PrismaClient, haUrl: string): Promise<void>;
/**
 * Discover Music Assistant config entry IDs.
 *
 * If useCached is true and entries are cached, returns cached data.
 * Otherwise, fetches from HA API and caches the result.
 */
export declare function discoverMaEntryIds(prisma: PrismaClient, client: HaClient, useCached: boolean): Promise<MaConfigResult>;
//# sourceMappingURL=ma-discovery.d.ts.map