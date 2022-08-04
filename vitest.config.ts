import { defineConfig } from "vitest/config"

export default defineConfig(({ command }) => ({
  define: {
    GIT_SHA: JSON.stringify("GIT_SHA"),
  },

  test: {
    include: ["src/**/*.test.ts"],
    setupFiles: "vitest.setup.ts",

    environment: "miniflare",
    environmentOptions: {
      miniflare: {
        kvPersist: false,
        r2Persist: false,
      },
    },

    reporters: "verbose",
    coverage: {
      enabled: command !== "serve",
      reporter: ["text", "lcov"],
      reportsDirectory: "node_modules/.coverage",
    },
  },
}))
