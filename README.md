# openclaw-skill-music-assistant

OpenClaw skill + CLI wrapper for Home Assistant Music Assistant.

- Skill folder: `skills/home-assistant-music-assistant`
- Primary contract: `skills/home-assistant-music-assistant/SKILL.md`

## Development

- Node >= 25 on host, or use the devcontainer.
- Install deps:
  - `pnpm install`
- Generate Prisma client:
  - `pnpm prisma:generate`
- Migrate (local SQLite):
  - `MA_DB_PATH=./.local/ma.sqlite pnpm prisma:migrate:dev`
- Build + test:
  - `pnpm build && pnpm test`
