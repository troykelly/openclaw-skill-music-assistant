import * as Prisma from './internal/prismaNamespaceBrowser.js';
export { Prisma };
export * as $Enums from './enums.js';
export * from './enums.js';
/**
 * Model Household
 *
 */
export type Household = Prisma.HouseholdModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Profile
 *
 */
export type Profile = Prisma.ProfileModel;
/**
 * Model PreferenceWeight
 *
 */
export type PreferenceWeight = Prisma.PreferenceWeightModel;
/**
 * Model PlayEvent
 *
 */
export type PlayEvent = Prisma.PlayEventModel;
/**
 * Model ListeningSession
 * A continuous listening session on a speaker.
 */
export type ListeningSession = Prisma.ListeningSessionModel;
/**
 * Model AvoidTrack
 * Tracks the user wants to avoid.
 */
export type AvoidTrack = Prisma.AvoidTrackModel;
/**
 * Model Preference
 * User or household music preference.
 * Stores likes/dislikes for tracks, artists, albums, genres, decades, years.
 * Score range: -1.0 (hate) to 1.0 (love), 0.0 = neutral
 */
export type Preference = Prisma.PreferenceModel;
/**
 * Model HaConfigEntryCache
 * Cached HA config entry for Music Assistant (or other integrations).
 * Used to avoid repeated API calls to discover entry IDs.
 */
export type HaConfigEntryCache = Prisma.HaConfigEntryCacheModel;
/**
 * Model Mood
 * Mood-to-music mapping.
 * Associates mood names with music criteria for easy playback.
 * Criteria is a JSON object with: genres, decades, artists, energy, tempo, etc.
 */
export type Mood = Prisma.MoodModel;
//# sourceMappingURL=browser.d.ts.map