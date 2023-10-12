import { index, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core"

export const $matches = sqliteTable(
  "match",
  {
    id: text("id").primaryKey(),
    matchType: text("matchType"),
    teamOneId: text("teamOneId"),
    teamTwoId: text("teamTwoId"),
    leagueName: text("leagueName"),
    streamUrl: text("streamUrl"),
    startsAt: text("startsAt"),
  },
  ($matches) => ({
    match_teamOneId_idx: index("match_teamOneId_idx").on($matches.teamOneId),
    match_teamTwoId_idx: index("match_teamTwoId_idx").on($matches.teamTwoId),
    match_startsAt_idx: index("match_startsAt_idx").on($matches.startsAt),
    match_everything_idx: index("match_everything_idx").on(
      $matches.teamOneId,
      $matches.teamTwoId,
      $matches.startsAt,
    ),
  }),
)

export const $leagues = sqliteTable("league", {
  name: text("name").primaryKey(),
  url: text("url"),
})

export const $teams = sqliteTable(
  "team",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    url: text("url"),
  },
  ($teams) => ({
    team_name_idx: index("team_name_idx").on($teams.name),
  }),
)

export const $subscriptions = sqliteTable(
  "subscription",
  {
    guildId: text("guildId").notNull(),
    channel: text("channel").notNull(),
    teamName: text("teamName").notNull(),
  },
  ($subscriptions) => ({
    subscription_unique_idx: uniqueIndex("subscription_unique_idx").on(
      $subscriptions.guildId,
      $subscriptions.channel,
      $subscriptions.teamName,
    ),
    subscription_channel_idx: index("subscription_channel_idx").on(
      $subscriptions.guildId,
      $subscriptions.channel,
    ),
  }),
)
