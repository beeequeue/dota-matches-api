import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",

  env: {
    NODE_ENV: process.env.NODE_ENV === "development" ? "development" : "production",
  },

  target: "node24",
  platform: "node",
  format: "esm",
  dts: true,
  fixedExtension: true,

  minify: true,
  sourcemap: true,
})
