#!/usr/bin/env node
/**
 * Fix Prisma 7's generated TypeScript to include .ts extensions in imports.
 * Node.js ESM requires explicit file extensions even for TypeScript.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const GENERATED_DIR = process.argv[2] || "src/generated/prisma";

async function fixImports(dir: string): Promise<void> {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await fixImports(fullPath);
    } else if (entry.name.endsWith(".ts")) {
      let content = await readFile(fullPath, "utf8");

      // Fix relative imports: from "./foo" to from "./foo.ts"
      // Match: from './path' or from "./path" where path doesn't end in .ts or .js
      const importRegex = /(from\s+['"])(\.\.?\/[^'"]+)(?<!\.ts)(?<!\.js)(['"])/g;

      const fixed = content.replace(importRegex, (match, prefix, path, suffix) => {
        if (path.endsWith(".ts") || path.endsWith(".js")) {
          return match;
        }
        return `${prefix}${path}.ts${suffix}`;
      });

      if (fixed !== content) {
        await writeFile(fullPath, fixed);
        console.log(`Fixed imports in: ${fullPath}`);
      }
    }
  }
}

await fixImports(GENERATED_DIR);
console.log("Prisma imports fixed.");
