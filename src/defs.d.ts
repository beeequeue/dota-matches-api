declare const GIT_SHA: string

interface ImportMeta {
  env: {
    DEV: boolean
    PROD: boolean
    MODE: string
    NODE_ENV?: "development" | "production"
  }
}
