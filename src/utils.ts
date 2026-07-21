import { parse } from "@lukeed/ms"
import type { H3Event } from "h3"

export const getEnv = (event: H3Event) => event.req.runtime!.cloudflare!.env

export const MetaKey = {
  MATCHES_LAST_FETCHED: "MATCHES_LAST_FETCHED",
  TEAMS_LAST_FETCHED: "TEAMS_LAST_FETCHED",
} as const

export const ms2s = (n: number): number => Math.round(n / 1000)

export const nowSeconds = (): number => ms2s(Date.now())

export const seconds = (input: string): number => ms2s(parse(input)!)

export const getCountry = (event: H3Event): string => {
  if (event.req.cf?.country != null) return event.req.cf.country as string

  return "UNKNOWN"
}

export const EDGE_CACHE_TIMEOUT = 10_800 // seconds("3h")
const BROWSER_CACHE_TIMEOUT = 3600 // seconds("1h")

export const getTtl = (lastFetchedAt: number, ttl: number) => {
  const now = nowSeconds()
  const fetchedAtSeconds = ms2s(lastFetchedAt)
  const expiresAt = fetchedAtSeconds + ttl

  return Math.max(0, expiresAt - now)
}

export const getBrowserCacheTtl = (ttl: number) => Math.min(BROWSER_CACHE_TIMEOUT, ttl)

export const getCacheHeaders = (lastFetched: number) => {
  const ttl = getTtl(lastFetched, EDGE_CACHE_TIMEOUT)

  return {
    "Cache-Control": `public, s-maxage=${ttl} max-age=${getBrowserCacheTtl(ttl)}`,
  }
}

export const setCacheHeaders = (event: H3Event, lastFetched: number) => {
  event.res.headers.set("Cache-Control", getCacheHeaders(lastFetched)["Cache-Control"])
}
