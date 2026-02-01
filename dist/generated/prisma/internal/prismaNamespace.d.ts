import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.3.0
 * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "household" | "user" | "profile" | "preferenceWeight" | "playEvent" | "listeningSession" | "avoidTrack" | "preference" | "haConfigEntryCache" | "mood";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Household: {
            payload: Prisma.$HouseholdPayload<ExtArgs>;
            fields: Prisma.HouseholdFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HouseholdFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HouseholdFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>;
                };
                findFirst: {
                    args: Prisma.HouseholdFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HouseholdFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>;
                };
                findMany: {
                    args: Prisma.HouseholdFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>[];
                };
                create: {
                    args: Prisma.HouseholdCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>;
                };
                createMany: {
                    args: Prisma.HouseholdCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HouseholdCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>[];
                };
                delete: {
                    args: Prisma.HouseholdDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>;
                };
                update: {
                    args: Prisma.HouseholdUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>;
                };
                deleteMany: {
                    args: Prisma.HouseholdDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HouseholdUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HouseholdUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>[];
                };
                upsert: {
                    args: Prisma.HouseholdUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HouseholdPayload>;
                };
                aggregate: {
                    args: Prisma.HouseholdAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHousehold>;
                };
                groupBy: {
                    args: Prisma.HouseholdGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HouseholdGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HouseholdCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HouseholdCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Profile: {
            payload: Prisma.$ProfilePayload<ExtArgs>;
            fields: Prisma.ProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findFirst: {
                    args: Prisma.ProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findMany: {
                    args: Prisma.ProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                create: {
                    args: Prisma.ProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                createMany: {
                    args: Prisma.ProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                delete: {
                    args: Prisma.ProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                update: {
                    args: Prisma.ProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                upsert: {
                    args: Prisma.ProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                aggregate: {
                    args: Prisma.ProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfile>;
                };
                groupBy: {
                    args: Prisma.ProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileCountAggregateOutputType> | number;
                };
            };
        };
        PreferenceWeight: {
            payload: Prisma.$PreferenceWeightPayload<ExtArgs>;
            fields: Prisma.PreferenceWeightFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PreferenceWeightFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PreferenceWeightFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>;
                };
                findFirst: {
                    args: Prisma.PreferenceWeightFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PreferenceWeightFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>;
                };
                findMany: {
                    args: Prisma.PreferenceWeightFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>[];
                };
                create: {
                    args: Prisma.PreferenceWeightCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>;
                };
                createMany: {
                    args: Prisma.PreferenceWeightCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PreferenceWeightCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>[];
                };
                delete: {
                    args: Prisma.PreferenceWeightDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>;
                };
                update: {
                    args: Prisma.PreferenceWeightUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>;
                };
                deleteMany: {
                    args: Prisma.PreferenceWeightDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PreferenceWeightUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PreferenceWeightUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>[];
                };
                upsert: {
                    args: Prisma.PreferenceWeightUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferenceWeightPayload>;
                };
                aggregate: {
                    args: Prisma.PreferenceWeightAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePreferenceWeight>;
                };
                groupBy: {
                    args: Prisma.PreferenceWeightGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreferenceWeightGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PreferenceWeightCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreferenceWeightCountAggregateOutputType> | number;
                };
            };
        };
        PlayEvent: {
            payload: Prisma.$PlayEventPayload<ExtArgs>;
            fields: Prisma.PlayEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlayEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlayEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>;
                };
                findFirst: {
                    args: Prisma.PlayEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlayEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>;
                };
                findMany: {
                    args: Prisma.PlayEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>[];
                };
                create: {
                    args: Prisma.PlayEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>;
                };
                createMany: {
                    args: Prisma.PlayEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlayEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>[];
                };
                delete: {
                    args: Prisma.PlayEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>;
                };
                update: {
                    args: Prisma.PlayEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>;
                };
                deleteMany: {
                    args: Prisma.PlayEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlayEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlayEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>[];
                };
                upsert: {
                    args: Prisma.PlayEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlayEventPayload>;
                };
                aggregate: {
                    args: Prisma.PlayEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlayEvent>;
                };
                groupBy: {
                    args: Prisma.PlayEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlayEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlayEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlayEventCountAggregateOutputType> | number;
                };
            };
        };
        ListeningSession: {
            payload: Prisma.$ListeningSessionPayload<ExtArgs>;
            fields: Prisma.ListeningSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ListeningSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ListeningSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>;
                };
                findFirst: {
                    args: Prisma.ListeningSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ListeningSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>;
                };
                findMany: {
                    args: Prisma.ListeningSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>[];
                };
                create: {
                    args: Prisma.ListeningSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>;
                };
                createMany: {
                    args: Prisma.ListeningSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ListeningSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>[];
                };
                delete: {
                    args: Prisma.ListeningSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>;
                };
                update: {
                    args: Prisma.ListeningSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.ListeningSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ListeningSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ListeningSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>[];
                };
                upsert: {
                    args: Prisma.ListeningSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListeningSessionPayload>;
                };
                aggregate: {
                    args: Prisma.ListeningSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListeningSession>;
                };
                groupBy: {
                    args: Prisma.ListeningSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListeningSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ListeningSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListeningSessionCountAggregateOutputType> | number;
                };
            };
        };
        AvoidTrack: {
            payload: Prisma.$AvoidTrackPayload<ExtArgs>;
            fields: Prisma.AvoidTrackFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AvoidTrackFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AvoidTrackFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>;
                };
                findFirst: {
                    args: Prisma.AvoidTrackFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AvoidTrackFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>;
                };
                findMany: {
                    args: Prisma.AvoidTrackFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>[];
                };
                create: {
                    args: Prisma.AvoidTrackCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>;
                };
                createMany: {
                    args: Prisma.AvoidTrackCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AvoidTrackCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>[];
                };
                delete: {
                    args: Prisma.AvoidTrackDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>;
                };
                update: {
                    args: Prisma.AvoidTrackUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>;
                };
                deleteMany: {
                    args: Prisma.AvoidTrackDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AvoidTrackUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AvoidTrackUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>[];
                };
                upsert: {
                    args: Prisma.AvoidTrackUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AvoidTrackPayload>;
                };
                aggregate: {
                    args: Prisma.AvoidTrackAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAvoidTrack>;
                };
                groupBy: {
                    args: Prisma.AvoidTrackGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AvoidTrackGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AvoidTrackCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AvoidTrackCountAggregateOutputType> | number;
                };
            };
        };
        Preference: {
            payload: Prisma.$PreferencePayload<ExtArgs>;
            fields: Prisma.PreferenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PreferenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PreferenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                findFirst: {
                    args: Prisma.PreferenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PreferenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                findMany: {
                    args: Prisma.PreferenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>[];
                };
                create: {
                    args: Prisma.PreferenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                createMany: {
                    args: Prisma.PreferenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PreferenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>[];
                };
                delete: {
                    args: Prisma.PreferenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                update: {
                    args: Prisma.PreferenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                deleteMany: {
                    args: Prisma.PreferenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PreferenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PreferenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>[];
                };
                upsert: {
                    args: Prisma.PreferenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                aggregate: {
                    args: Prisma.PreferenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePreference>;
                };
                groupBy: {
                    args: Prisma.PreferenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreferenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PreferenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreferenceCountAggregateOutputType> | number;
                };
            };
        };
        HaConfigEntryCache: {
            payload: Prisma.$HaConfigEntryCachePayload<ExtArgs>;
            fields: Prisma.HaConfigEntryCacheFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HaConfigEntryCacheFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HaConfigEntryCacheFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>;
                };
                findFirst: {
                    args: Prisma.HaConfigEntryCacheFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HaConfigEntryCacheFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>;
                };
                findMany: {
                    args: Prisma.HaConfigEntryCacheFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>[];
                };
                create: {
                    args: Prisma.HaConfigEntryCacheCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>;
                };
                createMany: {
                    args: Prisma.HaConfigEntryCacheCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HaConfigEntryCacheCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>[];
                };
                delete: {
                    args: Prisma.HaConfigEntryCacheDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>;
                };
                update: {
                    args: Prisma.HaConfigEntryCacheUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>;
                };
                deleteMany: {
                    args: Prisma.HaConfigEntryCacheDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HaConfigEntryCacheUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HaConfigEntryCacheUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>[];
                };
                upsert: {
                    args: Prisma.HaConfigEntryCacheUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HaConfigEntryCachePayload>;
                };
                aggregate: {
                    args: Prisma.HaConfigEntryCacheAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHaConfigEntryCache>;
                };
                groupBy: {
                    args: Prisma.HaConfigEntryCacheGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HaConfigEntryCacheGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HaConfigEntryCacheCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HaConfigEntryCacheCountAggregateOutputType> | number;
                };
            };
        };
        Mood: {
            payload: Prisma.$MoodPayload<ExtArgs>;
            fields: Prisma.MoodFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MoodFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MoodFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>;
                };
                findFirst: {
                    args: Prisma.MoodFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MoodFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>;
                };
                findMany: {
                    args: Prisma.MoodFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>[];
                };
                create: {
                    args: Prisma.MoodCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>;
                };
                createMany: {
                    args: Prisma.MoodCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MoodCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>[];
                };
                delete: {
                    args: Prisma.MoodDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>;
                };
                update: {
                    args: Prisma.MoodUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>;
                };
                deleteMany: {
                    args: Prisma.MoodDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MoodUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MoodUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>[];
                };
                upsert: {
                    args: Prisma.MoodUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodPayload>;
                };
                aggregate: {
                    args: Prisma.MoodAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMood>;
                };
                groupBy: {
                    args: Prisma.MoodGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MoodGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MoodCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MoodCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'PreferenceKind'
 */
export type EnumPreferenceKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferenceKind'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    household?: Prisma.HouseholdOmit;
    user?: Prisma.UserOmit;
    profile?: Prisma.ProfileOmit;
    preferenceWeight?: Prisma.PreferenceWeightOmit;
    playEvent?: Prisma.PlayEventOmit;
    listeningSession?: Prisma.ListeningSessionOmit;
    avoidTrack?: Prisma.AvoidTrackOmit;
    preference?: Prisma.PreferenceOmit;
    haConfigEntryCache?: Prisma.HaConfigEntryCacheOmit;
    mood?: Prisma.MoodOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map