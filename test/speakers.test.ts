import { describe, expect, test, beforeAll, afterAll, beforeEach } from "vitest";
import { createServer, IncomingMessage, ServerResponse, Server } from "node:http";
import { AddressInfo } from "node:net";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

// Import the modules under test directly
import { HaClient } from "../src/ha-client.ts";
import { listSpeakers } from "../src/speakers.ts";
import { discoverMaEntryIds, getCachedMaEntryIds, cacheMaEntryIds, clearMaCache } from "../src/ma-discovery.ts";
import { makePrisma } from "../src/db.ts";

/**
 * Integration-style tests for speaker discovery and MA config.
 * Uses a stubbed HTTP server to simulate HA REST API.
 */

const repoRoot = path.resolve(__dirname, "..");
const localDir = path.join(repoRoot, ".local-test");

// Mock HA API data - shared across tests
const mockStates = [
  {
    entity_id: "media_player.living_room",
    state: "playing",
    attributes: {
      friendly_name: "Living Room Speaker",
      volume_level: 0.5,
      is_volume_muted: false,
    },
  },
  {
    entity_id: "media_player.bedroom",
    state: "idle",
    attributes: {
      friendly_name: "Bedroom Speaker",
      volume_level: 0.3,
    },
  },
  {
    entity_id: "light.kitchen",
    state: "on",
    attributes: {
      friendly_name: "Kitchen Light",
    },
  },
  {
    entity_id: "media_player.music_assistant_player1",
    state: "playing",
    attributes: {
      friendly_name: "MA Player 1",
      volume_level: 0.75,
    },
  },
];

const mockConfigEntries = [
  {
    entry_id: "ma_entry_123",
    domain: "music_assistant",
    title: "Music Assistant",
    source: "user",
    state: "loaded",
    disabled_by: null,
  },
  {
    entry_id: "other_entry_456",
    domain: "homekit",
    title: "HomeKit",
    source: "user",
    state: "loaded",
    disabled_by: null,
  },
];

const mockAreas = [
  { area_id: "living_room", name: "Living Room", aliases: [], floor_id: null },
  { area_id: "bedroom", name: "Bedroom", aliases: [], floor_id: null },
];

const mockEntityRegistry = [
  { entity_id: "media_player.living_room", area_id: "living_room", device_id: "dev1", disabled_by: null },
  { entity_id: "media_player.bedroom", area_id: "bedroom", device_id: "dev2", disabled_by: null },
  { entity_id: "media_player.music_assistant_player1", area_id: null, device_id: "dev3", disabled_by: null },
];

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

describe("listSpeakers (stubbed HA)", () => {
  const dbPath = path.join(localDir, "speakers-unit-1.sqlite");
  let server: Server;
  let haUrl: string;

  beforeAll(async () => {
    // Set up database
    setupDatabase(dbPath);

    // Create stub server
    server = createServer((req: IncomingMessage, res: ServerResponse) => {
      if (req.url === "/api/states") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockStates));
      } else if (req.url === "/api/config/config_entries/entry") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockConfigEntries));
      } else if (req.url === "/api/config/area_registry/list") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockAreas));
      } else if (req.url === "/api/config/entity_registry/list") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockEntityRegistry));
      } else {
        res.writeHead(404);
        res.end("Not Found");
      }
    });

    // Use a promise to wait for server to be listening
    await new Promise<void>((resolve, reject) => {
      server.on("error", reject);
      server.listen(0, "127.0.0.1", () => {
        const addr = server.address() as AddressInfo;
        haUrl = `http://127.0.0.1:${addr.port}`;
        resolve();
      });
    });
  }, 60000);

  afterAll(async () => {
    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  test("lists media_player entities with enriched info", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const speakers = await listSpeakers(client);

    // Should only have media_player entities
    expect(speakers.every((s) => s.entity_id.startsWith("media_player."))).toBe(true);

    // Should have the expected fields
    const livingRoom = speakers.find((s) => s.entity_id === "media_player.living_room");
    expect(livingRoom).toBeDefined();
    expect(livingRoom?.friendly_name).toBe("Living Room Speaker");
    expect(livingRoom?.state).toBe("playing");
    expect(livingRoom?.volume).toBe(0.5);
    expect(livingRoom?.area_name).toBe("Living Room");

    // Bedroom should also have area
    const bedroom = speakers.find((s) => s.entity_id === "media_player.bedroom");
    expect(bedroom?.area_name).toBe("Bedroom");

    // MA player should have undefined area (null area_id in registry)
    const maPlayer = speakers.find((s) => s.entity_id === "media_player.music_assistant_player1");
    expect(maPlayer).toBeDefined();
    expect(maPlayer?.area_name).toBeUndefined();
  });

  test("uses bearer token for requests", async () => {
    let authHeader: string | undefined;

    // Create a server that captures auth header
    const testServer = createServer((req: IncomingMessage, res: ServerResponse) => {
      authHeader = req.headers.authorization;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify([]));
    });

    await new Promise<void>((resolve) => {
      testServer.listen(0, "127.0.0.1", () => resolve());
    });

    const addr = testServer.address() as AddressInfo;
    const client = new HaClient({ baseUrl: `http://127.0.0.1:${addr.port}`, token: "my-secret-token" });

    try {
      await client.getStates();
    } catch {
      // Ignore validation errors
    }

    expect(authHeader).toBe("Bearer my-secret-token");

    await new Promise<void>((resolve) => {
      testServer.close(() => resolve());
    });
  });
});

describe("Music Assistant discovery and caching", () => {
  const dbPath = path.join(localDir, "speakers-unit-2.sqlite");
  let server: Server;
  let haUrl: string;
  let configEntriesCallCount = 0;

  beforeAll(async () => {
    // Set up database with MA_DB_PATH environment
    setupDatabase(dbPath);
    process.env.MA_DB_PATH = dbPath;

    // Create stub server with request tracking
    server = createServer((req: IncomingMessage, res: ServerResponse) => {
      if (req.url === "/api/config/config_entries/entry") {
        configEntriesCallCount++;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockConfigEntries));
      } else if (req.url === "/api/states") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockStates));
      } else if (req.url === "/api/config/area_registry/list") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockAreas));
      } else if (req.url === "/api/config/entity_registry/list") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockEntityRegistry));
      } else {
        res.writeHead(404);
        res.end("Not Found");
      }
    });

    // Wait for server to be listening
    await new Promise<void>((resolve, reject) => {
      server.on("error", reject);
      server.listen(0, "127.0.0.1", () => {
        const addr = server.address() as AddressInfo;
        haUrl = `http://127.0.0.1:${addr.port}`;
        resolve();
      });
    });
  }, 60000);

  afterAll(async () => {
    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
    delete process.env.MA_DB_PATH;
  });

  beforeEach(() => {
    configEntriesCallCount = 0;
  });

  test("discovers Music Assistant entry IDs", async () => {
    const prisma = makePrisma();
    try {
      const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

      // Clear any cached entries first
      await clearMaCache(prisma, haUrl);

      const result = await discoverMaEntryIds(prisma, client, false);

      expect(result.entry_ids).toContain("ma_entry_123");
      expect(result.entry_ids).not.toContain("other_entry_456"); // Not MA
      expect(result.cached).toBe(false);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("caches entry IDs in database", async () => {
    const prisma = makePrisma();
    try {
      const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

      // Clear cache and do fresh discovery
      await clearMaCache(prisma, haUrl);
      configEntriesCallCount = 0;

      // First call should hit the API
      await discoverMaEntryIds(prisma, client, false);
      expect(configEntriesCallCount).toBe(1);

      // Record count after first call
      const countAfterFirst = configEntriesCallCount;

      // Second call with useCached=true should not hit API
      const result = await discoverMaEntryIds(prisma, client, true);

      expect(result.cached).toBe(true);
      expect(result.entry_ids).toContain("ma_entry_123");
      expect(configEntriesCallCount).toBe(countAfterFirst);
    } finally {
      await prisma.$disconnect();
    }
  });

  test("getCachedMaEntryIds returns null when cache is empty", async () => {
    const prisma = makePrisma();
    try {
      await clearMaCache(prisma, haUrl);
      const cached = await getCachedMaEntryIds(prisma, haUrl);
      expect(cached).toBeNull();
    } finally {
      await prisma.$disconnect();
    }
  });

  test("cacheMaEntryIds stores entries", async () => {
    const prisma = makePrisma();
    try {
      await clearMaCache(prisma, haUrl);

      await cacheMaEntryIds(prisma, haUrl, [
        { entry_id: "test-1", title: "Test 1" },
        { entry_id: "test-2", title: "Test 2" },
      ]);

      const cached = await getCachedMaEntryIds(prisma, haUrl);
      expect(cached).toContain("test-1");
      expect(cached).toContain("test-2");
    } finally {
      await prisma.$disconnect();
    }
  });
});
