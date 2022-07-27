# Dota 2 Team Matches API

A simple API that fetches, caches and formats the current [upcoming match schedule from Liquipedia](https://liquipedia.net/dota2/Liquipedia:Upcoming_and_ongoing_matches).

It caches matches for 3 hours after initially fetching them.

Big thanks to [Liquipedia](https://liquipedia.net) for providing the data! It is an amazing website ran and maintained by amazing people.

## API

**Base URL:** `https://dota-matches-api.beequeue.workers.dev`

```ts
type Team = {
  name: string | null
  url: string | null
}

type Match = {
  teams: [Team, Team]
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
