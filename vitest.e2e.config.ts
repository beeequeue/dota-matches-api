import { defineConfig } from "vitest/config"
import { config } from "dotenv"

config()

export default defineConfig({
  test: {
    env: {
      API_BASE: process.env.API_BASE!,
    },
    include: ["e2e/**/*.test.ts"],
    reporters: "verbose",
  },
})
