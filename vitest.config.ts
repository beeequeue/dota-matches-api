import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config"

export default defineWorkersConfig({
  define: {
    GIT_SHA: JSON.stringify("GIT_SHA"),
  },

  test: {
    include: ["src/**/*.test.ts"],
    setupFiles: "vitest.setup.ts",
    reporters: "verbose",

    poolOptions: {
      workers: {
        wrangler: { configPath: "./wrangler.toml" },
      },
    },
  },
})
