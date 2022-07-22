import { config } from "dotenv"
import { execSync } from "child_process"
import { defineConfig } from "tsup"

config()

const gitSha = execSync("git rev-parse --short HEAD").toString().trim()

export default defineConfig({
  entryPoints: ["src/index.ts"],

  define: {
    STRATZ_TOKEN: JSON.stringify(process.env.STRATZ_TOKEN),
    DISCORD_CLIENT_ID: JSON.stringify(process.env.DISCORD_CLIENT_ID),
    DISCORD_CLIENT_SECRET: JSON.stringify(process.env.DISCORD_CLIENT_SECRET),
    GIT_SHA: JSON.stringify(gitSha),
  },

  esbuildOptions: (options) => {
    options.supported = {
      // For better performance: https://github.com/evanw/esbuild/issues/951
      "object-rest-spread": false,
    }
  },

  bundle: true,
  splitting: false,
  sourcemap: true,
  target: "node18",
  format: ["esm"],

  clean: true,
  minify: true,
})
