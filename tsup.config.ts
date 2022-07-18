import { defineConfig } from "tsup"

export default defineConfig({
  entryPoints: ["src/index.ts"],

  define: {
    // @ts-ignore
    STRATZ_TOKEN: JSON.stringify(process.env.STRATZ_TOKEN),
  },

  bundle: true,
  splitting: false,
  sourcemap: true,
  target: "node18",
  format: ["esm"],

  clean: true,
  minify: true,
})
