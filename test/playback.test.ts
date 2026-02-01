import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { createServer, IncomingMessage, ServerResponse, Server } from "node:http";
import { AddressInfo } from "node:net";
import { HaClient } from "../src/ha-client.ts";
import {
  playMedia,
  pauseMedia,
  stopMedia,
  nextTrack,
  prevTrack,
  setVolume,
  addToQueue,
} from "../src/playback.ts";

/**
 * Integration tests for playback control.
 * Uses a stubbed HTTP server to simulate HA REST API.
 */

// Track service calls
const serviceCalls: Array<{ domain: string; service: string; data: unknown }> = [];

function createMockServer(): Server {
  return createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "POST" && req.url?.includes("/api/services/")) {
      const chunks: Buffer[] = [];
      req.on("data", (chunk: Buffer) => chunks.push(chunk));
      req.on("end", () => {
        try {
          const body = Buffer.concat(chunks).toString();
          const data = JSON.parse(body);

          // Extract domain and service from URL
          // /api/services/{domain}/{service}
          const urlParts = req.url!.split("/");
          const domain = urlParts[3];
          const service = urlParts[4];

          serviceCalls.push({ domain, service, data });

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true }));
        } catch {
          res.writeHead(400);
          res.end("Bad Request");
        }
      });
      return;
    }

    res.writeHead(404);
    res.end("Not Found");
  });
}

describe("playback control", () => {
  let server: Server;
  let haUrl: string;

  beforeAll(async () => {
    serviceCalls.length = 0;
    server = createMockServer();

    await new Promise<void>((resolve, reject) => {
      server.on("error", reject);
      server.listen(0, "127.0.0.1", () => {
        const addr = server.address() as AddressInfo;
        haUrl = `http://127.0.0.1:${addr.port}`;
        resolve();
      });
    });
  });

  afterAll(async () => {
    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  test("plays media on speaker", async () => {
    serviceCalls.length = 0;
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

    await playMedia(client, {
      entityId: "media_player.living_room",
      uri: "library://track/123",
    });

    expect(serviceCalls.length).toBe(1);
    expect(serviceCalls[0].domain).toBe("media_player");
    expect(serviceCalls[0].service).toBe("play_media");
    expect(serviceCalls[0].data).toMatchObject({
      entity_id: "media_player.living_room",
      media_content_id: "library://track/123",
    });
  });

  test("pauses media on speaker", async () => {
    serviceCalls.length = 0;
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

    await pauseMedia(client, { entityId: "media_player.living_room" });

    expect(serviceCalls.length).toBe(1);
    expect(serviceCalls[0].domain).toBe("media_player");
    expect(serviceCalls[0].service).toBe("media_pause");
  });

  test("stops media on speaker", async () => {
    serviceCalls.length = 0;
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

    await stopMedia(client, { entityId: "media_player.living_room" });

    expect(serviceCalls.length).toBe(1);
    expect(serviceCalls[0].service).toBe("media_stop");
  });

  test("skips to next track", async () => {
    serviceCalls.length = 0;
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

    await nextTrack(client, { entityId: "media_player.living_room" });

    expect(serviceCalls.length).toBe(1);
    expect(serviceCalls[0].service).toBe("media_next_track");
  });

  test("goes to previous track", async () => {
    serviceCalls.length = 0;
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

    await prevTrack(client, { entityId: "media_player.living_room" });

    expect(serviceCalls.length).toBe(1);
    expect(serviceCalls[0].service).toBe("media_previous_track");
  });

  test("sets volume level", async () => {
    serviceCalls.length = 0;
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

    await setVolume(client, { entityId: "media_player.living_room", level: 0.5 });

    expect(serviceCalls.length).toBe(1);
    expect(serviceCalls[0].service).toBe("volume_set");
    expect(serviceCalls[0].data).toMatchObject({
      volume_level: 0.5,
    });
  });

  test("adds to queue", async () => {
    serviceCalls.length = 0;
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

    await addToQueue(client, {
      entityId: "media_player.living_room",
      uri: "library://track/456",
    });

    expect(serviceCalls.length).toBe(1);
    expect(serviceCalls[0].service).toBe("play_media");
    expect(serviceCalls[0].data).toMatchObject({
      enqueue: "add",
    });
  });

  test("plays with enqueue mode", async () => {
    serviceCalls.length = 0;
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });

    await playMedia(client, {
      entityId: "media_player.living_room",
      uri: "library://track/789",
      enqueue: "replace",
    });

    expect(serviceCalls[0].data).toMatchObject({
      enqueue: "replace",
    });
  });
});
