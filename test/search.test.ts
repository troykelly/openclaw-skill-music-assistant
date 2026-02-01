import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { createServer, IncomingMessage, ServerResponse, Server } from "node:http";
import { AddressInfo } from "node:net";
import { HaClient } from "../src/ha-client.js";
import { searchMusic, type SearchResult, parseSearchQuery } from "../src/search.js";

/**
 * Integration tests for Music Assistant search.
 * Uses a stubbed HTTP server to simulate HA REST API.
 */

// Mock search response data
const mockSearchResults = [
  {
    item_id: "track-1",
    name: "Around The World",
    media_type: "track",
    uri: "library://track/1",
    artist: "Daft Punk",
    album: "Homework",
    score: 0.95,
  },
  {
    item_id: "track-2",
    name: "One More Time",
    media_type: "track",
    uri: "library://track/2",
    artist: "Daft Punk",
    album: "Discovery",
    score: 0.90,
  },
  {
    item_id: "artist-1",
    name: "Daft Punk",
    media_type: "artist",
    uri: "library://artist/1",
    score: 0.85,
  },
];

const mockGenreResults = [
  {
    item_id: "track-3",
    name: "Sandstorm",
    media_type: "track",
    uri: "library://track/3",
    artist: "Darude",
    album: "Before The Storm",
    genre: "trance",
    year: 1999,
    score: 0.95,
  },
  {
    item_id: "track-4",
    name: "Children",
    media_type: "track",
    uri: "library://track/4",
    artist: "Robert Miles",
    album: "Dreamland",
    genre: "trance",
    year: 1996,
    score: 0.90,
  },
];

/**
 * Create a mock server that handles search requests.
 */
function createMockServer(): Server {
  return createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "POST" && req.url?.includes("/api/services/music_assistant/search")) {
      const chunks: Buffer[] = [];
      req.on("data", (chunk: Buffer) => chunks.push(chunk));
      req.on("end", () => {
        try {
          const body = Buffer.concat(chunks).toString();
          const data = JSON.parse(body);
          const query = (data.query ?? "").toLowerCase();

          let results: unknown[];
          if (query.includes("trance") || query.includes("90s")) {
            results = mockGenreResults;
          } else if (query.includes("daft") || query.includes("punk")) {
            results = mockSearchResults;
          } else {
            results = [];
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ results }));
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

describe("search music", () => {
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

  test("searches by artist name", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await searchMusic(client, { query: "daft punk" });

    expect(result.results.length).toBeGreaterThan(0);
    expect(result.results[0]).toMatchObject({
      name: "Around The World",
      artist: "Daft Punk",
    });
  });

  test("searches by genre and decade", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await searchMusic(client, { query: "90s trance" });

    expect(result.results.length).toBeGreaterThan(0);
    expect(result.results[0]).toMatchObject({
      genre: "trance",
    });
  });

  test("returns results with scores for ranking", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await searchMusic(client, { query: "daft punk" });

    expect(result.results.length).toBeGreaterThan(0);
    // Results should have scores
    for (const item of result.results) {
      expect(item.score).toBeDefined();
      expect(item.score).toBeGreaterThanOrEqual(0);
      expect(item.score).toBeLessThanOrEqual(1);
    }
  });

  test("returns empty results for no matches", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await searchMusic(client, { query: "nonexistent artist xyz" });

    expect(result.results).toHaveLength(0);
  });

  test("results include URIs for playback", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await searchMusic(client, { query: "daft punk" });

    expect(result.results.length).toBeGreaterThan(0);
    for (const item of result.results) {
      expect(item.uri).toBeDefined();
      expect(item.uri).toMatch(/^library:\/\//);
    }
  });

  test("supports limit parameter", async () => {
    const client = new HaClient({ baseUrl: haUrl, token: "test-token" });
    const result = await searchMusic(client, { query: "daft punk", limit: 1 });

    // Even though mock returns 3, limit should be respected
    expect(result.results.length).toBeLessThanOrEqual(1);
  });
});

describe("search query parsing", () => {
  test("parses simple text query", () => {
    const parsed = parseSearchQuery("daft punk");
    expect(parsed.text).toBe("daft punk");
    expect(parsed.filters).toEqual({});
  });

  test("parses artist filter", () => {
    const parsed = parseSearchQuery('artist:"daft punk"');
    expect(parsed.filters.artist).toBe("daft punk");
  });

  test("parses genre filter", () => {
    const parsed = parseSearchQuery("genre:trance");
    expect(parsed.filters.genre).toBe("trance");
  });

  test("parses decade filter", () => {
    const parsed = parseSearchQuery("decade:90s");
    expect(parsed.filters.decade).toBe("90s");
  });

  test("parses year filter", () => {
    const parsed = parseSearchQuery("year:1999");
    expect(parsed.filters.year).toBe("1999");
  });

  test("parses multiple filters", () => {
    const parsed = parseSearchQuery("decade:90s genre:trance");
    expect(parsed.filters.decade).toBe("90s");
    expect(parsed.filters.genre).toBe("trance");
  });

  test("parses mixed text and filters", () => {
    const parsed = parseSearchQuery("happy upbeat genre:pop");
    expect(parsed.text).toBe("happy upbeat");
    expect(parsed.filters.genre).toBe("pop");
  });
});
