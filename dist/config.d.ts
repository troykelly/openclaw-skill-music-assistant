import { z } from "zod";
declare const ConfigSchema: z.ZodObject<{
    databaseUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    databaseUrl: string;
}, {
    databaseUrl: string;
}>;
export type Config = z.infer<typeof ConfigSchema>;
/**
 * Resolve DATABASE_URL for Prisma.
 *
 * - If MA_DB_PATH is set, we derive a file: URL.
 * - Otherwise, default to a local file in the repo (gitignored).
 */
export declare function loadConfig(): Config;
export {};
//# sourceMappingURL=config.d.ts.map