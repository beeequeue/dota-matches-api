import { H3 } from "h3"

import { createDotaClient } from "../../dota.ts"
import {
  EDGE_CACHE_TIMEOUT,
  getBrowserCacheTtl,
  getCacheHeaders,
  getCountry,
  getEnv,
  getTtl,
  MetaKey,
  setCacheHeaders,
} from "../../utils.ts"

import { discordRouter } from "./discord.ts"

export const v1Router = new H3()

v1Router.mount("/discord", discordRouter)

v1Router.get("/matches", async (event) => {
  const env = getEnv(event)

  const cached = await caches.default.match(event.req.url)
  if (cached != null) {
    const lastFetched = Number(await env.META.get(MetaKey.MATCHES_LAST_FETCHED))

    // TODO: test handleCacheHeaders
    event.res.headers.set(
      "Cache-Control",
      `public, max-age=${getBrowserCacheTtl(getTtl(lastFetched, EDGE_CACHE_TIMEOUT))}`,
    )
    return cached.json()
  }

  const dota = createDotaClient(env)

  const country = getCountry(event)
  const { matches, lastFetched } = await dota.getMatches(country)

  event.waitUntil(
    caches.default
      .put(
        event.req.url,
        Response.json(matches, {
          headers: getCacheHeaders(lastFetched),
        }),
      )
      .catch((error: Error) => console.log(`Failed to cache response: ${error.message}`)),
  )

  setCacheHeaders(event, lastFetched)

  return matches
})
