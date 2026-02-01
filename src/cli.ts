import { makePrisma } from "./db.js";
import { logPlayEvent, listRecentPlayEvents } from "./memory.js";
import { HaClient } from "./ha-client.js";
import { listSpeakers } from "./speakers.js";
import { discoverMaEntryIds } from "./ma-discovery.js";

function usage(): never {
  // Keep v1 minimal; SKILL.md is the user-facing contract.
  // eslint-disable-next-line no-console
  console.error(
    "Usage:\n" +
      "  ha-ma speakers\n" +
      "  ha-ma ma-config [--cached] [--refresh]\n" +
      "  ha-ma memory log --user <slug> --speaker-entity <entity_id> --uri <uri> [--title ...] [--artist ...] [--album ...]\n" +
      "  ha-ma memory recent --user <slug> [--limit 10]\n"
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
