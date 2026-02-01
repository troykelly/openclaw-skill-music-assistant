import { PrismaClient, PreferenceKind } from "./generated/prisma/client.js";
export type LogPlayEventInput = {
    userSlug: string;
    speakerEntityId: string;
    uri: string;
    title?: string;
    artist?: string;
    album?: string;
    profileSlug?: string;
};
export declare function ensureUser(prisma: PrismaClient, userSlug: string): Promise<{
    name: string;
    id: string;
    createdAt: Date;
    slug: string;
}>;
export declare function ensureProfile(prisma: PrismaClient, userId: string, profileSlug: string): Promise<{
    name: string;
    id: string;
    createdAt: Date;
    slug: string;
    userId: string;
}>;
export declare function logPlayEvent(prisma: PrismaClient, input: LogPlayEventInput): Promise<{
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
export declare function listRecentPlayEvents(prisma: PrismaClient, userSlug: string, limit: number): Promise<{
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
export declare function setPreferenceWeight(prisma: PrismaClient, params: {
    userSlug: string;
    profileSlug: string;
    kind: PreferenceKind;
    key: string;
    weight: number;
}): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    profileId: string;
    kind: PreferenceKind;
    key: string;
    weight: number;
}>;
//# sourceMappingURL=memory.d.ts.map