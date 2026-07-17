import { loadEnvFile } from "node:process"

import { defineConfig } from "vitest/config"

loadEnvFile(".env")

export default defineConfig({
  test: {
    env: {
      API_BASE: process.env.API_BASE!,
    },
    include: ["e2e/**/*.test.ts"],
  },
})
