import { PrismaClient } from "./generated/prisma/client.ts";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { loadConfig } from "./config.ts";

export function makePrisma(): PrismaClient {
  const cfg = loadConfig();
  const adapter = new PrismaBetterSqlite3({
    url: cfg.databaseUrl,
  });
  return new PrismaClient({ adapter });
}

export { PrismaClient };
