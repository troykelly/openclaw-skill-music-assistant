import { describe, expect, test, beforeAll, afterAll, beforeEach } from "vitest";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { makePrisma } from "../src/db.js";
import {
  setMood,
  getMood,
  listMoods,
  deleteMood,
  resolveMood,
  type MoodCriteria,
} from "../src/mood.js";

const repoRoot = path.resolve(__dirname, "..");
const localDir = path.join(repoRoot, ".local-test");

/**
 * Ensure test directory exists and apply migrations for a specific database.
 */
function setupDatabase(dbPath: string): void {
  fs.mkdirSync(localDir, { recursive: true });
  if (fs.existsSync(dbPath)) fs.rmSync(dbPath);

  const result = spawnSync("npx", ["prisma", "migrate", "deploy"], {
    cwd: repoRoot,
    env: {
      ...process.env,
      DATABASE_URL: `file:${dbPath}`,
    },
    encoding: "utf8",
    timeout: 30000,
  });

  if (result.status !== 0) {
    throw new Error(`Prisma migrate failed: ${result.stderr}`);
  }
}

describe("mood storage", () => {
  const dbPath = path.join(localDir, "mood-1.sqlite");

  beforeAll(() => {
    setupDatabase(dbPath);
    process.env.MA_DB_PATH = dbPath;
  });

  afterAll(() => {
    delete process.env.MA_DB_PATH;
  });

  test("sets user mood with criteria", async () => {
    const prisma = makePrisma();
    try {
      const criteria: MoodCriteria = {
        genres: ["trance", "house"],
        decades: ["90s", "2000s"],
        energy: "high",
      };

      const mood = await setMood(prisma, {
        userSlug: "troy",
        name: "work",
        criteria,
      });

      expect(mood.name).toBe("work");
      expect(JSON.parse(mood.criteria)).toEqual(criteria);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("sets household mood", async () => {
    const prisma = makePrisma();
    try {
      const criteria: MoodCriteria = {
        genres: ["jazz", "bossa-nova"],
        energy: "low",
      };

      const mood = await setMood(prisma, {
        householdSlug: "home",
        name: "dinner",
        criteria,
      });

      expect(mood.name).toBe("dinner");
      expect(JSON.parse(mood.criteria)).toEqual(criteria);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("updates existing mood", async () => {
    const prisma = makePrisma();
    try {
      const criteria1: MoodCriteria = { genres: ["pop"] };
      const criteria2: MoodCriteria = { genres: ["rock"], energy: "high" };

      await setMood(prisma, { userSlug: "troy", name: "party", criteria: criteria1 });
      const updated = await setMood(prisma, { userSlug: "troy", name: "party", criteria: criteria2 });

      expect(JSON.parse(updated.criteria)).toEqual(criteria2);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("gets mood by name for user", async () => {
    const prisma = makePrisma();
    try {
      const criteria: MoodCriteria = { genres: ["ambient"], energy: "low" };
      await setMood(prisma, { userSlug: "troy", name: "sleep", criteria });

      const mood = await getMood(prisma, { userSlug: "troy", name: "sleep" });

      expect(mood).not.toBeNull();
      expect(mood?.name).toBe("sleep");
      expect(JSON.parse(mood!.criteria)).toEqual(criteria);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("lists user moods", async () => {
    const prisma = makePrisma();
    try {
      const moods = await listMoods(prisma, { userSlug: "troy" });

      expect(moods.length).toBeGreaterThan(0);
      expect(moods.some((m) => m.name === "work")).toBe(true);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("deletes mood", async () => {
    const prisma = makePrisma();
    try {
      await setMood(prisma, { userSlug: "troy", name: "temporary", criteria: { genres: ["test"] } });

      const deleted = await deleteMood(prisma, { userSlug: "troy", name: "temporary" });
      expect(deleted).toBe(true);

      const mood = await getMood(prisma, { userSlug: "troy", name: "temporary" });
      expect(mood).toBeNull();
    } finally {
      await prisma.$disconnect();
    }
  });

  test("resolves mood with user override over household", async () => {
    const prisma = makePrisma();
    try {
      // Set household mood
      await setMood(prisma, {
        householdSlug: "home",
        name: "morning",
        criteria: { genres: ["classical"], energy: "low" },
      });

      // Set user override
      await setMood(prisma, {
        userSlug: "troy",
        name: "morning",
        criteria: { genres: ["rock"], energy: "high" },
      });

      // Resolve should prefer user mood
      const resolved = await resolveMood(prisma, {
        userSlug: "troy",
        householdSlug: "home",
        name: "morning",
      });

      expect(resolved).not.toBeNull();
      expect(JSON.parse(resolved!.criteria).genres).toContain("rock");
    } finally {
      await prisma.$disconnect();
    }
  });

  test("resolves to household mood when user has none", async () => {
    const prisma = makePrisma();
    try {
      // Set household mood only
      await setMood(prisma, {
        householdSlug: "home",
        name: "relaxing",
        criteria: { genres: ["lofi"], energy: "low" },
      });

      // Resolve should fall back to household
      const resolved = await resolveMood(prisma, {
        userSlug: "troy",
        householdSlug: "home",
        name: "relaxing",
      });

      expect(resolved).not.toBeNull();
      expect(JSON.parse(resolved!.criteria).genres).toContain("lofi");
    } finally {
      await prisma.$disconnect();
    }
  });
});
