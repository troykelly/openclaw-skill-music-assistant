import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { createServer, IncomingMessage, ServerResponse, Server } from "node:http";
import { AddressInfo } from "node:net";
import { HaClient } from "../src/ha-client.js";
import { browseLibrary } from "../src/browse.js";

/**
 * Integration tests for Music Assistant library browsing.
 * Uses a stubbed HTTP server to simulate HA REST API.
 */

// Mock browse response data from Music Assistant
const mockArtists = [
  { item_id: "artist-1", name: "Daft Punk", media_type: "artist", uri: "library://artist/1" },
  { item_id: "artist-2", name: "The Chemical Brothers", media_type: "artist", uri: "library://artist/2" },
  { item_id: "artist-3", name: "Fatboy Slim", media_type: "artist", uri: "library://artist/3" },
];

const mockAlbums = [
  { item_id: "album-1", name: "Discovery", media_type: "album", uri: "library://album/1", artist: "Daft Punk" },
  { item_id: "album-2", name: "Random Access Memories", media_type: "album", uri: "library://album/2", artist: "Daft Punk" },
];

const mockTracks = [
  { item_id: "track-1", name: "One More Time", media_type: "track", uri: "library://track/1", artist: "Daft Punk", album: "Discovery", duration: 320 },
  { item_id: "track-2", name: "Aerodynamic", media_type: "track", uri: "library://track/2", artist: "Daft Punk", album: "Discovery", duration: 212 },
];

const mockPlaylists = [
  { item_id: "playlist-1", name: "Party Mix", media_type: "playlist", uri: "library://playlist/1" },
  { item_id: "playlist-2", name: "Chill Vibes", media_type: "playlist", uri: "library://playlist/2" },
];

const mockRadioStations = [
  { item_id: "radio-1", name: "Triple J", media_type: "radio", uri: "radio://station/1" },
  { item_id: "radio-2", name: "BBC Radio 1", media_type: "radio", uri: "radio://station/2" },
];

/**
 * Create a mock server that handles browse requests.
 */
function createMockServer(): Server {
  return createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "POST" && req.url?.includes("/api/services/music_assistant/")) {
      const chunks: Buffer[] = [];
      req.on("data", (chunk: Buffer) => chunks.push(chunk));
      req.on("end", () => {
        try {
          const body = Buffer.concat(chunks).toString();
          const data = JSON.parse(body);
          const mediaType = data.media_type ?? "artists";
          const parentId = data.parent_id;

          let items: unknown[];
          if (parentId) {
            // Hierarchical browse - return children
            if (parentId.startsWith("artist-")) {
              items = mockAlbums;
            } else if (parentId.startsWith("album-")) {
              items = mockTracks;
            } else {
              items = [];
            }
          } else {
            // Top-level category browse
            switch (mediaType) {
              case "artists":
                items = mockArtists;
                break;
              case "albums":
                items = mockAlbums;
                break;
              case "tracks":
                items = mockTracks;
                break;
              case "playlists":
                items = mockPlaylists;
                break;
              case "radio":
                items = mockRadioStations;
                break;
              default:
                items = [];
            }
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ items }));
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

describe("browse library", () => {
  let server: Server;
  let haUrl: string;

  beforeAll(async () => {
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

  test("browses artists in library", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, { mediaType: "artists" });

    expect(result.items).toHaveLength(3);
    expect(result.items[0]).toMatchObject({
      item_id: "artist-1",
      name: "Daft Punk",
      media_type: "artist",
    });
  });

  test("browses albums in library", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, { mediaType: "albums" });

    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      name: "Discovery",
      media_type: "album",
    });
  });

  test("browses playlists in library", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, { mediaType: "playlists" });

    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      name: "Party Mix",
      media_type: "playlist",
    });
  });

  test("browses radio stations", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, { mediaType: "radio" });

    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      name: "Triple J",
      media_type: "radio",
    });
  });

  test("hierarchical browse: artist to albums", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, {
      mediaType: "albums",
      parentId: "artist-1",
    });

    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      name: "Discovery",
      artist: "Daft Punk",
    });
  });

  test("hierarchical browse: album to tracks", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, {
      mediaType: "tracks",
      parentId: "album-1",
    });

    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      name: "One More Time",
      album: "Discovery",
    });
  });
});
