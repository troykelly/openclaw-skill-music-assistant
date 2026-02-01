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

### List speakers

List all media_player entities from Home Assistant with enriched information.

```bash
ha-ma speakers
```

Output (JSON):
```json
[
  {
    "entity_id": "media_player.living_room",
    "friendly_name": "Living Room Speaker",
    "state": "playing",
    "volume": 0.5,
    "area_name": "Living Room"
  }
]
```

Fields:
- `entity_id`: The HA entity ID
- `friendly_name`: Human-readable name
- `state`: Current state (playing, idle, off, etc.)
- `volume`: Volume level (0-1), if available
- `area_name`: Area name from HA area registry, if entity is assigned to an area

### Discover Music Assistant Config

Discover and cache Music Assistant config entry IDs from Home Assistant.

```bash
# Fetch from HA API and cache
ha-ma ma-config

# Use cached entry IDs if available
ha-ma ma-config --cached

# Force refresh even if cached
ha-ma ma-config --refresh
```

Output (JSON):
```json
{
  "entry_ids": ["abc123def456"],
  "cached": false
}
```

### Play from URI (not yet implemented)

```bash
ha-ma play --speaker "<name>" --uri "library://playlist/4" --enqueue replace
```

### Record a play event (local DB)

```bash
ha-ma memory log --user <slug> --speaker-entity "media_player.example" --uri "library://track/123" --title "Song" --artist "Artist" --album "Album"
```

### Show recent play events

```bash
ha-ma memory recent --user <slug> --limit 10
```

## Security

- Tokens are never logged or included in error messages
- Large API payloads are not dumped to logs
- All sensitive data is redacted in error output
