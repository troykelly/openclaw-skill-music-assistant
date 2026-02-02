import { describe, expect, test, beforeAll } from "vitest";
import { spawnSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

const repoRoot = path.resolve(__dirname, "..");
const binPath = path.join(repoRoot, "bin", "ha-ma.js");
const distCli = path.join(repoRoot, "dist", "cli.js");

/**
 * Tests for CLI binary exposure (Issue #30).
 * Verifies the ha-ma command is properly set up for global installation.
 */
describe("CLI binary (ha-ma)", () => {
  beforeAll(() => {
    // Ensure the dist files exist (build should have been run before tests)
    if (!fs.existsSync(distCli)) {
      throw new Error("dist/cli.js not found - run pnpm build first");
    }
  });

  test("bin/ha-ma.js exists with shebang", () => {
    expect(fs.existsSync(binPath)).toBe(true);
    const content = fs.readFileSync(binPath, "utf8");
    expect(content.startsWith("#!/usr/bin/env node")).toBe(true);
  });

  test("package.json has bin entry for ha-ma", () => {
    const pkgPath = path.join(repoRoot, "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    expect(pkg.bin).toBeDefined();
    expect(pkg.bin["ha-ma"]).toBe("bin/ha-ma.js");
  });

  test("src/cli.ts has shebang line", () => {
    const cliSrc = path.join(repoRoot, "src", "cli.ts");
    const content = fs.readFileSync(cliSrc, "utf8");
    expect(content.startsWith("#!/usr/bin/env node")).toBe(true);
  });

  test("ha-ma (no args) shows usage", () => {
    const result = spawnSync("node", [binPath], {
      cwd: repoRoot,
      encoding: "utf8",
      timeout: 10000,
    });

    // Exit code 2 for usage display (no command given)
    expect(result.status).toBe(2);
    // Output may go to stdout or stderr depending on how usage is printed
    const output = result.stdout + result.stderr;
    expect(output).toContain("Usage:");
    expect(output).toContain("ha-ma speakers");
    expect(output).toContain("ha-ma browse");
  });

  test("dist/cli.js is importable from bin wrapper", () => {
    // The bin wrapper imports ../dist/cli.js - verify structure
    const binContent = fs.readFileSync(binPath, "utf8");
    expect(binContent).toContain('import "../dist/cli.js"');
  });
});
