/* eslint-disable @typescript-eslint/consistent-type-definitions */

declare const GIT_SHA: string

declare const miniflare: import("miniflare").Miniflare

/* eslint-disable @typescript-eslint/naming-convention */
declare type Env = {
  CACHE: KVNamespace
  WEBHOOKS: R2Bucket

  API_BASE: string
  DISCORD_BOT_TOKEN: string
  DISCORD_CLIENT_ID: string
  DISCORD_CLIENT_SECRET: string
  DISCORD_PUBLIC_KEY: string
}
