/**
 * Speaker discovery for Home Assistant media_player entities.
 *
 * Provides a unified view of media_player entities with:
 * - entity_id
 * - friendly_name
 * - state
 * - volume (if available)
 * - area_name (if entity is associated with an area)
 */

import { HaClient } from "./ha-client.js";
import type { HaState } from "./ha-client.js";

export interface Speaker {
  entity_id: string;
  friendly_name: string;
  state: string;
  volume?: number;
  area_name?: string;
}

/**
 * Extract speaker information from an HA state object.
 */
function stateToSpeaker(
  state: HaState,
  entityToArea: Map<string, string>,
  areaIdToName: Map<string, string>
): Speaker {
  const attrs = state.attributes as Record<string, unknown>;

  // Get friendly_name, fallback to entity_id
  const friendlyName =
    typeof attrs.friendly_name === "string"
      ? attrs.friendly_name
      : state.entity_id;

  // Get volume_level (0-1 float)
  const volumeLevel = typeof attrs.volume_level === "number" ? attrs.volume_level : undefined;

  // Get area name if available
  const areaId = entityToArea.get(state.entity_id);
  const areaName = areaId ? areaIdToName.get(areaId) : undefined;

  return {
    entity_id: state.entity_id,
    friendly_name: friendlyName,
    state: state.state,
    volume: volumeLevel,
    area_name: areaName,
  };
}

/**
 * List all media_player entities with enriched information.
 *
 * Note: Area and entity registry endpoints may not be available via REST API
 * on all HA installations. In that case, we fall back to just the media_player
 * states without area information.
 */
export async function listSpeakers(client: HaClient): Promise<Speaker[]> {
  // Get media player states (this always works via REST)
  const states = await client.getMediaPlayerStates();

  // Try to get areas and entity registry (may fail with 404 on some setups)
  let areaIdToName = new Map<string, string>();
  let entityToArea = new Map<string, string>();

  try {
    const [areas, entityRegistry] = await Promise.all([
      client.getAreas(),
      client.getEntityRegistry(),
    ]);

    // Build lookup maps
    for (const area of areas) {
      areaIdToName.set(area.area_id, area.name);
    }

    for (const entity of entityRegistry) {
      if (entity.area_id) {
        entityToArea.set(entity.entity_id, entity.area_id);
      }
    }
  } catch {
    // Area/entity registry not available via REST API, continue without it
  }

  // Convert states to speakers
  return states.map((s) => stateToSpeaker(s, entityToArea, areaIdToName));
}
