import { defineConfig } from "tsup"

export default defineConfig({
  entryPoints: ["src/index.ts"],

  bundle: true,
  splitting: false,
  sourcemap: true,
  platform: "node",
  target: "node16",
  format: ["esm"],

  clean: true,
  minify: true,
})
