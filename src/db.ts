import { PrismaClient } from "@prisma/client";
import { loadConfig } from "./config.js";

export function makePrisma(): PrismaClient {
  const cfg = loadConfig();
  // Prisma reads DATABASE_URL from env; set it for this process only.
  process.env.DATABASE_URL = cfg.databaseUrl;
  return new PrismaClient();
}
