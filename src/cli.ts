import { makePrisma } from "./db.js";
import { logPlayEvent, listRecentPlayEvents } from "./memory.js";
import { HaClient } from "./ha-client.js";
import { listSpeakers } from "./speakers.js";
import { discoverMaEntryIds } from "./ma-discovery.js";
import {
  setUserPreference,
  setHouseholdPreference,
  getUserPreferences,
  getHouseholdPreferences,
  clearUserPreference,
  clearHouseholdPreference,
  type PreferenceEntityType,
} from "./preferences.js";
import { browseLibrary, type BrowseMediaType } from "./browse.js";

function usage(): never {
  // Keep v1 minimal; SKILL.md is the user-facing contract.
  // eslint-disable-next-line no-console
  console.error(
    "Usage:\n" +
      "  ha-ma speakers\n" +
      "  ha-ma ma-config [--cached] [--refresh]\n" +
      "  ha-ma browse <type> [--parent <id>] [--limit <n>] [--offset <n>]\n" +
      "  ha-ma memory log --user <slug> --speaker-entity <entity_id> --uri <uri> [--title ...] [--artist ...] [--album ...]\n" +
      "  ha-ma memory recent --user <slug> [--limit 10]\n" +
      "  ha-ma prefs set --user <slug> --<entity-type> <value> --score <score>\n" +
      "  ha-ma prefs set --household <slug> --<entity-type> <value> --score <score>\n" +
      "  ha-ma prefs get --user <slug>\n" +
      "  ha-ma prefs get --household <slug>\n" +
      "  ha-ma prefs clear --user <slug> --<entity-type> <value>\n" +
      "  ha-ma prefs clear --household <slug> --<entity-type> <value>\n" +
      "\n" +
      "Browse types: artists, albums, tracks, playlists, radio\n"
  );
  process.exit(2);
}

function getFlag(argv: string[], name: string): string | undefined {
  const idx = argv.indexOf(name);
  if (idx === -1) return undefined;
  return argv[idx + 1];
}

function getFlagInt(argv: string[], name: string, def: number): number {
  const v = getFlag(argv, name);
  if (!v) return def;
  const n = Number.parseInt(v, 10);
  if (!Number.isFinite(n)) throw new Error(`${name} must be an integer`);
  return n;
}

function hasFlag(argv: string[], name: string): boolean {
  return argv.includes(name);
}

function getFlagFloat(argv: string[], name: string): number | undefined {
  const v = getFlag(argv, name);
  if (!v) return undefined;
  const n = Number.parseFloat(v);
  if (!Number.isFinite(n)) throw new Error(`${name} must be a number`);
  return n;
}

async function main() {
  const argv = process.argv.slice(2);
  const [cmd, sub] = argv;

  if (!cmd) usage();

  // Commands that don't require prisma
  if (cmd === "speakers") {
    const client = HaClient.fromEnv();
    const speakers = await listSpeakers(client);
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(speakers));
    return;
  }

  if (cmd === "browse") {
    const mediaType = sub as BrowseMediaType | undefined;
    const validTypes: BrowseMediaType[] = ["artists", "albums", "tracks", "playlists", "radio"];
    if (!mediaType || !validTypes.includes(mediaType)) {
      usage();
    }

    const parentId = getFlag(argv, "--parent");
    const limit = getFlagInt(argv, "--limit", 0) || undefined;
    const offset = getFlagInt(argv, "--offset", 0) || undefined;

    const client = HaClient.fromEnv();
    const result = await browseLibrary(client, {
      mediaType,
      parentId,
      limit,
      offset,
    });
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(result));
    return;
  }

  // Commands that require prisma
  const prisma = makePrisma();
  try {
    if (cmd === "ma-config") {
      const useCached = hasFlag(argv, "--cached");
      const refresh = hasFlag(argv, "--refresh");

      // --refresh forces a fresh fetch even if cached
      const client = HaClient.fromEnv();
      const result = await discoverMaEntryIds(prisma, client, useCached && !refresh);
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(result));
      return;
    }

    if (cmd === "memory") {
      if (!sub) usage();

      if (sub === "log") {
        const user = getFlag(argv, "--user") ?? "default";
        const speakerEntityId = getFlag(argv, "--speaker-entity");
        const uri = getFlag(argv, "--uri");
        if (!speakerEntityId || !uri) usage();

        const title = getFlag(argv, "--title");
        const artist = getFlag(argv, "--artist");
        const album = getFlag(argv, "--album");

        const ev = await logPlayEvent(prisma, { userSlug: user, speakerEntityId, uri, title, artist, album });
        // eslint-disable-next-line no-console
        console.log(JSON.stringify({ id: ev.id, createdAt: ev.createdAt.toISOString() }));
        return;
      }

      if (sub === "recent") {
        const user = getFlag(argv, "--user") ?? "default";
        const limit = getFlagInt(argv, "--limit", 10);

        const events = await listRecentPlayEvents(prisma, user, limit);
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(events.map((e) => ({
          id: e.id,
          createdAt: e.createdAt.toISOString(),
          speakerEntityId: e.speakerEntityId,
          uri: e.uri,
          title: e.title,
          artist: e.artist,
          album: e.album,
        }))));
        return;
      }
    }

    if (cmd === "prefs") {
      if (!sub) usage();

      if (sub === "set") {
        const userSlug = getFlag(argv, "--user");
        const householdSlug = getFlag(argv, "--household");
        const score = getFlagFloat(argv, "--score");

        if (!score || (!userSlug && !householdSlug)) usage();
        if (score < -1.0 || score > 1.0) {
          throw new Error("Score must be between -1.0 and 1.0");
        }

        // Determine entity type and ID
        const entityTypes: PreferenceEntityType[] = ["track", "artist", "album", "genre", "decade", "year"];
        let entityType: PreferenceEntityType | undefined;
        let entityId: string | undefined;

        for (const type of entityTypes) {
          const value = getFlag(argv, `--${type}`);
          if (value) {
            entityType = type;
            entityId = value;
            break;
          }
        }

        if (!entityType || !entityId) usage();

        let result;
        if (userSlug) {
          result = await setUserPreference(prisma, userSlug, entityType, entityId, score);
        } else {
          result = await setHouseholdPreference(prisma, householdSlug!, entityType, entityId, score);
        }

        // eslint-disable-next-line no-console
        console.log(JSON.stringify({
          id: result.id,
          entityType: result.entityType,
          entityId: result.entityId,
          score: result.score,
        }));
        return;
      }

      if (sub === "get") {
        const userSlug = getFlag(argv, "--user");
        const householdSlug = getFlag(argv, "--household");

        if (!userSlug && !householdSlug) usage();

        let prefs;
        if (userSlug) {
          prefs = await getUserPreferences(prisma, userSlug);
        } else {
          prefs = await getHouseholdPreferences(prisma, householdSlug!);
        }

        // eslint-disable-next-line no-console
        console.log(JSON.stringify(prefs.map((p) => ({
          id: p.id,
          entityType: p.entityType,
          entityId: p.entityId,
          score: p.score,
          updatedAt: p.updatedAt.toISOString(),
        }))));
        return;
      }

      if (sub === "clear") {
        const userSlug = getFlag(argv, "--user");
        const householdSlug = getFlag(argv, "--household");

        if (!userSlug && !householdSlug) usage();

        // Determine entity type and ID
        const entityTypes: PreferenceEntityType[] = ["track", "artist", "album", "genre", "decade", "year"];
        let entityType: PreferenceEntityType | undefined;
        let entityId: string | undefined;

        for (const type of entityTypes) {
          const value = getFlag(argv, `--${type}`);
          if (value) {
            entityType = type;
            entityId = value;
            break;
          }
        }

        if (!entityType || !entityId) usage();

        let count;
        if (userSlug) {
          count = await clearUserPreference(prisma, userSlug, entityType, entityId);
        } else {
          count = await clearHouseholdPreference(prisma, householdSlug!, entityType, entityId);
        }

        // eslint-disable-next-line no-console
        console.log(JSON.stringify({ deleted: count }));
        return;
      }
    }

    usage();
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
