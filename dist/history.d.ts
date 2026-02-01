/**
 * Play history and session memory.
 *
 * Track listening sessions, play events, and avoid list.
 */
import { PrismaClient } from "./generated/prisma/client.js";
/** Options for starting a session */
export interface StartSessionOptions {
    userSlug: string;
    speakerEntityId: string;
    moodName?: string;
    playlistUri?: string;
    radioCriteria?: Record<string, unknown>;
}
/** Options for logging an enhanced play event */
export interface LogPlayEventOptions {
    userSlug: string;
    speakerEntityId: string;
    uri: string;
    sessionId?: string;
    title?: string;
    artist?: string;
    album?: string;
    playlistUri?: string;
    radioStationUri?: string;
    durationMs?: number;
    skipped?: boolean;
    skipReason?: string;
}
/** Options for listing sessions */
export interface ListSessionsOptions {
    userSlug: string;
    limit?: number;
}
/** Options for history queries */
export interface HistoryQueryOptions {
    userSlug: string;
    limit?: number;
}
/** Options for avoid track operations */
export interface AvoidTrackOptions {
    userSlug: string;
    uri: string;
    reason?: string;
}
/**
 * Start a new listening session.
 */
export declare function startSession(prisma: PrismaClient, options: StartSessionOptions): Promise<{
    id: string;
    userId: string;
    speakerEntityId: string;
    playlistUri: string | null;
    moodName: string | null;
    radioCriteria: string | null;
    startedAt: Date;
    endedAt: Date | null;
}>;
/**
 * End a listening session.
 */
export declare function endSession(prisma: PrismaClient, sessionId: string): Promise<{
    id: string;
    userId: string;
    speakerEntityId: string;
    playlistUri: string | null;
    moodName: string | null;
    radioCriteria: string | null;
    startedAt: Date;
    endedAt: Date | null;
}>;
/**
 * List recent listening sessions for a user.
 */
export declare function listSessions(prisma: PrismaClient, options: ListSessionsOptions): Promise<({
    events: {
        title: string | null;
        id: string;
        createdAt: Date;
        uri: string;
        artist: string | null;
        album: string | null;
        userId: string;
        speakerEntityId: string;
        playlistUri: string | null;
        radioStationUri: string | null;
        durationMs: number | null;
        skipped: boolean;
        skipReason: string | null;
        profileId: string | null;
        sessionId: string | null;
    }[];
} & {
    id: string;
    userId: string;
    speakerEntityId: string;
    playlistUri: string | null;
    moodName: string | null;
    radioCriteria: string | null;
    startedAt: Date;
    endedAt: Date | null;
})[]>;
/**
 * Get session details for replay.
 */
export declare function replaySession(prisma: PrismaClient, sessionId: string): Promise<{
    session: {
        events: {
            title: string | null;
            id: string;
            createdAt: Date;
            uri: string;
            artist: string | null;
            album: string | null;
            userId: string;
            speakerEntityId: string;
            playlistUri: string | null;
            radioStationUri: string | null;
            durationMs: number | null;
            skipped: boolean;
            skipReason: string | null;
            profileId: string | null;
            sessionId: string | null;
        }[];
    } & {
        id: string;
        userId: string;
        speakerEntityId: string;
        playlistUri: string | null;
        moodName: string | null;
        radioCriteria: string | null;
        startedAt: Date;
        endedAt: Date | null;
    };
    tracks: {
        uri: string;
        title: string | null;
        artist: string | null;
        album: string | null;
    }[];
} | null>;
/**
 * Log an enhanced play event.
 */
export declare function logPlayEventEnhanced(prisma: PrismaClient, options: LogPlayEventOptions): Promise<{
    title: string | null;
    id: string;
    createdAt: Date;
    uri: string;
    artist: string | null;
    album: string | null;
    userId: string;
    speakerEntityId: string;
    playlistUri: string | null;
    radioStationUri: string | null;
    durationMs: number | null;
    skipped: boolean;
    skipReason: string | null;
    profileId: string | null;
    sessionId: string | null;
}>;
/**
 * Get recent play history for a user.
 */
export declare function getRecentHistory(prisma: PrismaClient, options: HistoryQueryOptions): Promise<{
    title: string | null;
    id: string;
    createdAt: Date;
    uri: string;
    artist: string | null;
    album: string | null;
    userId: string;
    speakerEntityId: string;
    playlistUri: string | null;
    radioStationUri: string | null;
    durationMs: number | null;
    skipped: boolean;
    skipReason: string | null;
    profileId: string | null;
    sessionId: string | null;
}[]>;
/**
 * Add a track to the avoid list.
 */
export declare function addAvoidTrack(prisma: PrismaClient, options: AvoidTrackOptions): Promise<{
    id: string;
    createdAt: Date;
    uri: string;
    userId: string;
    reason: string | null;
}>;
/**
 * Remove a track from the avoid list.
 */
export declare function removeAvoidTrack(prisma: PrismaClient, options: Omit<AvoidTrackOptions, "reason">): Promise<boolean>;
/**
 * Get the avoid list for a user.
 */
export declare function getAvoidList(prisma: PrismaClient, options: Omit<HistoryQueryOptions, "limit">): Promise<{
    id: string;
    createdAt: Date;
    uri: string;
    userId: string;
    reason: string | null;
}[]>;
/**
 * Check if a track is on the avoid list.
 */
export declare function isTrackAvoided(prisma: PrismaClient, options: Omit<AvoidTrackOptions, "reason">): Promise<boolean>;
//# sourceMappingURL=history.d.ts.map