import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { makePrisma } from "../src/db.js";
import {
  startSession,
  endSession,
  listSessions,
  replaySession,
  logPlayEventEnhanced,
  getRecentHistory,
  addAvoidTrack,
  removeAvoidTrack,
  getAvoidList,
  isTrackAvoided,
} from "../src/history.js";

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

describe("listening sessions", () => {
  const dbPath = path.join(localDir, "history-1.sqlite");

  beforeAll(() => {
    setupDatabase(dbPath);
    process.env.MA_DB_PATH = dbPath;
  });

  afterAll(() => {
    delete process.env.MA_DB_PATH;
  });

  test("starts a new session", async () => {
    const prisma = makePrisma();
    try {
      const session = await startSession(prisma, {
        userSlug: "troy",
        speakerEntityId: "media_player.living_room",
        moodName: "work",
      });

      expect(session.speakerEntityId).toBe("media_player.living_room");
      expect(session.moodName).toBe("work");
      expect(session.endedAt).toBeNull();
    } finally {
      await prisma.$disconnect();
    }
  });

  test("ends a session", async () => {
    const prisma = makePrisma();
    try {
      const session = await startSession(prisma, {
        userSlug: "troy",
        speakerEntityId: "media_player.bedroom",
      });

      const ended = await endSession(prisma, session.id);

      expect(ended.endedAt).not.toBeNull();
    } finally {
      await prisma.$disconnect();
    }
  });

  test("lists user sessions", async () => {
    const prisma = makePrisma();
    try {
      const sessions = await listSessions(prisma, { userSlug: "troy", limit: 10 });

      expect(sessions.length).toBeGreaterThan(0);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("logs play events with session context", async () => {
    const prisma = makePrisma();
    try {
      const session = await startSession(prisma, {
        userSlug: "troy",
        speakerEntityId: "media_player.office",
      });

      const event = await logPlayEventEnhanced(prisma, {
        userSlug: "troy",
        speakerEntityId: "media_player.office",
        uri: "library://track/123",
        sessionId: session.id,
        title: "Test Track",
        artist: "Test Artist",
        playlistUri: "library://playlist/1",
      });

      expect(event.sessionId).toBe(session.id);
      expect(event.playlistUri).toBe("library://playlist/1");
    } finally {
      await prisma.$disconnect();
    }
  });

  test("logs skipped tracks", async () => {
    const prisma = makePrisma();
    try {
      const event = await logPlayEventEnhanced(prisma, {
        userSlug: "troy",
        speakerEntityId: "media_player.office",
        uri: "library://track/456",
        skipped: true,
        skipReason: "user",
        durationMs: 15000,
      });

      expect(event.skipped).toBe(true);
      expect(event.skipReason).toBe("user");
    } finally {
      await prisma.$disconnect();
    }
  });

  test("gets recent history", async () => {
    const prisma = makePrisma();
    try {
      const history = await getRecentHistory(prisma, { userSlug: "troy", limit: 10 });

      expect(history.length).toBeGreaterThan(0);
    } finally {
      await prisma.$disconnect();
    }
  });
});

describe("avoid list", () => {
  const dbPath = path.join(localDir, "history-2.sqlite");

  beforeAll(() => {
    setupDatabase(dbPath);
    process.env.MA_DB_PATH = dbPath;
  });

  afterAll(() => {
    delete process.env.MA_DB_PATH;
  });

  test("adds track to avoid list", async () => {
    const prisma = makePrisma();
    try {
      const avoid = await addAvoidTrack(prisma, {
        userSlug: "troy",
        uri: "library://track/bad",
        reason: "dont like",
      });

      expect(avoid.uri).toBe("library://track/bad");
      expect(avoid.reason).toBe("dont like");
    } finally {
      await prisma.$disconnect();
    }
  });

  test("checks if track is avoided", async () => {
    const prisma = makePrisma();
    try {
      const avoided = await isTrackAvoided(prisma, {
        userSlug: "troy",
        uri: "library://track/bad",
      });

      expect(avoided).toBe(true);

      const notAvoided = await isTrackAvoided(prisma, {
        userSlug: "troy",
        uri: "library://track/good",
      });

      expect(notAvoided).toBe(false);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("lists avoid tracks", async () => {
    const prisma = makePrisma();
    try {
      const list = await getAvoidList(prisma, { userSlug: "troy" });

      expect(list.length).toBeGreaterThan(0);
      expect(list.some((t) => t.uri === "library://track/bad")).toBe(true);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("removes track from avoid list", async () => {
    const prisma = makePrisma();
    try {
      await addAvoidTrack(prisma, { userSlug: "troy", uri: "library://track/temp" });

      const removed = await removeAvoidTrack(prisma, {
        userSlug: "troy",
        uri: "library://track/temp",
      });

      expect(removed).toBe(true);

      const stillAvoided = await isTrackAvoided(prisma, {
        userSlug: "troy",
        uri: "library://track/temp",
      });

      expect(stillAvoided).toBe(false);
    } finally {
      await prisma.$disconnect();
    }
  });
});
