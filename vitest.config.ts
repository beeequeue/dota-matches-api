import { cloudflareTest, readD1Migrations } from "@cloudflare/vitest-pool-workers"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [
    cloudflareTest({
      wrangler: { configPath: "./wrangler.json" },
      miniflare: {
        assets: {
          directory: "./src/fixtures",
          binding: "FIXTURES",
        },
      },
    }),
  ],
  test: {
    projects: [
      {
        test: {
          name: "node",
          include: ["src/**/*.node.test.ts"],
          setupFiles: ["temporal-polyfill/global"],
          mockReset: true,
          clearMocks: true,
        },
      },
      {
        define: {
          MIGRATIONS: await readD1Migrations("./migrations"),
        },
        plugins: [
          cloudflareTest({
            wrangler: { configPath: "./wrangler.json" },
            miniflare: {
              assets: {
                directory: "./src/fixtures",
                binding: "FIXTURES",
              },
            },
          }),
        ],
        test: {
          name: "cf-worker",
          include: ["src/**/*.test.ts"],
          exclude: ["src/**/*.node.test.ts"],
          setupFiles: ["temporal-polyfill/global", "./vitest.setup.ts"],
          mockReset: true,
          clearMocks: true,

          env: {
            NODE_ENV: "test",
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
      },
    ],
  },
})
