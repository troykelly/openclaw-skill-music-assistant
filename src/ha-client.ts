/**
 * Home Assistant REST and WebSocket API client.
 *
 * Token resolution order:
 * 1. HA_TOKEN_CMD - command that prints token to stdout
 * 2. HA_TOKEN_FILE - file containing the token
 *
 * Security:
 * - Never logs tokens or large payloads
 * - Redacts Authorization header in error messages
 *
 * WebSocket:
 * - Required for services with response.optional: false (e.g., search, get_library)
 * - Maintains a single connection with automatic reconnection
 */

import { z } from "zod";
import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import WebSocket from "ws";

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

// --- WebSocket message schemas ---

/** Schema for WebSocket result message */
const WsResultSchema = z.object({
  id: z.number(),
  type: z.literal("result"),
  success: z.boolean(),
  result: z.unknown().optional(),
  error: z.object({
    code: z.string(),
    message: z.string(),
  }).optional(),
});

/** Schema for service call result with response */
const WsServiceResponseSchema = z.object({
  context: z.object({
    id: z.string(),
    parent_id: z.string().nullable(),
    user_id: z.string().nullable(),
  }).optional(),
  response: z.unknown(),
});

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
  /** Timeout for WebSocket operations in milliseconds (default: 30000) */
  wsTimeout?: number;
}

/**
 * Redacts sensitive information from error messages.
 */
function redactError(message: string): string {
  // Redact bearer tokens (common patterns)
  return message.replace(/Bearer\s+[A-Za-z0-9._-]+/gi, "Bearer [REDACTED]");
}

/** Pending WebSocket request */
interface WsPendingRequest {
  resolve: (value: unknown) => void;
  reject: (error: Error) => void;
  timer: ReturnType<typeof setTimeout>;
}

/**
 * Home Assistant REST and WebSocket API client.
 */
export class HaClient {
  private readonly baseUrl: string;
  private readonly token: string;
  private readonly wsTimeout: number;

  // WebSocket state
  private ws: WebSocket | null = null;
  private wsConnecting: Promise<void> | null = null;
  private wsAuthenticated = false;
  private wsMsgId = 1;
  private wsPendingRequests = new Map<number, WsPendingRequest>();

  constructor(options: HaClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/+$/, "");
    this.token = options.token;
    this.wsTimeout = options.wsTimeout ?? 30000;
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

  // --- REST API methods ---

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
   * Call a Home Assistant service via REST API.
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

  // --- WebSocket API methods ---

  /**
   * Get the WebSocket URL from the base URL.
   */
  private getWsUrl(): string {
    const url = new URL(this.baseUrl);
    url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
    url.pathname = "/api/websocket";
    return url.toString();
  }

  /**
   * Ensure WebSocket is connected and authenticated.
   */
  private async ensureWsConnected(): Promise<void> {
    // Already connected and authenticated
    if (this.ws?.readyState === WebSocket.OPEN && this.wsAuthenticated) {
      return;
    }

    // Connection in progress, wait for it
    if (this.wsConnecting) {
      return this.wsConnecting;
    }

    // Start new connection
    this.wsConnecting = this.connectWs();
    try {
      await this.wsConnecting;
    } finally {
      this.wsConnecting = null;
    }
  }

  /**
   * Connect to HA WebSocket and authenticate.
   */
  private connectWs(): Promise<void> {
    return new Promise((resolve, reject) => {
      const wsUrl = this.getWsUrl();
      const ws = new WebSocket(wsUrl, {
        rejectUnauthorized: false, // Allow self-signed certs
      });

      const connectTimeout = setTimeout(() => {
        ws.close();
        reject(new Error("WebSocket connection timeout"));
      }, this.wsTimeout);

      ws.on("open", () => {
        // Connection opened, wait for auth_required
      });

      ws.on("message", (data: Buffer) => {
        try {
          const msg = JSON.parse(data.toString()) as {
            type: string;
            ha_version?: string;
            id?: number;
            success?: boolean;
            result?: unknown;
            error?: { code: string; message: string };
          };

          if (msg.type === "auth_required") {
            // Send auth
            ws.send(JSON.stringify({
              type: "auth",
              access_token: this.token,
            }));
          } else if (msg.type === "auth_ok") {
            // Authentication successful
            clearTimeout(connectTimeout);
            this.ws = ws;
            this.wsAuthenticated = true;
            resolve();
          } else if (msg.type === "auth_invalid") {
            clearTimeout(connectTimeout);
            ws.close();
            reject(new Error("WebSocket authentication failed: invalid token"));
          } else if (msg.type === "result" && typeof msg.id === "number") {
            // Handle response for pending request
            this.handleWsResult(msg as z.infer<typeof WsResultSchema>);
          }
        } catch {
          // Ignore parse errors for non-JSON messages
        }
      });

      ws.on("error", (err) => {
        clearTimeout(connectTimeout);
        reject(new Error(`WebSocket error: ${redactError(err.message)}`));
      });

      ws.on("close", () => {
        this.ws = null;
        this.wsAuthenticated = false;
        // Reject all pending requests
        for (const [id, pending] of this.wsPendingRequests) {
          clearTimeout(pending.timer);
          pending.reject(new Error("WebSocket connection closed"));
          this.wsPendingRequests.delete(id);
        }
      });
    });
  }

  /**
   * Handle a WebSocket result message.
   */
  private handleWsResult(msg: z.infer<typeof WsResultSchema>): void {
    const pending = this.wsPendingRequests.get(msg.id);
    if (!pending) return;

    clearTimeout(pending.timer);
    this.wsPendingRequests.delete(msg.id);

    if (msg.success) {
      pending.resolve(msg.result);
    } else {
      const error = msg.error ?? { code: "unknown", message: "Unknown error" };
      pending.reject(new Error(`HA WebSocket error [${error.code}]: ${error.message}`));
    }
  }

  /**
   * Send a WebSocket message and wait for response.
   */
  private async sendWsMessage(message: Record<string, unknown>): Promise<unknown> {
    await this.ensureWsConnected();

    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      throw new Error("WebSocket not connected");
    }

    const id = this.wsMsgId++;
    const fullMessage = { ...message, id };

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.wsPendingRequests.delete(id);
        reject(new Error("WebSocket request timeout"));
      }, this.wsTimeout);

      this.wsPendingRequests.set(id, { resolve, reject, timer });
      this.ws!.send(JSON.stringify(fullMessage));
    });
  }

  /**
   * Call a Home Assistant service that returns a response.
   *
   * Uses WebSocket API with return_response: true.
   * This is required for services like music_assistant.search that have
   * response.optional: false in their service definition.
   *
   * @param domain - Service domain (e.g., "music_assistant")
   * @param service - Service name (e.g., "search")
   * @param serviceData - Service call data
   * @param target - Optional target (entity_id, device_id, area_id)
   * @returns The response from the service
   */
  async callServiceWithResponse(
    domain: string,
    service: string,
    serviceData: Record<string, unknown>,
    target?: { entity_id?: string | string[]; device_id?: string | string[]; area_id?: string | string[] }
  ): Promise<unknown> {
    const message: Record<string, unknown> = {
      type: "call_service",
      domain,
      service,
      service_data: serviceData,
      return_response: true,
    };

    if (target) {
      message.target = target;
    }

    const result = await this.sendWsMessage(message);

    // Parse the result to extract the response
    const parsed = WsServiceResponseSchema.safeParse(result);
    if (parsed.success) {
      return parsed.data.response;
    }

    // If it doesn't match expected schema, return raw result
    return result;
  }

  /**
   * Close the WebSocket connection.
   */
  closeWs(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
      this.wsAuthenticated = false;
    }
  }
}
