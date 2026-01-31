---
name: home-assistant-music-assistant
description: Control Home Assistant Music Assistant (speakers, search/library, play) with optional local "music memory".
metadata: {"openclaw":{"requires":{"bins":["node"]},"os":["linux","darwin"]}}
---

This skill provides a small CLI wrapper around the Home Assistant REST API and the Music Assistant integration.

## Configuration

The CLI reads configuration from environment variables:

- `HA_URL` (required): Home Assistant base URL (e.g. `https://homeassistant.local:8123`).
- `HA_TOKEN_FILE` (optional): Path to a file containing a Home Assistant Long-Lived Access Token.
- `HA_TOKEN_CMD` (optional): Command to run that prints the token to stdout.
- `MA_DB_PATH` (optional): Path to the local SQLite database for music memory.

Token resolution order:
1) `HA_TOKEN_CMD`
2) `HA_TOKEN_FILE`

## Commands

- List speakers:
  - `{baseDir}/bin/ha-ma speakers`

- Play from a URI on a speaker:
  - `{baseDir}/bin/ha-ma play --speaker "<name>" --uri "library://playlist/4" --enqueue replace`

- Record a play event (local DB):
  - `{baseDir}/bin/ha-ma memory log --speaker-entity "media_player.example" --uri "library://track/123" --title "Song" --artist "Artist"`

- Show recent play events:
  - `{baseDir}/bin/ha-ma memory recent --limit 10`
