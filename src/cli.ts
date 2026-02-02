#!/usr/bin/env node
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
import { searchMusic } from "./search.js";
import { setMood, getMood, listMoods, deleteMood, type MoodCriteria } from "./mood.js";
import {
  getRecentHistory,
  listSessions,
  addAvoidTrack,
  removeAvoidTrack,
  getAvoidList,
} from "./history.js";
import {
  playMedia,
  pauseMedia,
  stopMedia,
  nextTrack,
  prevTrack,
  setVolume,
  addToQueue,
} from "./playback.js";

function usage(): never {
  // Keep v1 minimal; SKILL.md is the user-facing contract.
  // eslint-disable-next-line no-console
  console.error(
    "Usage:\n" +
      "  ha-ma speakers\n" +
      "  ha-ma ma-config [--cached] [--refresh]\n" +
      "  ha-ma browse <type> [--parent <id>] [--limit <n>] [--offset <n>]\n" +
      "  ha-ma search <query> [--limit <n>] [--type <media_type>]\n" +
      "  ha-ma memory log --user <slug> --speaker-entity <entity_id> --uri <uri> [--title ...] [--artist ...] [--album ...]\n" +
      "  ha-ma memory recent --user <slug> [--limit 10]\n" +
      "  ha-ma prefs set --user <slug> --<entity-type> <value> --score <score>\n" +
      "  ha-ma prefs set --household <slug> --<entity-type> <value> --score <score>\n" +
      "  ha-ma prefs get --user <slug>\n" +
      "  ha-ma prefs get --household <slug>\n" +
      "  ha-ma prefs clear --user <slug> --<entity-type> <value>\n" +
      "  ha-ma prefs clear --household <slug> --<entity-type> <value>\n" +
      "  ha-ma mood set --user <slug> --name <name> --genres <g1,g2> [--decades <d1,d2>] [--energy <low|medium|high>]\n" +
      "  ha-ma mood set --household <slug> --name <name> --genres <g1,g2> [--energy <level>]\n" +
      "  ha-ma mood list --user <slug>\n" +
      "  ha-ma mood list --household <slug>\n" +
      "  ha-ma mood get --user <slug> --name <name>\n" +
      "  ha-ma mood delete --user <slug> --name <name>\n" +
      "  ha-ma history recent --user <slug> [--limit 20]\n" +
      "  ha-ma history sessions --user <slug> [--limit 10]\n" +
      "  ha-ma history avoid --user <slug> --uri <uri> [--reason <text>]\n" +
      "  ha-ma history unavoid --user <slug> --uri <uri>\n" +
      "  ha-ma history avoidlist --user <slug>\n" +
      "  ha-ma play --speaker <entity_id> --uri <uri> [--enqueue <mode>]\n" +
      "  ha-ma pause --speaker <entity_id>\n" +
      "  ha-ma stop --speaker <entity_id>\n" +
      "  ha-ma next --speaker <entity_id>\n" +
      "  ha-ma prev --speaker <entity_id>\n" +
      "  ha-ma volume --speaker <entity_id> --level <0-100>\n" +
      "  ha-ma queue --speaker <entity_id> --uri <uri>\n" +
      "\n" +
      "Browse types: artists, albums, tracks, playlists, radio, genres\n" +
      "Enqueue modes: play, replace, next, add\n"
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
    const validTypes: BrowseMediaType[] = ["artists", "albums", "tracks", "playlists", "radio", "genres"];
    if (!mediaType || !validTypes.includes(mediaType)) {
      usage();
    }

    const parentId = getFlag(argv, "--parent");
    const limit = getFlagInt(argv, "--limit", 0) || undefined;
    const offset = getFlagInt(argv, "--offset", 0) || undefined;

    const client = HaClient.fromEnv();
    const prisma = makePrisma();
    try {
      const result = await browseLibrary(client, prisma, {
        mediaType,
        parentId,
        limit,
        offset,
      });
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(result));
    } finally {
      await prisma.$disconnect();
    }
    return;
  }

  if (cmd === "play") {
    const speaker = getFlag(argv, "--speaker");
    const uri = getFlag(argv, "--uri");
    const enqueue = getFlag(argv, "--enqueue") as "play" | "replace" | "next" | "add" | undefined;

    if (!speaker || !uri) usage();

    const client = HaClient.fromEnv();
    await playMedia(client, { entityId: speaker, uri, enqueue });

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ success: true, action: "play", speaker, uri }));
    return;
  }

  if (cmd === "pause") {
    const speaker = getFlag(argv, "--speaker");
    if (!speaker) usage();

    const client = HaClient.fromEnv();
    await pauseMedia(client, { entityId: speaker });

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ success: true, action: "pause", speaker }));
    return;
  }

  if (cmd === "stop") {
    const speaker = getFlag(argv, "--speaker");
    if (!speaker) usage();

    const client = HaClient.fromEnv();
    await stopMedia(client, { entityId: speaker });

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ success: true, action: "stop", speaker }));
    return;
  }

  if (cmd === "next") {
    const speaker = getFlag(argv, "--speaker");
    if (!speaker) usage();

    const client = HaClient.fromEnv();
    await nextTrack(client, { entityId: speaker });

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ success: true, action: "next", speaker }));
    return;
  }

  if (cmd === "prev") {
    const speaker = getFlag(argv, "--speaker");
    if (!speaker) usage();

    const client = HaClient.fromEnv();
    await prevTrack(client, { entityId: speaker });

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ success: true, action: "prev", speaker }));
    return;
  }

  if (cmd === "volume") {
    const speaker = getFlag(argv, "--speaker");
    const levelStr = getFlag(argv, "--level");
    if (!speaker || !levelStr) usage();

    const level = parseInt(levelStr, 10);
    if (level < 0 || level > 100) {
      throw new Error("Volume level must be between 0 and 100");
    }

    const client = HaClient.fromEnv();
    await setVolume(client, { entityId: speaker, level: level / 100 });

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ success: true, action: "volume", speaker, level }));
    return;
  }

  if (cmd === "queue") {
    const speaker = getFlag(argv, "--speaker");
    const uri = getFlag(argv, "--uri");
    if (!speaker || !uri) usage();

    const client = HaClient.fromEnv();
    await addToQueue(client, { entityId: speaker, uri });

    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ success: true, action: "queue", speaker, uri }));
    return;
  }

  if (cmd === "search") {
    const query = sub;
    if (!query) {
      usage();
    }

    const limit = getFlagInt(argv, "--limit", 0) || undefined;
    const mediaType = getFlag(argv, "--type");

    const client = HaClient.fromEnv();
    const prisma = makePrisma();
    try {
      const result = await searchMusic(client, prisma, {
        query,
        limit,
        mediaType,
      });
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(result));
    } finally {
      await prisma.$disconnect();
    }
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

    if (cmd === "history") {
      if (!sub) usage();

      if (sub === "recent") {
        const userSlug = getFlag(argv, "--user");
        const limit = getFlagInt(argv, "--limit", 20);

        if (!userSlug) usage();

        const history = await getRecentHistory(prisma, { userSlug, limit });

        // eslint-disable-next-line no-console
        console.log(JSON.stringify(history.map((h) => ({
          id: h.id,
          uri: h.uri,
          title: h.title,
          artist: h.artist,
          album: h.album,
          skipped: h.skipped,
          createdAt: h.createdAt.toISOString(),
        }))));
        return;
      }

      if (sub === "sessions") {
        const userSlug = getFlag(argv, "--user");
        const limit = getFlagInt(argv, "--limit", 10);

        if (!userSlug) usage();

        const sessions = await listSessions(prisma, { userSlug, limit });

        // eslint-disable-next-line no-console
        console.log(JSON.stringify(sessions.map((s) => ({
          id: s.id,
          speakerEntityId: s.speakerEntityId,
          moodName: s.moodName,
          startedAt: s.startedAt.toISOString(),
          endedAt: s.endedAt?.toISOString() ?? null,
          trackCount: s.events.length,
        }))));
        return;
      }

      if (sub === "avoid") {
        const userSlug = getFlag(argv, "--user");
        const uri = getFlag(argv, "--uri");
        const reason = getFlag(argv, "--reason");

        if (!userSlug || !uri) usage();

        const avoided = await addAvoidTrack(prisma, { userSlug, uri, reason });

        // eslint-disable-next-line no-console
        console.log(JSON.stringify({
          id: avoided.id,
          uri: avoided.uri,
          reason: avoided.reason,
        }));
        return;
      }

      if (sub === "unavoid") {
        const userSlug = getFlag(argv, "--user");
        const uri = getFlag(argv, "--uri");

        if (!userSlug || !uri) usage();

        const removed = await removeAvoidTrack(prisma, { userSlug, uri });

        // eslint-disable-next-line no-console
        console.log(JSON.stringify({ removed }));
        return;
      }

      if (sub === "avoidlist") {
        const userSlug = getFlag(argv, "--user");

        if (!userSlug) usage();

        const list = await getAvoidList(prisma, { userSlug });

        // eslint-disable-next-line no-console
        console.log(JSON.stringify(list.map((a) => ({
          id: a.id,
          uri: a.uri,
          reason: a.reason,
          createdAt: a.createdAt.toISOString(),
        }))));
        return;
      }
    }

    if (cmd === "mood") {
      if (!sub) usage();

      if (sub === "set") {
        const userSlug = getFlag(argv, "--user");
        const householdSlug = getFlag(argv, "--household");
        const name = getFlag(argv, "--name");

        if ((!userSlug && !householdSlug) || !name) usage();

        // Build criteria from flags
        const criteria: MoodCriteria = {};
        const genres = getFlag(argv, "--genres");
        const decades = getFlag(argv, "--decades");
        const artists = getFlag(argv, "--artists");
        const energy = getFlag(argv, "--energy");

        if (genres) criteria.genres = genres.split(",").map((g) => g.trim());
        if (decades) criteria.decades = decades.split(",").map((d) => d.trim());
        if (artists) criteria.artists = artists.split(",").map((a) => a.trim());
        if (energy && (energy === "low" || energy === "medium" || energy === "high")) {
          criteria.energy = energy;
        }

        const mood = await setMood(prisma, { userSlug, householdSlug, name, criteria });

        // eslint-disable-next-line no-console
        console.log(JSON.stringify({
          id: mood.id,
          name: mood.name,
          criteria: JSON.parse(mood.criteria),
        }));
        return;
      }

      if (sub === "list") {
        const userSlug = getFlag(argv, "--user");
        const householdSlug = getFlag(argv, "--household");

        if (!userSlug && !householdSlug) usage();

        const moods = await listMoods(prisma, { userSlug, householdSlug });

        // eslint-disable-next-line no-console
        console.log(JSON.stringify(moods.map((m) => ({
          id: m.id,
          name: m.name,
          criteria: JSON.parse(m.criteria),
        }))));
        return;
      }

      if (sub === "get") {
        const userSlug = getFlag(argv, "--user");
        const householdSlug = getFlag(argv, "--household");
        const name = getFlag(argv, "--name");

        if ((!userSlug && !householdSlug) || !name) usage();

        const mood = await getMood(prisma, { userSlug, householdSlug, name });

        if (!mood) {
          // eslint-disable-next-line no-console
          console.log(JSON.stringify({ found: false }));
        } else {
          // eslint-disable-next-line no-console
          console.log(JSON.stringify({
            id: mood.id,
            name: mood.name,
            criteria: JSON.parse(mood.criteria),
          }));
        }
        return;
      }

      if (sub === "delete") {
        const userSlug = getFlag(argv, "--user");
        const householdSlug = getFlag(argv, "--household");
        const name = getFlag(argv, "--name");

        if ((!userSlug && !householdSlug) || !name) usage();

        const deleted = await deleteMood(prisma, { userSlug, householdSlug, name });

        // eslint-disable-next-line no-console
        console.log(JSON.stringify({ deleted }));
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
