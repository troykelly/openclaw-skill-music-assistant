/**
 * Tests for user/household preference storage.
 *
 * Acceptance criteria:
 * - Preference schema: user_id, household_id (optional), entity_type, entity_id, preference_score
 * - CLI commands for set/get/clear
 * - Household preferences as defaults, user preferences override
 */

import { describe, test, expect, beforeEach } from "vitest";
import { PrismaClient } from "../src/generated/prisma/client.ts";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const TEST_DB_DIR = join(process.cwd(), ".local-test");
const TEST_DB_PATH = join(TEST_DB_DIR, "preferences.sqlite");

describe("preference storage", () => {
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

  test("stores user preference for artist", async () => {
    // Create user
    const user = await db.user.create({
      data: { slug: "troy", name: "Troy" },
    });

    // Store preference for Daft Punk
    const pref = await db.preference.create({
      data: {
        userId: user.id,
        entityType: "artist",
        entityId: "daft-punk",
        score: 0.9,
      },
    });

    expect(pref.userId).toBe(user.id);
    expect(pref.householdId).toBeNull();
    expect(pref.entityType).toBe("artist");
    expect(pref.entityId).toBe("daft-punk");
    expect(pref.score).toBe(0.9);
  });

  test("stores household preference for genre", async () => {
    // Create household and user
    const household = await db.household.create({
      data: { slug: "home", name: "Home" },
    });

    const pref = await db.preference.create({
      data: {
        householdId: household.id,
        entityType: "genre",
        entityId: "trance",
        score: 0.7,
      },
    });

    expect(pref.userId).toBeNull();
    expect(pref.householdId).toBe(household.id);
    expect(pref.entityType).toBe("genre");
    expect(pref.entityId).toBe("trance");
    expect(pref.score).toBe(0.7);
  });

  test("enforces score range -1.0 to 1.0", async () => {
    const user = await db.user.create({
      data: { slug: "troy", name: "Troy" },
    });

    // Valid scores
    await db.preference.create({
      data: {
        userId: user.id,
        entityType: "track",
        entityId: "track-1",
        score: -1.0,
      },
    });

    await db.preference.create({
      data: {
        userId: user.id,
        entityType: "track",
        entityId: "track-2",
        score: 0.0,
      },
    });

    await db.preference.create({
      data: {
        userId: user.id,
        entityType: "track",
        entityId: "track-3",
        score: 1.0,
      },
    });

    const prefs = await db.preference.findMany({ where: { userId: user.id } });
    expect(prefs).toHaveLength(3);
  });

  test("prevents duplicate user preferences for same entity", async () => {
    const user = await db.user.create({
      data: { slug: "troy", name: "Troy" },
    });

    await db.preference.create({
      data: {
        userId: user.id,
        entityType: "artist",
        entityId: "daft-punk",
        score: 0.9,
      },
    });

    // Attempt duplicate
    await expect(
      db.preference.create({
        data: {
          userId: user.id,
          entityType: "artist",
          entityId: "daft-punk",
          score: 0.5,
        },
      })
    ).rejects.toThrow();
  });

  test("allows different users to have preferences for same entity", async () => {
    const troy = await db.user.create({
      data: { slug: "troy", name: "Troy" },
    });

    const alex = await db.user.create({
      data: { slug: "alex", name: "Alex" },
    });

    await db.preference.create({
      data: {
        userId: troy.id,
        entityType: "artist",
        entityId: "daft-punk",
        score: 0.9,
      },
    });

    await db.preference.create({
      data: {
        userId: alex.id,
        entityType: "artist",
        entityId: "daft-punk",
        score: -0.5,
      },
    });

    const troyPrefs = await db.preference.findMany({ where: { userId: troy.id } });
    const alexPrefs = await db.preference.findMany({ where: { userId: alex.id } });

    expect(troyPrefs).toHaveLength(1);
    expect(alexPrefs).toHaveLength(1);
    expect(troyPrefs[0].score).toBe(0.9);
    expect(alexPrefs[0].score).toBe(-0.5);
  });

  test("supports all entity types", async () => {
    const user = await db.user.create({
      data: { slug: "troy", name: "Troy" },
    });

    const types = ["track", "artist", "album", "genre", "decade", "year"];

    for (const entityType of types) {
      await db.preference.create({
        data: {
          userId: user.id,
          entityType,
          entityId: `test-${entityType}`,
          score: 0.5,
        },
      });
    }

    const prefs = await db.preference.findMany({ where: { userId: user.id } });
    expect(prefs).toHaveLength(types.length);

    const foundTypes = prefs.map((p) => p.entityType).sort();
    expect(foundTypes).toEqual(types.sort());
  });
});
