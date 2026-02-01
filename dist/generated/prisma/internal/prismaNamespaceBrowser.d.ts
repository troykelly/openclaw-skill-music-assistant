import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly Household: "Household";
    readonly User: "User";
    readonly Profile: "Profile";
    readonly PreferenceWeight: "PreferenceWeight";
    readonly PlayEvent: "PlayEvent";
    readonly ListeningSession: "ListeningSession";
    readonly AvoidTrack: "AvoidTrack";
    readonly Preference: "Preference";
    readonly HaConfigEntryCache: "HaConfigEntryCache";
    readonly Mood: "Mood";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const HouseholdScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly slug: "slug";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const PreferenceWeightScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly kind: "kind";
    readonly key: "key";
    readonly weight: "weight";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PreferenceWeightScalarFieldEnum = (typeof PreferenceWeightScalarFieldEnum)[keyof typeof PreferenceWeightScalarFieldEnum];
export declare const PlayEventScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly profileId: "profileId";
    readonly sessionId: "sessionId";
    readonly speakerEntityId: "speakerEntityId";
    readonly uri: "uri";
    readonly title: "title";
    readonly artist: "artist";
    readonly album: "album";
    readonly playlistUri: "playlistUri";
    readonly radioStationUri: "radioStationUri";
    readonly durationMs: "durationMs";
    readonly skipped: "skipped";
    readonly skipReason: "skipReason";
    readonly createdAt: "createdAt";
};
export type PlayEventScalarFieldEnum = (typeof PlayEventScalarFieldEnum)[keyof typeof PlayEventScalarFieldEnum];
export declare const ListeningSessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly speakerEntityId: "speakerEntityId";
    readonly moodName: "moodName";
    readonly playlistUri: "playlistUri";
    readonly radioCriteria: "radioCriteria";
    readonly startedAt: "startedAt";
    readonly endedAt: "endedAt";
};
export type ListeningSessionScalarFieldEnum = (typeof ListeningSessionScalarFieldEnum)[keyof typeof ListeningSessionScalarFieldEnum];
export declare const AvoidTrackScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly uri: "uri";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
};
export type AvoidTrackScalarFieldEnum = (typeof AvoidTrackScalarFieldEnum)[keyof typeof AvoidTrackScalarFieldEnum];
export declare const PreferenceScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly householdId: "householdId";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly score: "score";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PreferenceScalarFieldEnum = (typeof PreferenceScalarFieldEnum)[keyof typeof PreferenceScalarFieldEnum];
export declare const HaConfigEntryCacheScalarFieldEnum: {
    readonly id: "id";
    readonly domain: "domain";
    readonly entryId: "entryId";
    readonly title: "title";
    readonly haUrl: "haUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HaConfigEntryCacheScalarFieldEnum = (typeof HaConfigEntryCacheScalarFieldEnum)[keyof typeof HaConfigEntryCacheScalarFieldEnum];
export declare const MoodScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly householdId: "householdId";
    readonly name: "name";
    readonly criteria: "criteria";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MoodScalarFieldEnum = (typeof MoodScalarFieldEnum)[keyof typeof MoodScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map