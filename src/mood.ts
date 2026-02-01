/**
 * Mood-to-music mapping.
 *
 * Associates mood names with music criteria for easy playback.
 */

import { PrismaClient } from "@prisma/client";

/** Mood criteria for music selection */
export interface MoodCriteria {
  genres?: string[];
  decades?: string[];
  artists?: string[];
  years?: number[];
  energy?: "low" | "medium" | "high";
  tempo?: "slow" | "medium" | "fast";
  instrumental?: boolean;
}

/** Options for setting a mood */
export interface SetMoodOptions {
  userSlug?: string;
  householdSlug?: string;
  name: string;
  criteria: MoodCriteria;
}

/** Options for getting/deleting a mood */
export interface MoodQueryOptions {
  userSlug?: string;
  householdSlug?: string;
  name: string;
}

/** Options for listing moods */
export interface ListMoodsOptions {
  userSlug?: string;
  householdSlug?: string;
}

/** Options for resolving a mood (user overrides household) */
export interface ResolveMoodOptions {
  userSlug: string;
  householdSlug?: string;
  name: string;
}

/**
 * Ensure user exists, create if not.
 */
async function ensureUser(prisma: PrismaClient, slug: string) {
  return prisma.user.upsert({
    where: { slug },
    update: {},
    create: { slug, name: slug },
  });
}

/**
 * Ensure household exists, create if not.
 */
async function ensureHousehold(prisma: PrismaClient, slug: string) {
  return prisma.household.upsert({
    where: { slug },
    update: {},
    create: { slug, name: slug },
  });
}

/**
 * Set a mood for a user or household.
 */
export async function setMood(
  prisma: PrismaClient,
  options: SetMoodOptions
) {
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

  const household = await ensureHousehold(prisma, householdSlug!);

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
export async function getMood(
  prisma: PrismaClient,
  options: MoodQueryOptions
) {
  const { userSlug, householdSlug, name } = options;

  if (userSlug) {
    const user = await prisma.user.findUnique({ where: { slug: userSlug } });
    if (!user) return null;

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
    if (!household) return null;

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
export async function listMoods(
  prisma: PrismaClient,
  options: ListMoodsOptions
) {
  const { userSlug, householdSlug } = options;

  if (userSlug) {
    const user = await prisma.user.findUnique({ where: { slug: userSlug } });
    if (!user) return [];

    return prisma.mood.findMany({
      where: { userId: user.id },
      orderBy: { name: "asc" },
    });
  }

  if (householdSlug) {
    const household = await prisma.household.findUnique({ where: { slug: householdSlug } });
    if (!household) return [];

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
export async function deleteMood(
  prisma: PrismaClient,
  options: MoodQueryOptions
): Promise<boolean> {
  const mood = await getMood(prisma, options);
  if (!mood) return false;

  await prisma.mood.delete({ where: { id: mood.id } });
  return true;
}

/**
 * Resolve a mood, preferring user mood over household mood.
 */
export async function resolveMood(
  prisma: PrismaClient,
  options: ResolveMoodOptions
) {
  const { userSlug, householdSlug, name } = options;

  // Try user mood first
  const userMood = await getMood(prisma, { userSlug, name });
  if (userMood) return userMood;

  // Fall back to household mood
  if (householdSlug) {
    return getMood(prisma, { householdSlug, name });
  }

  return null;
}
