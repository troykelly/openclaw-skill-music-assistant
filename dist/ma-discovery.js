/**
 * Music Assistant discovery and caching.
 *
 * Discovers Music Assistant config entry IDs from Home Assistant
 * and caches them in the local database to avoid repeated API calls.
 */
const MA_DOMAIN = "music_assistant";
/**
 * Get cached Music Assistant entry IDs for a specific HA instance.
 */
export async function getCachedMaEntryIds(prisma, haUrl) {
    const entries = await prisma.haConfigEntryCache.findMany({
        where: {
            haUrl,
            domain: MA_DOMAIN,
        },
        select: {
            entryId: true,
        },
    });
    if (entries.length === 0) {
        return null;
    }
    return entries.map((e) => e.entryId);
}
/**
 * Cache Music Assistant entry IDs for a specific HA instance.
 */
export async function cacheMaEntryIds(prisma, haUrl, entries) {
    // Use a transaction to replace all cached entries for this domain+haUrl
    await prisma.$transaction(async (tx) => {
        // Delete existing entries for this domain and haUrl
        await tx.haConfigEntryCache.deleteMany({
            where: {
                haUrl,
                domain: MA_DOMAIN,
            },
        });
        // Insert new entries
        for (const entry of entries) {
            await tx.haConfigEntryCache.create({
                data: {
                    haUrl,
                    domain: MA_DOMAIN,
                    entryId: entry.entry_id,
                    title: entry.title,
                },
            });
        }
    });
}
/**
 * Clear cached Music Assistant entry IDs for a specific HA instance.
 */
export async function clearMaCache(prisma, haUrl) {
    await prisma.haConfigEntryCache.deleteMany({
        where: {
            haUrl,
            domain: MA_DOMAIN,
        },
    });
}
/**
 * Discover Music Assistant config entry IDs.
 *
 * If useCached is true and entries are cached, returns cached data.
 * Otherwise, fetches from HA API and caches the result.
 */
export async function discoverMaEntryIds(prisma, client, useCached) {
    const haUrl = client.getBaseUrl();
    // Check cache first if requested
    if (useCached) {
        const cached = await getCachedMaEntryIds(prisma, haUrl);
        if (cached !== null) {
            return { entry_ids: cached, cached: true };
        }
    }
    // Fetch from HA API
    const entries = await client.getMusicAssistantEntries();
    const entryIds = entries.map((e) => e.entry_id);
    // Cache the results
    await cacheMaEntryIds(prisma, haUrl, entries.map((e) => ({ entry_id: e.entry_id, title: e.title })));
    return { entry_ids: entryIds, cached: false };
}
//# sourceMappingURL=ma-discovery.js.map