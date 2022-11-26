import { config } from "dotenv"
import { execSync } from "child_process"
import { defineConfig } from "tsup"

config()

const gitSha = execSync("git rev-parse --short HEAD").toString().trim()

export default defineConfig({
  entry: ["src/index.ts"],

  define: {
    "import.meta.env.MODE": "production",
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
