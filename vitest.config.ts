import { defineConfig } from "vitest/config"

export default defineConfig(({ command }) => ({
  define: {
    STRATZ_TOKEN: JSON.stringify("STRATZ_TOKEN"),
    DISCORD_CLIENT_ID: JSON.stringify("DISCORD_CLIENT_ID"),
    DISCORD_CLIENT_SECRET: JSON.stringify("DISCORD_CLIENT_SECRET"),
    DISCORD_PUBLIC_KEY: JSON.stringify("DISCORD_PUBLIC_KEY"),
    GIT_SHA: JSON.stringify("GIT_SHA"),
  },

  test: {
    setupFiles: "vitest.setup.ts",
    environment: "miniflare",
    reporters: "verbose",
    coverage: {
      enabled: command !== "serve",
      reporter: ["text", "lcov"],
      reportsDirectory: "node_modules/.coverage",
    },
  },
}))
