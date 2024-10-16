import { defineConfig } from "vitest/config"

export default defineConfig({
  define: {
    GIT_SHA: JSON.stringify("GIT_SHA"),
  },

  test: {
    include: ["src/**/*.test.ts"],
    reporters: "verbose",
  },
})
