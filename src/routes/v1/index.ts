import { Hono } from "hono"

import { createDb } from "../../db"
import { createDotaClient } from "../../dota"
import {
  EDGE_CACHE_TIMEOUT,
  MetaKey,
  getBrowserCacheTtl,
  getCacheHeaders,
  getCountry,
  getTtl,
} from "../../utils"

import { discordRouter } from "./discord"

export const v1Router = new Hono<{ Bindings: Env }>()

v1Router.route("/discord", discordRouter)

v1Router.get("/matches", async (c) => {
  const cached = await caches.default.match(c.req.url)
  if (cached != null) {
    const lastFetched = Number((await c.env.META.get(MetaKey.MATCHES_LAST_FETCHED))!)

    return c.json(await cached.json(), {
      ...cached,
      headers: {
        ...cached.headers,
        "Cache-Control": `public, max-age=${getBrowserCacheTtl(
          getTtl(lastFetched, EDGE_CACHE_TIMEOUT),
        )}`,
      },
    })
  }

  const dota = createDotaClient(c.env, createDb(c.env))

  const country = getCountry(c.req)
  const { matches, lastFetched } = await dota.getMatches(country)

  c.executionCtx.waitUntil(
    caches.default
      .put(
        c.req.url,
        c.json(matches, {
          headers: getCacheHeaders(lastFetched),
        }),
      )
      .catch((error: Error) => console.log(`Failed to cache response: ${error.message}`)),
  )

  return c.json(matches, {
    headers: getCacheHeaders(lastFetched),
  })
})
