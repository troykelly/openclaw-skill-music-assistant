import { describe, expect, test, beforeAll, afterAll, beforeEach } from "vitest";
import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { AddressInfo } from "node:net";
import { z } from "zod";

/**
 * Tests for HA REST client + speaker discovery.
 * Uses a stubbed HTTP server to avoid requiring a live HA instance.
 */

// --- Zod schemas for HA API responses (will be exported from ha-client.ts) ---

/** Schema for a single entity state from /api/states */
const HaStateSchema = z.object({
  entity_id: z.string(),
  state: z.string(),
  attributes: z.record(z.unknown()).default({}),
  last_changed: z.string().optional(),
  last_updated: z.string().optional(),
});

/** Schema for /api/states response (array of states) */
const HaStatesResponseSchema = z.array(HaStateSchema);

/** Schema for a config entry from /api/config/config_entries/entry */
const HaConfigEntrySchema = z.object({
  entry_id: z.string(),
  domain: z.string(),
  title: z.string().optional(),
  source: z.string().optional(),
  state: z.string().optional(),
  disabled_by: z.string().nullable().optional(),
});

/** Schema for /api/config/config_entries/entry response */
const HaConfigEntriesResponseSchema = z.array(HaConfigEntrySchema);

/** Schema for an area from /api/config/area_registry/list */
const HaAreaSchema = z.object({
  area_id: z.string(),
  name: z.string(),
  aliases: z.array(z.string()).optional(),
  floor_id: z.string().nullable().optional(),
});

/** Schema for area registry response */
const HaAreasResponseSchema = z.array(HaAreaSchema);

/** Schema for entity registry entry */
const HaEntityRegistryEntrySchema = z.object({
  entity_id: z.string(),
  area_id: z.string().nullable().optional(),
  device_id: z.string().nullable().optional(),
  disabled_by: z.string().nullable().optional(),
});

const HaEntityRegistryResponseSchema = z.array(HaEntityRegistryEntrySchema);

// --- Test fixtures ---

const mockStates = [
  {
    entity_id: "media_player.living_room",
    state: "playing",
    attributes: {
      friendly_name: "Living Room Speaker",
      volume_level: 0.5,
      is_volume_muted: false,
      media_title: "Some Song",
    },
    last_changed: "2025-02-01T10:00:00Z",
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
];

const mockConfigEntries = [
  {
    entry_id: "abc123",
    domain: "music_assistant",
    title: "Music Assistant",
    source: "user",
    state: "loaded",
    disabled_by: null,
  },
  {
    entry_id: "def456",
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
  { area_id: "kitchen", name: "Kitchen", aliases: [], floor_id: null },
];

const mockEntityRegistry = [
  { entity_id: "media_player.living_room", area_id: "living_room", device_id: "dev1", disabled_by: null },
  { entity_id: "media_player.bedroom", area_id: "bedroom", device_id: "dev2", disabled_by: null },
  { entity_id: "light.kitchen", area_id: "kitchen", device_id: "dev3", disabled_by: null },
];

describe("HA API response schemas (zod validation)", () => {
  test("HaStatesResponseSchema parses valid states", () => {
    const result = HaStatesResponseSchema.safeParse(mockStates);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toHaveLength(3);
      expect(result.data[0]?.entity_id).toBe("media_player.living_room");
    }
  });

  test("HaStatesResponseSchema rejects invalid data", () => {
    const invalid = [{ entity_id: 123, state: "on" }]; // entity_id should be string
    const result = HaStatesResponseSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  test("HaConfigEntriesResponseSchema parses valid config entries", () => {
    const result = HaConfigEntriesResponseSchema.safeParse(mockConfigEntries);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toHaveLength(2);
      expect(result.data[0]?.domain).toBe("music_assistant");
    }
  });

  test("HaAreasResponseSchema parses valid areas", () => {
    const result = HaAreasResponseSchema.safeParse(mockAreas);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toHaveLength(3);
    }
  });

  test("HaEntityRegistryResponseSchema parses valid entity registry", () => {
    const result = HaEntityRegistryResponseSchema.safeParse(mockEntityRegistry);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toHaveLength(3);
    }
  });
});

describe("HA REST client (stubbed HTTP server)", () => {
  let server: ReturnType<typeof createServer>;
  let baseUrl: string;
  let lastAuthHeader: string | undefined;
  let requestPaths: string[] = [];

  beforeAll(() => {
    server = createServer((req: IncomingMessage, res: ServerResponse) => {
      lastAuthHeader = req.headers.authorization;
      requestPaths.push(req.url ?? "");

      // Route handling
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
      } else if (req.url === "/api/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "API running." }));
      } else {
        res.writeHead(404);
        res.end("Not Found");
      }
    });

    server.listen(0);
    const addr = server.address() as AddressInfo;
    baseUrl = `http://127.0.0.1:${addr.port}`;
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    lastAuthHeader = undefined;
    requestPaths = [];
  });

  test("stub server responds to /api/states", async () => {
    const response = await fetch(`${baseUrl}/api/states`, {
      headers: { Authorization: "Bearer test-token" },
    });
    expect(response.status).toBe(200);
    const data = await response.json();
    const parsed = HaStatesResponseSchema.parse(data);
    expect(parsed).toHaveLength(3);
    expect(lastAuthHeader).toBe("Bearer test-token");
  });

  test("stub server responds to /api/config/config_entries/entry", async () => {
    const response = await fetch(`${baseUrl}/api/config/config_entries/entry`, {
      headers: { Authorization: "Bearer test-token" },
    });
    expect(response.status).toBe(200);
    const data = await response.json();
    const parsed = HaConfigEntriesResponseSchema.parse(data);
    expect(parsed).toHaveLength(2);
    const maEntry = parsed.find((e) => e.domain === "music_assistant");
    expect(maEntry?.entry_id).toBe("abc123");
  });

  test("stub server responds to area and entity registry", async () => {
    const areasRes = await fetch(`${baseUrl}/api/config/area_registry/list`, {
      headers: { Authorization: "Bearer test-token" },
    });
    expect(areasRes.status).toBe(200);

    const entitiesRes = await fetch(`${baseUrl}/api/config/entity_registry/list`, {
      headers: { Authorization: "Bearer test-token" },
    });
    expect(entitiesRes.status).toBe(200);
  });
});

// This test will fail until we implement the ha-client module
describe("HaClient class", () => {
  test.skip("HaClient is exported from ha-client.ts", async () => {
    // This will be implemented
    const { HaClient } = await import("../src/ha-client.ts");
    expect(HaClient).toBeDefined();
  });
});
