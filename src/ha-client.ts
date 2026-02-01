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
import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";

// --- Zod schemas for HA API responses ---

/** Schema for a single entity state from /api/states */
export const HaStateSchema = z
  .object({
    entity_id: z.string(),
    state: z.string(),
    attributes: z.record(z.unknown()).optional(),
    last_changed: z.string().optional(),
    last_updated: z.string().optional(),
  })
  .transform((s) => ({
    ...s,
    attributes: s.attributes ?? {},
  }));

export type HaState = z.infer<typeof HaStateSchema>;

/** Schema for /api/states response (array of states) */
export const HaStatesResponseSchema = z.array(HaStateSchema);

/** Schema for a config entry from /api/config/config_entries/entry */
export const HaConfigEntrySchema = z.object({
  entry_id: z.string(),
  domain: z.string(),
  title: z.string().optional(),
  source: z.string().optional(),
  state: z.string().optional(),
  disabled_by: z.string().nullable().optional(),
});

export type HaConfigEntry = z.infer<typeof HaConfigEntrySchema>;

/** Schema for /api/config/config_entries/entry response */
export const HaConfigEntriesResponseSchema = z.array(HaConfigEntrySchema);

/** Schema for an area from /api/config/area_registry/list */
export const HaAreaSchema = z.object({
  area_id: z.string(),
  name: z.string(),
  aliases: z.array(z.string()).optional(),
  floor_id: z.string().nullable().optional(),
});

export type HaArea = z.infer<typeof HaAreaSchema>;

/** Schema for area registry response */
export const HaAreasResponseSchema = z.array(HaAreaSchema);

/** Schema for entity registry entry */
export const HaEntityRegistryEntrySchema = z.object({
  entity_id: z.string(),
  area_id: z.string().nullable().optional(),
  device_id: z.string().nullable().optional(),
  disabled_by: z.string().nullable().optional(),
});

export type HaEntityRegistryEntry = z.infer<typeof HaEntityRegistryEntrySchema>;

export const HaEntityRegistryResponseSchema = z.array(HaEntityRegistryEntrySchema);

// --- Token resolution ---

/**
 * Resolves the HA bearer token.
 *
 * Priority:
 * 1. HA_TOKEN_CMD - execute command, capture stdout
 * 2. HA_TOKEN_FILE - read file contents
 *
 * @throws Error if no token can be resolved
 */
export function resolveHaToken(): string {
  const tokenCmd = process.env.HA_TOKEN_CMD?.trim();
  const tokenFile = process.env.HA_TOKEN_FILE?.trim();

  if (tokenCmd) {
    try {
      const token = execSync(tokenCmd, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] }).trim();
      if (token) return token;
    } catch {
      // Fall through to file method
    }
  }

  if (tokenFile && existsSync(tokenFile)) {
    const token = readFileSync(tokenFile, "utf8").trim();
    if (token) return token;
  }

  throw new Error(
    "No HA token available. Set HA_TOKEN_CMD or HA_TOKEN_FILE environment variable."
  );
}

/**
 * Resolves the HA base URL.
 *
 * @throws Error if HA_URL is not set
 */
export function resolveHaUrl(): string {
  const haUrl = process.env.HA_URL?.trim();
  if (!haUrl) {
    throw new Error("HA_URL environment variable is required.");
  }
  // Remove trailing slash for consistency
  return haUrl.replace(/\/+$/, "");
}

// --- HA REST client ---

export interface HaClientOptions {
  baseUrl: string;
  token: string;
}

/**
 * Redacts sensitive information from error messages.
 */
function redactError(message: string): string {
  // Redact bearer tokens (common patterns)
  return message.replace(/Bearer\s+[A-Za-z0-9._-]+/gi, "Bearer [REDACTED]");
}

/**
 * Home Assistant REST API client.
 */
export class HaClient {
  private readonly baseUrl: string;
  private readonly token: string;

  constructor(options: HaClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/+$/, "");
    this.token = options.token;
  }

  /**
   * Create an HaClient from environment variables.
   */
  static fromEnv(): HaClient {
    return new HaClient({
      baseUrl: resolveHaUrl(),
      token: resolveHaToken(),
    });
  }

  /**
   * Get the base URL (useful for cache keys).
   */
  getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * Make a GET request to the HA API.
   */
  private async get<S extends z.ZodTypeAny>(
    path: string,
    schema: S
  ): Promise<z.output<S>> {
    const url = `${this.baseUrl}${path}`;
    let response: Response;

    try {
      response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      throw new Error(`HA API request failed: ${redactError(message)}`);
    }

    if (!response.ok) {
      throw new Error(`HA API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      // Don't log the full payload - could be huge and contain sensitive data
      throw new Error(
        `HA API response validation failed for ${path}: ${parsed.error.message}`
      );
    }

    return parsed.data;
  }

  /**
   * Fetch all entity states.
   */
  async getStates(): Promise<HaState[]> {
    return this.get("/api/states", HaStatesResponseSchema);
  }

  /**
   * Fetch config entries.
   */
  async getConfigEntries(): Promise<HaConfigEntry[]> {
    return this.get("/api/config/config_entries/entry", HaConfigEntriesResponseSchema);
  }

  /**
   * Fetch areas from area registry.
   */
  async getAreas(): Promise<HaArea[]> {
    return this.get("/api/config/area_registry/list", HaAreasResponseSchema);
  }

  /**
   * Fetch entity registry.
   */
  async getEntityRegistry(): Promise<HaEntityRegistryEntry[]> {
    return this.get("/api/config/entity_registry/list", HaEntityRegistryResponseSchema);
  }

  /**
   * Fetch media_player states only.
   */
  async getMediaPlayerStates(): Promise<HaState[]> {
    const states = await this.getStates();
    return states.filter((s) => s.entity_id.startsWith("media_player."));
  }

  /**
   * Find Music Assistant config entries.
   */
  async getMusicAssistantEntries(): Promise<HaConfigEntry[]> {
    const entries = await this.getConfigEntries();
    return entries.filter((e) => e.domain === "music_assistant");
  }

  /**
   * Call a Home Assistant service.
   *
   * @param domain - Service domain (e.g., "music_assistant")
   * @param service - Service name (e.g., "browse_media")
   * @param data - Service call data
   * @returns Service call response
   */
  async callService(
    domain: string,
    service: string,
    data: Record<string, unknown>
  ): Promise<unknown> {
    const url = `${this.baseUrl}/api/services/${domain}/${service}`;
    let response: Response;

    try {
      response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      throw new Error(`HA service call failed: ${redactError(message)}`);
    }

    if (!response.ok) {
      throw new Error(`HA service call returned ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }
}
