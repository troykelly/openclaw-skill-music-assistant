/**
 * Preference management.
 *
 * Stores and retrieves user/household music preferences.
 */
import { PrismaClient } from "./generated/prisma/client.js";
/** Entity types for preferences */
export type PreferenceEntityType = "track" | "artist" | "album" | "genre" | "decade" | "year";
/**
 * Normalizes entity IDs to lowercase kebab-case for consistent storage.
 */
export declare function normalizeEntityId(value: string): string;
/**
 * Sets a user preference.
 */
export declare function setUserPreference(prisma: PrismaClient, userSlug: string, entityType: PreferenceEntityType, entityId: string, score: number): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    householdId: string | null;
    entityType: string;
    entityId: string;
    score: number;
}>;
/**
 * Sets a household preference.
 */
export declare function setHouseholdPreference(prisma: PrismaClient, householdSlug: string, entityType: PreferenceEntityType, entityId: string, score: number): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    householdId: string | null;
    entityType: string;
    entityId: string;
    score: number;
}>;
/**
 * Gets all preferences for a user.
 */
export declare function getUserPreferences(prisma: PrismaClient, userSlug: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    householdId: string | null;
    entityType: string;
    entityId: string;
    score: number;
}[]>;
/**
 * Gets all preferences for a household.
 */
export declare function getHouseholdPreferences(prisma: PrismaClient, householdSlug: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    householdId: string | null;
    entityType: string;
    entityId: string;
    score: number;
}[]>;
/**
 * Clears a user preference for a specific entity.
 */
export declare function clearUserPreference(prisma: PrismaClient, userSlug: string, entityType: PreferenceEntityType, entityId: string): Promise<number>;
/**
 * Clears a household preference for a specific entity.
 */
export declare function clearHouseholdPreference(prisma: PrismaClient, householdSlug: string, entityType: PreferenceEntityType, entityId: string): Promise<number>;
//# sourceMappingURL=preferences.d.ts.map