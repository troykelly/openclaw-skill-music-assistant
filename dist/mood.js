/**
 * Mood-to-music mapping.
 *
 * Associates mood names with music criteria for easy playback.
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
 * Ensure household exists, create if not.
 */
async function ensureHousehold(prisma, slug) {
    return prisma.household.upsert({
        where: { slug },
        update: {},
        create: { slug, name: slug },
    });
}
/**
 * Set a mood for a user or household.
 */
export async function setMood(prisma, options) {
    const { userSlug, householdSlug, name, criteria } = options;
    if (!userSlug && !householdSlug) {
        throw new Error("Either userSlug or householdSlug is required");
    }
    const criteriaJson = JSON.stringify(criteria);
    if (userSlug) {
        const user = await ensureUser(prisma, userSlug);
        return prisma.mood.upsert({
            where: {
                userId_name: {
                    userId: user.id,
                    name,
                },
            },
            update: { criteria: criteriaJson },
            create: {
                userId: user.id,
                name,
                criteria: criteriaJson,
            },
        });
    }
    const household = await ensureHousehold(prisma, householdSlug);
    return prisma.mood.upsert({
        where: {
            householdId_name: {
                householdId: household.id,
                name,
            },
        },
        update: { criteria: criteriaJson },
        create: {
            householdId: household.id,
            name,
            criteria: criteriaJson,
        },
    });
}
/**
 * Get a mood by name for user or household.
 */
export async function getMood(prisma, options) {
    const { userSlug, householdSlug, name } = options;
    if (userSlug) {
        const user = await prisma.user.findUnique({ where: { slug: userSlug } });
        if (!user)
            return null;
        return prisma.mood.findUnique({
            where: {
                userId_name: {
                    userId: user.id,
                    name,
                },
            },
        });
    }
    if (householdSlug) {
        const household = await prisma.household.findUnique({ where: { slug: householdSlug } });
        if (!household)
            return null;
        return prisma.mood.findUnique({
            where: {
                householdId_name: {
                    householdId: household.id,
                    name,
                },
            },
        });
    }
    return null;
}
/**
 * List all moods for a user or household.
 */
export async function listMoods(prisma, options) {
    const { userSlug, householdSlug } = options;
    if (userSlug) {
        const user = await prisma.user.findUnique({ where: { slug: userSlug } });
        if (!user)
            return [];
        return prisma.mood.findMany({
            where: { userId: user.id },
            orderBy: { name: "asc" },
        });
    }
    if (householdSlug) {
        const household = await prisma.household.findUnique({ where: { slug: householdSlug } });
        if (!household)
            return [];
        return prisma.mood.findMany({
            where: { householdId: household.id },
            orderBy: { name: "asc" },
        });
    }
    return [];
}
/**
 * Delete a mood.
 */
export async function deleteMood(prisma, options) {
    const mood = await getMood(prisma, options);
    if (!mood)
        return false;
    await prisma.mood.delete({ where: { id: mood.id } });
    return true;
}
/**
 * Resolve a mood, preferring user mood over household mood.
 */
export async function resolveMood(prisma, options) {
    const { userSlug, householdSlug, name } = options;
    // Try user mood first
    const userMood = await getMood(prisma, { userSlug, name });
    if (userMood)
        return userMood;
    // Fall back to household mood
    if (householdSlug) {
        return getMood(prisma, { householdSlug, name });
    }
    return null;
}
//# sourceMappingURL=mood.js.map