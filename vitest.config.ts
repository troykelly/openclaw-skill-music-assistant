import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Run tests sequentially to avoid port conflicts and race conditions
    pool: "forks",
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
    testTimeout: 30000,
    hookTimeout: 60000,
  },
});
