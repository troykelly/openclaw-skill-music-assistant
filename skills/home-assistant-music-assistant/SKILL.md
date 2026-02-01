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

### Browse Music Library

Browse artists, albums, tracks, playlists, and radio stations in the Music Assistant library.

```bash
# Browse top-level categories
ha-ma browse artists
ha-ma browse albums
ha-ma browse tracks
ha-ma browse playlists
ha-ma browse radio

# Hierarchical navigation (e.g., albums by a specific artist)
ha-ma browse albums --parent artist-1
ha-ma browse tracks --parent album-1

# Pagination
ha-ma browse artists --limit 50 --offset 100
```

Output (JSON):
```json
{
  "items": [
    {
      "item_id": "artist-1",
      "name": "Daft Punk",
      "media_type": "artist",
      "uri": "library://artist/1"
    }
  ]
}
```

Fields:
- `item_id`: Unique identifier for the item
- `name`: Display name
- `media_type`: Type of media (artist, album, track, playlist, radio)
- `uri`: URI for playback
- `artist`: Artist name (for albums/tracks)
- `album`: Album name (for tracks)
- `duration`: Track duration in seconds (for tracks)

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

### Manage preferences

Set, get, and clear music preferences for users or households.

```bash
# Set user preference
ha-ma prefs set --user troy --artist "Daft Punk" --score 0.9
ha-ma prefs set --user troy --genre trance --score 0.8
ha-ma prefs set --user troy --decade "90s" --score 0.7

# Set household preference
ha-ma prefs set --household home --genre jazz --score 0.6

# Get preferences
ha-ma prefs get --user troy
ha-ma prefs get --household home

# Clear preference
ha-ma prefs clear --user troy --artist "Daft Punk"
ha-ma prefs clear --household home --genre jazz
```

Supported entity types: `--track`, `--artist`, `--album`, `--genre`, `--decade`, `--year`

Score range: `-1.0` (hate) to `1.0` (love), `0.0` = neutral

Entity IDs are normalized to lowercase kebab-case for consistency.

## Security

- Tokens are never logged or included in error messages
- Large API payloads are not dumped to logs
- All sensitive data is redacted in error output
