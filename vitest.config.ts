import { defineConfig } from "vitest/config"

export default defineConfig(({ command }) => ({
  define: {
    GIT_SHA: JSON.stringify("GIT_SHA"),
  },

  test: {
    include: ["src/**/*.test.ts"],
    setupFiles: "vitest.setup.ts",

    environment: "miniflare",

    reporters: "verbose",
  },
}))
