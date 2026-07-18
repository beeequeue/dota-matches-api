import { loadEnvFile } from "node:process"

import { defineConfig } from "vitest/config"

loadEnvFile(".env")

export default defineConfig({
  test: {
    include: ["e2e/**/*.test.ts"],
  },
})
