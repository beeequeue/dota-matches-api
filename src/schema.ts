export type Match$ = {
  id: string
  matchType: string | null
  teamOneId: string | null
  teamTwoId: string | null
  leagueName: string | null
  streamUrl: string | null
  startsAt: string | null
}

export type League$ = {
  name: string
  url: string | null
}

export type Team$ = {
  id: string
  name: string
  url: string | null
}

export type Subscription$ = {
  guildId: string
  channel: string
  teamName: string
}

export type Tables = {
  match: Match$
  league: League$
  team: Team$
  subscription: Subscription$
}
