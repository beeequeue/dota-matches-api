import { defineConfig } from "tsup"
import { Miniflare } from "miniflare"

export default defineConfig(async ({ watch }) => {
  if (watch) {
    new Miniflare({
      envPath: true,
      packagePath: true,
      wranglerConfigPath: true,

      scriptPath: "dist/index.mjs",
    })
  }

  return {
    entryPoints: ["src/index.ts", "src/run.ts"],

    define: {
      STRATZ_TOKEN: JSON.stringify(process.env.STRATZ_TOKEN),
    },

    bundle: true,
    splitting: false,
    sourcemap: true,
    target: "node18",
    format: ["esm"],

    clean: true,
    minify: true,
  }
})
