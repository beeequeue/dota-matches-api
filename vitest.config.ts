import {
  defineWorkersConfig,
  readD1Migrations,
} from "@cloudflare/vitest-pool-workers/config"

export default defineWorkersConfig({
  define: {
    MIGRATIONS: await readD1Migrations("./migrations"),
  },

  test: {
    include: ["src/**/*.test.ts"],
    reporters: "verbose",
    setupFiles: ["./vitest.setup.ts"],

    env: {
      NODE_ENV: "test",
    },

    poolOptions: {
      workers: {
        wrangler: { configPath: "./wrangler.json" },
        miniflare: {
          assets: {
            directory: "./src/fixtures",
            binding: "FIXTURES",
          },
        },
      },
    },

    deps: {
      optimizer: {
        ssr: {
          enabled: true,
          include: ["discord-api-types/v10"],
        },
      },
    },
  },
})
