import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Households
   * const households = await prisma.household.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Households
 * const households = await prisma.household.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.household`: Exposes CRUD operations for the **Household** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Households
  * const households = await prisma.household.findMany()
  * ```
  */
    get household(): Prisma.HouseholdDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Profiles
      * const profiles = await prisma.profile.findMany()
      * ```
      */
    get profile(): Prisma.ProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.preferenceWeight`: Exposes CRUD operations for the **PreferenceWeight** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PreferenceWeights
      * const preferenceWeights = await prisma.preferenceWeight.findMany()
      * ```
      */
    get preferenceWeight(): Prisma.PreferenceWeightDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.playEvent`: Exposes CRUD operations for the **PlayEvent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PlayEvents
      * const playEvents = await prisma.playEvent.findMany()
      * ```
      */
    get playEvent(): Prisma.PlayEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.listeningSession`: Exposes CRUD operations for the **ListeningSession** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ListeningSessions
      * const listeningSessions = await prisma.listeningSession.findMany()
      * ```
      */
    get listeningSession(): Prisma.ListeningSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.avoidTrack`: Exposes CRUD operations for the **AvoidTrack** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AvoidTracks
      * const avoidTracks = await prisma.avoidTrack.findMany()
      * ```
      */
    get avoidTrack(): Prisma.AvoidTrackDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.preference`: Exposes CRUD operations for the **Preference** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Preferences
      * const preferences = await prisma.preference.findMany()
      * ```
      */
    get preference(): Prisma.PreferenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.haConfigEntryCache`: Exposes CRUD operations for the **HaConfigEntryCache** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more HaConfigEntryCaches
      * const haConfigEntryCaches = await prisma.haConfigEntryCache.findMany()
      * ```
      */
    get haConfigEntryCache(): Prisma.HaConfigEntryCacheDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mood`: Exposes CRUD operations for the **Mood** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Moods
      * const moods = await prisma.mood.findMany()
      * ```
      */
    get mood(): Prisma.MoodDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map