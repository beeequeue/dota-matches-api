import type { HonoRequest } from "hono"
import { ms, type StringValue } from "milli"
import { ELEMENT_NODE, type ElementNode, TEXT_NODE } from "ultrahtml"

export const MetaKey = {
  MATCHES_LAST_FETCHED: "MATCHES_LAST_FETCHED",
  TEAMS_LAST_FETCHED: "TEAMS_LAST_FETCHED",
} as const

export const ms2s = (n: number) => Math.round(n / 1000)

export const nowSeconds = () => ms2s(Date.now())

export const seconds = (input: StringValue) => ms2s(ms(input))

export const getNodeText = (node: ElementNode): string => {
  return node.children
    .reduce((accum, child) => {
      if (child.type === ELEMENT_NODE) {
        return accum + getNodeText(child)
      }

      if (child.type === TEXT_NODE) {
        return accum + child.value
      }

      return accum
    }, "")
    .trim()
}

export const getCountry = (request: HonoRequest<string>): string => {
  if (request.raw.cf?.country != null) {
    return request.raw.cf.country as string
  }

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
