/**
 * Play history and session memory.
 *
 * Track listening sessions, play events, and avoid list.
 */
/**
 * Ensure user exists, create if not.
 */
async function ensureUser(prisma, slug) {
    return prisma.user.upsert({
        where: { slug },
        update: {},
        create: { slug, name: slug },
    });
}
/**
 * Start a new listening session.
 */
export async function startSession(prisma, options) {
    const { userSlug, speakerEntityId, moodName, playlistUri, radioCriteria } = options;
    const user = await ensureUser(prisma, userSlug);
    return prisma.listeningSession.create({
        data: {
            userId: user.id,
            speakerEntityId,
            moodName,
            playlistUri,
            radioCriteria: radioCriteria ? JSON.stringify(radioCriteria) : null,
        },
    });
}
/**
 * End a listening session.
 */
export async function endSession(prisma, sessionId) {
    return prisma.listeningSession.update({
        where: { id: sessionId },
        data: { endedAt: new Date() },
    });
}
/**
 * List recent listening sessions for a user.
 */
export async function listSessions(prisma, options) {
    const { userSlug, limit = 10 } = options;
    const user = await prisma.user.findUnique({ where: { slug: userSlug } });
    if (!user)
        return [];
    return prisma.listeningSession.findMany({
        where: { userId: user.id },
        orderBy: { startedAt: "desc" },
        take: limit,
        include: {
            events: {
                take: 5,
                orderBy: { createdAt: "desc" },
            },
        },
    });
}
/**
 * Get session details for replay.
 */
export async function replaySession(prisma, sessionId) {
    const session = await prisma.listeningSession.findUnique({
        where: { id: sessionId },
        include: {
            events: {
                orderBy: { createdAt: "asc" },
            },
        },
    });
    if (!session)
        return null;
    return {
        session,
        tracks: session.events.map((e) => ({
            uri: e.uri,
            title: e.title,
            artist: e.artist,
            album: e.album,
        })),
    };
}
/**
 * Log an enhanced play event.
 */
export async function logPlayEventEnhanced(prisma, options) {
    const { userSlug, speakerEntityId, uri, sessionId, title, artist, album, playlistUri, radioStationUri, durationMs, skipped = false, skipReason, } = options;
    const user = await ensureUser(prisma, userSlug);
    return prisma.playEvent.create({
        data: {
            userId: user.id,
            sessionId,
            speakerEntityId,
            uri,
            title,
            artist,
            album,
            playlistUri,
            radioStationUri,
            durationMs,
            skipped,
            skipReason,
        },
    });
}
/**
 * Get recent play history for a user.
 */
export async function getRecentHistory(prisma, options) {
    const { userSlug, limit = 20 } = options;
    const user = await prisma.user.findUnique({ where: { slug: userSlug } });
    if (!user)
        return [];
    return prisma.playEvent.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        take: limit,
    });
}
/**
 * Add a track to the avoid list.
 */
export async function addAvoidTrack(prisma, options) {
    const { userSlug, uri, reason } = options;
    const user = await ensureUser(prisma, userSlug);
    return prisma.avoidTrack.upsert({
        where: {
            userId_uri: {
                userId: user.id,
                uri,
            },
        },
        update: { reason },
        create: {
            userId: user.id,
            uri,
            reason,
        },
    });
}
/**
 * Remove a track from the avoid list.
 */
export async function removeAvoidTrack(prisma, options) {
    const { userSlug, uri } = options;
    const user = await prisma.user.findUnique({ where: { slug: userSlug } });
    if (!user)
        return false;
    const result = await prisma.avoidTrack.deleteMany({
        where: {
            userId: user.id,
            uri,
        },
    });
    return result.count > 0;
}
/**
 * Get the avoid list for a user.
 */
export async function getAvoidList(prisma, options) {
    const { userSlug } = options;
    const user = await prisma.user.findUnique({ where: { slug: userSlug } });
    if (!user)
        return [];
    return prisma.avoidTrack.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
    });
}
/**
 * Check if a track is on the avoid list.
 */
export async function isTrackAvoided(prisma, options) {
    const { userSlug, uri } = options;
    const user = await prisma.user.findUnique({ where: { slug: userSlug } });
    if (!user)
        return false;
    const avoided = await prisma.avoidTrack.findUnique({
        where: {
            userId_uri: {
                userId: user.id,
                uri,
            },
        },
    });
    return avoided !== null;
}
//# sourceMappingURL=history.js.map