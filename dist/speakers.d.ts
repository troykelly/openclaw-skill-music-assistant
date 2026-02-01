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
export interface Speaker {
    entity_id: string;
    friendly_name: string;
    state: string;
    volume?: number;
    area_name?: string;
}
/**
 * List all media_player entities with enriched information.
 *
 * Note: Area and entity registry endpoints may not be available via REST API
 * on all HA installations. In that case, we fall back to just the media_player
 * states without area information.
 */
export declare function listSpeakers(client: HaClient): Promise<Speaker[]>;
//# sourceMappingURL=speakers.d.ts.map