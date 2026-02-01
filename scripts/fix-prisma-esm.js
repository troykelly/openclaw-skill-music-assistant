#!/usr/bin/env node
/**
 * Fix Prisma 7's generated ESM code to include .js extensions in imports.
 * Node.js ESM strict mode requires explicit file extensions.
 * 
 * Usage: node scripts/fix-prisma-esm.js [dir]
 * Default dir: dist/generated/prisma
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const GENERATED_DIR = process.argv[2] || 'dist/generated/prisma';

async function fixImports(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await fixImports(fullPath);
    } else if (entry.name.endsWith('.js')) {
      let content = await readFile(fullPath, 'utf8');
      
      // Fix relative imports: from "./foo" to from "./foo.js"
      // Match: from './path' or from "./path" where path doesn't end in .js
      const importRegex = /(from\s+['"])(\.\.?\/[^'"]+)(?<!\.js)(['"])/g;
      
      const fixed = content.replace(importRegex, (match, prefix, path, suffix) => {
        // Don't add .js if it's already there
        if (path.endsWith('.js')) {
          return match;
        }
        return `${prefix}${path}.js${suffix}`;
      });
      
      if (fixed !== content) {
        await writeFile(fullPath, fixed);
        console.log(`Fixed imports in: ${fullPath}`);
      }
    }
  }
}

// Also write package.json for ESM
await writeFile(
  join(GENERATED_DIR, 'package.json'),
  JSON.stringify({ type: 'module' }, null, 2) + '\n'
);

await fixImports(GENERATED_DIR);
console.log('Prisma ESM imports fixed.');
