/**
 * Preference management.
 *
 * Stores and retrieves user/household music preferences.
 */

import { PrismaClient } from "./generated/prisma/client.ts";

/** Entity types for preferences */
export type PreferenceEntityType = "track" | "artist" | "album" | "genre" | "decade" | "year";

/**
 * Normalizes entity IDs to lowercase kebab-case for consistent storage.
 */
export function normalizeEntityId(value: string): string {
  return value.toLowerCase().trim().replace(/\s+/g, "-");
}

/**
 * Sets a user preference.
 */
export async function setUserPreference(
  prisma: PrismaClient,
  userSlug: string,
  entityType: PreferenceEntityType,
  entityId: string,
  score: number
) {
  const user = await prisma.user.findUnique({ where: { slug: userSlug } });
  if (!user) {
    throw new Error(`User not found: ${userSlug}`);
  }

  const normalizedId = normalizeEntityId(entityId);

  return prisma.preference.upsert({
    where: {
      userId_entityType_entityId: {
        userId: user.id,
        entityType,
        entityId: normalizedId,
      },
    },
    update: { score },
    create: {
      userId: user.id,
      entityType,
      entityId: normalizedId,
      score,
    },
  });
}

/**
 * Sets a household preference.
 */
export async function setHouseholdPreference(
  prisma: PrismaClient,
  householdSlug: string,
  entityType: PreferenceEntityType,
  entityId: string,
  score: number
) {
  const household = await prisma.household.findUnique({ where: { slug: householdSlug } });
  if (!household) {
    throw new Error(`Household not found: ${householdSlug}`);
  }

  const normalizedId = normalizeEntityId(entityId);

  return prisma.preference.upsert({
    where: {
      householdId_entityType_entityId: {
        householdId: household.id,
        entityType,
        entityId: normalizedId,
      },
    },
    update: { score },
    create: {
      householdId: household.id,
      entityType,
      entityId: normalizedId,
      score,
    },
  });
}

/**
 * Gets all preferences for a user.
 */
export async function getUserPreferences(prisma: PrismaClient, userSlug: string) {
  const user = await prisma.user.findUnique({ where: { slug: userSlug } });
  if (!user) {
    throw new Error(`User not found: ${userSlug}`);
  }

  return prisma.preference.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
  });
}

/**
 * Gets all preferences for a household.
 */
export async function getHouseholdPreferences(prisma: PrismaClient, householdSlug: string) {
  const household = await prisma.household.findUnique({ where: { slug: householdSlug } });
  if (!household) {
    throw new Error(`Household not found: ${householdSlug}`);
  }

  return prisma.preference.findMany({
    where: { householdId: household.id },
    orderBy: { updatedAt: "desc" },
  });
}

/**
 * Clears a user preference for a specific entity.
 */
export async function clearUserPreference(
  prisma: PrismaClient,
  userSlug: string,
  entityType: PreferenceEntityType,
  entityId: string
) {
  const user = await prisma.user.findUnique({ where: { slug: userSlug } });
  if (!user) {
    throw new Error(`User not found: ${userSlug}`);
  }

  const normalizedId = normalizeEntityId(entityId);

  const result = await prisma.preference.deleteMany({
    where: {
      userId: user.id,
      entityType,
      entityId: normalizedId,
    },
  });

  return result.count;
}

/**
 * Clears a household preference for a specific entity.
 */
export async function clearHouseholdPreference(
  prisma: PrismaClient,
  householdSlug: string,
  entityType: PreferenceEntityType,
  entityId: string
) {
  const household = await prisma.household.findUnique({ where: { slug: householdSlug } });
  if (!household) {
    throw new Error(`Household not found: ${householdSlug}`);
  }

  const normalizedId = normalizeEntityId(entityId);

  const result = await prisma.preference.deleteMany({
    where: {
      householdId: household.id,
      entityType,
      entityId: normalizedId,
    },
  });

  return result.count;
}
