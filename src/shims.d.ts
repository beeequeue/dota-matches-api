/* eslint-disable @typescript-eslint/consistent-type-definitions */

declare const STRATZ_TOKEN: string
declare const DISCORD_CLIENT_ID: string
declare const DISCORD_CLIENT_SECRET: string
declare const DISCORD_PUBLIC_KEY: string
declare const GIT_SHA: string

declare const miniflare: import("miniflare").Miniflare

/* eslint-disable @typescript-eslint/naming-convention */
declare type Env = {
  CACHE: KVNamespace
  WEBHOOKS: R2Bucket
  API_BASE: string
}
