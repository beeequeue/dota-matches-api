import { config } from "dotenv"
import { execSync } from "child_process"
import { defineConfig } from "tsup"

config()

const gitSha = execSync("git rev-parse --short HEAD").toString().trim()

export default defineConfig({
  entryPoints: ["src/index.ts"],

  define: {
    // @ts-ignore
    STRATZ_TOKEN: JSON.stringify(process.env.STRATZ_TOKEN),
    GIT_SHA: JSON.stringify(gitSha),
  },

  bundle: true,
  splitting: false,
  sourcemap: true,
  target: "node18",
  format: ["esm"],

  clean: true,
  minify: true,
})
