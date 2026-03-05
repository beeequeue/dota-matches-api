import {
  defineWorkersConfig,
  readD1Migrations,
} from "@cloudflare/vitest-pool-workers/config"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "node",
          include: ["src/**/*.node.test.ts"],
          setupFiles: ["temporal-polyfill/global"],
        },
      },
      defineWorkersConfig({
        define: {
          MIGRATIONS: await readD1Migrations("./migrations"),
        },

        test: {
          name: "cf-worker",
          include: ["src/**/*.test.ts"],
          exclude: ["src/**/*.node.test.ts"],
          reporters: "verbose",
          setupFiles: ["temporal-polyfill/global", "./vitest.setup.ts"],

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
      }),
    ],
  },
})
