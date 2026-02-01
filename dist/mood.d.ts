/**
 * Mood-to-music mapping.
 *
 * Associates mood names with music criteria for easy playback.
 */
import { PrismaClient } from "./generated/prisma/client.js";
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
 * Set a mood for a user or household.
 */
export declare function setMood(prisma: PrismaClient, options: SetMoodOptions): Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    householdId: string | null;
    criteria: string;
}>;
/**
 * Get a mood by name for user or household.
 */
export declare function getMood(prisma: PrismaClient, options: MoodQueryOptions): Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    householdId: string | null;
    criteria: string;
} | null>;
/**
 * List all moods for a user or household.
 */
export declare function listMoods(prisma: PrismaClient, options: ListMoodsOptions): Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    householdId: string | null;
    criteria: string;
}[]>;
/**
 * Delete a mood.
 */
export declare function deleteMood(prisma: PrismaClient, options: MoodQueryOptions): Promise<boolean>;
/**
 * Resolve a mood, preferring user mood over household mood.
 */
export declare function resolveMood(prisma: PrismaClient, options: ResolveMoodOptions): Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    householdId: string | null;
    criteria: string;
} | null>;
//# sourceMappingURL=mood.d.ts.map