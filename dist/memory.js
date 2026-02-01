export async function ensureUser(prisma, userSlug) {
    const slug = userSlug.trim();
    if (!slug)
        throw new Error("userSlug is required");
    return prisma.user.upsert({
        where: { slug },
        update: {},
        create: { slug, name: slug },
    });
}
export async function ensureProfile(prisma, userId, profileSlug) {
    const slug = profileSlug.trim();
    if (!slug)
        throw new Error("profileSlug is required");
    return prisma.profile.upsert({
        where: { userId_slug: { userId, slug } },
        update: {},
        create: { userId, slug, name: slug },
    });
}
export async function logPlayEvent(prisma, input) {
    const user = await ensureUser(prisma, input.userSlug);
    const profile = input.profileSlug
        ? await ensureProfile(prisma, user.id, input.profileSlug)
        : null;
    return prisma.playEvent.create({
        data: {
            userId: user.id,
            profileId: profile?.id,
            speakerEntityId: input.speakerEntityId,
            uri: input.uri,
            title: input.title,
            artist: input.artist,
            album: input.album,
        },
    });
}
export async function listRecentPlayEvents(prisma, userSlug, limit) {
    const user = await prisma.user.findUnique({ where: { slug: userSlug } });
    if (!user)
        return [];
    return prisma.playEvent.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        take: limit,
    });
}
export async function setPreferenceWeight(prisma, params) {
    const user = await ensureUser(prisma, params.userSlug);
    const profile = await ensureProfile(prisma, user.id, params.profileSlug);
    return prisma.preferenceWeight.upsert({
        where: { profileId_kind_key: { profileId: profile.id, kind: params.kind, key: params.key } },
        update: { weight: params.weight },
        create: { profileId: profile.id, kind: params.kind, key: params.key, weight: params.weight },
    });
}
//# sourceMappingURL=memory.js.map