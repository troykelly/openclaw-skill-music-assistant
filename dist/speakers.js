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
/**
 * Extract speaker information from an HA state object.
 */
function stateToSpeaker(state, entityToArea, areaIdToName) {
    const attrs = state.attributes;
    // Get friendly_name, fallback to entity_id
    const friendlyName = typeof attrs.friendly_name === "string"
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
 */
export async function listSpeakers(client) {
    // Fetch in parallel for efficiency
    const [states, areas, entityRegistry] = await Promise.all([
        client.getMediaPlayerStates(),
        client.getAreas(),
        client.getEntityRegistry(),
    ]);
    // Build lookup maps
    const areaIdToName = new Map();
    for (const area of areas) {
        areaIdToName.set(area.area_id, area.name);
    }
    const entityToArea = new Map();
    for (const entity of entityRegistry) {
        if (entity.area_id) {
            entityToArea.set(entity.entity_id, entity.area_id);
        }
    }
    // Convert states to speakers
    return states.map((s) => stateToSpeaker(s, entityToArea, areaIdToName));
}
//# sourceMappingURL=speakers.js.map