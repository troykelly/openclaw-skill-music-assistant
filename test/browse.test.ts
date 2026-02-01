import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { createServer, IncomingMessage, ServerResponse, Server } from "node:http";
import { AddressInfo } from "node:net";
import { HaClient } from "../src/ha-client.ts";
import { browseLibrary } from "../src/browse.ts";

/**
 * Integration tests for Music Assistant library browsing.
 * Uses a stubbed HTTP server to simulate HA REST API.
 */

// Mock browse response data from Music Assistant (MA API format)
// MA API returns: { media_type, uri, name, image?, artists?, album? }
const mockArtists = [
  { media_type: "artist", uri: "library://artist/1", name: "Daft Punk", image: null },
  { media_type: "artist", uri: "library://artist/2", name: "The Chemical Brothers", image: null },
  { media_type: "artist", uri: "library://artist/3", name: "Fatboy Slim", image: null },
];

const mockAlbums = [
  { media_type: "album", uri: "library://album/1", name: "Discovery", image: null, artists: [{ name: "Daft Punk" }] },
  { media_type: "album", uri: "library://album/2", name: "Random Access Memories", image: null, artists: [{ name: "Daft Punk" }] },
];

const mockTracks = [
  { media_type: "track", uri: "library://track/1", name: "One More Time", image: null, artists: [{ name: "Daft Punk" }], album: { name: "Discovery" } },
  { media_type: "track", uri: "library://track/2", name: "Aerodynamic", image: null, artists: [{ name: "Daft Punk" }], album: { name: "Discovery" } },
];

const mockPlaylists = [
  { media_type: "playlist", uri: "library://playlist/1", name: "Party Mix", image: null },
  { media_type: "playlist", uri: "library://playlist/2", name: "Chill Vibes", image: null },
];

const mockRadioStations = [
  { media_type: "radio", uri: "radio://station/1", name: "Triple J", image: null },
  { media_type: "radio", uri: "radio://station/2", name: "BBC Radio 1", image: null },
];

const mockGenres = [
  { media_type: "genre", uri: "library://genre/1", name: "Electronic", image: null },
  { media_type: "genre", uri: "library://genre/2", name: "Rock", image: null },
  { media_type: "genre", uri: "library://genre/3", name: "Jazz", image: null },
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
            // Note: browse.ts sends singular media_type (artist, album, track, playlist, radio, genre)
            switch (mediaType) {
              case "artist":
                items = mockArtists;
                break;
              case "album":
                items = mockAlbums;
                break;
              case "track":
                items = mockTracks;
                break;
              case "playlist":
                items = mockPlaylists;
                break;
              case "radio":
                items = mockRadioStations;
                break;
              case "genre":
                items = mockGenres;
                break;
              default:
                items = [];
            }
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          // HA returns service_response wrapper for return_response calls
          res.end(JSON.stringify({ service_response: { items } }));
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
    const result = await browseLibrary(client, { mediaType: "artists", configEntryId: "test-entry-id" });

    expect(result.items).toHaveLength(3);
    expect(result.items[0]).toMatchObject({
      item_id: "library://artist/1",
      name: "Daft Punk",
      media_type: "artist",
      uri: "library://artist/1",
    });
  });

  test("browses albums in library", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, { mediaType: "albums", configEntryId: "test-entry-id" });

    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      name: "Discovery",
      media_type: "album",
      artist: "Daft Punk",
    });
  });

  test("browses playlists in library", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, { mediaType: "playlists", configEntryId: "test-entry-id" });

    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      name: "Party Mix",
      media_type: "playlist",
    });
  });

  test("browses radio stations", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, { mediaType: "radio", configEntryId: "test-entry-id" });

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
      configEntryId: "test-entry-id",
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
      configEntryId: "test-entry-id",
    });

    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toMatchObject({
      name: "One More Time",
      album: "Discovery",
    });
  });

  test("browses genres in library", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await browseLibrary(client, { mediaType: "genres", configEntryId: "test-entry-id" });

    expect(result.items).toHaveLength(3);
    expect(result.items[0]).toMatchObject({
      item_id: "library://genre/1",
      name: "Electronic",
      media_type: "genre",
      uri: "library://genre/1",
    });
    expect(result.items[1]).toMatchObject({
      name: "Rock",
      media_type: "genre",
    });
    expect(result.items[2]).toMatchObject({
      name: "Jazz",
      media_type: "genre",
    });
  });
});
