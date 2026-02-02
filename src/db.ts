import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";
import { loadConfig } from "./config.js";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Ensure the database directory exists.
 */
function ensureDbDir(dbPath: string): void {
  const dir = dirname(dbPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

/**
 * Extract the file path from a SQLite connection URL.
 * Handles both "file:/path" and "file:./relative" formats.
 */
function extractDbPath(databaseUrl: string): string {
  // Remove "file:" prefix
  let path = databaseUrl.replace(/^file:/, "");
  
  // Handle relative paths
  if (path.startsWith("./") || path.startsWith("../") || !path.startsWith("/")) {
    path = join(process.cwd(), path);
  }
  
  return path;
}

/**
 * Check if the database has been initialized (has tables).
 */
function isDatabaseInitialized(db: Database.Database): boolean {
  const result = db
    .prepare(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='User'"
    )
    .get();
  return result !== undefined;
}

/**
 * Initialize the database schema from the bundled SQL file.
 */
function initializeDatabase(db: Database.Database): void {
  // Try to find schema.sql in several locations:
  // 1. Adjacent to compiled JS (dist/prisma/schema.sql when bundled)
  // 2. In prisma folder relative to src (development)
  // 3. In package root's prisma folder
  const possiblePaths = [
    join(__dirname, "../prisma/schema.sql"),
    join(__dirname, "../../prisma/schema.sql"),
    join(process.cwd(), "prisma/schema.sql"),
  ];

  let schemaPath: string | undefined;
  for (const p of possiblePaths) {
    if (existsSync(p)) {
      schemaPath = p;
      break;
    }
  }

  if (!schemaPath) {
    throw new Error(
      "Database schema not found. Please run 'prisma db push' manually to initialize the database, " +
        "or ensure schema.sql is bundled with the package."
    );
  }

  const schemaSql = readFileSync(schemaPath, "utf-8");

  // Execute the schema SQL
  db.exec(schemaSql);
}

/**
 * Create a PrismaClient with auto-initialization.
 * If the database doesn't have tables, it will create them automatically.
 */
export function makePrisma(): PrismaClient {
  const cfg = loadConfig();
  const dbPath = extractDbPath(cfg.databaseUrl);

  // Ensure directory exists
  ensureDbDir(dbPath);

  // Open database directly to check/init
  const db = new Database(dbPath);

  try {
    if (!isDatabaseInitialized(db)) {
      initializeDatabase(db);
    }
  } finally {
    db.close();
  }

  // Now create PrismaClient with the adapter
  const adapter = new PrismaBetterSqlite3({
    url: cfg.databaseUrl,
  });
  return new PrismaClient({ adapter });
}

export { PrismaClient };
