# Dota 2 Team Matches API

A simple API that fetches, caches and formats data about upcoming and previous matches for Dota 2 teams within a 48 hour interval centered around right now.

Caches team matches for 3 hours after initially fetching them.

## API

**Base URL:** `https://dota-matches-api.beequeue.workers.dev`

```ts
type Match = {
  id: number
  startsAt: Date
  steams: Array<{
    name: string
    language: Language
    url: string
  }>
  teams: [
    {
      id: number
      name: string
    },
    {
      id: number
      name: string
    },
  ]
}
```

### `GET /v1/matches`

```ts
type QueryParams = {
  /** Comma-separated list of team IDs to fetch matches for */
  ids: string
}

type ResponseBody = Match[]
```
