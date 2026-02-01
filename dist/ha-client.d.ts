/**
 * Home Assistant REST API client.
 *
 * Token resolution order:
 * 1. HA_TOKEN_CMD - command that prints token to stdout
 * 2. HA_TOKEN_FILE - file containing the token
 *
 * Security:
 * - Never logs tokens or large payloads
 * - Redacts Authorization header in error messages
 */
import { z } from "zod";
/** Schema for a single entity state from /api/states */
export declare const HaStateSchema: z.ZodEffects<z.ZodObject<{
    entity_id: z.ZodString;
    state: z.ZodString;
    attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    last_changed: z.ZodOptional<z.ZodString>;
    last_updated: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    entity_id: string;
    state: string;
    attributes?: Record<string, unknown> | undefined;
    last_changed?: string | undefined;
    last_updated?: string | undefined;
}, {
    entity_id: string;
    state: string;
    attributes?: Record<string, unknown> | undefined;
    last_changed?: string | undefined;
    last_updated?: string | undefined;
}>, {
    attributes: Record<string, unknown>;
    entity_id: string;
    state: string;
    last_changed?: string | undefined;
    last_updated?: string | undefined;
}, {
    entity_id: string;
    state: string;
    attributes?: Record<string, unknown> | undefined;
    last_changed?: string | undefined;
    last_updated?: string | undefined;
}>;
export type HaState = z.infer<typeof HaStateSchema>;
/** Schema for /api/states response (array of states) */
export declare const HaStatesResponseSchema: z.ZodArray<z.ZodEffects<z.ZodObject<{
    entity_id: z.ZodString;
    state: z.ZodString;
    attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    last_changed: z.ZodOptional<z.ZodString>;
    last_updated: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    entity_id: string;
    state: string;
    attributes?: Record<string, unknown> | undefined;
    last_changed?: string | undefined;
    last_updated?: string | undefined;
}, {
    entity_id: string;
    state: string;
    attributes?: Record<string, unknown> | undefined;
    last_changed?: string | undefined;
    last_updated?: string | undefined;
}>, {
    attributes: Record<string, unknown>;
    entity_id: string;
    state: string;
    last_changed?: string | undefined;
    last_updated?: string | undefined;
}, {
    entity_id: string;
    state: string;
    attributes?: Record<string, unknown> | undefined;
    last_changed?: string | undefined;
    last_updated?: string | undefined;
}>, "many">;
/** Schema for a config entry from /api/config/config_entries/entry */
export declare const HaConfigEntrySchema: z.ZodObject<{
    entry_id: z.ZodString;
    domain: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    disabled_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    entry_id: string;
    domain: string;
    state?: string | undefined;
    title?: string | undefined;
    source?: string | undefined;
    disabled_by?: string | null | undefined;
}, {
    entry_id: string;
    domain: string;
    state?: string | undefined;
    title?: string | undefined;
    source?: string | undefined;
    disabled_by?: string | null | undefined;
}>;
export type HaConfigEntry = z.infer<typeof HaConfigEntrySchema>;
/** Schema for /api/config/config_entries/entry response */
export declare const HaConfigEntriesResponseSchema: z.ZodArray<z.ZodObject<{
    entry_id: z.ZodString;
    domain: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    disabled_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    entry_id: string;
    domain: string;
    state?: string | undefined;
    title?: string | undefined;
    source?: string | undefined;
    disabled_by?: string | null | undefined;
}, {
    entry_id: string;
    domain: string;
    state?: string | undefined;
    title?: string | undefined;
    source?: string | undefined;
    disabled_by?: string | null | undefined;
}>, "many">;
/** Schema for an area from /api/config/area_registry/list */
export declare const HaAreaSchema: z.ZodObject<{
    area_id: z.ZodString;
    name: z.ZodString;
    aliases: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    floor_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    area_id: string;
    name: string;
    aliases?: string[] | undefined;
    floor_id?: string | null | undefined;
}, {
    area_id: string;
    name: string;
    aliases?: string[] | undefined;
    floor_id?: string | null | undefined;
}>;
export type HaArea = z.infer<typeof HaAreaSchema>;
/** Schema for area registry response */
export declare const HaAreasResponseSchema: z.ZodArray<z.ZodObject<{
    area_id: z.ZodString;
    name: z.ZodString;
    aliases: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    floor_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    area_id: string;
    name: string;
    aliases?: string[] | undefined;
    floor_id?: string | null | undefined;
}, {
    area_id: string;
    name: string;
    aliases?: string[] | undefined;
    floor_id?: string | null | undefined;
}>, "many">;
/** Schema for entity registry entry */
export declare const HaEntityRegistryEntrySchema: z.ZodObject<{
    entity_id: z.ZodString;
    area_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    device_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    disabled_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    entity_id: string;
    disabled_by?: string | null | undefined;
    area_id?: string | null | undefined;
    device_id?: string | null | undefined;
}, {
    entity_id: string;
    disabled_by?: string | null | undefined;
    area_id?: string | null | undefined;
    device_id?: string | null | undefined;
}>;
export type HaEntityRegistryEntry = z.infer<typeof HaEntityRegistryEntrySchema>;
export declare const HaEntityRegistryResponseSchema: z.ZodArray<z.ZodObject<{
    entity_id: z.ZodString;
    area_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    device_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    disabled_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    entity_id: string;
    disabled_by?: string | null | undefined;
    area_id?: string | null | undefined;
    device_id?: string | null | undefined;
}, {
    entity_id: string;
    disabled_by?: string | null | undefined;
    area_id?: string | null | undefined;
    device_id?: string | null | undefined;
}>, "many">;
/**
 * Resolves the HA bearer token.
 *
 * Priority:
 * 1. HA_TOKEN_CMD - execute command, capture stdout
 * 2. HA_TOKEN_FILE - read file contents
 *
 * @throws Error if no token can be resolved
 */
export declare function resolveHaToken(): string;
/**
 * Resolves the HA base URL.
 *
 * @throws Error if HA_URL is not set
 */
export declare function resolveHaUrl(): string;
export interface HaClientOptions {
    baseUrl: string;
    token: string;
}
/**
 * Home Assistant REST API client.
 */
export declare class HaClient {
    private readonly baseUrl;
    private readonly token;
    constructor(options: HaClientOptions);
    /**
     * Create an HaClient from environment variables.
     */
    static fromEnv(): HaClient;
    /**
     * Get the base URL (useful for cache keys).
     */
    getBaseUrl(): string;
    /**
     * Make a GET request to the HA API.
     */
    private get;
    /**
     * Fetch all entity states.
     */
    getStates(): Promise<HaState[]>;
    /**
     * Fetch config entries.
     */
    getConfigEntries(): Promise<HaConfigEntry[]>;
    /**
     * Fetch areas from area registry.
     */
    getAreas(): Promise<HaArea[]>;
    /**
     * Fetch entity registry.
     */
    getEntityRegistry(): Promise<HaEntityRegistryEntry[]>;
    /**
     * Fetch media_player states only.
     */
    getMediaPlayerStates(): Promise<HaState[]>;
    /**
     * Find Music Assistant config entries.
     */
    getMusicAssistantEntries(): Promise<HaConfigEntry[]>;
    /**
     * Call a Home Assistant service.
     *
     * @param domain - Service domain (e.g., "music_assistant")
     * @param service - Service name (e.g., "browse_media")
     * @param data - Service call data
     * @returns Service call response
     */
    callService(domain: string, service: string, data: Record<string, unknown>): Promise<unknown>;
}
//# sourceMappingURL=ha-client.d.ts.map