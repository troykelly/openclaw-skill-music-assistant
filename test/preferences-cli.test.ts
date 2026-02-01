/**
 * Tests for preference CLI commands.
 *
 * CLI commands:
 * - ha-ma prefs set --user troy --artist "Daft Punk" --score 0.9
 * - ha-ma prefs set --household home --genre trance --score 0.7
 * - ha-ma prefs get --user troy
 * - ha-ma prefs clear --user troy --artist "..."
 */

import { describe, test, expect, beforeEach } from "vitest";
import { PrismaClient } from "../src/generated/prisma/client.ts";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const TEST_DB_DIR = join(process.cwd(), ".local-test");
const TEST_DB_PATH = join(TEST_DB_DIR, "prefs-cli.sqlite");
const CLI_PATH = join(process.cwd(), "src", "cli.ts");

describe("preference CLI commands", () => {
  let db: PrismaClient;

  beforeEach(async () => {
    // Clean and recreate test database
    rmSync(TEST_DB_DIR, { recursive: true, force: true });
    mkdirSync(TEST_DB_DIR, { recursive: true });

    // Run migrations
    execFileSync("pnpm", ["prisma:migrate:dev"], {
      stdio: "pipe",
      env: { ...process.env, DATABASE_URL: `file:${TEST_DB_PATH}` },
    });

    const adapter = new PrismaBetterSqlite3({
      url: `file:${TEST_DB_PATH}`,
    });
    db = new PrismaClient({ adapter });

    await db.$connect();
  });

  test("sets user preference for artist", async () => {
    // Create user first
    await db.user.create({ data: { slug: "troy", name: "Troy" } });

    const output = execFileSync("node", [
      CLI_PATH,
      "prefs",
      "set",
      "--user",
      "troy",
      "--artist",
      "Daft Punk",
      "--score",
      "0.9",
    ], {
      env: { ...process.env, MA_DB_PATH: TEST_DB_PATH },
      encoding: "utf8",
    });

    const result = JSON.parse(output);
    expect(result.entityType).toBe("artist");
    expect(result.entityId).toBe("daft-punk");
    expect(result.score).toBe(0.9);

    // Verify in database
    const user = await db.user.findUnique({ where: { slug: "troy" } });
    const pref = await db.preference.findFirst({
      where: { userId: user!.id, entityType: "artist" },
    });
    expect(pref?.entityId).toBe("daft-punk");
    expect(pref?.score).toBe(0.9);
  });

  test("sets household preference for genre", async () => {
    // Create household first
    await db.household.create({ data: { slug: "home", name: "Home" } });

    const output = execFileSync("node", [
      CLI_PATH,
      "prefs",
      "set",
      "--household",
      "home",
      "--genre",
      "trance",
      "--score",
      "0.7",
    ], {
      env: { ...process.env, MA_DB_PATH: TEST_DB_PATH },
      encoding: "utf8",
    });

    const result = JSON.parse(output);
    expect(result.entityType).toBe("genre");
    expect(result.entityId).toBe("trance");
    expect(result.score).toBe(0.7);
  });

  test("gets user preferences", async () => {
    const user = await db.user.create({ data: { slug: "troy", name: "Troy" } });

    await db.preference.createMany({
      data: [
        { userId: user.id, entityType: "artist", entityId: "daft-punk", score: 0.9 },
        { userId: user.id, entityType: "genre", entityId: "trance", score: 0.8 },
      ],
    });

    const output = execFileSync("node", [
      CLI_PATH,
      "prefs",
      "get",
      "--user",
      "troy",
    ], {
      env: { ...process.env, MA_DB_PATH: TEST_DB_PATH },
      encoding: "utf8",
    });

    const result = JSON.parse(output);
    expect(result).toHaveLength(2);
    expect(result.find((p: any) => p.entityType === "artist")?.entityId).toBe("daft-punk");
    expect(result.find((p: any) => p.entityType === "genre")?.entityId).toBe("trance");
  });

  test("clears specific user preference", async () => {
    const user = await db.user.create({ data: { slug: "troy", name: "Troy" } });

    await db.preference.createMany({
      data: [
        { userId: user.id, entityType: "artist", entityId: "daft-punk", score: 0.9 },
        { userId: user.id, entityType: "genre", entityId: "trance", score: 0.8 },
      ],
    });

    const output = execFileSync("node", [
      CLI_PATH,
      "prefs",
      "clear",
      "--user",
      "troy",
      "--artist",
      "Daft Punk",
    ], {
      env: { ...process.env, MA_DB_PATH: TEST_DB_PATH },
      encoding: "utf8",
    });

    const result = JSON.parse(output);
    expect(result.deleted).toBe(1);

    // Verify only artist preference was deleted
    const remaining = await db.preference.findMany({ where: { userId: user.id } });
    expect(remaining).toHaveLength(1);
    expect(remaining[0].entityType).toBe("genre");
  });

  test("updates existing preference score", async () => {
    const user = await db.user.create({ data: { slug: "troy", name: "Troy" } });

    await db.preference.create({
      data: { userId: user.id, entityType: "artist", entityId: "daft-punk", score: 0.5 },
    });

    const output = execFileSync("node", [
      CLI_PATH,
      "prefs",
      "set",
      "--user",
      "troy",
      "--artist",
      "Daft Punk",
      "--score",
      "0.9",
    ], {
      env: { ...process.env, MA_DB_PATH: TEST_DB_PATH },
      encoding: "utf8",
    });

    const result = JSON.parse(output);
    expect(result.score).toBe(0.9);

    // Verify only one preference exists
    const prefs = await db.preference.findMany({
      where: { userId: user.id, entityType: "artist" },
    });
    expect(prefs).toHaveLength(1);
    expect(prefs[0].score).toBe(0.9);
  });

  test("normalizes entity IDs consistently", async () => {
    const user = await db.user.create({ data: { slug: "troy", name: "Troy" } });

    // Set preference with various capitalizations
    execFileSync("node", [
      CLI_PATH,
      "prefs",
      "set",
      "--user",
      "troy",
      "--artist",
      "Daft Punk",
      "--score",
      "0.9",
    ], {
      env: { ...process.env, MA_DB_PATH: TEST_DB_PATH },
      encoding: "utf8",
    });

    // Update with different capitalization
    execFileSync("node", [
      CLI_PATH,
      "prefs",
      "set",
      "--user",
      "troy",
      "--artist",
      "DAFT PUNK",
      "--score",
      "0.7",
    ], {
      env: { ...process.env, MA_DB_PATH: TEST_DB_PATH },
      encoding: "utf8",
    });

    // Should have only one preference (updated)
    const prefs = await db.preference.findMany({
      where: { userId: user.id, entityType: "artist" },
    });
    expect(prefs).toHaveLength(1);
    expect(prefs[0].entityId).toBe("daft-punk");
    expect(prefs[0].score).toBe(0.7);
  });
});
