# Dota 2 Team Matches API

A simple API that fetches, caches and formats the
current [upcoming match schedule from Liquipedia](https://liquipedia.net/dota2/Liquipedia:Upcoming_and_ongoing_matches).

It caches matches for 3 hours after initially fetching them.

Big thanks to [Liquipedia](https://liquipedia.net) for providing the data! It is an amazing website ran and maintained
by amazing people.

## API

**Base URL:** `https://dota-matches-api.beequeue.workers.dev`

```ts
type Team = {
  name: string | null
  url: string | null
}

type Match = {
  hash: string
  teams: [Team | null, Team | null]
  matchType: string | null
  startsAt: Date | null
  leagueName: string | null
  streamUrl: string | null
}
```

### `GET /v1/matches`

```ts
type ResponseBody = Match[]
```

## Development

### Setup

1. Install dependencies <br/>`pnpm install`
1. Start development server <br/>`pnpm dev`
1. Go wild!

### Architecture

Not sure about storing the discord channel subscriptions in R2,
optimally it would use CF's new SQL service, but it's in closed beta and I don't have access to it.

```mermaid
flowchart TD
  api([API Clients])
  browser([Browser])
  worker(Worker):::cf
  discord([Discord]):::discord
  kv[("KV (match cache)")]:::cf
  r2[("R2 (discord channels)")]:::cf

  classDef cf stroke:#FFC500,stroke-width:2px
  classDef discord stroke:#5865F2

  subgraph Cloudflare
    worker
    kv
    r2
  end

  kv <--> worker
  r2 <--> worker
  worker <--> api
  worker <--> discord
```
