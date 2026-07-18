import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  deps: { onlyBundle: false },

  env: {
    NODE_ENV: process.env.NODE_ENV === "development" ? "development" : "production",
  },
  alias: {
    h3: "h3/cloudflare",
  },

  target: "esnext",
  platform: "browser",
  format: "esm",
  fixedExtension: true,

  minify: true,
  sourcemap: true,
})
