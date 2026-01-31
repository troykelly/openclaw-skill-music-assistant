import { z } from "zod";

const ConfigSchema = z.object({
  databaseUrl: z.string().min(1),
});

export type Config = z.infer<typeof ConfigSchema>;

/**
 * Resolve DATABASE_URL for Prisma.
 *
 * - If MA_DB_PATH is set, we derive a file: URL.
 * - Otherwise, default to a local file in the repo (gitignored).
 */
export function loadConfig(): Config {
  const dbPath = process.env.MA_DB_PATH?.trim();
  const databaseUrl = dbPath && dbPath.length > 0
    ? `file:${dbPath}`
    : "file:./.local/ma.sqlite";

  return ConfigSchema.parse({ databaseUrl });
}
