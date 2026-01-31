import { describe, expect, test, beforeAll } from "vitest";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(__dirname, "..");
const localDir = path.join(repoRoot, ".local-test");
const dbPath = path.join(localDir, "ma.sqlite");

function run(cmd: string, args: string[]) {
  return execFileSync(cmd, args, {
    cwd: repoRoot,
    env: {
      ...process.env,
      MA_DB_PATH: dbPath,
    },
    encoding: "utf8",
  });
}

beforeAll(() => {
  fs.mkdirSync(localDir, { recursive: true });
  // Ensure we start clean.
  if (fs.existsSync(dbPath)) fs.rmSync(dbPath);
  // Apply migrations (creates DB).
  execFileSync(
    "npx",
    ["prisma", "migrate", "deploy"],
    {
      cwd: repoRoot,
      env: {
        ...process.env,
        DATABASE_URL: `file:${dbPath}`,
      },
      stdio: "inherit",
    },
  );
});

describe("music memory (sqlite+prisma)", () => {
  test("can log and retrieve recent play events", () => {
    run("node", ["dist/cli.js", "memory", "log", "--user", "troy", "--speaker-entity", "media_player.example", "--uri", "library://track/123", "--title", "Song", "--artist", "Artist"]);

    const out = run("node", ["dist/cli.js", "memory", "recent", "--user", "troy", "--limit", "10"]);
    const events = JSON.parse(out) as Array<{ uri: string; speakerEntityId: string }>;

    expect(events.length).toBeGreaterThan(0);
    expect(events[0]?.uri).toBe("library://track/123");
    expect(events[0]?.speakerEntityId).toBe("media_player.example");
  });
});
