export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Byte: any
  DateTime: any
  Decimal: any
  Guid: any
  Long: any
  Short: any
  UShort: any
}

export type AbilityActiveListType = {
  __typename?: "AbilityActiveListType"
  ability0?: Maybe<Scalars["Short"]>
  ability1?: Maybe<Scalars["Short"]>
  ability2?: Maybe<Scalars["Short"]>
  ability3?: Maybe<Scalars["Short"]>
  ability4?: Maybe<Scalars["Short"]>
  ability5?: Maybe<Scalars["Short"]>
  ability6?: Maybe<Scalars["Short"]>
  ability7?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
}

export type AbilityAttributeType = {
  __typename?: "AbilityAttributeType"
  linkedSpecialBonusAbilityId?: Maybe<Scalars["Short"]>
  name?: Maybe<Scalars["String"]>
  requiresScepter: Scalars["Boolean"]
  value?: Maybe<Scalars["String"]>
}

export type AbilityCustomGameLanguageType = {
  __typename?: "AbilityCustomGameLanguageType"
  description?: Maybe<Scalars["String"]>
  displayName?: Maybe<Scalars["String"]>
}

export type AbilityCustomGameType = {
  __typename?: "AbilityCustomGameType"
  abilityName?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Short"]>
  language?: Maybe<AbilityCustomGameLanguageType>
  name?: Maybe<Scalars["String"]>
}

export enum AbilityDispellEnum {
  No = "NO",
  None = "NONE",
  Yes = "YES",
  YesStrong = "YES_STRONG",
}

export type AbilityLanguageType = {
  __typename?: "AbilityLanguageType"
  aghanimDescription?: Maybe<Scalars["String"]>
  attributes?: Maybe<Array<Maybe<Scalars["String"]>>>
  description?: Maybe<Array<Maybe<Scalars["String"]>>>
  displayName?: Maybe<Scalars["String"]>
  lore?: Maybe<Scalars["String"]>
  notes?: Maybe<Array<Maybe<Scalars["String"]>>>
  shardDescription?: Maybe<Scalars["String"]>
}

export type AbilityLearnEventsType = {
  __typename?: "AbilityLearnEventsType"
  abilityId?: Maybe<Scalars["Short"]>
  isMaxLevel?: Maybe<Scalars["Boolean"]>
  isTalent?: Maybe<Scalars["Boolean"]>
  isUltimate?: Maybe<Scalars["Boolean"]>
  level: Scalars["Int"]
  levelObtained: Scalars["Int"]
  time: Scalars["Int"]
}

export type AbilityStatType = {
  __typename?: "AbilityStatType"
  abilityId?: Maybe<Scalars["Short"]>
  behavior?: Maybe<Scalars["Long"]>
  castPoint?: Maybe<Array<Maybe<Scalars["Float"]>>>
  castRange?: Maybe<Array<Maybe<Scalars["Int"]>>>
  castRangeBuffer?: Maybe<Array<Maybe<Scalars["Int"]>>>
  channelTime?: Maybe<Array<Maybe<Scalars["Float"]>>>
  chargeRestoreTime?: Maybe<Scalars["String"]>
  charges?: Maybe<Scalars["String"]>
  cooldown?: Maybe<Array<Maybe<Scalars["Float"]>>>
  damage?: Maybe<Array<Maybe<Scalars["Float"]>>>
  dispellable?: Maybe<AbilityDispellEnum>
  displayAdditionalHeroes?: Maybe<Scalars["Boolean"]>
  duration?: Maybe<Scalars["String"]>
  fightRecapLevel?: Maybe<Scalars["Short"]>
  hasScepterUpgrade?: Maybe<Scalars["Boolean"]>
  hotKeyOverride?: Maybe<Scalars["String"]>
  isGrantedByScepter?: Maybe<Scalars["Boolean"]>
  isGrantedByShard?: Maybe<Scalars["Boolean"]>
  isOnCastbar?: Maybe<Scalars["Boolean"]>
  isOnLearnbar?: Maybe<Scalars["Boolean"]>
  isUltimate?: Maybe<Scalars["Boolean"]>
  levelsBetweenUpgrades?: Maybe<Scalars["Byte"]>
  manaCost?: Maybe<Array<Maybe<Scalars["Float"]>>>
  maxLevel?: Maybe<Scalars["Byte"]>
  modifierSupportBonus?: Maybe<Scalars["Short"]>
  modifierSupportValue?: Maybe<Scalars["Float"]>
  requiredLevel?: Maybe<Scalars["Byte"]>
  spellImmunity?: Maybe<Scalars["Int"]>
  type?: Maybe<Scalars["Int"]>
  unitDamageType?: Maybe<Scalars["Int"]>
  unitTargetFlags?: Maybe<Scalars["Long"]>
  unitTargetTeam?: Maybe<Scalars["Int"]>
  unitTargetType?: Maybe<Scalars["Long"]>
}

export type AbilityType = {
  __typename?: "AbilityType"
  attributes?: Maybe<Array<Maybe<AbilityAttributeType>>>
  drawMatchPage?: Maybe<Scalars["Boolean"]>
  id?: Maybe<Scalars["Short"]>
  isTalent?: Maybe<Scalars["Boolean"]>
  language?: Maybe<AbilityLanguageType>
  name?: Maybe<Scalars["String"]>
  stat?: Maybe<AbilityStatType>
  uri?: Maybe<Scalars["String"]>
}

export type AbilityUsedEventsType = {
  __typename?: "AbilityUsedEventsType"
  abilityId?: Maybe<Scalars["Short"]>
  attacker?: Maybe<Scalars["Short"]>
  target?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
}

export type AdminMutation = {
  __typename?: "AdminMutation"
  deleteProSteamAccount?: Maybe<Scalars["Boolean"]>
  mergeProSteamAccount?: Maybe<Scalars["Boolean"]>
}

export type AdminMutationDeleteProSteamAccountArgs = {
  request: DeleteProSteamAccountRequestType
}

export type AdminMutationMergeProSteamAccountArgs = {
  request: Array<InputMaybe<MergeProSteamAccountRequestType>>
}

export type AdminQuery = {
  __typename?: "AdminQuery"
  /** Returns a list of Stratz blogs. */
  apiMemoryReport?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type AssistDetailType = {
  __typename?: "AssistDetailType"
  attacker?: Maybe<Scalars["Short"]>
  gold?: Maybe<Scalars["Int"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  subTime?: Maybe<Scalars["Int"]>
  target?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
  xp?: Maybe<Scalars["Int"]>
}

export enum BasicRegionType {
  China = "CHINA",
  Europe = "EUROPE",
  NorthAmerica = "NORTH_AMERICA",
  Sea = "SEA",
  SouthAmerica = "SOUTH_AMERICA",
}

export type BlogMetaTagInfoType = {
  __typename?: "BlogMetaTagInfoType"
  id?: Maybe<Scalars["Short"]>
  name: Scalars["String"]
}

export type BlogMetaTagType = {
  __typename?: "BlogMetaTagType"
  blogId?: Maybe<Scalars["Byte"]>
  blogMetaTagTypeId?: Maybe<Scalars["Short"]>
  id?: Maybe<Scalars["Byte"]>
  metaTag?: Maybe<BlogMetaTagInfoType>
}

export type BlogType = {
  __typename?: "BlogType"
  bannerImageUrl: Scalars["String"]
  captainJackIdentityId?: Maybe<Scalars["Guid"]>
  data: Scalars["String"]
  id?: Maybe<Scalars["Byte"]>
  link: Scalars["String"]
  liveDateTime?: Maybe<Scalars["DateTime"]>
  metaTags?: Maybe<Array<Maybe<BlogMetaTagType>>>
  poster?: Maybe<SteamAccountType>
  title: Scalars["String"]
}

export enum BuildingType {
  Barracks = "BARRACKS",
  Fort = "FORT",
  Healer = "HEALER",
  Outpost = "OUTPOST",
  Tower = "TOWER",
}

export type BuyBackDetailType = {
  __typename?: "BuyBackDetailType"
  cost: Scalars["Int"]
  deathTimeRemaining: Scalars["Int"]
  heroId?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
}

export type CaptainJackIdentityApiApplicationType = {
  __typename?: "CaptainJackIdentityApiApplicationType"
  apiKey?: Maybe<Scalars["String"]>
  captainJackIdentityId?: Maybe<Scalars["Guid"]>
  description?: Maybe<Scalars["String"]>
  discordAddress?: Maybe<Scalars["String"]>
  emailAddress?: Maybe<Scalars["String"]>
  isApproved?: Maybe<Scalars["Boolean"]>
  issuer?: Maybe<Scalars["String"]>
  matomoReferenceToken?: Maybe<Scalars["String"]>
  secretKey?: Maybe<Scalars["String"]>
  tokenType?: Maybe<StratzApiType>
  websiteAddress?: Maybe<Scalars["String"]>
}

export type CaptainJackIdentityPrivateProfileType = {
  __typename?: "CaptainJackIdentityPrivateProfileType"
  captainJackIdentityId?: Maybe<Scalars["Guid"]>
  dailyEmail: Scalars["Boolean"]
  email?: Maybe<Scalars["String"]>
  emailHour?: Maybe<Scalars["Byte"]>
  emailLevel?: Maybe<Scalars["Byte"]>
  emailValidationCode?: Maybe<Scalars["String"]>
  facebook?: Maybe<Scalars["String"]>
  feedLevel?: Maybe<Scalars["Byte"]>
  isAdmin?: Maybe<Scalars["Boolean"]>
  isEmailValidated: Scalars["Boolean"]
  languageId?: Maybe<Scalars["Byte"]>
  lastDailyEmail?: Maybe<Scalars["Long"]>
  lastLeagueDailyEmail?: Maybe<Scalars["Long"]>
  lastMonthlyEmail?: Maybe<Scalars["Long"]>
  lastProCircuitDailyEmail?: Maybe<Scalars["Long"]>
  lastReadFeedTime?: Maybe<Scalars["Long"]>
  lastSeen?: Maybe<Scalars["Long"]>
  lastTeamDailyEmail?: Maybe<Scalars["Long"]>
  lastWeeklyEmail?: Maybe<Scalars["Long"]>
  monthlyEmail: Scalars["Boolean"]
  name?: Maybe<Scalars["String"]>
  premiumEndDate?: Maybe<Scalars["Long"]>
  proCircuitEmailLevel?: Maybe<Scalars["Byte"]>
  proCircuitFeedLevel?: Maybe<Scalars["Byte"]>
  themeType?: Maybe<Scalars["Byte"]>
  twitch?: Maybe<Scalars["String"]>
  twitter?: Maybe<Scalars["String"]>
  unsubscribeCode?: Maybe<Scalars["String"]>
  weeklyEmail: Scalars["Boolean"]
  youTube?: Maybe<Scalars["String"]>
}

export type CaptainJackIdentityProfileUpdateRequestType = {
  dailyEmail?: InputMaybe<Scalars["Boolean"]>
  email?: InputMaybe<Scalars["String"]>
  emailHour?: InputMaybe<Scalars["Byte"]>
  emailLevel?: InputMaybe<Scalars["Byte"]>
  feedLevel?: InputMaybe<Scalars["Byte"]>
  isStratzAnonymous?: InputMaybe<Scalars["Byte"]>
  languageId?: InputMaybe<Scalars["Byte"]>
  monthlyEmail?: InputMaybe<Scalars["Boolean"]>
  proCircuitEmailLevel?: InputMaybe<Scalars["Byte"]>
  proCircuitFeedLevel?: InputMaybe<Scalars["Byte"]>
  themeType?: InputMaybe<Scalars["Byte"]>
  weeklyEmail?: InputMaybe<Scalars["Boolean"]>
}

export type CaptainJackIdentityPublicProfileType = {
  __typename?: "CaptainJackIdentityPublicProfileType"
  captainJackIdentityId?: Maybe<Scalars["Guid"]>
  facebook?: Maybe<Scalars["String"]>
  isAdmin?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  twitch?: Maybe<Scalars["String"]>
  twitter?: Maybe<Scalars["String"]>
  youTube?: Maybe<Scalars["String"]>
}

export type CaptainJackIdentityType = {
  __typename?: "CaptainJackIdentityType"
  id?: Maybe<Scalars["Guid"]>
  profile?: Maybe<CaptainJackIdentityPublicProfileType>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["String"]>
}

export type ClusterType = {
  __typename?: "ClusterType"
  /** ClusterId which determines in which region a match was played. One region has multiple clusters. When selecting your region in the Dota 2 client, a random cluster is provided to you for each match for load balancing purposes. */
  id?: Maybe<Scalars["Int"]>
  /** RegionId gives the exact geographical area where the match is played. */
  regionId?: Maybe<Scalars["Short"]>
}

export type ConstantQuery = {
  __typename?: "ConstantQuery"
  /** Find ability details. */
  abilities?: Maybe<Array<Maybe<AbilityType>>>
  /** Find ability details by ability id. id is a required input field. */
  ability?: Maybe<AbilityType>
  /** Provided directly from Dota 2 Region files, the cluster is the geographically breakdown of where the game is played. */
  clusters?: Maybe<Array<Maybe<ClusterType>>>
  /** Find all abilities that are used in custom events. For example Aghnims Labyrinth. */
  customAbilities?: Maybe<Array<Maybe<AbilityCustomGameType>>>
  /** Returns a list of game mode types which is directly supplied by Dota 2. Matches API call will have a input for this value. */
  gameModes?: Maybe<Array<Maybe<GameModeType>>>
  /** Find game version details by game version id. id is a required input field. */
  gameVersion?: Maybe<GameVersionType>
  /** Find game version details. */
  gameVersions?: Maybe<Array<Maybe<GameVersionType>>>
  hero?: Maybe<HeroType>
  heroes?: Maybe<Array<Maybe<HeroType>>>
  /** Find item details by item id. id is a required input field. */
  item?: Maybe<ItemType>
  /** Find item details by item id. id is a required input field. */
  items?: Maybe<Array<Maybe<ItemType>>>
  /** Returns a list of lobby types which are mirrored from the Dota 2 client. */
  lobbyTypes?: Maybe<Array<Maybe<LobbyTypeType>>>
  /** Find all modifiers that are used in the game. If you find a bug on a modifier, let us know as we have to control this ourselves. */
  modifiers?: Maybe<Array<Maybe<ModifierType>>>
  /** Find npc details by npc id. id is a required input field. */
  npc?: Maybe<NpcType>
  /** Find npc details. */
  npcs?: Maybe<Array<Maybe<NpcType>>>
  /** Find all patch notes for each item and ability. These are found when you hover over each object in-game. */
  patchNotes?: Maybe<Array<Maybe<PatchNoteLanguageType>>>
  /** Find all players who Valve qualifies as a Pro Player or Streamer. */
  proSteamAccounts?: Maybe<Array<Maybe<ProSteamAccountType>>>
  /** Returns a list of region details and an Id for reference. */
  regions?: Maybe<Array<Maybe<RegionType>>>
  /** List of all the roles types for heroes. */
  roles?: Maybe<Array<Maybe<RoleType>>>
}

export type ConstantQueryAbilitiesArgs = {
  gameVersionId?: InputMaybe<Scalars["Short"]>
  language?: InputMaybe<Language>
}

export type ConstantQueryAbilityArgs = {
  gameVersionId?: InputMaybe<Scalars["Short"]>
  id: Scalars["Int"]
  language?: InputMaybe<Language>
}

export type ConstantQueryCustomAbilitiesArgs = {
  languageId?: InputMaybe<Language>
}

export type ConstantQueryGameVersionArgs = {
  id: Scalars["Short"]
}

export type ConstantQueryHeroArgs = {
  gameVersionId?: InputMaybe<Scalars["Short"]>
  id: Scalars["Short"]
  language?: InputMaybe<Language>
}

export type ConstantQueryHeroesArgs = {
  gameVersionId?: InputMaybe<Scalars["Short"]>
  language?: InputMaybe<Language>
}

export type ConstantQueryItemArgs = {
  gameVersionId?: InputMaybe<Scalars["Short"]>
  id: Scalars["Int"]
  language?: InputMaybe<Language>
}

export type ConstantQueryItemsArgs = {
  gameVersionId?: InputMaybe<Scalars["Short"]>
  language?: InputMaybe<Language>
}

export type ConstantQueryModifiersArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type ConstantQueryNpcArgs = {
  gameVersionId?: InputMaybe<Scalars["Short"]>
  id: Scalars["Short"]
}

export type ConstantQueryNpcsArgs = {
  gameVersionId?: InputMaybe<Scalars["Short"]>
}

export type ConstantQueryPatchNotesArgs = {
  languageId?: InputMaybe<Language>
}

export enum Damage {
  Magical = "MAGICAL",
  Physical = "PHYSICAL",
  Pure = "PURE",
}

export type DeathDetailType = {
  __typename?: "DeathDetailType"
  assist?: Maybe<Array<Maybe<Scalars["Int"]>>>
  attacker?: Maybe<Scalars["Short"]>
  byAbility?: Maybe<Scalars["Short"]>
  byItem?: Maybe<Scalars["Short"]>
  goldFed?: Maybe<Scalars["Int"]>
  goldLost?: Maybe<Scalars["Int"]>
  hasHealAvailable?: Maybe<Scalars["Boolean"]>
  isAttemptTpOut?: Maybe<Scalars["Boolean"]>
  isBurst?: Maybe<Scalars["Boolean"]>
  isDieBack?: Maybe<Scalars["Boolean"]>
  isEngagedOnDeath?: Maybe<Scalars["Boolean"]>
  isFeed?: Maybe<Scalars["Boolean"]>
  isFromIllusion?: Maybe<Scalars["Boolean"]>
  isTracked?: Maybe<Scalars["Boolean"]>
  isWardWalkThrough?: Maybe<Scalars["Boolean"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  reliableGold?: Maybe<Scalars["Int"]>
  target?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
  timeDead?: Maybe<Scalars["Int"]>
  unreliableGold?: Maybe<Scalars["Int"]>
  xpFed?: Maybe<Scalars["Int"]>
}

export type DeleteProSteamAccountRequestType = {
  name?: InputMaybe<Scalars["String"]>
  realName?: InputMaybe<Scalars["String"]>
  steamAccountId?: InputMaybe<Scalars["Long"]>
}

export type DireTide2020CustomGameHeroWinDayType = {
  __typename?: "DireTide2020CustomGameHeroWinDayType"
  candyScored: Scalars["Int"]
  day: Scalars["Long"]
  heroId: Scalars["Short"]
  matchCount: Scalars["Int"]
  winCount: Scalars["Int"]
}

export type DireTide2020CustomGameMatchType = {
  __typename?: "DireTide2020CustomGameMatchType"
  candyLost?: Maybe<Scalars["Short"]>
  candyPickedUp?: Maybe<Scalars["Short"]>
  candyScored?: Maybe<Scalars["Short"]>
  clusterId?: Maybe<Scalars["Short"]>
  didRadiantWin?: Maybe<Scalars["Boolean"]>
  direCandyScored?: Maybe<Scalars["Short"]>
  durationSeconds?: Maybe<Scalars["Short"]>
  endDateTime?: Maybe<Scalars["Long"]>
  id?: Maybe<Scalars["Long"]>
  players?: Maybe<Array<Maybe<DireTide2020CustomGamePlayerType>>>
  radiantCandyScored?: Maybe<Scalars["Short"]>
  replaySalt?: Maybe<Scalars["Long"]>
  startDateTime?: Maybe<Scalars["Long"]>
}

export type DireTide2020CustomGameMatchTypePlayersArgs = {
  steamAccountId?: InputMaybe<Scalars["Long"]>
}

export type DireTide2020CustomGamePlayerType = {
  __typename?: "DireTide2020CustomGamePlayerType"
  assists?: Maybe<Scalars["Byte"]>
  backpack0Id?: Maybe<Scalars["Short"]>
  backpack1Id?: Maybe<Scalars["Short"]>
  backpack2Id?: Maybe<Scalars["Short"]>
  candyLost?: Maybe<Scalars["Short"]>
  candyPickedUp?: Maybe<Scalars["Short"]>
  candyScored?: Maybe<Scalars["Short"]>
  deaths?: Maybe<Scalars["Byte"]>
  goldPerMinute?: Maybe<Scalars["Short"]>
  goldSpent?: Maybe<Scalars["Int"]>
  hero?: Maybe<HeroType>
  heroDamage?: Maybe<Scalars["Int"]>
  heroHealing?: Maybe<Scalars["Int"]>
  heroId?: Maybe<Scalars["Short"]>
  isVictory: Scalars["Boolean"]
  item0Id?: Maybe<Scalars["Short"]>
  item1Id?: Maybe<Scalars["Short"]>
  item2Id?: Maybe<Scalars["Short"]>
  item3Id?: Maybe<Scalars["Short"]>
  item4Id?: Maybe<Scalars["Short"]>
  item5Id?: Maybe<Scalars["Short"]>
  kills?: Maybe<Scalars["Byte"]>
  leaverStatus?: Maybe<Scalars["Byte"]>
  level?: Maybe<Scalars["Byte"]>
  matchId?: Maybe<Scalars["Long"]>
  networth?: Maybe<Scalars["Int"]>
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  neutral0Id?: Maybe<Scalars["Short"]>
  numLastHits?: Maybe<Scalars["Short"]>
  partyId?: Maybe<Scalars["Byte"]>
  playerSlot?: Maybe<Scalars["Byte"]>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
}

export type DotaMutation = {
  __typename?: "DotaMutation"
  admin?: Maybe<AdminMutation>
  user?: Maybe<DotaUserMutation>
  yogurt?: Maybe<YogurtMutation>
}

export type DotaNextQuery = {
  __typename?: "DotaNextQuery"
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  ally?: Maybe<Array<Maybe<DotaNextWithAllyType>>>
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  enemy?: Maybe<Array<Maybe<DotaNextWithAllyType>>>
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  playerHero?: Maybe<Array<Maybe<Array<Maybe<MatchPlayerItemPurchaseEventType>>>>>
}

export type DotaNextQueryAllyArgs = {
  matchSteamAccountId: Scalars["Long"]
  steamAccountIds: Array<InputMaybe<Scalars["Long"]>>
}

export type DotaNextQueryEnemyArgs = {
  matchSteamAccountId: Scalars["Long"]
  steamAccountIds: Array<InputMaybe<Scalars["Long"]>>
}

export type DotaNextQueryPlayerHeroArgs = {
  gameModeIds: Scalars["Byte"]
  heroId?: InputMaybe<Scalars["Short"]>
  limitByItemIds: Scalars["Int"]
  lobbyTypeIds: Scalars["Byte"]
  startDateTime: Scalars["Long"]
  steamAccountIds: Scalars["Long"]
}

export type DotaNextWithAllyType = {
  __typename?: "DotaNextWithAllyType"
  lifetimeMatchCount?: Maybe<Scalars["Int"]>
  lifetimeWinMatchCount?: Maybe<Scalars["Int"]>
  steamAccountId?: Maybe<Scalars["Long"]>
}

export type DotaPlusWeekType = {
  __typename?: "DotaPlusWeekType"
  active?: Maybe<Scalars["Int"]>
  expired?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Long"]>
}

export type DotaQuery = {
  __typename?: "DotaQuery"
  /** Queries used to query constants in Dota. */
  constants?: Maybe<ConstantQuery>
  /** For getting access to one specific Guild which was used at the start of TI10 Compendium. */
  guild?: Maybe<GuildType>
  /** Queries used to gain insights into hero data and statistics. */
  heroStats?: Maybe<HeroStatsQuery>
  /** Queries used to get leaderboard information. */
  leaderboard?: Maybe<LeaderboardQuery>
  /** Find league details by league Id. Id is a required field. */
  league?: Maybe<LeagueType>
  /** Find league details by searching for leagues using a LeagueRequest. */
  leagues?: Maybe<Array<Maybe<LeagueType>>>
  /** Queries used to find live match data. */
  live?: Maybe<LiveQuery>
  /** Find match details by the match id. id is a required input field. */
  match?: Maybe<MatchType>
  /** Find match details for each match id. ids is a required input field. */
  matches?: Maybe<Array<Maybe<MatchType>>>
  /** Find player details by steam account id. id is a required input field. */
  player?: Maybe<PlayerType>
  /** Find player details for each steam account id. ids is a required input field. */
  players?: Maybe<Array<Maybe<PlayerType>>>
  /** Queries used to populate Stratz Plus. */
  plus?: Maybe<PlusQuery>
  /** Stratz specific queries. */
  stratz?: Maybe<StratzQuery>
  /** Find player details for each steam account id. ids is a required input field. */
  team?: Maybe<TeamType>
  /** Results in a list of team objects that contain data about them and their players. */
  teams?: Maybe<Array<Maybe<TeamType>>>
  /** Queries used by 3rd party applications. */
  vendor?: Maybe<VendorQuery>
  /** Queries used for Stratz Yogurt - users won't be able to access these calls until they have access to the app. */
  yogurt?: Maybe<YogurtQuery>
}

export type DotaQueryGuildArgs = {
  id: Scalars["Int"]
}

export type DotaQueryLeagueArgs = {
  id: Scalars["Int"]
}

export type DotaQueryLeaguesArgs = {
  request: LeagueRequestType
}

export type DotaQueryMatchArgs = {
  id: Scalars["Long"]
}

export type DotaQueryMatchesArgs = {
  ids: Array<InputMaybe<Scalars["Long"]>>
}

export type DotaQueryPlayerArgs = {
  steamAccountId: Scalars["Long"]
}

export type DotaQueryPlayersArgs = {
  steamAccountIds: Array<InputMaybe<Scalars["Long"]>>
}

export type DotaQueryTeamArgs = {
  teamId: Scalars["Int"]
}

export type DotaQueryTeamsArgs = {
  teamIds: Array<InputMaybe<Scalars["Int"]>>
}

export type DotaSubscription = {
  __typename?: "DotaSubscription"
  feedLive?: Maybe<LiveEventType>
  matchCount?: Maybe<TotalMatchCountType>
  matchLive?: Maybe<MatchLiveType>
  matchLiveLeague?: Maybe<MatchLiveType>
  playerCount?: Maybe<TotalPlayerCountType>
}

export type DotaSubscriptionMatchLiveArgs = {
  matchId: Scalars["Long"]
}

export type DotaSubscriptionMatchLiveLeagueArgs = {
  leagueId: Scalars["Int"]
}

export type DotaUserMutation = {
  __typename?: "DotaUserMutation"
  applyStratzApiKey?: Maybe<Scalars["Boolean"]>
  /** If a user moves from annoymous to public, this will turn it on instantly for them. */
  checkPublicDotaAccount?: Maybe<Scalars["Boolean"]>
  /** Update your user to unsubscribe from Stratz emails. */
  emailUnsubscribe?: Maybe<UserHomepageType>
  /** Update your user to (un)follow a specific LeagueId */
  followLeague?: Maybe<Scalars["Boolean"]>
  /** Update your user to (un)follow a specific SteamAccountId */
  followPlayer?: Maybe<Scalars["Boolean"]>
  /** Marks the user's LastReadFeedTime to the current time. */
  readAllFeed?: Maybe<Scalars["Boolean"]>
  unfollowLeague?: Maybe<Scalars["Boolean"]>
  /** Update your user to (un)follow a specific SteamAccountId */
  unfollowPlayer?: Maybe<Scalars["Boolean"]>
  /** Updates every user you are following.  This should be handled with care, as this overrides all your predefinded user specific settings with these settings. */
  updateAllFollowing?: Maybe<Scalars["Boolean"]>
  /** Update your user to (un)follow a specific SteamAccountId */
  updateFollowing?: Maybe<Scalars["Boolean"]>
  /** Gets more in-depth information about the person you are following.  This is a user specific request, and you can only edit yourself. */
  updateFollowingFavorite?: Maybe<Scalars["Boolean"]>
  /** Updates the logged in user information profile. */
  updateProfile?: Maybe<Scalars["Boolean"]>
  /** Validates a user email address if the password id is correct. */
  updateTutorial?: Maybe<Array<Maybe<Scalars["Short"]>>>
  /** Validates a user email address if the password id is correct. */
  validateEmail?: Maybe<Scalars["Boolean"]>
}

export type DotaUserMutationApplyStratzApiKeyArgs = {
  description: Scalars["String"]
  discordAddress: Scalars["String"]
  emailAddress: Scalars["String"]
  tokenType: StratzApiType
  websiteAddress: Scalars["String"]
}

export type DotaUserMutationFollowLeagueArgs = {
  leagueId: Scalars["Int"]
}

export type DotaUserMutationFollowPlayerArgs = {
  steamAccountId: Scalars["Long"]
}

export type DotaUserMutationUnfollowLeagueArgs = {
  leagueId: Scalars["Int"]
}

export type DotaUserMutationUnfollowPlayerArgs = {
  steamAccountId: Scalars["Long"]
}

export type DotaUserMutationUpdateAllFollowingArgs = {
  request: UpdateFollowerRequestType
}

export type DotaUserMutationUpdateFollowingArgs = {
  followedSteamAccountId: Scalars["Long"]
  request: UpdateFollowerRequestType
}

export type DotaUserMutationUpdateFollowingFavoriteArgs = {
  followedSteamAccountId: Scalars["Long"]
  isFavorite: Scalars["Boolean"]
}

export type DotaUserMutationUpdateProfileArgs = {
  request: CaptainJackIdentityProfileUpdateRequestType
}

export type DotaUserMutationUpdateTutorialArgs = {
  tutorialId: Scalars["Short"]
}

export type DotaUserMutationValidateEmailArgs = {
  code: Scalars["Guid"]
}

export type ExperienceDetailType = {
  __typename?: "ExperienceDetailType"
  amount: Scalars["Int"]
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  reason?: Maybe<XpReason>
  time: Scalars["Int"]
}

export enum Feat {
  DotaAccountLevel = "DOTA_ACCOUNT_LEVEL",
  HighImp = "HIGH_IMP",
  Rampage = "RAMPAGE",
  WinStreak = "WIN_STREAK",
}

export type FeatType = {
  __typename?: "FeatType"
  hero?: Maybe<HeroType>
  heroId?: Maybe<Scalars["Int"]>
  match?: Maybe<MatchType>
  matchId?: Maybe<Scalars["Long"]>
  type?: Maybe<Feat>
  value?: Maybe<Scalars["Int"]>
}

export type FeedResponseType = {
  __typename?: "FeedResponseType"
  count?: Maybe<Scalars["Int"]>
  data?: Maybe<Array<Maybe<FeedType>>>
  date?: Maybe<Scalars["DateTime"]>
}

export type FeedType = {
  __typename?: "FeedType"
  date?: Maybe<Scalars["Long"]>
  didWin?: Maybe<Scalars["Boolean"]>
  heroId: Scalars["Int"]
  league?: Maybe<LeagueType>
  matchId?: Maybe<Scalars["Long"]>
  steamAccount?: Maybe<SteamAccountType>
  targetSteamAccountId?: Maybe<Scalars["Long"]>
  type?: Maybe<Scalars["Byte"]>
  value: Scalars["Int"]
}

export enum FilterDireTide2020CustomGameMatchOrderBy {
  CandyScored = "CANDY_SCORED",
  EndDateTime = "END_DATE_TIME",
}

export type FilterDireTide2020CustomMatchRequestType = {
  /** The order in which the data returned will be sorted by. */
  orderBy?: InputMaybe<FilterDireTide2020CustomGameMatchOrderBy>
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: InputMaybe<FilterOrder>
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: InputMaybe<Scalars["Long"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
}

export enum FilterHeroWinRequestGroupBy {
  All = "ALL",
  HeroId = "HERO_ID",
  HeroIdDurationMinutes = "HERO_ID_DURATION_MINUTES",
}

export enum FilterLeaderboardGuildOrderBy {
  BattlePassLevels = "BATTLE_PASS_LEVELS",
  Id = "ID",
  MemberCount = "MEMBER_COUNT",
  Points = "POINTS",
  PreviousWeekRank = "PREVIOUS_WEEK_RANK",
  Rank = "RANK",
}

export type FilterLeaderboardGuildRequestType = {
  /** The guild was created after this date time (in Unix TimeStamp). */
  createdAfterDateTime?: InputMaybe<Scalars["Long"]>
  /** The guild was created before this date time (in Unix TimeStamp). */
  createdBeforeDateTime?: InputMaybe<Scalars["Long"]>
  /** If the guild is current set to 50 members. */
  isFull?: InputMaybe<Scalars["Boolean"]>
  /** If anyone is able to join the guild. */
  isUnlocked?: InputMaybe<Scalars["Boolean"]>
  /** The language required to join the guild. */
  language?: InputMaybe<Scalars["Byte"]>
  /** The max amount of members a guild can have. */
  maxMemberCount?: InputMaybe<Scalars["Byte"]>
  /** The rank required to join the guild. */
  maxRequiredRank?: InputMaybe<Scalars["Byte"]>
  /** The amount of members a guild must have. */
  memberCount?: InputMaybe<Scalars["Byte"]>
  /** The minimum amount of members a guild must have. */
  minMemberCount?: InputMaybe<Scalars["Byte"]>
  /** The rank required to join the guild. */
  minRequiredRank?: InputMaybe<Scalars["Byte"]>
  /** If the return should be ordered by Ascending or Desending order. */
  order?: InputMaybe<FilterOrder>
  /** What field to order the data by. Enum values. */
  orderBy?: InputMaybe<FilterLeaderboardGuildOrderBy>
  /** The region where the guild was registered. */
  region?: InputMaybe<Scalars["Byte"]>
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
}

export type FilterLeaderboardHeroRequestType = {
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
}

export enum FilterLeaderboardOrder {
  First = "FIRST",
  Level = "LEVEL",
  Recent = "RECENT",
}

export enum FilterMatchGroupOrderByEnum {
  MatchCount = "MATCH_COUNT",
  WinCount = "WIN_COUNT",
}

export type FilterMatchReplayUploadRequestType = {
  byGameMode?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  byGameVersion?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  byHeroId?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  byLeagueId?: InputMaybe<Scalars["Int"]>
  byLobbyType?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  byMatchId?: InputMaybe<Scalars["Long"]>
  byMatchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  byMatchUploadFileName?: InputMaybe<Scalars["String"]>
  byMatchUploadUploaderCaptainJackId?: InputMaybe<Scalars["Guid"]>
  bySeriesId?: InputMaybe<Scalars["Int"]>
  bySeriesIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  bySteamAccountId?: InputMaybe<Scalars["Long"]>
  bySteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  byTeamId?: InputMaybe<Scalars["Int"]>
  endDateTime?: InputMaybe<Scalars["Long"]>
  filterPosition?: InputMaybe<MatchPlayerPositionType>
  filterPositionIsUs?: InputMaybe<Scalars["Boolean"]>
  filterPositionOrder?: InputMaybe<Array<InputMaybe<MatchPlayerTeamPickOrderType>>>
  firstPick?: InputMaybe<Scalars["Boolean"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  isComplete?: InputMaybe<Scalars["Boolean"]>
  isLeague?: InputMaybe<Scalars["Boolean"]>
  isRadiant?: InputMaybe<Scalars["Boolean"]>
  isRadiantFirstPick?: InputMaybe<Scalars["Boolean"]>
  isValidated?: InputMaybe<Scalars["Boolean"]>
  isVictory?: InputMaybe<Scalars["Boolean"]>
  maxDuration?: InputMaybe<Scalars["Int"]>
  maxGameVersionId?: InputMaybe<Scalars["Int"]>
  minDuration?: InputMaybe<Scalars["Int"]>
  minGameVersionId?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  startDateTime?: InputMaybe<Scalars["Long"]>
  take?: InputMaybe<Scalars["Int"]>
  withEnemyBannedHeroId?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  withEnemyHeroId?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  withEnemySteamAccount?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  withFriendBannedHeroId?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  withFriendHeroId?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
}

export enum FilterOrder {
  Asc = "ASC",
  Desc = "DESC",
}

export enum FilterOrderBy {
  Id = "ID",
  LastMatchTime = "LAST_MATCH_TIME",
  LastMatchTimeThenTier = "LAST_MATCH_TIME_THEN_TIER",
  None = "NONE",
  StartDateThenTier = "START_DATE_THEN_TIER",
}

export enum FilterPlayerTeammateEnum {
  Against = "AGAINST",
  With = "WITH",
}

export type FilterSearchRequestType = {
  /** The minimum amount of time in which a user must have played a game to be allowed inside the search query. A unix timestamp. */
  lastMatchPlayedAgo?: InputMaybe<Scalars["Long"]>
  /** The leaderboard is split into 4 regions. The user must appear in this region(s) for them to be allowed inside the search query. */
  leaderboardRegionIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** When searching for a league, the tier the league must be in. Tiers: Amateur = 1, Professional = 2, Premium = 3, Pro Circuit = 4, Main Event = 5 */
  leagueTierIds?: InputMaybe<Array<InputMaybe<LeagueTier>>>
  /** The maximum rank a player must have to be allowed inside the search query. */
  maximumRank?: InputMaybe<Scalars["Int"]>
  /** The minimum rank a player must have to be allowed inside the search query. */
  minimumRank?: InputMaybe<Scalars["Int"]>
  /** The term used to define the search parameters. Minimum input is 2 characters. */
  query: Scalars["String"]
  /** Searching our entire database can take time. If you already know what your searching for you, you can limit the query down to a set of specific types. (0 - Playuers, 1 - Matches, 2 - Leagues, 3 - Teams, 4 - ProPlayers, 5 - Casters). Default is all types. */
  searchType?: InputMaybe<Array<InputMaybe<Search>>>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
  /** When searching for a team, only return results of those teams of which are considered Professionals. */
  teamIsPro?: InputMaybe<Scalars["Boolean"]>
}

export type FilterSeasonLeaderboardRequestType = {
  heroId?: InputMaybe<Scalars["Short"]>
  leaderBoardDivision?: InputMaybe<LeaderboardDivision>
  position?: InputMaybe<MatchPlayerPositionType>
  query?: InputMaybe<Scalars["String"]>
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
}

export type FilterSeriesRequestType = {
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
}

export enum FilterTi2020CustomGameMatchOrderBy {
  Duration = "DURATION",
  EndDateTime = "END_DATE_TIME",
}

export type FilterTi2020HeroCompositionRequestType = {
  /** The base level of difficulty */
  difficulty: Ti2020CustomGameMatchDifficultyType
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: InputMaybe<FilterOrder>
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
}

export type FilterTi2020MatchRequestType = {
  /** The game must of been played after this set time. In Unix Time Stamp Format. */
  createdAfterDateTime?: InputMaybe<Scalars["Long"]>
  /** The game must of been played before this set time. In Unix Time Stamp Format. */
  createdBeforeDateTime?: InputMaybe<Scalars["Long"]>
  /** How far into the game (levels) they completed. */
  depth?: InputMaybe<Scalars["Byte"]>
  /** Required that the team playing the game won. */
  didWin?: InputMaybe<Scalars["Boolean"]>
  /** The base level of difficulty */
  difficulty?: InputMaybe<Ti2020CustomGameMatchDifficultyType>
  /** Return Matches that only include the set of Match Ids provided. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** The team had to make it at least this far (level). */
  minDepth?: InputMaybe<Scalars["Byte"]>
  /** The order in which the data returned will be sorted by. */
  orderBy?: InputMaybe<FilterTi2020CustomGameMatchOrderBy>
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: InputMaybe<FilterOrder>
  /** The max must be played in this list of regions */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  seasonId?: InputMaybe<Scalars["Byte"]>
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** Return matches that only include this single player. */
  steamAccountId?: InputMaybe<Scalars["Long"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
}

export enum FindMatchPlayerGroupBy {
  Assists = "ASSISTS",
  Award = "AWARD",
  Cluster = "CLUSTER",
  DateDay = "DATE_DAY",
  Deaths = "DEATHS",
  DurationMinutes = "DURATION_MINUTES",
  Faction = "FACTION",
  GameMode = "GAME_MODE",
  GameVersion = "GAME_VERSION",
  Hero = "HERO",
  HeroPerformance = "HERO_PERFORMANCE",
  IsIntentionalFeeding = "IS_INTENTIONAL_FEEDING",
  IsLeague = "IS_LEAGUE",
  IsLeaver = "IS_LEAVER",
  IsParty = "IS_PARTY",
  IsRandom = "IS_RANDOM",
  IsSeries = "IS_SERIES",
  IsStats = "IS_STATS",
  IsVictory = "IS_VICTORY",
  Kills = "KILLS",
  Lane = "LANE",
  LeagueId = "LEAGUE_ID",
  Level = "LEVEL",
  LobbyType = "LOBBY_TYPE",
  Position = "POSITION",
  Region = "REGION",
  RoamLane = "ROAM_LANE",
  Role = "ROLE",
  SteamAccountId = "STEAM_ACCOUNT_ID",
  SteamAccountIdAgainstTeam = "STEAM_ACCOUNT_ID_AGAINST_TEAM",
  SteamAccountIdHeroId = "STEAM_ACCOUNT_ID_HERO_ID",
  SteamAccountIdWithTeam = "STEAM_ACCOUNT_ID_WITH_TEAM",
  Team = "TEAM",
}

export enum FindMatchPlayerList {
  All = "ALL",
  Single = "SINGLE",
}

export enum FindMatchPlayerOrderBy {
  Asc = "ASC",
  Desc = "DESC",
}

export type FollowerType = {
  __typename?: "FollowerType"
  captainJackIdentity?: Maybe<CaptainJackIdentityType>
  captainJackIdentityId?: Maybe<Scalars["Guid"]>
  dailyEmail?: Maybe<Scalars["Boolean"]>
  didManualUpdate: Scalars["Boolean"]
  emailLevel?: Maybe<Scalars["Byte"]>
  feedLevel?: Maybe<Scalars["Byte"]>
  isFavorite?: Maybe<Scalars["Boolean"]>
  lastEmail?: Maybe<Scalars["Long"]>
  monthlyEmail?: Maybe<Scalars["Boolean"]>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  weeklyEmail?: Maybe<Scalars["Boolean"]>
}

export enum GameModeEnumType {
  AbilityDraft = "ABILITY_DRAFT",
  AllPick = "ALL_PICK",
  AllPickRanked = "ALL_PICK_RANKED",
  AllRandom = "ALL_RANDOM",
  AllRandomDeathMatch = "ALL_RANDOM_DEATH_MATCH",
  BalancedDraft = "BALANCED_DRAFT",
  CaptainsDraft = "CAPTAINS_DRAFT",
  CaptainsMode = "CAPTAINS_MODE",
  CompendiumMatchmaking = "COMPENDIUM_MATCHMAKING",
  Custom = "CUSTOM",
  Event = "EVENT",
  Intro = "INTRO",
  LeastPlayed = "LEAST_PLAYED",
  MidOnly = "MID_ONLY",
  Mutation = "MUTATION",
  NewPlayerPool = "NEW_PLAYER_POOL",
  None = "NONE",
  RandomDraft = "RANDOM_DRAFT",
  ReverseCaptainsMode = "REVERSE_CAPTAINS_MODE",
  SingleDraft = "SINGLE_DRAFT",
  SoloMid = "SOLO_MID",
  TheDiretide = "THE_DIRETIDE",
  TheGreeviling = "THE_GREEVILING",
  Turbo = "TURBO",
  Tutorial = "TUTORIAL",
}

export type GameModeType = {
  __typename?: "GameModeType"
  id?: Maybe<Scalars["Short"]>
  name?: Maybe<Scalars["String"]>
}

export type GameVersionType = {
  __typename?: "GameVersionType"
  asOfDateTime?: Maybe<Scalars["Long"]>
  id?: Maybe<Scalars["Short"]>
  name?: Maybe<Scalars["String"]>
}

export type GoldDetailType = {
  __typename?: "GoldDetailType"
  amount: Scalars["Int"]
  isValidForStats?: Maybe<Scalars["Boolean"]>
  npcId?: Maybe<Scalars["Int"]>
  reason?: Maybe<GoldReason>
  time: Scalars["Int"]
}

export enum GoldReason {
  Abadons = "ABADONS",
  Bounty = "BOUNTY",
  BuyBack = "BUY_BACK",
  Couriers = "COURIERS",
  Creeps = "CREEPS",
  Death = "DEATH",
  DoomDevourer = "DOOM_DEVOURER",
  Heroes = "HEROES",
  Neutral = "NEUTRAL",
  Other = "OTHER",
  Roshan = "ROSHAN",
  Sells = "SELLS",
  Structures = "STRUCTURES",
  WardDestruction = "WARD_DESTRUCTION",
}

export type GuildMemberType = {
  __typename?: "GuildMemberType"
  guild?: Maybe<GuildType>
  guildId?: Maybe<Scalars["Int"]>
  imp?: Maybe<Scalars["Int"]>
  joinDateTime?: Maybe<Scalars["Long"]>
  matchCount?: Maybe<Scalars["Int"]>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Int"]>
  winCount?: Maybe<Scalars["Int"]>
}

export type GuildType = {
  __typename?: "GuildType"
  createdDateTime?: Maybe<Scalars["Long"]>
  currentPercentile?: Maybe<Scalars["Byte"]>
  description?: Maybe<Scalars["String"]>
  flags?: Maybe<Scalars["Int"]>
  id?: Maybe<Scalars["Int"]>
  language?: Maybe<Scalars["Byte"]>
  lastUpdateDateTime?: Maybe<Scalars["Long"]>
  logo?: Maybe<Scalars["String"]>
  matches?: Maybe<Array<Maybe<MatchType>>>
  memberCount?: Maybe<Scalars["Byte"]>
  members?: Maybe<Array<Maybe<GuildMemberType>>>
  motd?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  pastWeeklyPercentile?: Maybe<Scalars["Byte"]>
  pastWeeklyRank?: Maybe<Scalars["Int"]>
  pattern?: Maybe<Scalars["Byte"]>
  points?: Maybe<Scalars["Int"]>
  primaryColor?: Maybe<Scalars["Byte"]>
  rank?: Maybe<Scalars["Byte"]>
  region?: Maybe<Scalars["Byte"]>
  requiredRank?: Maybe<Scalars["Byte"]>
  secondaryColor?: Maybe<Scalars["Byte"]>
  tag?: Maybe<Scalars["String"]>
  totalBattlePassLevels?: Maybe<Scalars["Int"]>
}

export type GuildTypeMatchesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type HealDetailType = {
  __typename?: "HealDetailType"
  attacker?: Maybe<Scalars["Short"]>
  byAbility?: Maybe<Scalars["Short"]>
  byItem?: Maybe<Scalars["Short"]>
  target?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
  value?: Maybe<Scalars["Int"]>
}

export type HeroAbilityTalentType = {
  __typename?: "HeroAbilityTalentType"
  abilityId: Scalars["Int"]
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>
  count?: Maybe<Scalars["Long"]>
  heroId: Scalars["Int"]
  position?: Maybe<MatchPlayerPositionType>
  time?: Maybe<Scalars["Long"]>
  timeAverage?: Maybe<Scalars["Decimal"]>
  week: Scalars["Int"]
  wins?: Maybe<Scalars["Long"]>
  winsAverage?: Maybe<Scalars["Decimal"]>
}

export type HeroAbilityType = {
  __typename?: "HeroAbilityType"
  ability?: Maybe<AbilityType>
  abilityId?: Maybe<Scalars["Short"]>
  gameVersionId?: Maybe<Scalars["Short"]>
  slot?: Maybe<Scalars["Byte"]>
}

export type HeroDamageDetailType = {
  __typename?: "HeroDamageDetailType"
  attacker?: Maybe<Scalars["Short"]>
  byAbility?: Maybe<Scalars["Short"]>
  byItem?: Maybe<Scalars["Short"]>
  damageType?: Maybe<Damage>
  fromIllusion?: Maybe<Scalars["Boolean"]>
  fromNpc?: Maybe<Scalars["Short"]>
  isPhysicalAttack?: Maybe<Scalars["Boolean"]>
  isSourceMainHero?: Maybe<Scalars["Boolean"]>
  isTargetMainHero?: Maybe<Scalars["Boolean"]>
  target?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
  toIllusion?: Maybe<Scalars["Boolean"]>
  toNpc?: Maybe<Scalars["Short"]>
  value: Scalars["Int"]
}

export type HeroDotaPlusLeaderboardRankType = {
  __typename?: "HeroDotaPlusLeaderboardRankType"
  createdDateTime?: Maybe<Scalars["Long"]>
  heroId?: Maybe<Scalars["Short"]>
  level?: Maybe<Scalars["Byte"]>
  steamAccount?: Maybe<SteamAccountType>
  steamId?: Maybe<Scalars["Long"]>
  totalActions?: Maybe<Scalars["Long"]>
}

export type HeroDryadType = {
  __typename?: "HeroDryadType"
  heroId?: Maybe<Scalars["Short"]>
  matchCountVs?: Maybe<Scalars["Long"]>
  matchCountWith?: Maybe<Scalars["Long"]>
  vs?: Maybe<Array<Maybe<HeroStatsHeroDryadType>>>
  with?: Maybe<Array<Maybe<HeroStatsHeroDryadType>>>
}

export type HeroGuideListType = {
  __typename?: "HeroGuideListType"
  /** Guides are auto-generated of games that are successful in a game. */
  guides?: Maybe<Array<Maybe<HeroGuideType>>>
  heroId?: Maybe<Scalars["Short"]>
  matchCount?: Maybe<Scalars["Int"]>
}

export type HeroGuideListTypeGuidesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type HeroGuideType = {
  __typename?: "HeroGuideType"
  createdDateTime?: Maybe<Scalars["Long"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  matchId?: Maybe<Scalars["Long"]>
  matchPlayer?: Maybe<MatchPlayerType>
  steamAccountId?: Maybe<Scalars["Long"]>
}

export type HeroHighPerformanceMatchObjectType = {
  __typename?: "HeroHighPerformanceMatchObjectType"
  endDateTime?: Maybe<Scalars["Long"]>
  imp: Scalars["Int"]
  matchId?: Maybe<Scalars["Long"]>
}

export type HeroHighPerformancePlayerObjectType = {
  __typename?: "HeroHighPerformancePlayerObjectType"
  endDateTime?: Maybe<Scalars["Long"]>
  imp: Scalars["Int"]
  playerName: Scalars["String"]
  steamId?: Maybe<Scalars["Long"]>
}

export type HeroHighPerformanceRampageObjectType = {
  __typename?: "HeroHighPerformanceRampageObjectType"
  endDateTime?: Maybe<Scalars["Long"]>
  matchId?: Maybe<Scalars["Long"]>
  playerName: Scalars["String"]
  steamId?: Maybe<Scalars["Long"]>
  time: Scalars["Int"]
}

export type HeroHighPerformanceType = {
  __typename?: "HeroHighPerformanceType"
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>
  heroId: Scalars["Int"]
  items?: Maybe<HeroPurchasePatternType>
  matches?: Maybe<Array<Maybe<HeroHighPerformanceMatchObjectType>>>
  players?: Maybe<Array<Maybe<HeroHighPerformancePlayerObjectType>>>
  position?: Maybe<MatchPlayerPositionType>
  rampages?: Maybe<Array<Maybe<HeroHighPerformanceRampageObjectType>>>
  week: Scalars["Int"]
}

export type HeroItemBootPurchaseObjectType = {
  __typename?: "HeroItemBootPurchaseObjectType"
  activationTime?: Maybe<Scalars["Long"]>
  activations?: Maybe<Scalars["Long"]>
  activationsAverage?: Maybe<Scalars["Decimal"]>
  activationsTimeAverage?: Maybe<Scalars["Decimal"]>
  assists?: Maybe<Scalars["Long"]>
  assistsAverage?: Maybe<Scalars["Decimal"]>
  count?: Maybe<Scalars["Long"]>
  deaths?: Maybe<Scalars["Long"]>
  deathsAverage?: Maybe<Scalars["Decimal"]>
  goldEarned?: Maybe<Scalars["Long"]>
  goldEarnedAverage?: Maybe<Scalars["Decimal"]>
  instance: Scalars["Int"]
  itemId: Scalars["Int"]
  kills?: Maybe<Scalars["Long"]>
  killsAverage?: Maybe<Scalars["Decimal"]>
  time?: Maybe<Scalars["Long"]>
  timeAverage?: Maybe<Scalars["Decimal"]>
  winAverage?: Maybe<Scalars["Decimal"]>
  wins?: Maybe<Scalars["Long"]>
  xp?: Maybe<Scalars["Long"]>
  xpAverage?: Maybe<Scalars["Decimal"]>
}

export type HeroItemBootPurchaseType = {
  __typename?: "HeroItemBootPurchaseType"
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>
  count?: Maybe<Scalars["Long"]>
  events?: Maybe<Array<Maybe<HeroItemBootPurchaseObjectType>>>
  heroId: Scalars["Int"]
  position?: Maybe<MatchPlayerPositionType>
  week: Scalars["Int"]
}

export type HeroItemPurchaseObjectType = {
  __typename?: "HeroItemPurchaseObjectType"
  count?: Maybe<Scalars["Long"]>
  instance: Scalars["Int"]
  itemId: Scalars["Int"]
  time?: Maybe<Scalars["Long"]>
  wins?: Maybe<Scalars["Long"]>
  winsAverage?: Maybe<Scalars["Decimal"]>
}

export type HeroItemPurchaseType = {
  __typename?: "HeroItemPurchaseType"
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>
  count?: Maybe<Scalars["Long"]>
  events?: Maybe<Array<Maybe<HeroItemPurchaseObjectType>>>
  heroId: Scalars["Int"]
  position?: Maybe<MatchPlayerPositionType>
  week: Scalars["Int"]
}

export type HeroItemStartingPurchaseObjectType = {
  __typename?: "HeroItemStartingPurchaseObjectType"
  count?: Maybe<Scalars["Long"]>
  instance: Scalars["Int"]
  itemId: Scalars["Int"]
  wasGiven: Scalars["Boolean"]
  wins?: Maybe<Scalars["Long"]>
  winsAverage?: Maybe<Scalars["Decimal"]>
}

export type HeroItemStartingPurchaseType = {
  __typename?: "HeroItemStartingPurchaseType"
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>
  count?: Maybe<Scalars["Long"]>
  events?: Maybe<Array<Maybe<HeroItemStartingPurchaseObjectType>>>
  heroId: Scalars["Int"]
  position?: Maybe<MatchPlayerPositionType>
  week: Scalars["Int"]
}

export type HeroLanguageType = {
  __typename?: "HeroLanguageType"
  displayName?: Maybe<Scalars["String"]>
  hype?: Maybe<Scalars["String"]>
  lore?: Maybe<Scalars["String"]>
}

export type HeroMatchupType = {
  __typename?: "HeroMatchupType"
  advantage?: Maybe<Array<Maybe<HeroDryadType>>>
  disadvantage?: Maybe<Array<Maybe<HeroDryadType>>>
}

export type HeroMetaTrendType = {
  __typename?: "HeroMetaTrendType"
  ban?: Maybe<Array<Maybe<Scalars["Long"]>>>
  heroId: Scalars["Int"]
  pick?: Maybe<Array<Maybe<Scalars["Long"]>>>
  win?: Maybe<Array<Maybe<Scalars["Long"]>>>
}

export type HeroPositionDetailType = {
  __typename?: "HeroPositionDetailType"
  assists?: Maybe<Scalars["Decimal"]>
  count?: Maybe<Scalars["Long"]>
  cs?: Maybe<Scalars["Decimal"]>
  deaths?: Maybe<Scalars["Decimal"]>
  dn?: Maybe<Scalars["Decimal"]>
  heroDamage?: Maybe<Scalars["Decimal"]>
  kills?: Maybe<Scalars["Decimal"]>
  position?: Maybe<MatchPlayerPositionType>
  towerDamage?: Maybe<Scalars["Decimal"]>
  wins?: Maybe<Scalars["Decimal"]>
}

export type HeroPositionTimeDetailAverageObjectType = {
  __typename?: "HeroPositionTimeDetailAverageObjectType"
  abilityCasts?: Maybe<Scalars["Decimal"]>
  ancients?: Maybe<Scalars["Decimal"]>
  apm?: Maybe<Scalars["Decimal"]>
  assists?: Maybe<Scalars["Decimal"]>
  attackDamage?: Maybe<Scalars["Decimal"]>
  buybackCount?: Maybe<Scalars["Decimal"]>
  campsStacked?: Maybe<Scalars["Decimal"]>
  castDamage?: Maybe<Scalars["Decimal"]>
  casts?: Maybe<Scalars["Decimal"]>
  comeBackLost?: Maybe<Scalars["Decimal"]>
  comeBackWon?: Maybe<Scalars["Decimal"]>
  courierKills?: Maybe<Scalars["Decimal"]>
  cs?: Maybe<Scalars["Decimal"]>
  damage?: Maybe<Scalars["Decimal"]>
  damageReceived?: Maybe<Scalars["Decimal"]>
  deaths?: Maybe<Scalars["Decimal"]>
  disableCount?: Maybe<Scalars["Decimal"]>
  disableDuration?: Maybe<Scalars["Decimal"]>
  dn?: Maybe<Scalars["Decimal"]>
  godLike?: Maybe<Scalars["Decimal"]>
  goldFed?: Maybe<Scalars["Decimal"]>
  goldLost?: Maybe<Scalars["Decimal"]>
  healingAllies?: Maybe<Scalars["Decimal"]>
  healingItemAllies?: Maybe<Scalars["Decimal"]>
  healingItemSelf?: Maybe<Scalars["Decimal"]>
  healingSelf?: Maybe<Scalars["Decimal"]>
  heroDamage?: Maybe<Scalars["Decimal"]>
  invisibleCount?: Maybe<Scalars["Decimal"]>
  kDAAverage?: Maybe<Scalars["Decimal"]>
  killContributionAverage?: Maybe<Scalars["Decimal"]>
  kills?: Maybe<Scalars["Decimal"]>
  level?: Maybe<Scalars["Decimal"]>
  magicalDamage?: Maybe<Scalars["Decimal"]>
  magicalDamageReceived?: Maybe<Scalars["Decimal"]>
  magicalItemDamage?: Maybe<Scalars["Decimal"]>
  matchCount?: Maybe<Scalars["Long"]>
  mvp?: Maybe<Scalars["Decimal"]>
  networth?: Maybe<Scalars["Decimal"]>
  neutrals?: Maybe<Scalars["Decimal"]>
  physicalDamage?: Maybe<Scalars["Decimal"]>
  physicalDamageReceived?: Maybe<Scalars["Decimal"]>
  physicalItemDamage?: Maybe<Scalars["Decimal"]>
  pureDamage?: Maybe<Scalars["Decimal"]>
  pureDamageReceived?: Maybe<Scalars["Decimal"]>
  purgeModifiers?: Maybe<Scalars["Decimal"]>
  rampage?: Maybe<Scalars["Decimal"]>
  remainingMatchCount?: Maybe<Scalars["Int"]>
  runeBounty?: Maybe<Scalars["Decimal"]>
  runePower?: Maybe<Scalars["Decimal"]>
  slowCount?: Maybe<Scalars["Decimal"]>
  slowDuration?: Maybe<Scalars["Decimal"]>
  stompLost?: Maybe<Scalars["Decimal"]>
  stompWon?: Maybe<Scalars["Decimal"]>
  stunCount?: Maybe<Scalars["Decimal"]>
  stunDuration?: Maybe<Scalars["Decimal"]>
  supportGold?: Maybe<Scalars["Decimal"]>
  teamKills?: Maybe<Scalars["Decimal"]>
  time: Scalars["Int"]
  topCore?: Maybe<Scalars["Decimal"]>
  topSupport?: Maybe<Scalars["Decimal"]>
  towerDamage?: Maybe<Scalars["Decimal"]>
  tripleKill?: Maybe<Scalars["Decimal"]>
  ultraKill?: Maybe<Scalars["Decimal"]>
  weakenCount?: Maybe<Scalars["Decimal"]>
  weakenDuration?: Maybe<Scalars["Decimal"]>
  wins?: Maybe<Scalars["Decimal"]>
  xp?: Maybe<Scalars["Decimal"]>
  xpFed?: Maybe<Scalars["Decimal"]>
}

export type HeroPositionTimeDetailAverageType = {
  __typename?: "HeroPositionTimeDetailAverageType"
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>
  events?: Maybe<Array<Maybe<HeroPositionTimeDetailAverageObjectType>>>
  heroId: Scalars["Short"]
  position?: Maybe<MatchPlayerPositionType>
  week: Scalars["Int"]
}

export type HeroPurchasePatternType = {
  __typename?: "HeroPurchasePatternType"
  earlyGame?: Maybe<HeroItemPurchaseType>
  lateGame?: Maybe<HeroItemPurchaseType>
  midGame?: Maybe<HeroItemPurchaseType>
  startingItems?: Maybe<HeroItemStartingPurchaseType>
}

export type HeroRatingObjectType = {
  __typename?: "HeroRatingObjectType"
  banRate?: Maybe<Scalars["Decimal"]>
  heroId1: Scalars["Int"]
  heroId2?: Maybe<Scalars["Int"]>
  heroId3?: Maybe<Scalars["Int"]>
  pickRate?: Maybe<Scalars["Decimal"]>
  winRate?: Maybe<Scalars["Decimal"]>
}

export type HeroRatingType = {
  __typename?: "HeroRatingType"
  dryad?: Maybe<Array<Maybe<HeroRatingObjectType>>>
  single?: Maybe<Array<Maybe<HeroRatingObjectType>>>
}

export type HeroRoleType = {
  __typename?: "HeroRoleType"
  level?: Maybe<Scalars["Short"]>
  roleId?: Maybe<Scalars["Short"]>
}

export type HeroStatType = {
  __typename?: "HeroStatType"
  agilityBase?: Maybe<Scalars["Float"]>
  agilityGain?: Maybe<Scalars["Float"]>
  attackAcquisitionRange?: Maybe<Scalars["Float"]>
  attackAnimationPoint?: Maybe<Scalars["Float"]>
  attackRange?: Maybe<Scalars["Float"]>
  attackRate?: Maybe<Scalars["Float"]>
  attackType?: Maybe<Scalars["String"]>
  cMEnabled?: Maybe<Scalars["Boolean"]>
  complexity?: Maybe<Scalars["Byte"]>
  enabled?: Maybe<Scalars["Boolean"]>
  heroUnlockOrder?: Maybe<Scalars["Float"]>
  hpBarOffset?: Maybe<Scalars["Float"]>
  hpRegen?: Maybe<Scalars["Float"]>
  intelligenceBase?: Maybe<Scalars["Float"]>
  intelligenceGain?: Maybe<Scalars["Float"]>
  moveSpeed?: Maybe<Scalars["Float"]>
  moveTurnRate?: Maybe<Scalars["Float"]>
  mpRegen?: Maybe<Scalars["Float"]>
  newPlayerEnabled?: Maybe<Scalars["Boolean"]>
  primaryAttribute?: Maybe<Scalars["String"]>
  startingArmor?: Maybe<Scalars["Float"]>
  startingDamageMax?: Maybe<Scalars["Float"]>
  startingDamageMin?: Maybe<Scalars["Float"]>
  startingMagicArmor?: Maybe<Scalars["Float"]>
  strengthBase?: Maybe<Scalars["Float"]>
  strengthGain?: Maybe<Scalars["Float"]>
  team?: Maybe<Scalars["Boolean"]>
  visionDaytimeRange?: Maybe<Scalars["Float"]>
  visionNighttimeRange?: Maybe<Scalars["Float"]>
}

export type HeroStatsHeroDryadType = {
  __typename?: "HeroStatsHeroDryadType"
  assists?: Maybe<Scalars["Long"]>
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>
  count?: Maybe<Scalars["Long"]>
  cs?: Maybe<Scalars["Long"]>
  deaths?: Maybe<Scalars["Long"]>
  dn?: Maybe<Scalars["Long"]>
  duration?: Maybe<Scalars["Long"]>
  firstBloodTime?: Maybe<Scalars["Long"]>
  goldEarned?: Maybe<Scalars["Long"]>
  heroDamage?: Maybe<Scalars["Long"]>
  heroHealing?: Maybe<Scalars["Long"]>
  heroId1?: Maybe<Scalars["Short"]>
  heroId2?: Maybe<Scalars["Short"]>
  kills?: Maybe<Scalars["Long"]>
  level?: Maybe<Scalars["Long"]>
  networth?: Maybe<Scalars["Long"]>
  synergy?: Maybe<Scalars["Decimal"]>
  towerDamage?: Maybe<Scalars["Long"]>
  week?: Maybe<Scalars["Int"]>
  winRateHeroId1?: Maybe<Scalars["Decimal"]>
  winRateHeroId2?: Maybe<Scalars["Decimal"]>
  wins?: Maybe<Scalars["Long"]>
  winsAverage?: Maybe<Scalars["Decimal"]>
  xp?: Maybe<Scalars["Long"]>
}

export type HeroStatsQuery = {
  __typename?: "HeroStatsQuery"
  guide?: Maybe<Array<Maybe<HeroGuideListType>>>
  /** This is used on the Hero page to show the comparison of skill with the selected hero with other heroes.  It includes our Synergy and our Advantage formulas to ensure that a hero with a high win rate isn't simply just on the top of all the fields. */
  heroVsHeroMatchup?: Maybe<HeroMatchupType>
  /** This call is used in Hero Of the Day.  It shows recent Rampages, High Performance and Good Players on the selected hero. */
  highPerformance?: Maybe<HeroHighPerformanceType>
  /** The purchase Item Components for a Hero's Boots.  Tracks things like activations or uses throughout the game. */
  itemBootPurchase?: Maybe<HeroItemBootPurchaseType>
  /** Returns the items purchased for the selected hero. Adjusting the time adjusts the purchase amount. Shows win rate by item timings. */
  itemFullPurchase?: Maybe<HeroItemPurchaseType>
  /** This snapshots all items in the inventory of a hero at -00:30.   It tracks if an item was given or purchased. */
  itemStartingPurchase?: Maybe<HeroItemStartingPurchaseType>
  /** Returns back a list of the hero matchups, showing how that hero's win rate is affected with or against other heroes. */
  matchUp?: Maybe<Array<Maybe<HeroDryadType>>>
  /** Used on the Heroes page, for determining popular hero trends. */
  metaTrend?: Maybe<Array<Maybe<HeroMetaTrendType>>>
  /** Hero Data and statistics listed by what lane the hero plays in. */
  position?: Maybe<Array<Maybe<HeroPositionDetailType>>>
  /** Used in STRATZ Hero Page. Includes Starting items and full items based in groupings of 0-14 minutes, 15-34 minutes and 35+ */
  purchasePattern?: Maybe<HeroPurchasePatternType>
  /** Used on the Heroes page, includes a small subset of Single Heroes, Dryads and Triads.  Includes Win Rate, Pick Rate, Ban Rate. */
  ratings?: Maybe<HeroRatingType>
  /** Detailed output of data per minute for each hero. */
  stats?: Maybe<Array<Maybe<HeroPositionTimeDetailAverageType>>>
  /** This is used on the Hero page to show the comparison of all Hero Talents with the selected hero. */
  talent?: Maybe<Array<Maybe<HeroAbilityTalentType>>>
  /** Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id. */
  winDay?: Maybe<Array<Maybe<HeroWinDayType>>>
  /** Returns the data by game version showing the amount of matches and the amount of wins by hero id. */
  winGameVersion?: Maybe<Array<Maybe<HeroWinGameVersionType>>>
  /** Returns the last 12 hours by hour showing the amount of matches and the amount of wins by hero id. */
  winHour?: Maybe<Array<Maybe<HeroWinHourType>>>
  /** Returns the data by month showing the amount of matches and the amount of wins by hero id. */
  winMonth?: Maybe<Array<Maybe<HeroWinMonthType>>>
  /** Returns the last 12 weeks by week showing the amount of matches and the amount of wins by hero id. */
  winWeek?: Maybe<Array<Maybe<HeroWinWeekType>>>
}

export type HeroStatsQueryGuideArgs = {
  againstHeroId?: InputMaybe<Scalars["Short"]>
  heroId?: InputMaybe<Scalars["Short"]>
  isPro?: InputMaybe<Scalars["Boolean"]>
  positionId?: InputMaybe<MatchPlayerPositionType>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
  withHeroId?: InputMaybe<Scalars["Short"]>
}

export type HeroStatsQueryHeroVsHeroMatchupArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  matchLimit?: InputMaybe<Scalars["Int"]>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryHighPerformanceArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryItemBootPurchaseArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryItemFullPurchaseArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  matchLimit?: InputMaybe<Scalars["Int"]>
  maxTime?: InputMaybe<Scalars["Int"]>
  minTime?: InputMaybe<Scalars["Int"]>
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryItemStartingPurchaseArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryMatchUpArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  matchLimit?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Scalars["Byte"]>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryMetaTrendArgs = {
  day?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryPositionArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  maxTime?: InputMaybe<Scalars["Int"]>
  minTime?: InputMaybe<Scalars["Int"]>
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryPurchasePatternArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryRatingsArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroIds: Scalars["Short"]
  positionIds?: InputMaybe<Scalars["Byte"]>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryStatsArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  groupByBracket?: InputMaybe<Scalars["Boolean"]>
  groupByPosition?: InputMaybe<Scalars["Boolean"]>
  groupByTime?: InputMaybe<Scalars["Boolean"]>
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  maxTime?: InputMaybe<Scalars["Int"]>
  minTime?: InputMaybe<Scalars["Int"]>
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryTalentArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  week?: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryWinDayArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  take?: InputMaybe<Scalars["Int"]>
}

export type HeroStatsQueryWinGameVersionArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type HeroStatsQueryWinHourArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  take?: InputMaybe<Scalars["Int"]>
}

export type HeroStatsQueryWinMonthArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type HeroStatsQueryWinWeekArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  take?: InputMaybe<Scalars["Int"]>
}

export type HeroTalentType = {
  __typename?: "HeroTalentType"
  abilityId?: Maybe<Scalars["Short"]>
  slot?: Maybe<Scalars["Byte"]>
}

export type HeroType = {
  __typename?: "HeroType"
  abilities?: Maybe<Array<Maybe<HeroAbilityType>>>
  aliases?: Maybe<Array<Maybe<Scalars["String"]>>>
  displayName?: Maybe<Scalars["String"]>
  gameVersionId?: Maybe<Scalars["Short"]>
  id?: Maybe<Scalars["Short"]>
  language?: Maybe<HeroLanguageType>
  name?: Maybe<Scalars["String"]>
  roles?: Maybe<Array<Maybe<HeroRoleType>>>
  shortName?: Maybe<Scalars["String"]>
  stats?: Maybe<HeroStatType>
  talents?: Maybe<Array<Maybe<HeroTalentType>>>
}

export type HeroWinDayType = {
  __typename?: "HeroWinDayType"
  day: Scalars["Long"]
  heroId: Scalars["Short"]
  matchCount: Scalars["Int"]
  winCount: Scalars["Int"]
}

export type HeroWinGameVersionType = {
  __typename?: "HeroWinGameVersionType"
  durationMinute: Scalars["Byte"]
  gameVersionId: Scalars["Short"]
  heroId: Scalars["Short"]
  matchCount: Scalars["Int"]
  winCount: Scalars["Int"]
}

export type HeroWinHourType = {
  __typename?: "HeroWinHourType"
  heroId: Scalars["Short"]
  hour: Scalars["Long"]
  matchCount: Scalars["Int"]
  winCount: Scalars["Int"]
}

export type HeroWinMonthType = {
  __typename?: "HeroWinMonthType"
  durationMinute: Scalars["Byte"]
  heroId: Scalars["Short"]
  matchCount: Scalars["Int"]
  month: Scalars["Long"]
  winCount: Scalars["Int"]
}

export type HeroWinWeekType = {
  __typename?: "HeroWinWeekType"
  durationMinute: Scalars["Byte"]
  heroId: Scalars["Short"]
  matchCount: Scalars["Int"]
  week: Scalars["Long"]
  winCount: Scalars["Int"]
}

export type HomepageHeroDryadType = {
  __typename?: "HomepageHeroDryadType"
  bracketBasic?: Maybe<RankBracketHeroTimeDetail>
  comparisonHeroBaseWinRate?: Maybe<Scalars["Decimal"]>
  comparisonHeroId?: Maybe<Scalars["Short"]>
  mainHeroId?: Maybe<Scalars["Short"]>
  matchCount?: Maybe<Scalars["Long"]>
  synergy?: Maybe<Scalars["Decimal"]>
  winCount?: Maybe<Scalars["Long"]>
  winsAverage?: Maybe<Scalars["Decimal"]>
}

export type HomepageHeroSynergyType = {
  __typename?: "HomepageHeroSynergyType"
  heroDryads?: Maybe<Array<Maybe<HomepageHeroDryadType>>>
  mainHeroBaseWinRate?: Maybe<Scalars["Decimal"]>
  mainHeroId?: Maybe<Scalars["Short"]>
}

export type ImpGeneratorMatchPlayerType = {
  __typename?: "ImpGeneratorMatchPlayerType"
  events?: Maybe<Array<Maybe<Array<Maybe<ImpGeneratorPlayerEventType>>>>>
  impValues?: Maybe<Array<Maybe<Array<Maybe<Scalars["Int"]>>>>>
  winChance?: Maybe<Array<Maybe<Scalars["Float"]>>>
  winRateByPlayerMinuteValues?: Maybe<Array<Maybe<Array<Maybe<Scalars["Float"]>>>>>
}

export type ImpGeneratorPlayerEventRequestType = {
  assists: Scalars["UShort"]
  cs: Scalars["UShort"]
  damageReceived: Scalars["Int"]
  deaths: Scalars["UShort"]
  dn: Scalars["UShort"]
  healingAllies: Scalars["Int"]
  kills: Scalars["UShort"]
  level: Scalars["Byte"]
  magicalDamage: Scalars["Int"]
  neutrals: Scalars["Int"]
  physicalDamage: Scalars["Int"]
  pureDamage: Scalars["Int"]
  runePower: Scalars["Int"]
  time: Scalars["Byte"]
}

export type ImpGeneratorPlayerEventType = {
  __typename?: "ImpGeneratorPlayerEventType"
  assists?: Maybe<Scalars["UShort"]>
  cs?: Maybe<Scalars["UShort"]>
  damageReceived?: Maybe<Scalars["Int"]>
  deaths?: Maybe<Scalars["UShort"]>
  dn?: Maybe<Scalars["UShort"]>
  healingAllies?: Maybe<Scalars["Int"]>
  kills?: Maybe<Scalars["UShort"]>
  level?: Maybe<Scalars["Byte"]>
  magicalDamage?: Maybe<Scalars["Int"]>
  neutrals?: Maybe<Scalars["Int"]>
  physicalDamage?: Maybe<Scalars["Int"]>
  pureDamage?: Maybe<Scalars["Int"]>
  runePower?: Maybe<Scalars["Int"]>
  time?: Maybe<Scalars["Byte"]>
}

export type ImpGeneratorPlayerRequestType = {
  bracket: RankBracket
  events: Array<InputMaybe<ImpGeneratorPlayerEventRequestType>>
  heroId: Scalars["Short"]
  position: MatchPlayerPositionType
}

export type ImpGeneratorPlayerType = {
  __typename?: "ImpGeneratorPlayerType"
  events?: Maybe<Array<Maybe<ImpGeneratorPlayerEventType>>>
  impValues?: Maybe<Array<Maybe<Array<Maybe<Scalars["Int"]>>>>>
  winChance?: Maybe<Array<Maybe<Scalars["Float"]>>>
  winRateByPlayerMinuteValues?: Maybe<Array<Maybe<Array<Maybe<Scalars["Float"]>>>>>
}

export type ImpGeneratorRequestType = {
  bans: Array<InputMaybe<Scalars["Short"]>>
  isTurbo: Scalars["Boolean"]
  players: Array<InputMaybe<ImpGeneratorPlayerRequestType>>
}

export type ImpQuery = {
  __typename?: "ImpQuery"
  /** Returns details about all players in a specific match and details regarding Imp */
  matchGenerator?: Maybe<ImpGeneratorMatchPlayerType>
  /** Returns details about a specific player in a game with certains events. */
  playerGenerator?: Maybe<ImpGeneratorPlayerType>
}

export type ImpQueryMatchGeneratorArgs = {
  matchId: Scalars["Long"]
}

export type ImpQueryPlayerGeneratorArgs = {
  request: ImpGeneratorRequestType
}

export type ImportPickBanType = {
  heroId?: InputMaybe<Scalars["Short"]>
  isPick: Scalars["Boolean"]
  isRadiant?: InputMaybe<Scalars["Boolean"]>
  order?: InputMaybe<Scalars["Byte"]>
  playerSlot?: InputMaybe<Scalars["Byte"]>
  time?: InputMaybe<Scalars["Byte"]>
  wasBannedSuccessfully?: InputMaybe<Scalars["Boolean"]>
}

export type InventoryObjectType = {
  __typename?: "InventoryObjectType"
  charges?: Maybe<Scalars["Int"]>
  itemId?: Maybe<Scalars["Short"]>
  secondaryCharges?: Maybe<Scalars["Int"]>
}

export type InventoryType = {
  __typename?: "InventoryType"
  backPack0?: Maybe<InventoryObjectType>
  backPack1?: Maybe<InventoryObjectType>
  backPack2?: Maybe<InventoryObjectType>
  item0?: Maybe<InventoryObjectType>
  item1?: Maybe<InventoryObjectType>
  item2?: Maybe<InventoryObjectType>
  item3?: Maybe<InventoryObjectType>
  item4?: Maybe<InventoryObjectType>
  item5?: Maybe<InventoryObjectType>
  neutral0?: Maybe<InventoryObjectType>
  teleport0?: Maybe<InventoryObjectType>
  time: Scalars["Int"]
}

export type ItemAttributeType = {
  __typename?: "ItemAttributeType"
  name?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
}

export type ItemComponentType = {
  __typename?: "ItemComponentType"
  componentId?: Maybe<Scalars["Short"]>
  index?: Maybe<Scalars["Byte"]>
}

export type ItemLanguageType = {
  __typename?: "ItemLanguageType"
  attributes?: Maybe<Array<Maybe<Scalars["String"]>>>
  description?: Maybe<Array<Maybe<Scalars["String"]>>>
  displayName?: Maybe<Scalars["String"]>
  lore?: Maybe<Array<Maybe<Scalars["String"]>>>
  notes?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type ItemPurchaseType = {
  __typename?: "ItemPurchaseType"
  itemId?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
}

export type ItemStatType = {
  __typename?: "ItemStatType"
  aliases?: Maybe<Scalars["String"]>
  behavior?: Maybe<Scalars["Long"]>
  castPoint?: Maybe<Array<Maybe<Scalars["Float"]>>>
  castRange?: Maybe<Array<Maybe<Scalars["Int"]>>>
  channelTime?: Maybe<Array<Maybe<Scalars["Float"]>>>
  cooldown?: Maybe<Array<Maybe<Scalars["Float"]>>>
  cost?: Maybe<Scalars["Int"]>
  fightRecapLevel?: Maybe<Scalars["Byte"]>
  initialCharges?: Maybe<Scalars["Short"]>
  initialStock?: Maybe<Scalars["Short"]>
  initialStockTime?: Maybe<Scalars["Short"]>
  isAlertable?: Maybe<Scalars["Boolean"]>
  isDisplayCharges?: Maybe<Scalars["Boolean"]>
  isDroppable?: Maybe<Scalars["Boolean"]>
  isHideCharges?: Maybe<Scalars["Boolean"]>
  isPermanent?: Maybe<Scalars["Boolean"]>
  isPurchasable?: Maybe<Scalars["Boolean"]>
  isRecipe?: Maybe<Scalars["Boolean"]>
  isRequiresCharges?: Maybe<Scalars["Boolean"]>
  isSellable?: Maybe<Scalars["Boolean"]>
  isSideShop?: Maybe<Scalars["Boolean"]>
  isStackable?: Maybe<Scalars["Boolean"]>
  isSupport?: Maybe<Scalars["Boolean"]>
  isTempestDoubleClonable?: Maybe<Scalars["Boolean"]>
  itemResult?: Maybe<Scalars["Short"]>
  manaCost?: Maybe<Array<Maybe<Scalars["Float"]>>>
  needsComponents?: Maybe<Scalars["Boolean"]>
  quality?: Maybe<Scalars["String"]>
  sharedCooldown?: Maybe<Scalars["String"]>
  shopTags?: Maybe<Scalars["String"]>
  stockMax?: Maybe<Scalars["Short"]>
  stockTime?: Maybe<Scalars["Int"]>
  unitTargetFlags?: Maybe<Scalars["Long"]>
  unitTargetTeam?: Maybe<Scalars["Long"]>
  unitTargetType?: Maybe<Scalars["Long"]>
  upgradeItem?: Maybe<Scalars["Short"]>
  upgradeRecipe?: Maybe<Scalars["Short"]>
}

export type ItemType = {
  __typename?: "ItemType"
  attributes?: Maybe<Array<Maybe<ItemAttributeType>>>
  components?: Maybe<Array<Maybe<ItemComponentType>>>
  displayName?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Short"]>
  image?: Maybe<Scalars["String"]>
  isSupportFullItem?: Maybe<Scalars["Boolean"]>
  language?: Maybe<ItemLanguageType>
  name?: Maybe<Scalars["String"]>
  shortName?: Maybe<Scalars["String"]>
  stat?: Maybe<ItemStatType>
}

export type ItemUsedEventType = {
  __typename?: "ItemUsedEventType"
  attacker?: Maybe<Scalars["Short"]>
  itemId?: Maybe<Scalars["Short"]>
  target?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
}

export type KillDetailType = {
  __typename?: "KillDetailType"
  assist?: Maybe<Array<Maybe<Scalars["Int"]>>>
  attacker?: Maybe<Scalars["Short"]>
  byAbility?: Maybe<Scalars["Short"]>
  byItem?: Maybe<Scalars["Short"]>
  gold?: Maybe<Scalars["Int"]>
  isFromIllusion?: Maybe<Scalars["Boolean"]>
  isGank?: Maybe<Scalars["Boolean"]>
  isInvisible?: Maybe<Scalars["Boolean"]>
  isRuneEffected?: Maybe<Scalars["Boolean"]>
  isSmoke?: Maybe<Scalars["Boolean"]>
  isSolo?: Maybe<Scalars["Boolean"]>
  isTpRecently?: Maybe<Scalars["Boolean"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  target?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
  xp?: Maybe<Scalars["Int"]>
}

export enum LaneOutcomeEnums {
  DireStomp = "DIRE_STOMP",
  DireVictory = "DIRE_VICTORY",
  RadiantStomp = "RADIANT_STOMP",
  RadiantVictory = "RADIANT_VICTORY",
  Tie = "TIE",
}

export enum Language {
  Brazilian = "BRAZILIAN",
  Bulgarian = "BULGARIAN",
  Czech = "CZECH",
  Danish = "DANISH",
  Dutch = "DUTCH",
  English = "ENGLISH",
  Finnish = "FINNISH",
  French = "FRENCH",
  German = "GERMAN",
  Greek = "GREEK",
  Hungarian = "HUNGARIAN",
  Italian = "ITALIAN",
  Japanese = "JAPANESE",
  Korean = "KOREAN",
  Koreana = "KOREANA",
  Norwegian = "NORWEGIAN",
  Polish = "POLISH",
  Portuguese = "PORTUGUESE",
  Romanian = "ROMANIAN",
  Russian = "RUSSIAN",
  Spanish = "SPANISH",
  Swedish = "SWEDISH",
  SChinese = "S_CHINESE",
  Thai = "THAI",
  Turkish = "TURKISH",
  TChinese = "T_CHINESE",
  Ukrainian = "UKRAINIAN",
}

export type LanguageType = {
  __typename?: "LanguageType"
  id: Scalars["Byte"]
  languageCode?: Maybe<Scalars["String"]>
  languageName?: Maybe<Scalars["String"]>
}

export type LastHitDetailType = {
  __typename?: "LastHitDetailType"
  attacker?: Maybe<Scalars["Short"]>
  byAbility?: Maybe<Scalars["Short"]>
  byItem?: Maybe<Scalars["Short"]>
  gold?: Maybe<Scalars["Int"]>
  isAncient?: Maybe<Scalars["Boolean"]>
  isCreep?: Maybe<Scalars["Boolean"]>
  isFromIllusion?: Maybe<Scalars["Boolean"]>
  isNeutral?: Maybe<Scalars["Boolean"]>
  mapLocation?: Maybe<MapLocationEnums>
  npcId?: Maybe<Scalars["Short"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
  xp?: Maybe<Scalars["Int"]>
}

export enum LeaderboardDivision {
  Americas = "AMERICAS",
  China = "CHINA",
  Europe = "EUROPE",
  SeAsia = "SE_ASIA",
}

export type LeaderboardQuery = {
  __typename?: "LeaderboardQuery"
  /** Gets the current leaderboard for Battle Pass levels. */
  battlePass?: Maybe<PlayerBattlePassResponseType>
  /** Gets the current leaderboard for all coaches by level. */
  coaching?: Maybe<PlayerCoachingLeaderboardResponseType>
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  dotaPlus?: Maybe<PlayerHeroDotaPlusLeaderboardRankResponseType>
  /** Gets the top player of DotaPlus order by Level and Time Achived. */
  dotaPlusTopLevels?: Maybe<Array<Maybe<HeroDotaPlusLeaderboardRankType>>>
  /** Show amount of active and expired DotaPlus users by Week */
  dotaPlusWeek?: Maybe<Array<Maybe<DotaPlusWeekType>>>
  /** Gets the current leaderboard for all guilds by points. */
  guild?: Maybe<Array<Maybe<GuildType>>>
  /** Gets the current leaderboard for all players by a specific Hero, order by IMP. */
  hero?: Maybe<Array<Maybe<PlayerLeaderBoardByHeroType>>>
  /** Returns the list of the current season leaderboard. */
  season?: Maybe<Array<Maybe<SteamAccountSeasonActiveLeaderboardRankType>>>
}

export type LeaderboardQueryBattlePassArgs = {
  eventId?: InputMaybe<Scalars["Byte"]>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type LeaderboardQueryCoachingArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type LeaderboardQueryDotaPlusArgs = {
  heroId?: InputMaybe<Scalars["Short"]>
  level?: InputMaybe<Scalars["Byte"]>
  orderBy?: InputMaybe<FilterLeaderboardOrder>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type LeaderboardQueryGuildArgs = {
  request?: InputMaybe<FilterLeaderboardGuildRequestType>
}

export type LeaderboardQueryHeroArgs = {
  request?: InputMaybe<FilterLeaderboardHeroRequestType>
}

export type LeaderboardQuerySeasonArgs = {
  request?: InputMaybe<FilterSeasonLeaderboardRequestType>
}

export type LeagueBattlePassType = {
  __typename?: "LeagueBattlePassType"
  average?: Maybe<Scalars["Int"]>
  count?: Maybe<Scalars["Int"]>
}

export type LeagueDpcPositionStatObjectType = {
  __typename?: "LeagueDpcPositionStatObjectType"
  avgAssists?: Maybe<Scalars["Float"]>
  avgDeaths?: Maybe<Scalars["Float"]>
  avgKills?: Maybe<Scalars["Float"]>
  matchCount?: Maybe<Scalars["Int"]>
  position?: Maybe<MatchPlayerPositionType>
}

export type LeagueMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of stage type ids to include in this query, excluding all results that do not include one of these stage types. */
  leagueStageTypeIds?: InputMaybe<Array<InputMaybe<LeagueStage>>>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip: Scalars["Int"]
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  take: Scalars["Int"]
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type LeagueMetaDetailType = {
  __typename?: "LeagueMetaDetailType"
  banCount?: Maybe<Scalars["Int"]>
  banRate?: Maybe<Scalars["Decimal"]>
  heroId?: Maybe<Scalars["Short"]>
  lossCount?: Maybe<Scalars["Int"]>
  pickCount?: Maybe<Scalars["Int"]>
  pickRate?: Maybe<Scalars["Decimal"]>
  winCount?: Maybe<Scalars["Int"]>
  winRate?: Maybe<Scalars["Decimal"]>
}

export type LeagueMetaType = {
  __typename?: "LeagueMetaType"
  bestRecord?: Maybe<LeagueMetaDetailType>
  league?: Maybe<LeagueType>
  leagueId?: Maybe<Scalars["Int"]>
  missingMatchCount?: Maybe<Scalars["Int"]>
  mostBanned?: Maybe<LeagueMetaDetailType>
  mostPicked?: Maybe<LeagueMetaDetailType>
  totalMatchCount?: Maybe<Scalars["Int"]>
}

export enum LeagueNodeDefaultGroupEnum {
  BestOfFive = "BEST_OF_FIVE",
  BestOfOne = "BEST_OF_ONE",
  BestOfThree = "BEST_OF_THREE",
  BestOfTwo = "BEST_OF_TWO",
  Invalid = "INVALID",
}

export type LeagueNodeGroupType = {
  __typename?: "LeagueNodeGroupType"
  advancingNodeGroupId?: Maybe<Scalars["Short"]>
  advancingTeamCount?: Maybe<Scalars["Byte"]>
  defaultNodeType?: Maybe<LeagueNodeDefaultGroupEnum>
  eliminationDPCPoints?: Maybe<Scalars["Int"]>
  endDate?: Maybe<Scalars["Long"]>
  id?: Maybe<Scalars["Short"]>
  isCompleted?: Maybe<Scalars["Boolean"]>
  isFinalGroup?: Maybe<Scalars["Boolean"]>
  isTieBreaker?: Maybe<Scalars["Boolean"]>
  maxRounds?: Maybe<Scalars["Byte"]>
  name?: Maybe<Scalars["String"]>
  nodeGroupType?: Maybe<LeagueNodeGroupTypeEnum>
  nodes?: Maybe<Array<Maybe<LeagueNodeType>>>
  parentNodeGroupId?: Maybe<Scalars["Short"]>
  phase?: Maybe<Scalars["Byte"]>
  region?: Maybe<Scalars["Byte"]>
  round?: Maybe<Scalars["Byte"]>
  secondaryAdvancingNodeGroupId?: Maybe<Scalars["Short"]>
  secondaryAdvancingTeamCount?: Maybe<Scalars["Byte"]>
  startDate?: Maybe<Scalars["Long"]>
  teamCount?: Maybe<Scalars["Byte"]>
  tertiaryAdvancingNodeGroupId?: Maybe<Scalars["Short"]>
  tertiaryAdvancingTeamCount?: Maybe<Scalars["Byte"]>
}

export enum LeagueNodeGroupTypeEnum {
  BracketDoubleAllWinner = "BRACKET_DOUBLE_ALL_WINNER",
  BracketDoubleSeedLoser = "BRACKET_DOUBLE_SEED_LOSER",
  BracketSingle = "BRACKET_SINGLE",
  Gsl = "GSL",
  Invalid = "INVALID",
  Organizational = "ORGANIZATIONAL",
  RoundRobin = "ROUND_ROBIN",
  Showmatch = "SHOWMATCH",
  Swiss = "SWISS",
}

export type LeagueNodeType = {
  __typename?: "LeagueNodeType"
  actualTime?: Maybe<Scalars["Long"]>
  hasStarted?: Maybe<Scalars["Boolean"]>
  id?: Maybe<Scalars["Short"]>
  isCompleted?: Maybe<Scalars["Boolean"]>
  losingNodeId?: Maybe<Scalars["Short"]>
  matches?: Maybe<Array<Maybe<MatchType>>>
  name?: Maybe<Scalars["String"]>
  nodeGroupId?: Maybe<Scalars["Short"]>
  nodeType?: Maybe<LeagueNodeDefaultGroupEnum>
  scheduledTime?: Maybe<Scalars["Long"]>
  seriesId?: Maybe<Scalars["Long"]>
  streamIds?: Maybe<Array<Maybe<Scalars["Int"]>>>
  streams?: Maybe<Array<Maybe<LeagueStreamType>>>
  teamOne?: Maybe<TeamType>
  teamOneId?: Maybe<Scalars["Int"]>
  teamOneWins?: Maybe<Scalars["Byte"]>
  teamTwo?: Maybe<TeamType>
  teamTwoId?: Maybe<Scalars["Int"]>
  teamTwoWins?: Maybe<Scalars["Byte"]>
  winningNodeId?: Maybe<Scalars["Short"]>
}

export type LeaguePrizePoolPercentageType = {
  __typename?: "LeaguePrizePoolPercentageType"
  index?: Maybe<Scalars["Byte"]>
  leagueId?: Maybe<Scalars["Int"]>
  percentage?: Maybe<Scalars["Int"]>
}

export enum LeagueRegion {
  China = "CHINA",
  Cis = "CIS",
  Europe = "EUROPE",
  Na = "NA",
  Sa = "SA",
  Sea = "SEA",
  Unset = "UNSET",
}

export type LeagueRegisteredPlayerType = {
  __typename?: "LeagueRegisteredPlayerType"
  league?: Maybe<LeagueType>
  leagueId?: Maybe<Scalars["Int"]>
  radiantTeam?: Maybe<TeamType>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  teamId?: Maybe<Scalars["Int"]>
}

export type LeagueRequestType = {
  /** Determine to End value of finding a League Between two specific datetimes. */
  betweenEndDateTime?: InputMaybe<Scalars["Long"]>
  /** Determine to Start value of finding a League Between two specific datetimes. */
  betweenStartDateTime?: InputMaybe<Scalars["Long"]>
  /** If a league is set to end before this time. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** Whether a league has live matches or not, represented in a boolean. */
  hasLiveMatches?: InputMaybe<Scalars["Boolean"]>
  /** Whether a league has started or not, represented in a boolean. */
  isFutureLeague?: InputMaybe<Scalars["Boolean"]>
  /** Whether a league has ended or not, represented in a boolean. */
  leagueEnded?: InputMaybe<Scalars["Boolean"]>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  leagueIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The id to order the results by in this query. */
  orderBy?: InputMaybe<FilterOrderBy>
  /** Whether an image is required or not, represented in a boolean. */
  requireImage?: InputMaybe<Scalars["Boolean"]>
  /** Whether a prize pool is required or not, represented in a boolean. */
  requirePrizePool?: InputMaybe<Scalars["Boolean"]>
  /** Whether a start and end date is required or not, represented in a boolean. */
  requireStartAndEndDates?: InputMaybe<Scalars["Boolean"]>
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** If a league is set to start after this time. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
  /** An array of tier ids to include in this query, excluding all results that do not include one of these tiers. */
  tiers?: InputMaybe<Array<InputMaybe<LeagueTier>>>
}

export enum LeagueStage {
  ChampionsQualifers = "CHAMPIONS_QUALIFERS",
  ClosedQualifers = "CLOSED_QUALIFERS",
  GroupStage = "GROUP_STAGE",
  MainEvent = "MAIN_EVENT",
  OpenQualifers = "OPEN_QUALIFERS",
}

export type LeagueStatType = {
  __typename?: "LeagueStatType"
  averageMatchDurationSeconds?: Maybe<Scalars["Int"]>
  matchCount?: Maybe<Scalars["Int"]>
  radiantWinMatchCount?: Maybe<Scalars["Int"]>
}

export type LeagueStreamType = {
  __typename?: "LeagueStreamType"
  broadcastProvider?: Maybe<Scalars["Byte"]>
  id?: Maybe<Scalars["Int"]>
  languageId?: Maybe<Language>
  name?: Maybe<Scalars["String"]>
  streamUrl?: Maybe<Scalars["String"]>
  vodUrl?: Maybe<Scalars["String"]>
}

export type LeagueTableHeroLanesObjectType = {
  __typename?: "LeagueTableHeroLanesObjectType"
  id?: Maybe<Scalars["Byte"]>
  matchCount: Scalars["Int"]
  matchWins: Scalars["Int"]
}

export type LeagueTableHeroOverviewType = {
  __typename?: "LeagueTableHeroOverviewType"
  banCount: Scalars["Int"]
  banPhaseOne: Scalars["Int"]
  banPhaseThree: Scalars["Int"]
  banPhaseTwo: Scalars["Int"]
  matchCount: Scalars["Int"]
  matchWins: Scalars["Int"]
  pickPhaseOne: Scalars["Int"]
  pickPhaseThree: Scalars["Int"]
  pickPhaseTwo: Scalars["Int"]
}

export type LeagueTableHeroStatsType = {
  __typename?: "LeagueTableHeroStatsType"
  assists: Scalars["Float"]
  cs: Scalars["Float"]
  deaths: Scalars["Float"]
  gpm: Scalars["Float"]
  heal: Scalars["Float"]
  heroDamage: Scalars["Float"]
  killContribution: Scalars["Float"]
  kills: Scalars["Float"]
  towerDamage: Scalars["Float"]
  xpm: Scalars["Float"]
}

export type LeagueTableHeroType = {
  __typename?: "LeagueTableHeroType"
  heroId?: Maybe<Scalars["Short"]>
  heroes?: Maybe<Array<Maybe<LeagueTableHeroStatsType>>>
  lanes?: Maybe<Array<Maybe<LeagueTableHeroLanesObjectType>>>
  overview?: Maybe<LeagueTableHeroOverviewType>
  stats?: Maybe<LeagueTableHeroStatsType>
}

export type LeagueTablePlayerHeroesObjectType = {
  __typename?: "LeagueTablePlayerHeroesObjectType"
  heroId: Scalars["Int"]
  imp: Scalars["Int"]
  matchCount: Scalars["Int"]
  matchWins: Scalars["Int"]
}

export type LeagueTablePlayerLanesObjectType = {
  __typename?: "LeagueTablePlayerLanesObjectType"
  id?: Maybe<Scalars["Byte"]>
  matchCount: Scalars["Int"]
  matchWins: Scalars["Int"]
}

export type LeagueTablePlayerOverviewType = {
  __typename?: "LeagueTablePlayerOverviewType"
  earnings?: Maybe<Scalars["Float"]>
  imp: Scalars["Int"]
  matchCount: Scalars["Int"]
  matchWins: Scalars["Int"]
  points?: Maybe<Scalars["Float"]>
  seriesCount: Scalars["Int"]
  seriesWins: Scalars["Int"]
}

export type LeagueTablePlayerStatsType = {
  __typename?: "LeagueTablePlayerStatsType"
  assists: Scalars["Float"]
  cs: Scalars["Float"]
  deaths: Scalars["Float"]
  gpm: Scalars["Float"]
  heal: Scalars["Float"]
  heroDamage: Scalars["Float"]
  killContribution: Scalars["Float"]
  kills: Scalars["Float"]
  towerDamage: Scalars["Float"]
  xpm: Scalars["Float"]
}

export type LeagueTablePlayerType = {
  __typename?: "LeagueTablePlayerType"
  heroes?: Maybe<Array<Maybe<LeagueTablePlayerHeroesObjectType>>>
  lanes?: Maybe<Array<Maybe<LeagueTablePlayerLanesObjectType>>>
  overview?: Maybe<LeagueTablePlayerOverviewType>
  stats?: Maybe<LeagueTablePlayerStatsType>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
}

export type LeagueTableTeamHeroesObjectType = {
  __typename?: "LeagueTableTeamHeroesObjectType"
  banCount?: Maybe<Scalars["Int"]>
  heroId: Scalars["Int"]
  imp?: Maybe<Scalars["Decimal"]>
  matchCount: Scalars["Int"]
  matchWins: Scalars["Int"]
}

export type LeagueTableTeamLanesObjectType = {
  __typename?: "LeagueTableTeamLanesObjectType"
  id?: Maybe<Scalars["Byte"]>
  matchCount: Scalars["Int"]
  matchWins: Scalars["Int"]
}

export type LeagueTableTeamOverviewType = {
  __typename?: "LeagueTableTeamOverviewType"
  earnings?: Maybe<Scalars["Float"]>
  matchCount: Scalars["Int"]
  matchWins: Scalars["Int"]
  points?: Maybe<Scalars["Float"]>
  seriesCount: Scalars["Int"]
  seriesDraws: Scalars["Int"]
  seriesWins: Scalars["Int"]
  tmp?: Maybe<Scalars["Float"]>
}

export type LeagueTableTeamStatsType = {
  __typename?: "LeagueTableTeamStatsType"
  assists: Scalars["Float"]
  cs: Scalars["Float"]
  deaths: Scalars["Float"]
  duration: Scalars["Float"]
  gpm: Scalars["Float"]
  heal: Scalars["Float"]
  heroDamage: Scalars["Float"]
  kills: Scalars["Float"]
  towerDamage: Scalars["Float"]
  xpm: Scalars["Float"]
}

export type LeagueTableTeamType = {
  __typename?: "LeagueTableTeamType"
  heroes?: Maybe<Array<Maybe<LeagueTableTeamHeroesObjectType>>>
  lanes?: Maybe<Array<Maybe<LeagueTableTeamLanesObjectType>>>
  members?: Maybe<Array<Maybe<LeagueRegisteredPlayerType>>>
  overview?: Maybe<LeagueTableTeamOverviewType>
  stats?: Maybe<LeagueTableTeamStatsType>
  team?: Maybe<TeamType>
  teamId?: Maybe<Scalars["Int"]>
}

export type LeagueTableType = {
  __typename?: "LeagueTableType"
  leagueId: Scalars["Int"]
  tableHeroes?: Maybe<Array<Maybe<LeagueTableHeroType>>>
  tablePlayers?: Maybe<Array<Maybe<LeagueTablePlayerType>>>
  tableTeams?: Maybe<Array<Maybe<LeagueTableTeamType>>>
}

export enum LeagueTier {
  Amateur = "AMATEUR",
  DpcLeague = "DPC_LEAGUE",
  DpcLeagueFinals = "DPC_LEAGUE_FINALS",
  DpcLeagueQualifier = "DPC_LEAGUE_QUALIFIER",
  DpcQualifier = "DPC_QUALIFIER",
  International = "INTERNATIONAL",
  Major = "MAJOR",
  Minor = "MINOR",
  Professional = "PROFESSIONAL",
  Unset = "UNSET",
}

export type LeagueType = {
  __typename?: "LeagueType"
  banner?: Maybe<Scalars["String"]>
  basePrizePool?: Maybe<Scalars["Int"]>
  battlePass?: Maybe<LeagueBattlePassType>
  country?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  displayName?: Maybe<Scalars["String"]>
  endDateTime?: Maybe<Scalars["Long"]>
  freeToSpectate?: Maybe<Scalars["Boolean"]>
  hasLiveMatches?: Maybe<Scalars["Boolean"]>
  id?: Maybe<Scalars["Int"]>
  imageUri?: Maybe<Scalars["String"]>
  isFollowed?: Maybe<Scalars["Boolean"]>
  lastMatchDate?: Maybe<Scalars["Long"]>
  liveMatches?: Maybe<Array<Maybe<MatchLiveType>>>
  matches?: Maybe<Array<Maybe<MatchType>>>
  /** Find match details by steam account id. The return is modified to group the data by the GroupBy parameter. */
  matchesGroupBy?: Maybe<Array<Maybe<MatchGroupByType>>>
  modifiedDateTime?: Maybe<Scalars["Long"]>
  name?: Maybe<Scalars["String"]>
  nodeGroups?: Maybe<Array<Maybe<LeagueNodeGroupType>>>
  private?: Maybe<Scalars["Boolean"]>
  prizePool?: Maybe<Scalars["Int"]>
  prizePoolPercentages?: Maybe<Array<Maybe<LeaguePrizePoolPercentageType>>>
  region?: Maybe<LeagueRegion>
  series?: Maybe<Array<Maybe<SeriesType>>>
  standings?: Maybe<Array<Maybe<TeamPrizeType>>>
  startDateTime?: Maybe<Scalars["Long"]>
  stats?: Maybe<LeagueStatType>
  stopSalesTime?: Maybe<Scalars["DateTime"]>
  streams?: Maybe<Array<Maybe<LeagueStreamType>>>
  tables?: Maybe<LeagueTableType>
  tier?: Maybe<LeagueTier>
  tournamentUrl?: Maybe<Scalars["String"]>
  venue?: Maybe<Scalars["String"]>
}

export type LeagueTypeMatchesArgs = {
  request: LeagueMatchesRequestType
}

export type LeagueTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType
}

export type LeagueTypeSeriesArgs = {
  leagueStageTypeIds?: InputMaybe<Array<InputMaybe<LeagueStage>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
  teamId?: InputMaybe<Scalars["Int"]>
}

export type LeagueTypeStatsArgs = {
  leagueStageTypeIds?: InputMaybe<Array<InputMaybe<LeagueStage>>>
}

export type LeagueTypeTablesArgs = {
  calculateTypeId?: InputMaybe<TableCalculateEnum>
  leagueStageTypeIds?: InputMaybe<Array<InputMaybe<LeagueStage>>>
}

export enum LeaverStatusEnum {
  Abandoned = "ABANDONED",
  Afk = "AFK",
  DeclinedReadyUp = "DECLINED_READY_UP",
  Disconnected = "DISCONNECTED",
  DisconnectedTooLong = "DISCONNECTED_TOO_LONG",
  FailedToReadyUp = "FAILED_TO_READY_UP",
  NeverConnected = "NEVER_CONNECTED",
  NeverConnectedTooLong = "NEVER_CONNECTED_TOO_LONG",
  None = "NONE",
}

export type LiveEventMatchDireTide2020StompType = {
  __typename?: "LiveEventMatchDireTide2020StompType"
  match?: Maybe<DireTide2020CustomGameMatchType>
}

export type LiveEventPlayerDireTide2020CandyScoredType = {
  __typename?: "LiveEventPlayerDireTide2020CandyScoredType"
  candyScored?: Maybe<Scalars["Short"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<DireTide2020CustomGameMatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroAssistsType = {
  __typename?: "LiveEventPlayerHeroAssistsType"
  assistCount?: Maybe<Scalars["Byte"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroBuildingDamageType = {
  __typename?: "LiveEventPlayerHeroBuildingDamageType"
  buildingDamage?: Maybe<Scalars["Int"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroDewardType = {
  __typename?: "LiveEventPlayerHeroDewardType"
  dewardCount?: Maybe<Scalars["Byte"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroDotaPlusLevelType = {
  __typename?: "LiveEventPlayerHeroDotaPlusLevelType"
  heroId?: Maybe<Scalars["Short"]>
  level?: Maybe<Scalars["Byte"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroExpPerMinuteType = {
  __typename?: "LiveEventPlayerHeroExpPerMinuteType"
  expPerMinute?: Maybe<Scalars["Short"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroGoldPerMinuteType = {
  __typename?: "LiveEventPlayerHeroGoldPerMinuteType"
  goldPerMinute?: Maybe<Scalars["Short"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroHealingType = {
  __typename?: "LiveEventPlayerHeroHealingType"
  healingAmount?: Maybe<Scalars["Int"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroHeroDamageType = {
  __typename?: "LiveEventPlayerHeroHeroDamageType"
  heroDamage?: Maybe<Scalars["Int"]>
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroHighImpType = {
  __typename?: "LiveEventPlayerHeroHighImpType"
  heroId?: Maybe<Scalars["Short"]>
  imp?: Maybe<Scalars["Byte"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroItemPurchaseType = {
  __typename?: "LiveEventPlayerHeroItemPurchaseType"
  heroId?: Maybe<Scalars["Short"]>
  itemCount?: Maybe<Scalars["Byte"]>
  itemId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroKillsType = {
  __typename?: "LiveEventPlayerHeroKillsType"
  heroId?: Maybe<Scalars["Short"]>
  killCount?: Maybe<Scalars["Byte"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroWinStreakType = {
  __typename?: "LiveEventPlayerHeroWinStreakType"
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
  winStreakCount?: Maybe<Scalars["Byte"]>
}

export type LiveEventPlayerRampageType = {
  __typename?: "LiveEventPlayerRampageType"
  heroId?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  rampageCount?: Maybe<Scalars["Byte"]>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerRankUpType = {
  __typename?: "LiveEventPlayerRankUpType"
  match?: Maybe<MatchType>
  rank?: Maybe<Scalars["Byte"]>
  steamAccount?: Maybe<SteamAccountType>
}

export type LiveEventPlayerWinStreakType = {
  __typename?: "LiveEventPlayerWinStreakType"
  match?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
  winStreakCount?: Maybe<Scalars["Byte"]>
}

export type LiveEventProPlayerLiveType = {
  __typename?: "LiveEventProPlayerLiveType"
  match?: Maybe<MatchLiveType>
  steamAccounts?: Maybe<Array<Maybe<SteamAccountType>>>
}

export type LiveEventType =
  | LiveEventMatchDireTide2020StompType
  | LiveEventPlayerDireTide2020CandyScoredType
  | LiveEventPlayerHeroAssistsType
  | LiveEventPlayerHeroBuildingDamageType
  | LiveEventPlayerHeroDewardType
  | LiveEventPlayerHeroDotaPlusLevelType
  | LiveEventPlayerHeroExpPerMinuteType
  | LiveEventPlayerHeroGoldPerMinuteType
  | LiveEventPlayerHeroHealingType
  | LiveEventPlayerHeroHeroDamageType
  | LiveEventPlayerHeroHighImpType
  | LiveEventPlayerHeroItemPurchaseType
  | LiveEventPlayerHeroKillsType
  | LiveEventPlayerHeroWinStreakType
  | LiveEventPlayerRampageType
  | LiveEventPlayerRankUpType
  | LiveEventPlayerWinStreakType
  | LiveEventProPlayerLiveType

export type LiveQuery = {
  __typename?: "LiveQuery"
  /** Find a live match by match id. A live match is data where a match is on the Dota watch list and still active. All League games are also Live. id is a required input field. */
  match?: Maybe<MatchLiveType>
  /** Find all live matches. A live match is data where a match is on the Dota watch list and still active. All League games are also Live. */
  matches?: Maybe<Array<Maybe<MatchLiveType>>>
}

export type LiveQueryMatchArgs = {
  id: Scalars["Long"]
  skipPlaybackDuration?: InputMaybe<Scalars["Int"]>
}

export type LiveQueryMatchesArgs = {
  request?: InputMaybe<MatchLiveRequestType>
}

export enum LobbyTypeEnum {
  BattleCup = "BATTLE_CUP",
  CoopVsBots = "COOP_VS_BOTS",
  Event = "EVENT",
  Practice = "PRACTICE",
  Ranked = "RANKED",
  SoloMid = "SOLO_MID",
  SoloQueue = "SOLO_QUEUE",
  TeamMatch = "TEAM_MATCH",
  Tournament = "TOURNAMENT",
  Tutorial = "TUTORIAL",
  Unranked = "UNRANKED",
}

export type LobbyTypeType = {
  __typename?: "LobbyTypeType"
  id: Scalars["Int"]
  name?: Maybe<Scalars["String"]>
}

export enum MapLocationEnums {
  DireBase = "DIRE_BASE",
  DireFountain = "DIRE_FOUNTAIN",
  DireMidLane = "DIRE_MID_LANE",
  DireOffLane = "DIRE_OFF_LANE",
  DireSafeLane = "DIRE_SAFE_LANE",
  RadiantBase = "RADIANT_BASE",
  RadiantFountain = "RADIANT_FOUNTAIN",
  RadiantMidLane = "RADIANT_MID_LANE",
  RadiantOffLane = "RADIANT_OFF_LANE",
  RadiantSafeLane = "RADIANT_SAFE_LANE",
  River = "RIVER",
  Roaming = "ROAMING",
  Roshan = "ROSHAN",
}

export enum MatchAnalysisOutcomeType {
  CloseGame = "CLOSE_GAME",
  Comeback = "COMEBACK",
  None = "NONE",
  Stomped = "STOMPED",
}

export type MatchGroupByType = {
  __typename?: "MatchGroupByType"
  avgAssists?: Maybe<Scalars["Float"]>
  avgDeaths?: Maybe<Scalars["Float"]>
  avgExperiencePerMinute?: Maybe<Scalars["Int"]>
  avgGoldPerMinute?: Maybe<Scalars["Int"]>
  avgImp?: Maybe<Scalars["Int"]>
  avgKDA?: Maybe<Scalars["Float"]>
  avgKills?: Maybe<Scalars["Float"]>
  firstMatchDateTime?: Maybe<Scalars["Long"]>
  id?: Maybe<Scalars["Long"]>
  id2?: Maybe<Scalars["Long"]>
  id3?: Maybe<Scalars["Long"]>
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  matchCount?: Maybe<Scalars["Int"]>
  winCount?: Maybe<Scalars["Int"]>
}

export enum MatchLaneType {
  Jungle = "JUNGLE",
  MidLane = "MID_LANE",
  OffLane = "OFF_LANE",
  Roaming = "ROAMING",
  SafeLane = "SAFE_LANE",
  Unknown = "UNKNOWN",
}

export type MatchLiveBuildingDetailType = {
  __typename?: "MatchLiveBuildingDetailType"
  indexId?: Maybe<Scalars["Int"]>
  isAlive: Scalars["Boolean"]
  isRadiant?: Maybe<Scalars["Boolean"]>
  npcId?: Maybe<Scalars["Int"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
  type?: Maybe<BuildingType>
}

export enum MatchLiveGameState {
  CustomGameSetup = "CUSTOM_GAME_SETUP",
  Disconnect = "DISCONNECT",
  GameInProgress = "GAME_IN_PROGRESS",
  HeroSelection = "HERO_SELECTION",
  Init = "INIT",
  Last = "LAST",
  PostGame = "POST_GAME",
  PreGame = "PRE_GAME",
  StrategyTime = "STRATEGY_TIME",
  TeamShowcase = "TEAM_SHOWCASE",
  WaitForMapToLoad = "WAIT_FOR_MAP_TO_LOAD",
  WaitForPlayersToLoad = "WAIT_FOR_PLAYERS_TO_LOAD",
}

export type MatchLiveInsightType = {
  __typename?: "MatchLiveInsightType"
  lastSeries?: Maybe<Array<Maybe<SeriesType>>>
  teamOneLeagueMatchCount: Scalars["Int"]
  teamOneLeagueWinCount: Scalars["Int"]
  teamOneVsWinCount: Scalars["Int"]
  teamTwoLeagueMatchCount: Scalars["Int"]
  teamTwoLeagueWinCount: Scalars["Int"]
  teamTwoVsWinCount: Scalars["Int"]
}

export type MatchLivePickBanType = {
  __typename?: "MatchLivePickBanType"
  adjustedWinRate?: Maybe<Scalars["Float"]>
  bannedHeroId?: Maybe<Scalars["Short"]>
  baseWinRate?: Maybe<Scalars["Float"]>
  durationValues?: Maybe<Array<Maybe<Scalars["Float"]>>>
  heroId?: Maybe<Scalars["Short"]>
  isPick: Scalars["Boolean"]
  isRadiant?: Maybe<Scalars["Boolean"]>
  letter?: Maybe<PlusLetterType>
  order?: Maybe<Scalars["Int"]>
  position?: Maybe<MatchPlayerPositionType>
  positionValues?: Maybe<Array<Maybe<Scalars["Float"]>>>
  winRateValues?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

export type MatchLivePlaybackDataType = {
  __typename?: "MatchLivePlaybackDataType"
  buildingEvents?: Maybe<Array<Maybe<MatchLiveBuildingDetailType>>>
  direScore?: Maybe<Array<Maybe<MatchLiveTeamScoreDetailType>>>
  pickBans?: Maybe<Array<Maybe<MatchLivePickBanType>>>
  radiantScore?: Maybe<Array<Maybe<MatchLiveTeamScoreDetailType>>>
  roshanEvents?: Maybe<Array<Maybe<MatchLiveRoshanDetailType>>>
}

export type MatchLivePlayerAssistDetailType = {
  __typename?: "MatchLivePlayerAssistDetailType"
  positionX: Scalars["Int"]
  positionY: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchLivePlayerDeathDetailType = {
  __typename?: "MatchLivePlayerDeathDetailType"
  positionX: Scalars["Int"]
  positionY: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchLivePlayerDenyDetailType = {
  __typename?: "MatchLivePlayerDenyDetailType"
  positionX: Scalars["Int"]
  positionY: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchLivePlayerExperienceDetailType = {
  __typename?: "MatchLivePlayerExperienceDetailType"
  expPerMinute: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchLivePlayerGoldDetailType = {
  __typename?: "MatchLivePlayerGoldDetailType"
  gold: Scalars["Int"]
  goldPerMinute: Scalars["Int"]
  networth: Scalars["Int"]
  networthDifference: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchLivePlayerImpDetailType = {
  __typename?: "MatchLivePlayerImpDetailType"
  imp: Scalars["Short"]
  time: Scalars["Int"]
}

export type MatchLivePlayerInventoryDetailType = {
  __typename?: "MatchLivePlayerInventoryDetailType"
  backpackId0?: Maybe<Scalars["Short"]>
  backpackId1?: Maybe<Scalars["Short"]>
  backpackId2?: Maybe<Scalars["Short"]>
  itemId0?: Maybe<Scalars["Short"]>
  itemId1?: Maybe<Scalars["Short"]>
  itemId2?: Maybe<Scalars["Short"]>
  itemId3?: Maybe<Scalars["Short"]>
  itemId4?: Maybe<Scalars["Short"]>
  itemId5?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
}

export type MatchLivePlayerKillDetailType = {
  __typename?: "MatchLivePlayerKillDetailType"
  positionX: Scalars["Int"]
  positionY: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchLivePlayerLastHitDetailType = {
  __typename?: "MatchLivePlayerLastHitDetailType"
  positionX: Scalars["Int"]
  positionY: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchLivePlayerLevelDetailType = {
  __typename?: "MatchLivePlayerLevelDetailType"
  level: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchLivePlayerPositionDetailType = {
  __typename?: "MatchLivePlayerPositionDetailType"
  time: Scalars["Int"]
  x: Scalars["Int"]
  y: Scalars["Int"]
}

export type MatchLivePlayerType = {
  __typename?: "MatchLivePlayerType"
  backpackId0?: Maybe<Scalars["Short"]>
  backpackId1?: Maybe<Scalars["Short"]>
  backpackId2?: Maybe<Scalars["Short"]>
  baseWinRateValue?: Maybe<Scalars["Float"]>
  experiencePerMinute?: Maybe<Scalars["UShort"]>
  gameVersionId?: Maybe<Scalars["Short"]>
  gold?: Maybe<Scalars["Int"]>
  goldPerMinute?: Maybe<Scalars["UShort"]>
  goldSpent?: Maybe<Scalars["Int"]>
  hero?: Maybe<HeroType>
  heroDamage?: Maybe<Scalars["Int"]>
  heroId?: Maybe<Scalars["Short"]>
  impPerMinute?: Maybe<Array<Maybe<MatchLivePlayerImpDetailType>>>
  isRadiant?: Maybe<Scalars["Boolean"]>
  itemId0?: Maybe<Scalars["Short"]>
  itemId1?: Maybe<Scalars["Short"]>
  itemId2?: Maybe<Scalars["Short"]>
  itemId3?: Maybe<Scalars["Short"]>
  itemId4?: Maybe<Scalars["Short"]>
  itemId5?: Maybe<Scalars["Short"]>
  leaverStatus?: Maybe<Scalars["Byte"]>
  level?: Maybe<Scalars["Byte"]>
  matchId?: Maybe<Scalars["Long"]>
  name?: Maybe<Scalars["String"]>
  networth?: Maybe<Scalars["Int"]>
  numAssists?: Maybe<Scalars["Byte"]>
  numDeaths?: Maybe<Scalars["Byte"]>
  numDenies?: Maybe<Scalars["UShort"]>
  numKills?: Maybe<Scalars["Byte"]>
  numLastHits?: Maybe<Scalars["UShort"]>
  playbackData?: Maybe<MatchPlayerLivePlaybackDataType>
  playerSlot?: Maybe<Scalars["Byte"]>
  position?: Maybe<MatchPlayerPositionType>
  respawnTimer?: Maybe<Scalars["Short"]>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  towerDamage?: Maybe<Scalars["Int"]>
  ultimateCooldown?: Maybe<Scalars["Short"]>
  ultimateState?: Maybe<Scalars["Short"]>
}

export enum MatchLiveRequestOrderBy {
  GameTime = "GAME_TIME",
  MatchId = "MATCH_ID",
  SpectatorCount = "SPECTATOR_COUNT",
}

export type MatchLiveRequestType = {
  /** Only return Live Matches In Progress that are currently in these states. */
  gameStates?: InputMaybe<Array<InputMaybe<MatchLiveGameState>>>
  /** The hero id to include in this query, excluding all results that do not include this hero. */
  heroId?: InputMaybe<Scalars["Short"]>
  /** Returns only matches that are no longer active and completed but not yet deleted. */
  isCompleted?: InputMaybe<Scalars["Boolean"]>
  /** Returns only matches that are currently still being updated by the backend. */
  isParsing?: InputMaybe<Scalars["Boolean"]>
  /** Playback Data can contain a lot of information. This will only display the most recent event for each of the fields. */
  lastPlaybackEventOnly?: InputMaybe<Scalars["Boolean"]>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  leagueIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** If the return should be ordered by Ascending or Desending order. */
  orderBy?: InputMaybe<MatchLiveRequestOrderBy>
  /** The amount to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  take?: InputMaybe<Scalars["Int"]>
  /** An array of tier ids to include in this query, excluding all results that do not include one of these tiers. */
  tiers?: InputMaybe<Array<InputMaybe<LeagueTier>>>
}

export type MatchLiveRoshanDetailType = {
  __typename?: "MatchLiveRoshanDetailType"
  isAlive?: Maybe<Scalars["Boolean"]>
  respawnTimer?: Maybe<Scalars["Int"]>
  time?: Maybe<Scalars["Int"]>
}

export type MatchLiveTeamScoreDetailType = {
  __typename?: "MatchLiveTeamScoreDetailType"
  score?: Maybe<Scalars["Short"]>
  time?: Maybe<Scalars["Int"]>
}

export type MatchLiveType = {
  __typename?: "MatchLiveType"
  averageRank?: Maybe<Scalars["Int"]>
  buildingState?: Maybe<Scalars["Long"]>
  completed?: Maybe<Scalars["Boolean"]>
  createdDateTime?: Maybe<Scalars["Long"]>
  delay?: Maybe<Scalars["Short"]>
  direScore?: Maybe<Scalars["Byte"]>
  direTeam?: Maybe<TeamType>
  direTeamId?: Maybe<Scalars["Int"]>
  durationValues?: Maybe<Array<Maybe<Scalars["Float"]>>>
  gameMinute?: Maybe<Scalars["Short"]>
  gameMode?: Maybe<GameModeEnumType>
  gameState?: Maybe<MatchLiveGameState>
  gameTime?: Maybe<Scalars["Int"]>
  insight?: Maybe<MatchLiveInsightType>
  isParsing?: Maybe<Scalars["Boolean"]>
  isUpdating?: Maybe<Scalars["Boolean"]>
  league?: Maybe<LeagueType>
  leagueId?: Maybe<Scalars["Int"]>
  liveWinRateValues?: Maybe<Array<Maybe<MatchLiveWinRateDetailType>>>
  lobbyId?: Maybe<Scalars["Long"]>
  lobbyType?: Maybe<LobbyTypeEnum>
  matchId?: Maybe<Scalars["Long"]>
  modifiedDateTime?: Maybe<Scalars["Long"]>
  numHumanPlayers?: Maybe<Scalars["Byte"]>
  parseBeginGameTime?: Maybe<Scalars["Int"]>
  playbackData?: Maybe<MatchLivePlaybackDataType>
  players?: Maybe<Array<Maybe<MatchLivePlayerType>>>
  radiantLead?: Maybe<Scalars["Int"]>
  radiantScore?: Maybe<Scalars["Byte"]>
  radiantTeam?: Maybe<TeamType>
  radiantTeamId?: Maybe<Scalars["Int"]>
  serverSteamId?: Maybe<Scalars["String"]>
  spectators?: Maybe<Scalars["Int"]>
  winRateValues?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

export type MatchLiveWinRateDetailType = {
  __typename?: "MatchLiveWinRateDetailType"
  time: Scalars["Int"]
  winRate: Scalars["Float"]
}

export type MatchPickBanGroupByType = {
  __typename?: "MatchPickBanGroupByType"
  banCount?: Maybe<Scalars["Int"]>
  heroId?: Maybe<Scalars["Short"]>
  pickCount?: Maybe<Scalars["Int"]>
}

export type MatchPlaybackDataBuildingEventType = {
  __typename?: "MatchPlaybackDataBuildingEventType"
  didShrineActivate?: Maybe<Scalars["Boolean"]>
  hp?: Maybe<Scalars["Int"]>
  indexId?: Maybe<Scalars["Int"]>
  isRadiant?: Maybe<Scalars["Boolean"]>
  maxHp?: Maybe<Scalars["Int"]>
  npcId?: Maybe<Scalars["Int"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
  type?: Maybe<BuildingType>
}

export type MatchPlaybackDataCourierEventType = {
  __typename?: "MatchPlaybackDataCourierEventType"
  events?: Maybe<Array<Maybe<MatchplaybackDataCourierEventObjectType>>>
  id: Scalars["Int"]
  isRadiant?: Maybe<Scalars["Boolean"]>
  ownerHero?: Maybe<Scalars["Int"]>
}

export type MatchPlaybackDataRoshanEventType = {
  __typename?: "MatchPlaybackDataRoshanEventType"
  createTime?: Maybe<Scalars["Int"]>
  hp?: Maybe<Scalars["Int"]>
  item0?: Maybe<Scalars["Int"]>
  item1?: Maybe<Scalars["Int"]>
  item2?: Maybe<Scalars["Int"]>
  item3?: Maybe<Scalars["Int"]>
  item4?: Maybe<Scalars["Int"]>
  item5?: Maybe<Scalars["Int"]>
  maxHp?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
  totalDamageTaken?: Maybe<Scalars["Int"]>
  x?: Maybe<Scalars["Int"]>
  y?: Maybe<Scalars["Int"]>
}

export type MatchPlaybackDataRuneEventType = {
  __typename?: "MatchPlaybackDataRuneEventType"
  action: Scalars["Int"]
  fromPlayer: Scalars["Int"]
  indexId: Scalars["Int"]
  location: Scalars["Int"]
  positionX: Scalars["Int"]
  positionY: Scalars["Int"]
  rune: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchPlaybackDataTowerDeathEventType = {
  __typename?: "MatchPlaybackDataTowerDeathEventType"
  dire: Scalars["Int"]
  radiant: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchPlaybackDataType = {
  __typename?: "MatchPlaybackDataType"
  buildingEvents?: Maybe<Array<Maybe<MatchPlaybackDataBuildingEventType>>>
  courierEvents?: Maybe<Array<Maybe<MatchPlaybackDataCourierEventType>>>
  direCaptainSteamAccount?: Maybe<SteamAccountType>
  direCaptainSteamAccountId?: Maybe<Scalars["Long"]>
  radiantCaptainSteamAccount?: Maybe<SteamAccountType>
  radiantCaptainSteamAccountId?: Maybe<Scalars["Long"]>
  roshanEvents?: Maybe<Array<Maybe<MatchPlaybackDataRoshanEventType>>>
  runeEvents?: Maybe<Array<Maybe<MatchPlaybackDataRuneEventType>>>
  towerDeathEvents?: Maybe<Array<Maybe<MatchPlaybackDataTowerDeathEventType>>>
  wardEvents?: Maybe<Array<Maybe<MatchPlaybackDataWardEventType>>>
}

export type MatchPlaybackDataWardEventType = {
  __typename?: "MatchPlaybackDataWardEventType"
  action?: Maybe<Scalars["Byte"]>
  fromPlayer?: Maybe<Scalars["Int"]>
  indexId: Scalars["Int"]
  playerDestroyed?: Maybe<Scalars["Int"]>
  positionX: Scalars["Int"]
  positionY: Scalars["Int"]
  time: Scalars["Int"]
  wardType?: Maybe<Scalars["Byte"]>
}

export type MatchPlayerAdditionalUnitType = {
  __typename?: "MatchPlayerAdditionalUnitType"
  backpack0Id?: Maybe<Scalars["Short"]>
  backpack1Id?: Maybe<Scalars["Short"]>
  backpack2Id?: Maybe<Scalars["Short"]>
  item0Id?: Maybe<Scalars["Short"]>
  item1Id?: Maybe<Scalars["Short"]>
  item2Id?: Maybe<Scalars["Short"]>
  item3Id?: Maybe<Scalars["Short"]>
  item4Id?: Maybe<Scalars["Short"]>
  item5Id?: Maybe<Scalars["Short"]>
  neutral0Id?: Maybe<Scalars["Short"]>
}

export enum MatchPlayerAward {
  Mvp = "MVP",
  None = "NONE",
  TopCore = "TOP_CORE",
  TopSupport = "TOP_SUPPORT",
}

export type MatchPlayerHeroDamageSourceAbilityReportObjectType = {
  __typename?: "MatchPlayerHeroDamageSourceAbilityReportObjectType"
  abilityId: Scalars["Int"]
  amount: Scalars["Int"]
  count: Scalars["Int"]
}

export type MatchPlayerHeroDamageSourceItemReportObjectType = {
  __typename?: "MatchPlayerHeroDamageSourceItemReportObjectType"
  amount: Scalars["Int"]
  count: Scalars["Int"]
  itemId: Scalars["Int"]
}

export type MatchPlayerHeroDamageTargetReportObjectType = {
  __typename?: "MatchPlayerHeroDamageTargetReportObjectType"
  amount: Scalars["Int"]
  target: Scalars["Int"]
}

export type MatchPlayerHeroDamageTotalRecievedReportObjectType = {
  __typename?: "MatchPlayerHeroDamageTotalRecievedReportObjectType"
  disableCount: Scalars["Int"]
  disableDuration: Scalars["Int"]
  heal: Scalars["Int"]
  magicalDamage: Scalars["Int"]
  physicalDamage: Scalars["Int"]
  pureDamage: Scalars["Int"]
  slowCount: Scalars["Int"]
  slowDuration: Scalars["Int"]
  stunCount: Scalars["Int"]
  stunDuration: Scalars["Int"]
}

export type MatchPlayerHeroDamageTotalReportObjectType = {
  __typename?: "MatchPlayerHeroDamageTotalReportObjectType"
  allyHeal: Scalars["Int"]
  disableCount: Scalars["Int"]
  disableDuration: Scalars["Int"]
  magicalDamage: Scalars["Int"]
  physicalDamage: Scalars["Int"]
  pureDamage: Scalars["Int"]
  selfHeal: Scalars["Int"]
  slowCount: Scalars["Int"]
  slowDuration: Scalars["Int"]
  stunCount: Scalars["Int"]
  stunDuration: Scalars["Int"]
}

export type MatchPlayerInventoryObjectType = {
  __typename?: "MatchPlayerInventoryObjectType"
  charges?: Maybe<Scalars["Int"]>
  itemId: Scalars["Int"]
  secondaryCharges?: Maybe<Scalars["Int"]>
}

export type MatchPlayerInventoryType = {
  __typename?: "MatchPlayerInventoryType"
  backPack0?: Maybe<MatchPlayerInventoryObjectType>
  backPack1?: Maybe<MatchPlayerInventoryObjectType>
  backPack2?: Maybe<MatchPlayerInventoryObjectType>
  item0?: Maybe<MatchPlayerInventoryObjectType>
  item1?: Maybe<MatchPlayerInventoryObjectType>
  item2?: Maybe<MatchPlayerInventoryObjectType>
  item3?: Maybe<MatchPlayerInventoryObjectType>
  item4?: Maybe<MatchPlayerInventoryObjectType>
  item5?: Maybe<MatchPlayerInventoryObjectType>
  neutral0?: Maybe<MatchPlayerInventoryObjectType>
}

export type MatchPlayerItemPurchaseEventType = {
  __typename?: "MatchPlayerItemPurchaseEventType"
  itemId: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchPlayerLivePlaybackDataType = {
  __typename?: "MatchPlayerLivePlaybackDataType"
  assistEvents?: Maybe<Array<Maybe<MatchLivePlayerAssistDetailType>>>
  csEvents?: Maybe<Array<Maybe<MatchLivePlayerLastHitDetailType>>>
  deathEvents?: Maybe<Array<Maybe<MatchLivePlayerDeathDetailType>>>
  denyEvents?: Maybe<Array<Maybe<MatchLivePlayerDenyDetailType>>>
  experienceEvents?: Maybe<Array<Maybe<MatchLivePlayerExperienceDetailType>>>
  goldEvents?: Maybe<Array<Maybe<MatchLivePlayerGoldDetailType>>>
  inventoryEvents?: Maybe<Array<Maybe<MatchLivePlayerInventoryDetailType>>>
  killEvents?: Maybe<Array<Maybe<MatchLivePlayerKillDetailType>>>
  levelEvents?: Maybe<Array<Maybe<MatchLivePlayerLevelDetailType>>>
  positionEvents?: Maybe<Array<Maybe<MatchLivePlayerPositionDetailType>>>
}

export type MatchPlayerPlaybackDataType = {
  __typename?: "MatchPlayerPlaybackDataType"
  abilityActiveLists?: Maybe<Array<Maybe<AbilityActiveListType>>>
  abilityLearnEvents?: Maybe<Array<Maybe<AbilityLearnEventsType>>>
  abilityUsedEvents?: Maybe<Array<Maybe<AbilityUsedEventsType>>>
  assistEvents?: Maybe<Array<Maybe<AssistDetailType>>>
  buyBackEvents?: Maybe<Array<Maybe<BuyBackDetailType>>>
  csEvents?: Maybe<Array<Maybe<LastHitDetailType>>>
  deathEvents?: Maybe<Array<Maybe<DeathDetailType>>>
  experienceEvents?: Maybe<Array<Maybe<ExperienceDetailType>>>
  goldEvents?: Maybe<Array<Maybe<GoldDetailType>>>
  healEvents?: Maybe<Array<Maybe<HealDetailType>>>
  heroDamageEvents?: Maybe<Array<Maybe<HeroDamageDetailType>>>
  inventoryEvents?: Maybe<Array<Maybe<InventoryType>>>
  itemUsedEvents?: Maybe<Array<Maybe<ItemUsedEventType>>>
  killEvents?: Maybe<Array<Maybe<KillDetailType>>>
  playerUpdateAttributeEvents?: Maybe<Array<Maybe<PlayerUpdateAttributeDetailType>>>
  playerUpdateBattleEvents?: Maybe<Array<Maybe<PlayerUpdateBattleDetailType>>>
  playerUpdateGoldEvents?: Maybe<Array<Maybe<PlayerUpdateGoldDetailType>>>
  playerUpdateHealthEvents?: Maybe<Array<Maybe<PlayerUpdateHealthDetailType>>>
  playerUpdateLevelEvents?: Maybe<Array<Maybe<PlayerUpdateLevelDetailType>>>
  playerUpdatePositionEvents?: Maybe<Array<Maybe<PlayerUpdatePositionDetailType>>>
  purchaseEvents?: Maybe<Array<Maybe<ItemPurchaseType>>>
  spiritBearInventoryEvents?: Maybe<Array<Maybe<SpiritBearInventoryType>>>
  streakEvents?: Maybe<Array<Maybe<StreakEventType>>>
  towerDamageEvents?: Maybe<Array<Maybe<TowerDamageDetailType>>>
}

export enum MatchPlayerPositionType {
  All = "ALL",
  Filtered = "FILTERED",
  Position_1 = "POSITION_1",
  Position_2 = "POSITION_2",
  Position_3 = "POSITION_3",
  Position_4 = "POSITION_4",
  Position_5 = "POSITION_5",
  Unknown = "UNKNOWN",
}

export enum MatchPlayerRoleType {
  Core = "CORE",
  HardSupport = "HARD_SUPPORT",
  LightSupport = "LIGHT_SUPPORT",
  Unknown = "UNKNOWN",
}

export type MatchPlayerSpectatorType = {
  __typename?: "MatchPlayerSpectatorType"
  isRadiantCoach?: Maybe<Scalars["Boolean"]>
  isVictory?: Maybe<Scalars["Boolean"]>
  steamId?: Maybe<Scalars["Long"]>
}

export type MatchPlayerSpiritBearInventoryType = {
  __typename?: "MatchPlayerSpiritBearInventoryType"
  backPack0Id?: Maybe<Scalars["Int"]>
  backPack1Id?: Maybe<Scalars["Int"]>
  backPack2Id?: Maybe<Scalars["Int"]>
  item0Id?: Maybe<Scalars["Int"]>
  item1Id?: Maybe<Scalars["Int"]>
  item2Id?: Maybe<Scalars["Int"]>
  item3Id?: Maybe<Scalars["Int"]>
  item4Id?: Maybe<Scalars["Int"]>
  item5Id?: Maybe<Scalars["Int"]>
  neutral0Id?: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsAbilityCastObjectType = {
  __typename?: "MatchPlayerStatsAbilityCastObjectType"
  count: Scalars["Int"]
  damage: Scalars["Int"]
  duration?: Maybe<Scalars["Int"]>
  target: Scalars["Int"]
}

export type MatchPlayerStatsAbilityCastReportType = {
  __typename?: "MatchPlayerStatsAbilityCastReportType"
  abilityId: Scalars["Int"]
  count: Scalars["Int"]
  targets?: Maybe<Array<Maybe<MatchPlayerStatsAbilityCastObjectType>>>
}

export type MatchPlayerStatsActionReportType = {
  __typename?: "MatchPlayerStatsActionReportType"
  attackPosition: Scalars["Int"]
  attackTarget: Scalars["Int"]
  castNoTarget: Scalars["Int"]
  castPosition: Scalars["Int"]
  castTarget: Scalars["Int"]
  glyphCast: Scalars["Int"]
  heldPosition: Scalars["Int"]
  moveToPosition: Scalars["Int"]
  moveToTarget: Scalars["Int"]
  pingUsed: Scalars["Int"]
  scanUsed: Scalars["Int"]
}

export type MatchPlayerStatsAllTalkEventType = {
  __typename?: "MatchPlayerStatsAllTalkEventType"
  message?: Maybe<Scalars["String"]>
  pausedTick: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchPlayerStatsAssistEventType = {
  __typename?: "MatchPlayerStatsAssistEventType"
  gold?: Maybe<Scalars["Int"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  target?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
  xp?: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsBuffEventType = {
  __typename?: "MatchPlayerStatsBuffEventType"
  abilityId?: Maybe<Scalars["Int"]>
  itemId?: Maybe<Scalars["Int"]>
  stackCount?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
}

export type MatchPlayerStatsChatWheelEventType = {
  __typename?: "MatchPlayerStatsChatWheelEventType"
  chatWheelId?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
}

export type MatchPlayerStatsCourierKillEventType = {
  __typename?: "MatchPlayerStatsCourierKillEventType"
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
}

export type MatchPlayerStatsDeathEventType = {
  __typename?: "MatchPlayerStatsDeathEventType"
  assist?: Maybe<Array<Scalars["Short"]>>
  attacker?: Maybe<Scalars["Short"]>
  byAbility?: Maybe<Scalars["Int"]>
  byItem?: Maybe<Scalars["Int"]>
  goldFed?: Maybe<Scalars["Int"]>
  goldLost?: Maybe<Scalars["Int"]>
  hasHealAvailable?: Maybe<Scalars["Boolean"]>
  isAttemptTpOut?: Maybe<Scalars["Boolean"]>
  isBurst?: Maybe<Scalars["Boolean"]>
  isDieBack?: Maybe<Scalars["Boolean"]>
  isEngagedOnDeath?: Maybe<Scalars["Boolean"]>
  isTracked?: Maybe<Scalars["Boolean"]>
  isWardWalkThrough?: Maybe<Scalars["Boolean"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  target?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
  timeDead?: Maybe<Scalars["Int"]>
  xpFed?: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsFarmDistributionObjectType = {
  __typename?: "MatchPlayerStatsFarmDistributionObjectType"
  count: Scalars["Int"]
  gold?: Maybe<Scalars["Int"]>
  id: Scalars["Int"]
  xp?: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsFarmDistributionReportType = {
  __typename?: "MatchPlayerStatsFarmDistributionReportType"
  abandonGold: Scalars["Int"]
  ancientLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>
  bountyGold?: Maybe<MatchPlayerStatsFarmDistributionObjectType>
  buildings?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>
  buyBackGold: Scalars["Int"]
  creepLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>
  creepType?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>
  itemGold: Scalars["Int"]
  neutralLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>
  other?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>
  talentGold: Scalars["Int"]
}

export type MatchPlayerStatsHeroDamageReportType = {
  __typename?: "MatchPlayerStatsHeroDamageReportType"
  dealtSourceAbility?: Maybe<
    Array<Maybe<MatchPlayerHeroDamageSourceAbilityReportObjectType>>
  >
  dealtSourceItem?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceItemReportObjectType>>>
  dealtTargets?: Maybe<Array<Maybe<MatchPlayerHeroDamageTargetReportObjectType>>>
  dealtTotal?: Maybe<MatchPlayerHeroDamageTotalReportObjectType>
  receivedSourceAbility?: Maybe<
    Array<Maybe<MatchPlayerHeroDamageSourceAbilityReportObjectType>>
  >
  receivedSourceItem?: Maybe<
    Array<Maybe<MatchPlayerHeroDamageSourceItemReportObjectType>>
  >
  receivedTargets?: Maybe<Array<Maybe<MatchPlayerHeroDamageTargetReportObjectType>>>
  receivedTotal?: Maybe<MatchPlayerHeroDamageTotalRecievedReportObjectType>
}

export type MatchPlayerStatsItemUsedEventType = {
  __typename?: "MatchPlayerStatsItemUsedEventType"
  count?: Maybe<Scalars["Int"]>
  itemId: Scalars["Int"]
}

export type MatchPlayerStatsKillEventType = {
  __typename?: "MatchPlayerStatsKillEventType"
  assist?: Maybe<Array<Scalars["Int"]>>
  byAbility?: Maybe<Scalars["Int"]>
  byItem?: Maybe<Scalars["Int"]>
  gold?: Maybe<Scalars["Int"]>
  isGank?: Maybe<Scalars["Boolean"]>
  isInvisible?: Maybe<Scalars["Boolean"]>
  isSmoke?: Maybe<Scalars["Boolean"]>
  isSolo?: Maybe<Scalars["Boolean"]>
  isTpRecently?: Maybe<Scalars["Boolean"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  target?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
  xp?: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsLocationReportType = {
  __typename?: "MatchPlayerStatsLocationReportType"
  positionX: Scalars["Int"]
  positionY: Scalars["Int"]
}

export type MatchPlayerStatsRuneEventType = {
  __typename?: "MatchPlayerStatsRuneEventType"
  action?: Maybe<RuneAction>
  gold?: Maybe<Scalars["Int"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  rune?: Maybe<RuneEnums>
  time: Scalars["Int"]
}

export type MatchPlayerStatsTowerDamageReportType = {
  __typename?: "MatchPlayerStatsTowerDamageReportType"
  damage: Scalars["Int"]
  damageCreeps: Scalars["Int"]
  damageFromAbility: Scalars["Int"]
  npcId: Scalars["Int"]
}

export type MatchPlayerStatsType = {
  __typename?: "MatchPlayerStatsType"
  abilities?: Maybe<Array<Maybe<PlayerAbilityType>>>
  abilityCastReport?: Maybe<Array<Maybe<MatchPlayerStatsAbilityCastReportType>>>
  actionReport?: Maybe<MatchPlayerStatsActionReportType>
  actionsPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  allTalks?: Maybe<Array<Maybe<MatchPlayerStatsAllTalkEventType>>>
  assistCount?: Maybe<Scalars["Int"]>
  assistEvents?: Maybe<Array<Maybe<MatchPlayerStatsAssistEventType>>>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  campStack?: Maybe<Array<Maybe<Scalars["Int"]>>>
  chatWheels?: Maybe<Array<Maybe<MatchPlayerStatsChatWheelEventType>>>
  courierKills?: Maybe<Array<Maybe<MatchPlayerStatsCourierKillEventType>>>
  deathCount?: Maybe<Scalars["Int"]>
  deathEvents?: Maybe<Array<Maybe<MatchPlayerStatsDeathEventType>>>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  deniesPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  dotaPlusHeroXp?: Maybe<Scalars["Int"]>
  experienceCount?: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  experiencePerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  farmDistributionReport?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionReportType>>>
  gameVersionId?: Maybe<Scalars["Short"]>
  goldCount?: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  goldPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  healCount?: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  healPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  heroDamageCount?: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  heroDamagePerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  heroDamageReceivedPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  heroDamageReport?: Maybe<MatchPlayerStatsHeroDamageReportType>
  /** Starts at minute 0:00.  The last index will contain the last subset of data, so if a match is 41:01 long, the last index will be the change in the last 1 second. */
  impPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** Starts at minute 0:00.  The last index will contain the last subset of data, so if a match is 41:01 long, the last index will be the change in the last 1 second. */
  impPerMinute2?: Maybe<Array<Maybe<Scalars["Int"]>>>
  inventoryReport?: Maybe<Array<Maybe<MatchPlayerInventoryType>>>
  invisibleSeconds?: Maybe<Scalars["Int"]>
  itemPurchases?: Maybe<Array<Maybe<MatchPlayerItemPurchaseEventType>>>
  itemUsed?: Maybe<Array<Maybe<MatchPlayerStatsItemUsedEventType>>>
  killCount?: Maybe<Scalars["Int"]>
  killEvents?: Maybe<Array<Maybe<MatchPlayerStatsKillEventType>>>
  lastHitCount?: Maybe<Scalars["Int"]>
  lastHitsPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  level?: Maybe<Array<Maybe<Scalars["Int"]>>>
  locationReport?: Maybe<Array<Maybe<MatchPlayerStatsLocationReportType>>>
  matchId?: Maybe<Scalars["Long"]>
  matchPlayerBuffEvent?: Maybe<Array<Maybe<MatchPlayerStatsBuffEventType>>>
  /** Starts at minute 0:00 and Index 0 will show the Networth at 0:00 in the game. */
  networthPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  runes?: Maybe<Array<Maybe<MatchPlayerStatsRuneEventType>>>
  spiritBearInventoryReport?: Maybe<Array<Maybe<MatchPlayerSpiritBearInventoryType>>>
  steamAccountId?: Maybe<Scalars["Long"]>
  towerDamageCount?: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  towerDamagePerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  towerDamageReport?: Maybe<Array<Maybe<MatchPlayerStatsTowerDamageReportType>>>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  tripsFountainPerMinute?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** A list of events that contain all the times a player got gold for a destroyed ward (and experience). */
  wardDestruction?: Maybe<Array<Maybe<MatchPlayerWardDestuctionObjectType>>>
  wards?: Maybe<Array<Maybe<MatchPlayerStatsWardEventType>>>
}

export type MatchPlayerStatsTypeAbilitiesArgs = {
  gameVerionId?: InputMaybe<Scalars["Int"]>
}

export type MatchPlayerStatsWardEventType = {
  __typename?: "MatchPlayerStatsWardEventType"
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
  type: Scalars["Int"]
}

export enum MatchPlayerTeamPickOrderType {
  FifthPick = "FIFTH_PICK",
  FirstPick = "FIRST_PICK",
  FourthPick = "FOURTH_PICK",
  SecondPick = "SECOND_PICK",
  ThirdPick = "THIRD_PICK",
}

export type MatchPlayerType = {
  __typename?: "MatchPlayerType"
  additionalUnit?: Maybe<MatchPlayerAdditionalUnitType>
  assists?: Maybe<Scalars["Byte"]>
  award?: Maybe<MatchPlayerAward>
  backpack0Id?: Maybe<Scalars["Short"]>
  backpack1Id?: Maybe<Scalars["Short"]>
  backpack2Id?: Maybe<Scalars["Short"]>
  behavior?: Maybe<Scalars["Short"]>
  deaths?: Maybe<Scalars["Byte"]>
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  dotaPlus?: Maybe<HeroDotaPlusLeaderboardRankType>
  experiencePerMinute?: Maybe<Scalars["Short"]>
  gameVersionId?: Maybe<Scalars["Short"]>
  gold?: Maybe<Scalars["Int"]>
  goldPerMinute?: Maybe<Scalars["Short"]>
  goldSpent?: Maybe<Scalars["Int"]>
  hero?: Maybe<HeroType>
  heroAverage?: Maybe<Array<Maybe<HeroPositionTimeDetailAverageObjectType>>>
  heroDamage?: Maybe<Scalars["Int"]>
  heroHealing?: Maybe<Scalars["Int"]>
  heroId?: Maybe<Scalars["Short"]>
  imp?: Maybe<Scalars["Short"]>
  intentionalFeeding?: Maybe<Scalars["Boolean"]>
  isRadiant?: Maybe<Scalars["Boolean"]>
  isRandom?: Maybe<Scalars["Boolean"]>
  isVictory?: Maybe<Scalars["Boolean"]>
  item0Id?: Maybe<Scalars["Short"]>
  item1Id?: Maybe<Scalars["Short"]>
  item2Id?: Maybe<Scalars["Short"]>
  item3Id?: Maybe<Scalars["Short"]>
  item4Id?: Maybe<Scalars["Short"]>
  item5Id?: Maybe<Scalars["Short"]>
  kills?: Maybe<Scalars["Byte"]>
  lane?: Maybe<MatchLaneType>
  leaverStatus?: Maybe<LeaverStatusEnum>
  level?: Maybe<Scalars["Byte"]>
  match?: Maybe<MatchType>
  matchId?: Maybe<Scalars["Long"]>
  networth?: Maybe<Scalars["Int"]>
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  neutral0Id?: Maybe<Scalars["Short"]>
  numDenies?: Maybe<Scalars["Short"]>
  numLastHits?: Maybe<Scalars["Short"]>
  partyId?: Maybe<Scalars["Byte"]>
  playbackData?: Maybe<MatchPlayerPlaybackDataType>
  playerSlot?: Maybe<Scalars["Byte"]>
  position?: Maybe<MatchPlayerPositionType>
  role?: Maybe<MatchPlayerRoleType>
  roleBasic?: Maybe<MatchPlayerRoleType>
  stats?: Maybe<MatchPlayerStatsType>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  streakPrediction?: Maybe<Scalars["Byte"]>
  towerDamage?: Maybe<Scalars["Int"]>
}

export type MatchPlayerWardDestuctionObjectType = {
  __typename?: "MatchPlayerWardDestuctionObjectType"
  experience?: Maybe<Scalars["Int"]>
  gold: Scalars["Int"]
  time: Scalars["Int"]
}

export type MatchReplayUploadHeroDuoSummaryType = {
  __typename?: "MatchReplayUploadHeroDuoSummaryType"
  heroId?: Maybe<Scalars["Short"]>
  matchCountAgainst: Scalars["Int"]
  matchCountWith: Scalars["Int"]
  winCountAgainst: Scalars["Int"]
  winCountWith: Scalars["Int"]
}

export type MatchReplayUploadHeroSummaryType = {
  __typename?: "MatchReplayUploadHeroSummaryType"
  banCountAgainst: Scalars["Int"]
  banCountWith: Scalars["Int"]
  duos?: Maybe<Array<Maybe<MatchReplayUploadHeroDuoSummaryType>>>
  heroId?: Maybe<Scalars["Short"]>
  matchCountAgainst: Scalars["Int"]
  matchCountWith: Scalars["Int"]
  winCountAgainst: Scalars["Int"]
  winCountWith: Scalars["Int"]
}

export type MatchReplayUploadMatchType = {
  __typename?: "MatchReplayUploadMatchType"
  didRadiantWin: Scalars["Boolean"]
  direKills?: Maybe<Scalars["Byte"]>
  direTeam?: Maybe<TeamType>
  direTeamId?: Maybe<Scalars["Int"]>
  durationMinutes: Scalars["Int"]
  durationSeconds?: Maybe<Scalars["Short"]>
  endDateTime?: Maybe<Scalars["DateTime"]>
  fileName: Scalars["String"]
  gameMode?: Maybe<Scalars["Byte"]>
  gameVersionId: Scalars["Int"]
  id?: Maybe<Scalars["Long"]>
  isActive: Scalars["Boolean"]
  isComplete: Scalars["Boolean"]
  isRadiantFirstPick: Scalars["Boolean"]
  isValidated: Scalars["Boolean"]
  league?: Maybe<LeagueType>
  leagueId?: Maybe<Scalars["Int"]>
  lobbyType?: Maybe<Scalars["Byte"]>
  matchUploadTeamId: Scalars["Int"]
  notes?: Maybe<Scalars["String"]>
  numHumanPlayers?: Maybe<Scalars["Byte"]>
  numHumanSpectators?: Maybe<Scalars["Byte"]>
  players?: Maybe<Array<Maybe<MatchReplayUploadPlayerType>>>
  radiantKills?: Maybe<Scalars["Byte"]>
  radiantTeam?: Maybe<TeamType>
  radiantTeamId?: Maybe<Scalars["Int"]>
  seriesId?: Maybe<Scalars["Long"]>
  startDateTime?: Maybe<Scalars["DateTime"]>
  stats?: Maybe<MatchReplayUploadStatsType>
  uploaderCaptainJackIdentityId?: Maybe<Scalars["Guid"]>
}

export type MatchReplayUploadOverviewType = {
  __typename?: "MatchReplayUploadOverviewType"
  matchCount: Scalars["Int"]
  matches?: Maybe<Array<Maybe<MatchReplayUploadMatchType>>>
  winCount: Scalars["Int"]
}

export type MatchReplayUploadPickBanType = {
  __typename?: "MatchReplayUploadPickBanType"
  bannedHeroId?: Maybe<Scalars["Short"]>
  heroId?: Maybe<Scalars["Short"]>
  isPick: Scalars["Boolean"]
  isRadiant?: Maybe<Scalars["Boolean"]>
  order?: Maybe<Scalars["Byte"]>
  playerSlot?: Maybe<Scalars["Byte"]>
  time?: Maybe<Scalars["Byte"]>
  wasBannedSuccessfully: Scalars["Boolean"]
}

export type MatchReplayUploadPlayerStatsItemsType = {
  __typename?: "MatchReplayUploadPlayerStatsItemsType"
  backpack0IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
  backpack1IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
  backpack2IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
  item0IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
  item1IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
  item2IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
  item3IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
  item4IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
  item5IdList?: Maybe<Array<Maybe<Scalars["Byte"]>>>
}

export type MatchReplayUploadPlayerStatsType = {
  __typename?: "MatchReplayUploadPlayerStatsType"
  agilityTotalList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  assistsList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  bkbChargesUsedList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  campStackList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  claimedDenyCountList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  claimedMissCountList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  commandsIssuedList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  creepKillGoldList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  creepStackList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  damageBonusList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  damageMaxList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  damageMinList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  deathsList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  denyCountList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  goldLostToDeathList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  goldSpentOnBuybacksList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  goldSpentOnConsumablesList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  goldSpentOnItemsList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  goldSpentOnSupportList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  heroDamageList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  heroHealingList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  heroKillGoldList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  incomeGoldList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  intellectTotalList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  items?: Maybe<MatchReplayUploadPlayerStatsItemsType>
  killsList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  lastHitCountList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  lastHitMultiKillList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  lastHitStreakList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  levelList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxHealthList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  maxManaList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  missCountList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  nearbyCreepDeathCountList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  networthList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  observerWardsPlacedList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  reliableGoldList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  roshanKillsList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  runePicksupList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sentryWardsPlacedList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sharedGoldList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  streakList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  strengthTotalList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  stunsList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  totalEarnedGoldList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  totalEarnedXpList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  towerDamageList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  towerKillsList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  unreliableGoldList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  wardsDestroyedList?: Maybe<Array<Maybe<Scalars["Int"]>>>
  wardsPurchasedList?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type MatchReplayUploadPlayerType = {
  __typename?: "MatchReplayUploadPlayerType"
  assists?: Maybe<Scalars["Byte"]>
  backpack0Id?: Maybe<Scalars["Short"]>
  backpack1Id?: Maybe<Scalars["Short"]>
  backpack2Id?: Maybe<Scalars["Short"]>
  deaths?: Maybe<Scalars["Byte"]>
  denies?: Maybe<Scalars["Short"]>
  experiencePerMinute?: Maybe<Scalars["Short"]>
  goldPerMinute?: Maybe<Scalars["Short"]>
  goldSpentOnBuybacks?: Maybe<Scalars["Int"]>
  goldSpentOnConsumables?: Maybe<Scalars["Int"]>
  goldSpentOnItems?: Maybe<Scalars["Int"]>
  goldSpentOnSupport?: Maybe<Scalars["Int"]>
  heroDamage: Scalars["Int"]
  heroHealing: Scalars["Int"]
  heroId?: Maybe<Scalars["Short"]>
  isDire: Scalars["Boolean"]
  isRadiant: Scalars["Boolean"]
  isVictory: Scalars["Boolean"]
  item0Id?: Maybe<Scalars["Short"]>
  item1Id?: Maybe<Scalars["Short"]>
  item2Id?: Maybe<Scalars["Short"]>
  item3Id?: Maybe<Scalars["Short"]>
  item4Id?: Maybe<Scalars["Short"]>
  item5Id?: Maybe<Scalars["Short"]>
  kills?: Maybe<Scalars["Byte"]>
  lane?: Maybe<MatchLaneType>
  lastHits?: Maybe<Scalars["Short"]>
  level?: Maybe<Scalars["Byte"]>
  matchId?: Maybe<Scalars["Long"]>
  matchUploadTeamId: Scalars["Int"]
  networth: Scalars["Int"]
  pickOrder?: Maybe<Scalars["Byte"]>
  playerSlot?: Maybe<Scalars["Byte"]>
  position?: Maybe<MatchPlayerPositionType>
  role?: Maybe<MatchPlayerRoleType>
  stats?: Maybe<MatchReplayUploadPlayerStatsType>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  teamPickOrder?: Maybe<MatchPlayerTeamPickOrderType>
  teamSlot?: Maybe<Scalars["Byte"]>
  totalGoldSpent: Scalars["Int"]
  towerDamage: Scalars["Int"]
  towerKills?: Maybe<Scalars["Short"]>
}

export type MatchReplayUploadStatsType = {
  __typename?: "MatchReplayUploadStatsType"
  pickBans?: Maybe<Array<Maybe<MatchReplayUploadPickBanType>>>
  spectators?: Maybe<Array<Maybe<Scalars["Long"]>>>
}

export type MatchReplayUploadTeamMemberType = {
  __typename?: "MatchReplayUploadTeamMemberType"
  captainJackIdentityId?: Maybe<Scalars["Guid"]>
  isAdmin: Scalars["Boolean"]
  isDefaultTeam: Scalars["Boolean"]
  matchUploadTeamId: Scalars["Int"]
  steamAccount?: Maybe<SteamAccountType>
}

export type MatchReplayUploadTeamType = {
  __typename?: "MatchReplayUploadTeamType"
  creatorCaptainJackIdentityId?: Maybe<Scalars["Guid"]>
  email: Scalars["String"]
  id: Scalars["Int"]
  isDefault?: Maybe<Scalars["Boolean"]>
  members?: Maybe<Array<Maybe<MatchReplayUploadTeamMemberType>>>
  name: Scalars["String"]
  team?: Maybe<TeamType>
  teamId: Scalars["Int"]
}

export type MatchStatsChatEventType = {
  __typename?: "MatchStatsChatEventType"
  fromHeroId?: Maybe<Scalars["Short"]>
  isRadiant?: Maybe<Scalars["Boolean"]>
  pausedTick?: Maybe<Scalars["Int"]>
  time?: Maybe<Scalars["Int"]>
  toHeroId?: Maybe<Scalars["Short"]>
  type?: Maybe<Scalars["Int"]>
  value?: Maybe<Scalars["Short"]>
}

export type MatchStatsLaneReportFactionLaneObject = {
  __typename?: "MatchStatsLaneReportFactionLaneObject"
  denyCount: Scalars["Int"]
  meleeCount: Scalars["Int"]
  neutralCount: Scalars["Int"]
  rangeCount: Scalars["Int"]
  siegeCount: Scalars["Int"]
}

export type MatchStatsLaneReportFactionObjectType = {
  __typename?: "MatchStatsLaneReportFactionObjectType"
  midLane?: Maybe<MatchStatsLaneReportFactionLaneObject>
  offLane?: Maybe<MatchStatsLaneReportFactionLaneObject>
  safeLane?: Maybe<MatchStatsLaneReportFactionLaneObject>
}

export type MatchStatsLaneReportType = {
  __typename?: "MatchStatsLaneReportType"
  dire?: Maybe<Array<Maybe<MatchStatsLaneReportFactionObjectType>>>
  radiant?: Maybe<Array<Maybe<MatchStatsLaneReportFactionObjectType>>>
}

export type MatchStatsOutpostReportObjectType = {
  __typename?: "MatchStatsOutpostReportObjectType"
  isControlledByRadiant: Scalars["Boolean"]
  isRadiantSide: Scalars["Boolean"]
  npcId?: Maybe<Scalars["Int"]>
}

export type MatchStatsPickBanType = {
  __typename?: "MatchStatsPickBanType"
  adjustedWinRate?: Maybe<Scalars["Byte"]>
  bannedHeroId?: Maybe<Scalars["Short"]>
  baseWinRate?: Maybe<Scalars["Byte"]>
  heroId?: Maybe<Scalars["Short"]>
  isPick: Scalars["Boolean"]
  isRadiant?: Maybe<Scalars["Boolean"]>
  letter?: Maybe<Scalars["Int"]>
  order?: Maybe<Scalars["Int"]>
  playerIndex?: Maybe<Scalars["Int"]>
  team?: Maybe<Scalars["Int"]>
  wasBannedSuccessfully?: Maybe<Scalars["Boolean"]>
}

export type MatchStatsTowerDeathType = {
  __typename?: "MatchStatsTowerDeathType"
  attacker?: Maybe<Scalars["Short"]>
  isRadiant?: Maybe<Scalars["Boolean"]>
  npcId?: Maybe<Scalars["Short"]>
  time?: Maybe<Scalars["Int"]>
}

export type MatchStatsTowerReportObjectType = {
  __typename?: "MatchStatsTowerReportObjectType"
  hp?: Maybe<Scalars["Int"]>
  npcId?: Maybe<Scalars["Int"]>
}

export type MatchStatsTowerReportType = {
  __typename?: "MatchStatsTowerReportType"
  /** This an index of every 5 minutes of the starting at minute 0. So Index 0 is Minute 0, Index 1 is 5 minutes, Index 2 is 10 minutes, etc. */
  outposts?: Maybe<Array<Maybe<MatchStatsOutpostReportObjectType>>>
  /** This an index of every 5 minutes of the starting at minute 0. So Index 0 is Minute 0, Index 1 is 5 minutes, Index 2 is 10 minutes, etc. */
  towers?: Maybe<Array<Maybe<MatchStatsTowerReportObjectType>>>
}

export type MatchStatsType = {
  __typename?: "MatchStatsType"
  chatEvents?: Maybe<Array<Maybe<MatchStatsChatEventType>>>
  /** This begins at -60 to 0 seconds (Index 0). */
  direKills?: Maybe<Array<Maybe<Scalars["Int"]>>>
  laneReport?: Maybe<MatchStatsLaneReportType>
  matchId?: Maybe<Scalars["Long"]>
  /** This begins at -60 to 0 seconds (Index 0). */
  pickBans?: Maybe<Array<Maybe<MatchStatsPickBanType>>>
  predictedWinRates?: Maybe<Array<Maybe<Scalars["Decimal"]>>>
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantExperienceLeads?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantKills?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantNetworthLeads?: Maybe<Array<Maybe<Scalars["Int"]>>>
  towerDeaths?: Maybe<Array<Maybe<MatchStatsTowerDeathType>>>
  towerStatus?: Maybe<Array<Maybe<MatchStatsTowerReportType>>>
  winRates?: Maybe<Array<Maybe<Scalars["Decimal"]>>>
}

export type MatchType = {
  __typename?: "MatchType"
  actualRank?: Maybe<Scalars["Short"]>
  analysisOutcome?: Maybe<MatchAnalysisOutcomeType>
  averageImp?: Maybe<Scalars["Short"]>
  averageRank?: Maybe<Scalars["Short"]>
  barracksStatusDire?: Maybe<Scalars["Short"]>
  barracksStatusRadiant?: Maybe<Scalars["Short"]>
  bottomLaneOutcome?: Maybe<LaneOutcomeEnums>
  bracket?: Maybe<Scalars["Byte"]>
  clusterId?: Maybe<Scalars["Int"]>
  didRadiantWin?: Maybe<Scalars["Boolean"]>
  direTeam?: Maybe<TeamType>
  direTeamId?: Maybe<Scalars["Int"]>
  durationSeconds?: Maybe<Scalars["Int"]>
  endDateTime?: Maybe<Scalars["Long"]>
  firstBloodTime?: Maybe<Scalars["Int"]>
  gameMode?: Maybe<GameModeEnumType>
  gameVersionId?: Maybe<Scalars["Short"]>
  id?: Maybe<Scalars["Long"]>
  isStats?: Maybe<Scalars["Boolean"]>
  league?: Maybe<LeagueType>
  leagueId?: Maybe<Scalars["Int"]>
  lobbyType?: Maybe<LobbyTypeEnum>
  midLaneOutcome?: Maybe<LaneOutcomeEnums>
  numHumanPlayers?: Maybe<Scalars["Int"]>
  parsedDateTime?: Maybe<Scalars["Long"]>
  playbackData?: Maybe<MatchPlaybackDataType>
  players?: Maybe<Array<Maybe<MatchPlayerType>>>
  predictedOutcomeWeight?: Maybe<Scalars["Byte"]>
  radiantTeam?: Maybe<TeamType>
  radiantTeamId?: Maybe<Scalars["Int"]>
  rank?: Maybe<Scalars["Int"]>
  regionId?: Maybe<Scalars["Byte"]>
  replaySalt?: Maybe<Scalars["Long"]>
  sequenceNum?: Maybe<Scalars["Long"]>
  series?: Maybe<SeriesType>
  seriesId?: Maybe<Scalars["Long"]>
  spectators?: Maybe<Array<Maybe<MatchPlayerSpectatorType>>>
  startDateTime?: Maybe<Scalars["Long"]>
  stats?: Maybe<MatchStatsType>
  statsDateTime?: Maybe<Scalars["Long"]>
  topLaneOutcome?: Maybe<LaneOutcomeEnums>
  tournamentId?: Maybe<Scalars["Int"]>
  tournamentRound?: Maybe<Scalars["Short"]>
  towerStatusDire?: Maybe<Scalars["Int"]>
  towerStatusRadiant?: Maybe<Scalars["Int"]>
}

export type MatchTypePlayersArgs = {
  steamAccountId?: InputMaybe<Scalars["Long"]>
}

export type MatchesDayType = {
  __typename?: "MatchesDayType"
  day: Scalars["Long"]
  matchCount: Scalars["Int"]
}

export type MatchesGameVersionType = {
  __typename?: "MatchesGameVersionType"
  gameVersionId: Scalars["Short"]
  matchCount: Scalars["Int"]
}

export type MatchesHourType = {
  __typename?: "MatchesHourType"
  hour: Scalars["Long"]
  matchCount: Scalars["Int"]
}

export type MatchesMonthType = {
  __typename?: "MatchesMonthType"
  matchCount: Scalars["Int"]
  month: Scalars["Long"]
}

export type MatchesWeekType = {
  __typename?: "MatchesWeekType"
  matchCount: Scalars["Int"]
  week: Scalars["Long"]
}

export type MatchmakingStatsType = {
  __typename?: "MatchmakingStatsType"
  australia: Scalars["Int"]
  austria: Scalars["Int"]
  brazil: Scalars["Int"]
  chile: Scalars["Int"]
  dubai: Scalars["Int"]
  europe: Scalars["Int"]
  india: Scalars["Int"]
  japan: Scalars["Int"]
  perfectWorldTelecom: Scalars["Int"]
  perfectWorldTelecomGuangdong: Scalars["Int"]
  perfectWorldTelecomWuhan: Scalars["Int"]
  perfectWorldTelecomZhejiang: Scalars["Int"]
  perfectWorldUnicom: Scalars["Int"]
  perfectWorldUnicomTianjin: Scalars["Int"]
  peru: Scalars["Int"]
  singapore: Scalars["Int"]
  southAfrica: Scalars["Int"]
  stockholm: Scalars["Int"]
  taiwan: Scalars["Int"]
  time: Scalars["Long"]
  uSEast: Scalars["Int"]
  uSWest: Scalars["Int"]
}

export type MatchplaybackDataCourierEventObjectType = {
  __typename?: "MatchplaybackDataCourierEventObjectType"
  didCastBoost?: Maybe<Scalars["Boolean"]>
  hp?: Maybe<Scalars["Int"]>
  isFlying?: Maybe<Scalars["Boolean"]>
  item0Id?: Maybe<Scalars["Int"]>
  item1Id?: Maybe<Scalars["Int"]>
  item2Id?: Maybe<Scalars["Int"]>
  item3Id?: Maybe<Scalars["Int"]>
  item4Id?: Maybe<Scalars["Int"]>
  item5Id?: Maybe<Scalars["Int"]>
  positionX?: Maybe<Scalars["Int"]>
  positionY?: Maybe<Scalars["Int"]>
  respawnTime?: Maybe<Scalars["Int"]>
  time: Scalars["Int"]
}

export type MergeProSteamAccountRequestType = {
  name: Scalars["String"]
  realName?: InputMaybe<Scalars["String"]>
  steamAccountId?: InputMaybe<Scalars["Long"]>
}

export type ModifierType = {
  __typename?: "ModifierType"
  buffDuration?: Maybe<Scalars["Int"]>
  id?: Maybe<Scalars["Short"]>
  isArmorReduce?: Maybe<Scalars["Boolean"]>
  isAttackReduce?: Maybe<Scalars["Boolean"]>
  isAttackSlow?: Maybe<Scalars["Boolean"]>
  isBanished?: Maybe<Scalars["Boolean"]>
  isBlind?: Maybe<Scalars["Boolean"]>
  isBreak?: Maybe<Scalars["Boolean"]>
  isCyclone?: Maybe<Scalars["Boolean"]>
  isDamageAmplified?: Maybe<Scalars["Boolean"]>
  isDisarm?: Maybe<Scalars["Boolean"]>
  isEthereal?: Maybe<Scalars["Boolean"]>
  isHex?: Maybe<Scalars["Boolean"]>
  isInvisible?: Maybe<Scalars["Boolean"]>
  isItem?: Maybe<Scalars["Boolean"]>
  isKnockback?: Maybe<Scalars["Boolean"]>
  isMovementDebuff?: Maybe<Scalars["Boolean"]>
  isMovementSlow?: Maybe<Scalars["Boolean"]>
  isMute?: Maybe<Scalars["Boolean"]>
  isRoot?: Maybe<Scalars["Boolean"]>
  isShackle?: Maybe<Scalars["Boolean"]>
  isSilence?: Maybe<Scalars["Boolean"]>
  isSleep?: Maybe<Scalars["Boolean"]>
  isStun?: Maybe<Scalars["Boolean"]>
  isTaunt?: Maybe<Scalars["Boolean"]>
  isWeaken?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
}

export type NewsItemType = {
  __typename?: "NewsItemType"
  author: Scalars["String"]
  contents: Scalars["String"]
  date?: Maybe<Scalars["Long"]>
  feedLabel: Scalars["String"]
  feedName: Scalars["String"]
  id?: Maybe<Scalars["Long"]>
  title: Scalars["String"]
  uri: Scalars["String"]
}

export type NpcStatType = {
  __typename?: "NpcStatType"
  attackAnimationPoint?: Maybe<Scalars["Float"]>
  attackDamageMax?: Maybe<Scalars["Float"]>
  attackDamageMin?: Maybe<Scalars["Float"]>
  attackDesire?: Maybe<Scalars["Float"]>
  attackRange?: Maybe<Scalars["Float"]>
  attackRangeBuffer?: Maybe<Scalars["Float"]>
  attackRate?: Maybe<Scalars["Float"]>
  autoAttacksByDefault?: Maybe<Scalars["Boolean"]>
  canBeDominated?: Maybe<Scalars["Boolean"]>
  combatClassAttack?: Maybe<Scalars["String"]>
  combatClassDefend?: Maybe<Scalars["String"]>
  dayTimeVision?: Maybe<Scalars["Float"]>
  hasInventory?: Maybe<Scalars["Boolean"]>
  isAncient?: Maybe<Scalars["Boolean"]>
  isNeutralUnitType?: Maybe<Scalars["Boolean"]>
  level?: Maybe<Scalars["Float"]>
  movementSpeed?: Maybe<Scalars["Float"]>
  movementTurnRate?: Maybe<Scalars["Float"]>
  nightTimeVision?: Maybe<Scalars["Float"]>
  projectileSpeed?: Maybe<Scalars["Float"]>
  statusHealth?: Maybe<Scalars["Float"]>
  statusHealthRegen?: Maybe<Scalars["Float"]>
  statusMana?: Maybe<Scalars["Float"]>
  statusManaRegen?: Maybe<Scalars["Float"]>
  teamName?: Maybe<Scalars["String"]>
  unitRelationshipClass?: Maybe<Scalars["String"]>
  wakesNeutrals?: Maybe<Scalars["Boolean"]>
}

export type NpcType = {
  __typename?: "NpcType"
  id?: Maybe<Scalars["Short"]>
  name?: Maybe<Scalars["String"]>
  stat?: Maybe<NpcStatType>
}

export type PageAghanimQuery = {
  __typename?: "PageAghanimQuery"
  /** Returns all the Abilities for a Hero on the TI10 (2020) summer event. */
  heroAbility?: Maybe<Array<Maybe<Ti2020CustomGameHeroAbilityType>>>
  /** Returns all the combinations of Heroes and their success on the TI10 (2020) summer event. */
  heroComposition?: Maybe<Ti2020CustomGameHeroCompositionType>
  /** Returns all the combinations of Heroes and their success on the TI10 (2020) summer event. */
  heroCompositions?: Maybe<Array<Maybe<Ti2020CustomGameHeroCompositionType>>>
  /** Returns a match by Id based on the TI10 (2020) summer event. */
  match?: Maybe<Ti2020CustomGameMatchType>
  /** Returns a list of matches by based on the TI10 (2020) summer event. */
  matches?: Maybe<Array<Maybe<Ti2020CustomGameMatchType>>>
  /** Returns all the Room Types by Difficulty for the TI10 (2020) summer event. */
  room?: Maybe<Array<Maybe<Ti2020CustomGameRoomType>>>
  /** Returns all the Room Modifiers by Difficulty for the TI10 (2020) summer event. */
  roomModifier?: Maybe<Array<Maybe<Ti2020CustomGameRoomModifierType>>>
  /** Returns the last 3 days winrate for each hero by Difficulty in the TI10 (2020) summer event. */
  winRate?: Maybe<Ti2020CustomGameHeroWinRateType>
}

export type PageAghanimQueryHeroAbilityArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType
}

export type PageAghanimQueryHeroCompositionArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType
  heroIds: Array<InputMaybe<Scalars["Short"]>>
}

export type PageAghanimQueryHeroCompositionsArgs = {
  request: FilterTi2020HeroCompositionRequestType
}

export type PageAghanimQueryMatchArgs = {
  id: Scalars["Long"]
}

export type PageAghanimQueryMatchesArgs = {
  request?: InputMaybe<FilterTi2020MatchRequestType>
}

export type PageAghanimQueryRoomArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType
}

export type PageAghanimQueryRoomModifierArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType
}

export type PageAghanimQueryWinRateArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType
}

export type PageDireTide2020Query = {
  __typename?: "PageDireTide2020Query"
  /** Returns a match by Id based on the 2020 Halloween Event DireTide. */
  match?: Maybe<DireTide2020CustomGameMatchType>
  /** Returns a list of matches by based on the 2020 Halloween Event DireTide. */
  matches?: Maybe<Array<Maybe<DireTide2020CustomGameMatchType>>>
  /** Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id. */
  winHour?: Maybe<Array<Maybe<DireTide2020CustomGameHeroWinDayType>>>
}

export type PageDireTide2020QueryMatchArgs = {
  id: Scalars["Long"]
}

export type PageDireTide2020QueryMatchesArgs = {
  request?: InputMaybe<FilterDireTide2020CustomMatchRequestType>
}

export type PageDireTide2020QueryWinHourArgs = {
  take?: InputMaybe<Scalars["Int"]>
}

export type PageLeaguesQuery = {
  __typename?: "PageLeaguesQuery"
  /** Returns the last 12 hours by hour showing the amount of matches. */
  dpcPositionStats?: Maybe<Array<Maybe<LeagueDpcPositionStatObjectType>>>
}

export type PageMatchesQuery = {
  __typename?: "PageMatchesQuery"
  /** Returns the last 12 days by day showing the amount of matches. */
  matchesStatsDay?: Maybe<Array<Maybe<MatchesDayType>>>
  /** Returns the data by game version showing the amount of matches. */
  matchesStatsGameVersion?: Maybe<Array<Maybe<MatchesGameVersionType>>>
  /** Returns the last 12 hours by hour showing the amount of matches. */
  matchesStatsHour?: Maybe<Array<Maybe<MatchesHourType>>>
  /** Returns the data by month showing the amount of matches. */
  matchesStatsMonth?: Maybe<Array<Maybe<MatchesMonthType>>>
  /** Returns the last 12 weeks by week showing the amount of matches. */
  matchesStatsWeek?: Maybe<Array<Maybe<MatchesWeekType>>>
  /** Amount of players who are active and searching for a game in this region. */
  matchmakingStats?: Maybe<Array<Maybe<MatchmakingStatsType>>>
}

export type PageMatchesQueryMatchesStatsDayArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  take?: InputMaybe<Scalars["Int"]>
}

export type PageMatchesQueryMatchesStatsGameVersionArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  take?: InputMaybe<Scalars["Int"]>
}

export type PageMatchesQueryMatchesStatsHourArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  take?: InputMaybe<Scalars["Int"]>
}

export type PageMatchesQueryMatchesStatsMonthArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  take?: InputMaybe<Scalars["Int"]>
}

export type PageMatchesQueryMatchesStatsWeekArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>
  take?: InputMaybe<Scalars["Int"]>
}

export type PagePlayerQuery = {
  __typename?: "PagePlayerQuery"
  /** Returns a general player summary of random set of predefinded filters. */
  breakdown?: Maybe<PlayerBreakdownType>
  /** Returns the violations commited by a player in their last 500 games. */
  conduct?: Maybe<PlayerConductResponseType>
  /** A more in depth at a single player's single hero performance. */
  heroPerformance?: Maybe<PlayerPerformanceType>
  /** Returns a list of all heroes played by the steam account id and contains data about the average performance. */
  heroesPerformance?: Maybe<Array<Maybe<PlayerHeroesPerformanceType>>>
  /** Returns a list of players that the player has played with. */
  peers?: Maybe<Array<Maybe<PlayerTeammateType>>>
  /** Provided in-depth look of a player and how they proform globally on all heroes. */
  performance?: Maybe<PlayerPerformanceType>
  /** Picked the top pros and annoucers and determines if you ever have played with them and when. */
  playedWithPro?: Maybe<PlayerPlayedWithProType>
  /** Get very simple data for the on-hover of a player icon. */
  simpleSummary?: Maybe<PlayerCardHoverType>
}

export type PagePlayerQueryBreakdownArgs = {
  request: PlayerBreakdownRequestType
}

export type PagePlayerQueryHeroPerformanceArgs = {
  heroId: Scalars["Short"]
  request: PlayerHeroPerformanceMatchesRequestType
}

export type PagePlayerQueryHeroesPerformanceArgs = {
  request?: InputMaybe<PlayerHeroesPerformanceMatchesRequestType>
}

export type PagePlayerQueryPeersArgs = {
  request: PlayerTeammatesGroupByRequestType
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type PagePlayerQueryPerformanceArgs = {
  request: PlayerPerformanceMatchesRequestType
}

export type PagePlayersQuery = {
  __typename?: "PagePlayersQuery"
  /** Endpoint which breaks down all the SteamAccounts in the database by their current season rank. */
  steamAccountByRank?: Maybe<Array<Maybe<SteamAccountByRankType>>>
}

export type PageQuery = {
  __typename?: "PageQuery"
  /** Endpoints for the TI10 (2020) regarding the summer event. */
  aghanim?: Maybe<PageAghanimQuery>
  direTide2020?: Maybe<PageDireTide2020Query>
  /** Endpoints for Imp Related calls. */
  imp?: Maybe<ImpQuery>
  /** STRATZ specific endpoints found on the /leagues/ section of the website.  */
  leagues?: Maybe<PageLeaguesQuery>
  /** STRATZ specific endpoints found on the /matches/ section of the website.  */
  matches?: Maybe<PageMatchesQuery>
  /** STRATZ specific endpoints found on the /player/ section of the website. id is a required input field. */
  player?: Maybe<PagePlayerQuery>
  /** STRATZ specific endpoints found on the /players/ section of the website.  */
  players?: Maybe<PagePlayersQuery>
}

export type PageQueryPlayerArgs = {
  steamAccountId: Scalars["Long"]
}

export type PatchNoteLanguageType = {
  __typename?: "PatchNoteLanguageType"
  abilityId?: Maybe<Scalars["Short"]>
  gameVersionId?: Maybe<Scalars["Short"]>
  generalId?: Maybe<PatchNoteType>
  heroId?: Maybe<Scalars["Short"]>
  id?: Maybe<Scalars["String"]>
  index?: Maybe<Scalars["Byte"]>
  itemId?: Maybe<Scalars["Short"]>
  languageId?: Maybe<Scalars["Byte"]>
  text?: Maybe<Scalars["String"]>
}

export enum PatchNoteType {
  General = "GENERAL",
  Generic = "GENERIC",
  Hero = "HERO",
  Item = "ITEM",
  Npc = "NPC",
}

export type PlayerAbilityType = {
  __typename?: "PlayerAbilityType"
  abilityId: Scalars["Int"]
  abilityType?: Maybe<AbilityType>
  gameVersionId?: Maybe<Scalars["Short"]>
  isTalent?: Maybe<Scalars["Boolean"]>
  level: Scalars["Int"]
  time: Scalars["Int"]
}

export type PlayerAbilityTypeAbilityTypeArgs = {
  gameVerionId?: InputMaybe<Scalars["Int"]>
  langaugeId?: InputMaybe<Scalars["Int"]>
}

export type PlayerActivitySummaryHeroType = {
  __typename?: "PlayerActivitySummaryHeroType"
  heroId?: Maybe<Scalars["Int"]>
  lossCount?: Maybe<Scalars["Int"]>
  winCount?: Maybe<Scalars["Int"]>
}

export type PlayerActivitySummaryType = {
  __typename?: "PlayerActivitySummaryType"
  activity?: Maybe<PlayerBehaviorActivity>
  coreCount?: Maybe<Scalars["Int"]>
  heroes?: Maybe<Array<Maybe<PlayerActivitySummaryHeroType>>>
  imp?: Maybe<Scalars["Int"]>
  matchCount?: Maybe<Scalars["Int"]>
  supportCount?: Maybe<Scalars["Int"]>
}

export type PlayerBadgeType = {
  __typename?: "PlayerBadgeType"
  badgeId?: Maybe<Scalars["Byte"]>
  createdDateTime?: Maybe<Scalars["Long"]>
  slot?: Maybe<Scalars["Byte"]>
}

export type PlayerBattlePassResponseType = {
  __typename?: "PlayerBattlePassResponseType"
  accountsAbove75Count: Scalars["Int"]
  accountsAbove195Count: Scalars["Int"]
  accountsAbove225Count: Scalars["Int"]
  accountsAbove275Count: Scalars["Int"]
  accountsAbove330Count: Scalars["Int"]
  accountsAbove500Count: Scalars["Int"]
  accountsAbove1000Count: Scalars["Int"]
  accountsAbove2000Count: Scalars["Int"]
  playerCount: Scalars["Int"]
  players?: Maybe<Array<Maybe<PlayerBattlePassType>>>
}

export type PlayerBattlePassType = {
  __typename?: "PlayerBattlePassType"
  activity?: Maybe<Scalars["Byte"]>
  level: Scalars["Int"]
  steamAccount?: Maybe<SteamAccountType>
}

export enum PlayerBehaviorActivity {
  High = "HIGH",
  Intense = "INTENSE",
  Low = "LOW",
  Medium = "MEDIUM",
  None = "NONE",
  VeryHigh = "VERY_HIGH",
  VeryLow = "VERY_LOW",
}

export type PlayerBreakdownObjectType = {
  __typename?: "PlayerBreakdownObjectType"
  id?: Maybe<Scalars["Int"]>
  imp?: Maybe<Scalars["Int"]>
  lastSeenDateTime?: Maybe<Scalars["Long"]>
  matchCount: Scalars["Int"]
  win?: Maybe<Scalars["Int"]>
}

export type PlayerBreakdownRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars["Boolean"]>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** Whether the match has a team assigned or not. */
  isTeam?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type PlayerBreakdownType = {
  __typename?: "PlayerBreakdownType"
  dayOfWeekMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  durationMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  factionMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  gameModeMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  heroAttributeMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  impMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  isStatsMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  laneMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  lobbyMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  matches?: Maybe<PlayerBreakdownObjectType>
  partyMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  rankMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  regionMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  roleMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  timeOfDayMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
  weekEndMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>
}

export type PlayerCardHoverHeroType = {
  __typename?: "PlayerCardHoverHeroType"
  heroId: Scalars["Int"]
  lossCount: Scalars["Int"]
  winCount: Scalars["Int"]
}

export type PlayerCardHoverType = {
  __typename?: "PlayerCardHoverType"
  activity?: Maybe<Scalars["Byte"]>
  coreCount?: Maybe<Scalars["Int"]>
  heroes?: Maybe<PlayerCardHoverHeroType>
  imp?: Maybe<Scalars["Int"]>
  lastUpdateDateTime?: Maybe<Scalars["Long"]>
  matchCount?: Maybe<Scalars["Int"]>
  steamAccount?: Maybe<SteamAccountType>
  supportCount?: Maybe<Scalars["Int"]>
}

export type PlayerCoachingLeaderboardResponseType = {
  __typename?: "PlayerCoachingLeaderboardResponseType"
  accounts: Scalars["Int"]
  accountsAbove500: Scalars["Int"]
  accountsAbove2500: Scalars["Int"]
  players?: Maybe<PlayerCoachingLeaderboardType>
}

export type PlayerCoachingLeaderboardType = {
  __typename?: "PlayerCoachingLeaderboardType"
  activity?: Maybe<Scalars["Byte"]>
  firstMatchDateTime?: Maybe<Scalars["Long"]>
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  matchCount: Scalars["Int"]
  rating: Scalars["Int"]
  steamAccount?: Maybe<SteamAccountType>
  winCount: Scalars["Int"]
}

export type PlayerConductResponseType = {
  __typename?: "PlayerConductResponseType"
  behaviorScore?: Maybe<Scalars["Short"]>
  lastIncidentDateTime?: Maybe<Scalars["Long"]>
  lastIncidentMatchId?: Maybe<Scalars["Long"]>
  recentMatchIncidents?: Maybe<Array<Maybe<Scalars["Short"]>>>
}

export type PlayerDraftHeroHighlightType = {
  __typename?: "PlayerDraftHeroHighlightType"
  impAllTime?: Maybe<Scalars["Int"]>
  impLastMonth?: Maybe<Scalars["Int"]>
  impLastSixMonths?: Maybe<Scalars["Int"]>
  lastPlayed?: Maybe<Scalars["Long"]>
  matchCount?: Maybe<Scalars["Int"]>
  matchCountLastMonth?: Maybe<Scalars["Int"]>
  matchCountLastSixMonths?: Maybe<Scalars["Int"]>
  mvpCountLastMonth?: Maybe<Scalars["Int"]>
  topCoreCountLastMonth?: Maybe<Scalars["Int"]>
  topSupportCountLastMonth?: Maybe<Scalars["Int"]>
  winCount?: Maybe<Scalars["Int"]>
  winCountLastMonth?: Maybe<Scalars["Int"]>
  winCountLastSixMonths?: Maybe<Scalars["Int"]>
}

export type PlayerHeroDotaPlusLeaderboardRankResponseType = {
  __typename?: "PlayerHeroDotaPlusLeaderboardRankResponseType"
  players?: Maybe<Array<Maybe<HeroDotaPlusLeaderboardRankType>>>
}

export type PlayerHeroPerformanceLongestStreakType = {
  __typename?: "PlayerHeroPerformanceLongestStreakType"
  currentStreak?: Maybe<Scalars["Int"]>
  heroId?: Maybe<Scalars["Short"]>
  longestStreak?: Maybe<Scalars["Int"]>
}

export type PlayerHeroPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars["Boolean"]>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** Whether the match has a team assigned or not. */
  isTeam?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  matchGroupOrderBy?: InputMaybe<FilterMatchGroupOrderByEnum>
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars["Int"]>
  /** If the return should be ordered by Ascending or Desending order. */
  orderBy?: InputMaybe<FindMatchPlayerOrderBy>
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type PlayerHeroesPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars["Boolean"]>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** Whether the match has a team assigned or not. */
  isTeam?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type PlayerHeroesPerformanceScoreType = {
  __typename?: "PlayerHeroesPerformanceScoreType"
  id?: Maybe<MatchPlayerPositionType>
  imp?: Maybe<Scalars["Int"]>
  matchCount: Scalars["Int"]
  score: Scalars["Float"]
  winCount: Scalars["Int"]
}

export type PlayerHeroesPerformanceType = {
  __typename?: "PlayerHeroesPerformanceType"
  avgAssists?: Maybe<Scalars["Float"]>
  avgDeaths?: Maybe<Scalars["Float"]>
  avgKills?: Maybe<Scalars["Float"]>
  best?: Maybe<Scalars["Float"]>
  duration: Scalars["Int"]
  experiencePerMinute: Scalars["Int"]
  goldPerMinute: Scalars["Int"]
  hero?: Maybe<HeroType>
  heroId: Scalars["Short"]
  imp?: Maybe<Scalars["Int"]>
  kDA?: Maybe<Scalars["Float"]>
  lastPlayedDateTime?: Maybe<Scalars["Long"]>
  matchCount: Scalars["Int"]
  positionScore?: Maybe<Array<Maybe<PlayerHeroesPerformanceScoreType>>>
  winCount: Scalars["Int"]
}

export type PlayerLeaderBoardByHeroType = {
  __typename?: "PlayerLeaderBoardByHeroType"
  changeInRanking?: Maybe<Scalars["Short"]>
  createdDateTime?: Maybe<Scalars["Long"]>
  heroId?: Maybe<Scalars["Short"]>
  impAverage?: Maybe<Scalars["Byte"]>
  lane?: Maybe<MatchLaneType>
  losses?: Maybe<Scalars["Byte"]>
  regionId?: Maybe<Scalars["Byte"]>
  role?: Maybe<MatchPlayerRoleType>
  seasonBracket?: Maybe<Scalars["Byte"]>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  winStreak?: Maybe<Scalars["Byte"]>
  wins?: Maybe<Scalars["Byte"]>
}

export type PlayerMatchesGroupByRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** Only used when doing matchesGroupBy endpoint.  This is how the data will be grouped and makes your return Id field. */
  groupBy: FindMatchPlayerGroupBy
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Determines if you want a single player returned, only the player by SteamAccountId, or if you want all 10 players in the match. */
  playerList: FindMatchPlayerList
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  take: Scalars["Int"]
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type PlayerMatchesRequestType = {
  /** Only return matches after this match id. Can be used instead of Skip. */
  after?: InputMaybe<Scalars["Long"]>
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** Only return matches before this match id. Can be used instead of Skip. */
  before?: InputMaybe<Scalars["Long"]>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars["Int"]>
  /** In what order the returned data will come in. */
  orderBy?: InputMaybe<FindMatchPlayerOrderBy>
  /** Determines if you want a single player returned, only the player by SteamAccountId, or if you want all 10 players in the match. */
  playerList?: InputMaybe<FindMatchPlayerList>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  take?: InputMaybe<Scalars["Int"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars["Int"]>
  /** When requesting matches with a primary SteamAccountId, this will ensure that player is on specific team Id being sent in. */
  teamIdSteamAccount?: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type PlayerPerformanceCompositionHeroType = {
  __typename?: "PlayerPerformanceCompositionHeroType"
  heroId?: Maybe<Scalars["Short"]>
  matchCount: Scalars["Int"]
  winCount: Scalars["Int"]
}

export type PlayerPerformanceCompositionType = {
  __typename?: "PlayerPerformanceCompositionType"
  allies?: Maybe<Array<Maybe<PlayerPerformanceCompositionHeroType>>>
  foes?: Maybe<Array<Maybe<PlayerPerformanceCompositionHeroType>>>
}

export type PlayerPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars["Boolean"]>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** Whether the match has a team assigned or not. */
  isTeam?: InputMaybe<Scalars["Boolean"]>
  /** Whether the match was a victory or not for the specified player. */
  isVictory?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars["Int"]>
  /** When searching for a league, the tier the league must be in. Tiers: Amateur = 1, Professional = 2, Premium = 3, Pro Circuit = 4, Main Event = 5 */
  tier?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type PlayerPerformancePositionObjectType = {
  __typename?: "PlayerPerformancePositionObjectType"
  laneMatchCount: Scalars["Int"]
  laneType?: Maybe<Scalars["Byte"]>
  laneWinCount: Scalars["Int"]
}

export type PlayerPerformancePositionType = {
  __typename?: "PlayerPerformancePositionType"
  lanes?: Maybe<Array<Maybe<PlayerPerformancePositionObjectType>>>
  roleMatchCount: Scalars["Int"]
  roleType?: Maybe<Scalars["Byte"]>
  roleWinCount: Scalars["Int"]
}

export type PlayerPerformanceType = {
  __typename?: "PlayerPerformanceType"
  assists?: Maybe<Scalars["Int"]>
  assistsAverage?: Maybe<Scalars["Decimal"]>
  awardMatchCount: Scalars["Int"]
  composition?: Maybe<PlayerPerformanceCompositionType>
  cs?: Maybe<Scalars["Int"]>
  csAverage?: Maybe<Scalars["Decimal"]>
  deaths?: Maybe<Scalars["Int"]>
  deathsAverage?: Maybe<Scalars["Decimal"]>
  gpm?: Maybe<Scalars["Int"]>
  gpmAverage?: Maybe<Scalars["Decimal"]>
  hero?: Maybe<HeroType>
  heroId?: Maybe<Array<Maybe<Scalars["Short"]>>>
  imp?: Maybe<Scalars["Int"]>
  kills?: Maybe<Scalars["Int"]>
  killsAverage?: Maybe<Scalars["Decimal"]>
  matchCount: Scalars["Int"]
  maxStreak: Scalars["Int"]
  mmrBracket: Scalars["Int"]
  mmrTier: Scalars["Int"]
  mvpCount: Scalars["Int"]
  /** Contains an array of 6 items which are listed as index 0 - 1st Pick, Index 1 - Pick 2nd, 3rd, Index 2 - Pick 4th, 5th, Index 3 - Pick 6th, Pick 7th, Index 4 - Pick 8th, 9ths, Index 5 - Pick 10th */
  pickOrder?: Maybe<Array<Maybe<Scalars["Int"]>>>
  position?: Maybe<Array<Maybe<PlayerPerformancePositionType>>>
  rank?: Maybe<Scalars["Int"]>
  streak: Scalars["Int"]
  topCoreCount: Scalars["Int"]
  topSupportCount: Scalars["Int"]
  winCount: Scalars["Int"]
  xpm?: Maybe<Scalars["Int"]>
  xpmAverage?: Maybe<Scalars["Decimal"]>
}

export type PlayerPlayedWithProPlayerMatchType = {
  __typename?: "PlayerPlayedWithProPlayerMatchType"
  date?: Maybe<Scalars["Long"]>
  isVictory: Scalars["Boolean"]
  matchId?: Maybe<Scalars["Long"]>
}

export type PlayerPlayedWithProPlayerType = {
  __typename?: "PlayerPlayedWithProPlayerType"
  name: Scalars["String"]
  steamId?: Maybe<Scalars["Long"]>
  vs?: Maybe<PlayerPlayedWithProPlayerMatchType>
  with?: Maybe<PlayerPlayedWithProPlayerMatchType>
}

export type PlayerPlayedWithProTeamType = {
  __typename?: "PlayerPlayedWithProTeamType"
  players?: Maybe<Array<Maybe<PlayerPlayedWithProPlayerType>>>
  teamId: Scalars["Int"]
  teamLogo: Scalars["String"]
  teamName: Scalars["String"]
}

export type PlayerPlayedWithProType = {
  __typename?: "PlayerPlayedWithProType"
  casters?: Maybe<Array<Maybe<PlayerPlayedWithProPlayerType>>>
  internationalWinners?: Maybe<Array<Maybe<PlayerPlayedWithProTeamType>>>
  playedCount: Scalars["Int"]
  teams?: Maybe<Array<Maybe<PlayerPlayedWithProTeamType>>>
  totalCount: Scalars["Int"]
}

export type PlayerTeammateType = {
  __typename?: "PlayerTeammateType"
  avgAssists?: Maybe<Scalars["Float"]>
  avgDeaths?: Maybe<Scalars["Float"]>
  avgExperiencePerMinute?: Maybe<Scalars["Int"]>
  avgGoldPerMinute?: Maybe<Scalars["Int"]>
  avgImp?: Maybe<Scalars["Int"]>
  avgKDA?: Maybe<Scalars["Float"]>
  avgKills?: Maybe<Scalars["Float"]>
  firstMatchDateTime?: Maybe<Scalars["Long"]>
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  matchCount?: Maybe<Scalars["Int"]>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  winCount?: Maybe<Scalars["Int"]>
}

export type PlayerTeammatesGroupByRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  matchGroupOrderBy: FilterMatchGroupOrderByEnum
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** Minimum amount of MatchCount required for a Duo to qualify */
  matchLimitMax?: InputMaybe<Scalars["Int"]>
  /** Minimum amount of MatchCount required for a Duo to qualify */
  matchLimitMin?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars["Int"]>
  /** Include only results where the main player played with popular broadcasters. */
  onlyCasters?: InputMaybe<Scalars["Boolean"]>
  /** Include only results where main player played with popular professionals. */
  onlyPros?: InputMaybe<Scalars["Boolean"]>
  /** If the return should be ordered by Ascending or Desending order. */
  orderBy: FindMatchPlayerOrderBy
  /** Only used when doing matchesGroupBy endpoint.  This is how the data will be grouped and makes your return Id field. */
  playerTeammateSort: FilterPlayerTeammateEnum
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars["Int"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  take?: InputMaybe<Scalars["Int"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type PlayerType = {
  __typename?: "PlayerType"
  activity?: Maybe<PlayerActivitySummaryType>
  badges?: Maybe<Array<Maybe<PlayerBadgeType>>>
  behaviorScore?: Maybe<Scalars["Short"]>
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  dotaPlus?: Maybe<Array<Maybe<HeroDotaPlusLeaderboardRankType>>>
  /** A list of the high achivement skills by a Player. */
  feats?: Maybe<Array<Maybe<FeatType>>>
  firstMatchDate?: Maybe<Scalars["Long"]>
  guildMember?: Maybe<GuildMemberType>
  heroPerformance?: Maybe<PlayerPerformanceType>
  /** A list of the current Streak and the Longest Streak for each Hero by a Player. */
  heroStreaks?: Maybe<Array<Maybe<PlayerHeroPerformanceLongestStreakType>>>
  /** Returns a list of all heroes played by the steam account id and contains data about the average performance. */
  heroesPerformance?: Maybe<Array<Maybe<PlayerHeroesPerformanceType>>>
  identity?: Maybe<CaptainJackIdentityPublicProfileType>
  imp?: Maybe<Scalars["Int"]>
  isFollowed?: Maybe<Scalars["Boolean"]>
  languageCodes?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastMatchDate?: Maybe<Scalars["Long"]>
  lastMatchRegionId?: Maybe<Scalars["Byte"]>
  leaderboardRanks?: Maybe<Array<Maybe<SteamAccountSeasonLeaderBoardRankType>>>
  matchCount?: Maybe<Scalars["Int"]>
  /** Find match details by steam account id. steamAccountId is a required input field. */
  matches?: Maybe<Array<Maybe<MatchType>>>
  /** Find match details by steam account id. The return is modified to group the data by the GroupBy parameter. */
  matchesGroupBy?: Maybe<Array<Maybe<MatchGroupByType>>>
  names?: Maybe<Array<Maybe<SteamAccountNameType>>>
  performance?: Maybe<PlayerPerformanceType>
  /** Picked the top pros and annoucers and determines if you ever have played with them and when. */
  playedWithPro?: Maybe<Array<Maybe<PlayerPlayedWithProType>>>
  ranks?: Maybe<Array<Maybe<SteamAccountSeasonRankType>>>
  simpleSummary?: Maybe<PlayerCardHoverType>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  team?: Maybe<SteamAccountTeamMemberType>
  winCount?: Maybe<Scalars["Int"]>
}

export type PlayerTypeFeatsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type PlayerTypeHeroPerformanceArgs = {
  heroId: Scalars["Short"]
  request: PlayerHeroPerformanceMatchesRequestType
}

export type PlayerTypeHeroStreaksArgs = {
  request?: InputMaybe<PlayerMatchesRequestType>
}

export type PlayerTypeHeroesPerformanceArgs = {
  request?: InputMaybe<PlayerHeroPerformanceMatchesRequestType>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type PlayerTypeLeaderboardRanksArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type PlayerTypeMatchesArgs = {
  request: PlayerMatchesRequestType
}

export type PlayerTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType
}

export type PlayerTypeNamesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type PlayerTypeRanksArgs = {
  seasonRankIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
}

export type PlayerUpdateAttributeDetailType = {
  __typename?: "PlayerUpdateAttributeDetailType"
  agi: Scalars["Int"]
  int: Scalars["Int"]
  str: Scalars["Int"]
  time: Scalars["Int"]
}

export type PlayerUpdateBattleDetailType = {
  __typename?: "PlayerUpdateBattleDetailType"
  damageBonus: Scalars["Int"]
  damageMinMax: Scalars["Int"]
  hpRegen: Scalars["Int"]
  mpRegen: Scalars["Int"]
  time: Scalars["Int"]
}

export type PlayerUpdateGoldDetailType = {
  __typename?: "PlayerUpdateGoldDetailType"
  gold: Scalars["Int"]
  networth: Scalars["Int"]
  networthDifference: Scalars["Int"]
  time: Scalars["Int"]
  unreliableGold: Scalars["Int"]
}

export type PlayerUpdateHealthDetailType = {
  __typename?: "PlayerUpdateHealthDetailType"
  hp: Scalars["Int"]
  maxHp: Scalars["Int"]
  maxMp: Scalars["Int"]
  mp: Scalars["Int"]
  time: Scalars["Int"]
}

export type PlayerUpdateLevelDetailType = {
  __typename?: "PlayerUpdateLevelDetailType"
  level: Scalars["Int"]
  time: Scalars["Int"]
}

export type PlayerUpdatePositionDetailType = {
  __typename?: "PlayerUpdatePositionDetailType"
  time: Scalars["Int"]
  x: Scalars["Int"]
  y: Scalars["Int"]
}

export type PlusDraftMissingLetterPlayerObjectType = {
  /** When a player has selected a hero, this is the id. If a null is sent, we will send back a hero list of possible heroes. */
  heroId?: InputMaybe<Scalars["Short"]>
  /** To determine the missing letter, isPicking will determine the score before the hero was selected and after the hero is selected. Only 1 person can have isPicking = true. */
  isPicking?: InputMaybe<Scalars["Boolean"]>
  /** The order in which this player has picked. If a person has not picked, please send null. Send in order of 0-9. */
  order?: InputMaybe<Scalars["Byte"]>
  /** The lane this player will play. If a null is sent, we will assign the best possible lane. */
  position?: InputMaybe<MatchPlayerPositionType>
  /** The rank this played is.  In the event he is anonymous, use the lowest rank player in the game. */
  rank?: InputMaybe<Scalars["Int"]>
  /** The slot of player. It is required to be in order from 0-9. */
  slot: Scalars["Int"]
}

export type PlusDraftMissingLetterRequestType = {
  /** A list of all of the banned hero ids in the draft. */
  bans?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** The game mode for this type. We only support All Pick and Ranked All Pick. In the future Captain's Mode will be supported. */
  gameMode: Scalars["Int"]
  /** Due to Valve changing the way Picking has happened in the past, we require the GameVersionId so we know what version of the network to call. */
  gameVersionId: Scalars["Short"]
  /** A boolean representing if Radiant is first pick or not. */
  isRadiantFirstPick: Scalars["Boolean"]
  /** A list of player request objects. */
  players: Array<InputMaybe<PlusDraftMissingLetterPlayerObjectType>>
}

export type PlusDraftPlayerHeroObjectType = {
  __typename?: "PlusDraftPlayerHeroObjectType"
  heroId?: Maybe<Scalars["Short"]>
  letter?: Maybe<PlusLetterType>
  pickValue?: Maybe<Scalars["Decimal"]>
  score?: Maybe<Scalars["Float"]>
  winValues?: Maybe<Array<Maybe<Scalars["Decimal"]>>>
}

export type PlusDraftPlayerRequestType = {
  /** When a player has selected a hero, this is the id. If a null is sent, we will send back a hero list of possible heroes. */
  heroId?: InputMaybe<Scalars["Short"]>
  /** The role this player will play. If a null is sent, we will assign the best possible role. */
  position?: InputMaybe<MatchPlayerPositionType>
  /** The rank this played is.  In the event he is anonymous, use the lowest rank player in the game. */
  rank?: InputMaybe<Scalars["Byte"]>
  /** The slot of player. It is required to be in order from 0-9. */
  slot: Scalars["Int"]
  /** The steam id of the player. This will allow us to find player history on the player if he is not anonymous. */
  steamAccountId?: InputMaybe<Scalars["Long"]>
}

export type PlusDraftPlayerType = {
  __typename?: "PlusDraftPlayerType"
  heroes?: Maybe<Array<Maybe<PlusDraftPlayerHeroObjectType>>>
  position?: Maybe<MatchPlayerPositionType>
  positionValues?: Maybe<Array<Maybe<Scalars["Decimal"]>>>
  slot?: Maybe<Scalars["Byte"]>
}

export type PlusDraftRequestType = {
  /** A list of all of the banned hero ids in the draft. */
  bans?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** The game mode for this type. We only support All Pick and Ranked All Pick. In the future Captain's Mode will be supported. */
  gameMode: Scalars["Int"]
  /** Due to Valve changing the way Picking has happened in the past, we require the GameVersionId so we know what version of the network to call. */
  gameVersionId: Scalars["Short"]
  /** The match Id or the lobby id of the match your sending.  This will cache data for the next calls to be quicker. */
  matchId: Scalars["Long"]
  /** A list of player request objects. */
  players: Array<InputMaybe<PlusDraftPlayerRequestType>>
}

export type PlusDraftType = {
  __typename?: "PlusDraftType"
  durationValues?: Maybe<Array<Maybe<Scalars["Decimal"]>>>
  midOutcome?: Maybe<Scalars["Decimal"]>
  offOutcome?: Maybe<Scalars["Decimal"]>
  players?: Maybe<Array<Maybe<PlusDraftPlayerType>>>
  safeOutcome?: Maybe<Scalars["Decimal"]>
  winValues?: Maybe<Array<Maybe<Scalars["Decimal"]>>>
}

export type PlusHeroTeamStatusAveragesType = {
  __typename?: "PlusHeroTeamStatusAveragesType"
  cs?: Maybe<Scalars["Decimal"]>
  deaths?: Maybe<Scalars["Decimal"]>
  disableCount?: Maybe<Scalars["Decimal"]>
  disableDuration?: Maybe<Scalars["Decimal"]>
  healingAllies?: Maybe<Scalars["Decimal"]>
  magicalDamage?: Maybe<Scalars["Decimal"]>
  magicalDamageReceived?: Maybe<Scalars["Decimal"]>
  physicalDamage?: Maybe<Scalars["Decimal"]>
  physicalDamageReceived?: Maybe<Scalars["Decimal"]>
  pureDamage?: Maybe<Scalars["Decimal"]>
  pureDamageReceived?: Maybe<Scalars["Decimal"]>
  purgeModifiers?: Maybe<Scalars["Decimal"]>
  slowCount?: Maybe<Scalars["Decimal"]>
  slowDuration?: Maybe<Scalars["Decimal"]>
  stunCount?: Maybe<Scalars["Decimal"]>
  stunDuration?: Maybe<Scalars["Decimal"]>
  towerDamage?: Maybe<Scalars["Decimal"]>
  weakenCount?: Maybe<Scalars["Decimal"]>
  weakenDuration?: Maybe<Scalars["Decimal"]>
}

export type PlusHeroTeamStatusDetailType = {
  __typename?: "PlusHeroTeamStatusDetailType"
  averages?: Maybe<PlusHeroTeamStatusAveragesType>
  basicBracket?: Maybe<RankBracketHeroTimeDetail>
  heroId: Scalars["Int"]
  position?: Maybe<MatchPlayerPositionType>
}

export type PlusHoverBanType = {
  __typename?: "PlusHoverBanType"
  flags?: Maybe<Scalars["Byte"]>
  heroId?: Maybe<Scalars["Short"]>
  score?: Maybe<Scalars["Decimal"]>
}

export type PlusHoverType = {
  __typename?: "PlusHoverType"
  bans?: Maybe<Array<Maybe<PlusHoverBanType>>>
  players?: Maybe<Array<Maybe<PlusPlayerHoverType>>>
}

export enum PlusLetterType {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
  S = "S",
}

export type PlusPlayerHoverHeroType = {
  __typename?: "PlusPlayerHoverHeroType"
  heroId?: Maybe<Scalars["Short"]>
  lossCount: Scalars["Int"]
  winCount: Scalars["Int"]
}

export type PlusPlayerHoverPlayerType = {
  __typename?: "PlusPlayerHoverPlayerType"
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  matchCount: Scalars["Int"]
  steamAccountId?: Maybe<Scalars["Long"]>
  winCount: Scalars["Int"]
}

export type PlusPlayerHoverRequestType = {
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** Should our Networks attempt to try to make Radiant Win the draft or Dire. */
  shouldRadiantWin?: InputMaybe<Scalars["Boolean"]>
  /** An array of steam account ids to limit the query to only return matches with these steam account ids. There is a maximum of 10 steam account ids allowed. */
  steamAccountIds: Array<InputMaybe<Scalars["Long"]>>
  /** The amount of matches to have returned in your query. Max 1000 */
  take?: InputMaybe<Scalars["Int"]>
}

export type PlusPlayerHoverType = {
  __typename?: "PlusPlayerHoverType"
  activity?: Maybe<Scalars["Byte"]>
  behaviorScore?: Maybe<Scalars["Short"]>
  coreCount?: Maybe<Scalars["Int"]>
  enemies?: Maybe<Array<Maybe<PlusPlayerHoverPlayerType>>>
  friends?: Maybe<Array<Maybe<PlusPlayerHoverPlayerType>>>
  heroes?: Maybe<Array<Maybe<PlusPlayerHoverHeroType>>>
  heroesExperience?: Maybe<Array<Maybe<Scalars["Short"]>>>
  imp?: Maybe<Scalars["Int"]>
  languageCode?: Maybe<Array<Maybe<Scalars["String"]>>>
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  matchCount?: Maybe<Scalars["Int"]>
  steamAccount?: Maybe<SteamAccountType>
  supportCount?: Maybe<Scalars["Int"]>
  winCount: Scalars["Int"]
}

export type PlusQuery = {
  __typename?: "PlusQuery"
  /** The main call for STRATZ Plus. It will return back probability data based on a draft of players that were given. */
  draft?: Maybe<PlusDraftType>
  /** To save CPU cycles we limit the amount of heroes a person can play. If a player picks a hero outside the default list, we have no idea how good the hero would of been. You can call this endpoint to update the grade letter for that hero selection. */
  draftMissingLetter?: Maybe<PlusLetterType>
  /** Returns back basic data about the user playing a specific hero.  Used in the Draft app to show post-pick data. */
  playerHeroHighlight?: Maybe<PlayerDraftHeroHighlightType>
  /** Gets a list of data of the players in the match, can send a max of 10 people.  If a user blocks their data on STRATZ, that data will not be returned. */
  playerMatchHistory?: Maybe<PlusHoverType>
  /** Returns a set of events which contain each hero and their averages in each of the respected categories, sorted by rank bracket. */
  teamHeroStatus?: Maybe<Array<Maybe<PlusHeroTeamStatusDetailType>>>
}

export type PlusQueryDraftArgs = {
  request: PlusDraftRequestType
}

export type PlusQueryDraftMissingLetterArgs = {
  request: PlusDraftMissingLetterRequestType
}

export type PlusQueryPlayerHeroHighlightArgs = {
  heroId: Scalars["Short"]
  steamAccountId: Scalars["Long"]
}

export type PlusQueryPlayerMatchHistoryArgs = {
  request: PlusPlayerHoverRequestType
}

export type PlusQueryTeamHeroStatusArgs = {
  rankBracket: RankBracketHeroTimeDetail
}

export type ProPlayerFollowType = {
  __typename?: "ProPlayerFollowType"
  activity?: Maybe<Scalars["Int"]>
  coreCount: Scalars["Int"]
  matchCount: Scalars["Int"]
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  supportCount: Scalars["Int"]
}

export type ProSteamAccountType = {
  __typename?: "ProSteamAccountType"
  aliases?: Maybe<Array<Maybe<Scalars["String"]>>>
  birthday?: Maybe<Scalars["Long"]>
  countries?: Maybe<Array<Maybe<Scalars["String"]>>>
  facebookLink?: Maybe<Scalars["String"]>
  fantasyRole?: Maybe<Scalars["Byte"]>
  id?: Maybe<Scalars["Long"]>
  instagramLink?: Maybe<Scalars["String"]>
  isLocked: Scalars["Boolean"]
  isPro: Scalars["Boolean"]
  name?: Maybe<Scalars["String"]>
  position?: Maybe<MatchPlayerPositionType>
  realName?: Maybe<Scalars["String"]>
  roles?: Maybe<Scalars["Byte"]>
  romanizedRealName?: Maybe<Scalars["String"]>
  signatureHeroes?: Maybe<Array<Maybe<Scalars["String"]>>>
  sponsor?: Maybe<Scalars["String"]>
  statuses?: Maybe<Scalars["Byte"]>
  team?: Maybe<TeamType>
  teamId?: Maybe<Scalars["Int"]>
  totalEarnings: Scalars["Int"]
  twitchLink?: Maybe<Scalars["String"]>
  twitterLink?: Maybe<Scalars["String"]>
  vkLink?: Maybe<Scalars["String"]>
  weiboLink?: Maybe<Scalars["String"]>
  youTubeLink?: Maybe<Scalars["String"]>
}

export type RabbitDetailType = {
  __typename?: "RabbitDetailType"
  isOnline: Scalars["Boolean"]
  lastUpdated?: Maybe<Scalars["Long"]>
  matchDetail?: Maybe<RabbitQueueDetailType>
  matchDetailDelay?: Maybe<RabbitQueueDetailType>
  matchHistory?: Maybe<RabbitQueueDetailType>
  matchLive?: Maybe<RabbitQueueDetailType>
  matchStats?: Maybe<RabbitQueueDetailType>
  steamAccount?: Maybe<RabbitQueueDetailType>
}

export type RabbitQueueDetailType = {
  __typename?: "RabbitQueueDetailType"
  queueCount: Scalars["Int"]
  queueInRate?: Maybe<Scalars["Decimal"]>
  queueOutRate?: Maybe<Scalars["Decimal"]>
}

export enum RankBracket {
  Ancient = "ANCIENT",
  Archon = "ARCHON",
  Crusader = "CRUSADER",
  Divine = "DIVINE",
  Guardian = "GUARDIAN",
  Herald = "HERALD",
  Immortal = "IMMORTAL",
  Legend = "LEGEND",
  Uncalibrated = "UNCALIBRATED",
}

export enum RankBracketHeroTimeDetail {
  All = "ALL",
  CrusaderArchon = "CRUSADER_ARCHON",
  DivineImmortal = "DIVINE_IMMORTAL",
  Filtered = "FILTERED",
  HeraldGuardian = "HERALD_GUARDIAN",
  LegendAncient = "LEGEND_ANCIENT",
  Uncalibrated = "UNCALIBRATED",
}

export type RecentHighImpType = {
  __typename?: "RecentHighImpType"
  imp?: Maybe<Scalars["Short"]>
  match?: Maybe<MatchType>
  matchId?: Maybe<Scalars["Long"]>
}

export type RecentRampageType = {
  __typename?: "RecentRampageType"
  hero?: Maybe<HeroType>
  heroId?: Maybe<Scalars["Short"]>
  heroesKilled?: Maybe<Array<Maybe<Scalars["Short"]>>>
  match?: Maybe<MatchType>
  matchId?: Maybe<Scalars["Long"]>
}

export type RecentWinStreakType = {
  __typename?: "RecentWinStreakType"
  firstWonMatchDateTime?: Maybe<Scalars["DateTime"]>
  lastWonMatchDateTime?: Maybe<Scalars["DateTime"]>
  match?: Maybe<MatchType>
  matchId?: Maybe<Scalars["Long"]>
  /** The status of the win streak, Ended (0) or Ongoing (1). */
  status?: Maybe<Scalars["Int"]>
  winStreakCount?: Maybe<Scalars["Int"]>
}

export type RegionType = {
  __typename?: "RegionType"
  clientName?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  displayName?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Byte"]>
  langKey?: Maybe<Scalars["String"]>
  latitude?: Maybe<Scalars["Decimal"]>
  leaderboardDivision?: Maybe<Scalars["String"]>
  longitude?: Maybe<Scalars["Decimal"]>
  matchGroup?: Maybe<Scalars["Byte"]>
  name?: Maybe<Scalars["String"]>
  weekendTourneyDivision?: Maybe<Scalars["String"]>
}

export type RoleType = {
  __typename?: "RoleType"
  langKey?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  roleId?: Maybe<Scalars["Short"]>
}

export enum RuneAction {
  Bottle = "BOTTLE",
  Pickup = "PICKUP",
}

export enum RuneEnums {
  Arcane = "ARCANE",
  Bounty = "BOUNTY",
  DoubleDamage = "DOUBLE_DAMAGE",
  Haste = "HASTE",
  Illusion = "ILLUSION",
  Invisibility = "INVISIBILITY",
  Regen = "REGEN",
  Water = "WATER",
}

export enum Search {
  Casters = "CASTERS",
  Guilds = "GUILDS",
  Leagues = "LEAGUES",
  Matches = "MATCHES",
  Players = "PLAYERS",
  ProPlayers = "PRO_PLAYERS",
  Teams = "TEAMS",
}

export type SearchType = {
  __typename?: "SearchType"
  casters?: Maybe<Array<Maybe<SteamAccountType>>>
  direTideMatches?: Maybe<Array<Maybe<DireTide2020CustomGameMatchType>>>
  guild?: Maybe<GuildType>
  leagues?: Maybe<Array<Maybe<LeagueType>>>
  matches?: Maybe<Array<Maybe<MatchType>>>
  players?: Maybe<Array<Maybe<SteamAccountType>>>
  proPlayers?: Maybe<Array<Maybe<SteamAccountType>>>
  teams?: Maybe<Array<Maybe<TeamType>>>
}

export enum Series {
  BestOfFive = "BEST_OF_FIVE",
  BestOfOne = "BEST_OF_ONE",
  BestOfThree = "BEST_OF_THREE",
  BestOfTwo = "BEST_OF_TWO",
}

export type SeriesType = {
  __typename?: "SeriesType"
  id: Scalars["Long"]
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  league?: Maybe<LeagueType>
  leagueId?: Maybe<Scalars["Int"]>
  matches?: Maybe<Array<Maybe<MatchType>>>
  teamOne?: Maybe<TeamType>
  teamOneId?: Maybe<Scalars["Int"]>
  teamOneWinCount?: Maybe<Scalars["Short"]>
  teamTwo?: Maybe<TeamType>
  teamTwoId?: Maybe<Scalars["Int"]>
  teamTwoWinCount?: Maybe<Scalars["Short"]>
  type?: Maybe<Series>
  winningTeamId?: Maybe<Scalars["Int"]>
}

export type ServerStatusType = {
  __typename?: "ServerStatusType"
  isRedisOnline: Scalars["Boolean"]
  rabbitDetail?: Maybe<RabbitDetailType>
  steamApiDetail?: Maybe<SteamApiDetailType>
}

export type SpiritBearInventoryObjectType = {
  __typename?: "SpiritBearInventoryObjectType"
  itemId?: Maybe<Scalars["Short"]>
}

export type SpiritBearInventoryType = {
  __typename?: "SpiritBearInventoryType"
  backPack0?: Maybe<SpiritBearInventoryObjectType>
  backPack1?: Maybe<SpiritBearInventoryObjectType>
  backPack2?: Maybe<SpiritBearInventoryObjectType>
  item0?: Maybe<SpiritBearInventoryObjectType>
  item1?: Maybe<SpiritBearInventoryObjectType>
  item2?: Maybe<SpiritBearInventoryObjectType>
  item3?: Maybe<SpiritBearInventoryObjectType>
  item4?: Maybe<SpiritBearInventoryObjectType>
  item5?: Maybe<SpiritBearInventoryObjectType>
  neutral0?: Maybe<SpiritBearInventoryObjectType>
  teleport0?: Maybe<SpiritBearInventoryObjectType>
  time: Scalars["Int"]
}

export type SteamAccountBattlePassType = {
  __typename?: "SteamAccountBattlePassType"
  eventId?: Maybe<Scalars["Byte"]>
  level?: Maybe<Scalars["Int"]>
  steamId?: Maybe<Scalars["Long"]>
}

export type SteamAccountByRankType = {
  __typename?: "SteamAccountByRankType"
  playerCount?: Maybe<Scalars["Int"]>
  rank?: Maybe<Scalars["Byte"]>
}

export type SteamAccountNameType = {
  __typename?: "SteamAccountNameType"
  lastSeenDateTime?: Maybe<Scalars["Long"]>
  name?: Maybe<Scalars["String"]>
}

export type SteamAccountSeasonActiveLeaderboardRankType = {
  __typename?: "SteamAccountSeasonActiveLeaderboardRankType"
  avgImp?: Maybe<Scalars["Short"]>
  divisionId?: Maybe<LeaderboardDivision>
  lastUpdateDateTime?: Maybe<Scalars["Long"]>
  matchCount?: Maybe<Scalars["Short"]>
  position?: Maybe<MatchPlayerPositionType>
  positionValue?: Maybe<Scalars["Byte"]>
  rank?: Maybe<Scalars["Short"]>
  rankShift?: Maybe<Scalars["Short"]>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  topHeroOne?: Maybe<Scalars["Short"]>
  topHeroThree?: Maybe<Scalars["Short"]>
  topHeroTwo?: Maybe<Scalars["Short"]>
  winRate?: Maybe<Scalars["Byte"]>
}

export type SteamAccountSeasonLeaderBoardRankType = {
  __typename?: "SteamAccountSeasonLeaderBoardRankType"
  asOfDateTime?: Maybe<Scalars["Long"]>
  rank?: Maybe<Scalars["Short"]>
  seasonLeaderBoardDivisionId?: Maybe<Scalars["Byte"]>
  seasonRankId?: Maybe<Scalars["Byte"]>
  steamAccountId?: Maybe<Scalars["Long"]>
}

export type SteamAccountSeasonRankType = {
  __typename?: "SteamAccountSeasonRankType"
  asOfDateTime?: Maybe<Scalars["Long"]>
  isCore?: Maybe<Scalars["Boolean"]>
  rank?: Maybe<Scalars["Byte"]>
  seasonRankId?: Maybe<Scalars["Byte"]>
}

export type SteamAccountTeamMemberType = {
  __typename?: "SteamAccountTeamMemberType"
  firstMatchDateTime?: Maybe<Scalars["Long"]>
  firstMatchId?: Maybe<Scalars["Long"]>
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  lastMatchId?: Maybe<Scalars["Long"]>
  player?: Maybe<PlayerType>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
  team?: Maybe<TeamType>
  teamId?: Maybe<Scalars["Long"]>
}

export type SteamAccountType = {
  __typename?: "SteamAccountType"
  avatar?: Maybe<Scalars["String"]>
  battlepass?: Maybe<Array<Maybe<SteamAccountBattlePassType>>>
  cityId?: Maybe<Scalars["Int"]>
  communityVisibleState?: Maybe<Scalars["Int"]>
  countryCode?: Maybe<Scalars["String"]>
  dotaAccountLevel?: Maybe<Scalars["Short"]>
  id?: Maybe<Scalars["Long"]>
  isAnonymous: Scalars["Boolean"]
  isDotaPlusSubscriber?: Maybe<Scalars["Boolean"]>
  isStratzAnonymous: Scalars["Boolean"]
  lastLogOff?: Maybe<Scalars["Long"]>
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  lastMatchRegionId?: Maybe<Scalars["Byte"]>
  name?: Maybe<Scalars["String"]>
  primaryClanId?: Maybe<Scalars["Long"]>
  proSteamAccount?: Maybe<ProSteamAccountType>
  profileUri: Scalars["String"]
  realName?: Maybe<Scalars["String"]>
  seasonLeaderboardDivisionId?: Maybe<Scalars["Byte"]>
  seasonLeaderboardRank?: Maybe<Scalars["Short"]>
  seasonRank?: Maybe<Scalars["Byte"]>
  smurfFlag?: Maybe<Scalars["Byte"]>
  stateCode?: Maybe<Scalars["String"]>
  timeCreated?: Maybe<Scalars["Long"]>
}

export type SteamApiDetailOutageType = {
  __typename?: "SteamApiDetailOutageType"
  dateTime?: Maybe<Scalars["Long"]>
  secondsOffline?: Maybe<Scalars["Int"]>
}

export type SteamApiDetailType = {
  __typename?: "SteamApiDetailType"
  isOnline: Scalars["Boolean"]
  outages?: Maybe<Array<Maybe<SteamApiDetailOutageType>>>
}

export enum StratzApiType {
  DataCollector = "DATA_COLLECTOR",
  MultiKey = "MULTI_KEY",
}

export type StratzQuery = {
  __typename?: "StratzQuery"
  admin?: Maybe<AdminQuery>
  /** Returns a list of Stratz blogs. */
  blogs?: Maybe<Array<Maybe<BlogType>>>
  /** Returns a list of languages and an Id for reference. This is used throughout the site. */
  languages?: Maybe<Array<Maybe<LanguageType>>>
  /** Returns a list of Stratz blogs. */
  matchRetry?: Maybe<Scalars["Boolean"]>
  /** Returns a list of News Items released by Dota 2 directly. */
  news?: Maybe<Array<Maybe<NewsItemType>>>
  page?: Maybe<PageQuery>
  search?: Maybe<SearchType>
  /** Shows the availability to major components required in the STRATZ foundation. */
  status?: Maybe<ServerStatusType>
  /** Home page data that shows the total count of players and matches in our database. */
  ticker?: Maybe<Array<Maybe<Scalars["Int"]>>>
  user?: Maybe<UserQuery>
}

export type StratzQueryBlogsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type StratzQueryMatchRetryArgs = {
  id: Scalars["Long"]
}

export type StratzQuerySearchArgs = {
  request?: InputMaybe<FilterSearchRequestType>
}

export enum Streak {
  KillStreak = "KILL_STREAK",
  MultiKill = "MULTI_KILL",
}

export type StreakEventType = {
  __typename?: "StreakEventType"
  heroId?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
  type?: Maybe<Streak>
  value: Scalars["Int"]
}

export type Ti2020CustomGameDepthListAscensionAbilitiesObjectType = {
  __typename?: "TI2020CustomGameDepthListAscensionAbilitiesObjectType"
  abilityId?: Maybe<Scalars["Short"]>
  modifierId?: Maybe<Scalars["Short"]>
  type?: Maybe<Ti2020CustomGameDepthListAscensionAbilitiesType>
}

export enum Ti2020CustomGameDepthListAscensionAbilitiesType {
  AghsfortAscensionInvis = "AGHSFORT_ASCENSION_INVIS",
  AscensionArmor = "ASCENSION_ARMOR",
  AscensionArmorSapping = "ASCENSION_ARMOR_SAPPING",
  AscensionAttackSpeed = "ASCENSION_ATTACK_SPEED",
  AscensionBomb = "ASCENSION_BOMB",
  AscensionBulwark = "ASCENSION_BULWARK",
  AscensionChillingTouch = "ASCENSION_CHILLING_TOUCH",
  AscensionCrit = "ASCENSION_CRIT",
  AscensionDamage = "ASCENSION_DAMAGE",
  AscensionDrunken = "ASCENSION_DRUNKEN",
  AscensionEmbiggen = "ASCENSION_EMBIGGEN",
  AscensionExtraFast = "ASCENSION_EXTRA_FAST",
  AscensionFirefly = "ASCENSION_FIREFLY",
  AscensionFlicker = "ASCENSION_FLICKER",
  AscensionHealSuppression = "ASCENSION_HEAL_SUPPRESSION",
  AscensionMagicImmunity = "ASCENSION_MAGIC_IMMUNITY",
  AscensionMagicResist = "ASCENSION_MAGIC_RESIST",
  AscensionMagneticField = "ASCENSION_MAGNETIC_FIELD",
  AscensionMeteoric = "ASCENSION_METEORIC",
  AscensionPlasmaField = "ASCENSION_PLASMA_FIELD",
  AscensionSilence = "ASCENSION_SILENCE",
  AscensionVampiric = "ASCENSION_VAMPIRIC",
  AscensionVengeance = "ASCENSION_VENGEANCE",
}

export enum Ti2020CustomGameDepthListEncounterType {
  EncounterAghanim = "ENCOUNTER_AGHANIM",
  EncounterAlchemist = "ENCOUNTER_ALCHEMIST",
  EncounterAquaManor = "ENCOUNTER_AQUA_MANOR",
  EncounterAziyogCaverns = "ENCOUNTER_AZIYOG_CAVERNS",
  EncounterBabyOgres = "ENCOUNTER_BABY_OGRES",
  EncounterBambooGarden = "ENCOUNTER_BAMBOO_GARDEN",
  EncounterBandits = "ENCOUNTER_BANDITS",
  EncounterBeachTraps = "ENCOUNTER_BEACH_TRAPS",
  EncounterBearsLair = "ENCOUNTER_BEARS_LAIR",
  EncounterBigOgres = "ENCOUNTER_BIG_OGRES",
  EncounterBlobDungeon = "ENCOUNTER_BLOB_DUNGEON",
  EncounterBogTraps = "ENCOUNTER_BOG_TRAPS",
  EncounterBombers = "ENCOUNTER_BOMBERS",
  EncounterBombSquad = "ENCOUNTER_BOMB_SQUAD",
  EncounterBonusChicken = "ENCOUNTER_BONUS_CHICKEN",
  EncounterBonusGallery = "ENCOUNTER_BONUS_GALLERY",
  EncounterBonusHooking = "ENCOUNTER_BONUS_HOOKING",
  EncounterBonusLivestock = "ENCOUNTER_BONUS_LIVESTOCK",
  EncounterBonusMangoOrchard = "ENCOUNTER_BONUS_MANGO_ORCHARD",
  EncounterBonusSmashChickens = "ENCOUNTER_BONUS_SMASH_CHICKENS",
  EncounterBossAmoeba = "ENCOUNTER_BOSS_AMOEBA",
  EncounterBossArcWarden = "ENCOUNTER_BOSS_ARC_WARDEN",
  EncounterBossClockwerkTinker = "ENCOUNTER_BOSS_CLOCKWERK_TINKER",
  EncounterBossDarkWillow = "ENCOUNTER_BOSS_DARK_WILLOW",
  EncounterBossEarthshaker = "ENCOUNTER_BOSS_EARTHSHAKER",
  EncounterBossRizzrick = "ENCOUNTER_BOSS_RIZZRICK",
  EncounterBossStoregga = "ENCOUNTER_BOSS_STOREGGA",
  EncounterBossTimbersaw = "ENCOUNTER_BOSS_TIMBERSAW",
  EncounterBossVisage = "ENCOUNTER_BOSS_VISAGE",
  EncounterBossVoidSpirit = "ENCOUNTER_BOSS_VOID_SPIRIT",
  EncounterBossWinterWyvern = "ENCOUNTER_BOSS_WINTER_WYVERN",
  EncounterBrewmaster = "ENCOUNTER_BREWMASTER",
  EncounterBridgeTraps = "ENCOUNTER_BRIDGE_TRAPS",
  EncounterBroodmothers = "ENCOUNTER_BROODMOTHERS",
  EncounterBurningMesa = "ENCOUNTER_BURNING_MESA",
  EncounterCanopyTraps = "ENCOUNTER_CANOPY_TRAPS",
  EncounterCastleTraps = "ENCOUNTER_CASTLE_TRAPS",
  EncounterCatacombs = "ENCOUNTER_CATACOMBS",
  EncounterCavernTraps = "ENCOUNTER_CAVERN_TRAPS",
  EncounterCliffPass = "ENCOUNTER_CLIFF_PASS",
  EncounterCollapsedMines = "ENCOUNTER_COLLAPSED_MINES",
  EncounterCryptGate = "ENCOUNTER_CRYPT_GATE",
  EncounterCryptTraps = "ENCOUNTER_CRYPT_TRAPS",
  EncounterDarkForest = "ENCOUNTER_DARK_FOREST",
  EncounterDarkSeer = "ENCOUNTER_DARK_SEER",
  EncounterDeepTraps = "ENCOUNTER_DEEP_TRAPS",
  EncounterDemonicWoods = "ENCOUNTER_DEMONIC_WOODS",
  EncounterDesertOasis = "ENCOUNTER_DESERT_OASIS",
  EncounterDireSiege = "ENCOUNTER_DIRE_SIEGE",
  EncounterDragonKnight = "ENCOUNTER_DRAGON_KNIGHT",
  EncounterDrowRangerMiniboss = "ENCOUNTER_DROW_RANGER_MINIBOSS",
  EncounterDungeonTraps = "ENCOUNTER_DUNGEON_TRAPS",
  EncounterEggsHoldout = "ENCOUNTER_EGGS_HOLDOUT",
  EncounterElementalTiny = "ENCOUNTER_ELEMENTAL_TINY",
  EncounterEmptyBeach = "ENCOUNTER_EMPTY_BEACH",
  EncounterEmptyCavern = "ENCOUNTER_EMPTY_CAVERN",
  EncounterEnragedWildwings = "ENCOUNTER_ENRAGED_WILDWINGS",
  EncounterEventAlchemistNeutralItems = "ENCOUNTER_EVENT_ALCHEMIST_NEUTRAL_ITEMS",
  EncounterEventBigTinyGrow = "ENCOUNTER_EVENT_BIG_TINY_GROW",
  EncounterEventBrewmasterBar = "ENCOUNTER_EVENT_BREWMASTER_BAR",
  EncounterEventDoomLifeSwap = "ENCOUNTER_EVENT_DOOM_LIFE_SWAP",
  EncounterEventLeshrac = "ENCOUNTER_EVENT_LESHRAC",
  EncounterEventLifeShop = "ENCOUNTER_EVENT_LIFE_SHOP",
  EncounterEventMinorShardShop = "ENCOUNTER_EVENT_MINOR_SHARD_SHOP",
  EncounterEventMorphlingAttributeShift = "ENCOUNTER_EVENT_MORPHLING_ATTRIBUTE_SHIFT",
  EncounterEventNagaBottleRune = "ENCOUNTER_EVENT_NAGA_BOTTLE_RUNE",
  EncounterEventNecrophos = "ENCOUNTER_EVENT_NECROPHOS",
  EncounterEventOgreMagiCasino = "ENCOUNTER_EVENT_OGRE_MAGI_CASINO",
  EncounterEventSlark = "ENCOUNTER_EVENT_SLARK",
  EncounterEventSmallTinyShrink = "ENCOUNTER_EVENT_SMALL_TINY_SHRINK",
  EncounterEventTinkerRangeRetrofit = "ENCOUNTER_EVENT_TINKER_RANGE_RETROFIT",
  EncounterEventWarlockLibrary = "ENCOUNTER_EVENT_WARLOCK_LIBRARY",
  EncounterEventZeus = "ENCOUNTER_EVENT_ZEUS",
  EncounterFireRoshan = "ENCOUNTER_FIRE_ROSHAN",
  EncounterForbiddenPalace = "ENCOUNTER_FORBIDDEN_PALACE",
  EncounterForsakenPit = "ENCOUNTER_FORSAKEN_PIT",
  EncounterFrigidPinnacle = "ENCOUNTER_FRIGID_PINNACLE",
  EncounterFrozenRavine = "ENCOUNTER_FROZEN_RAVINE",
  EncounterGaolers = "ENCOUNTER_GAOLERS",
  EncounterGauntlet = "ENCOUNTER_GAUNTLET",
  EncounterGolemGorge = "ENCOUNTER_GOLEM_GORGE",
  EncounterHedgeTraps = "ENCOUNTER_HEDGE_TRAPS",
  EncounterHellbearsPortalV_3 = "ENCOUNTER_HELLBEARS_PORTAL_V_3",
  EncounterHellfireCanyon = "ENCOUNTER_HELLFIRE_CANYON",
  EncounterHiddenColosseum = "ENCOUNTER_HIDDEN_COLOSSEUM",
  EncounterIcyPools = "ENCOUNTER_ICY_POOLS",
  EncounterInnerRing = "ENCOUNTER_INNER_RING",
  EncounterJungleFireMaze = "ENCOUNTER_JUNGLE_FIRE_MAZE",
  EncounterJungleHijinx = "ENCOUNTER_JUNGLE_HIJINX",
  EncounterJungleTraps = "ENCOUNTER_JUNGLE_TRAPS",
  EncounterJungleTrek = "ENCOUNTER_JUNGLE_TREK",
  EncounterKunkkaTide = "ENCOUNTER_KUNKKA_TIDE",
  EncounterLegionCommander = "ENCOUNTER_LEGION_COMMANDER",
  EncounterLeshrac = "ENCOUNTER_LESHRAC",
  EncounterMiningTraps = "ENCOUNTER_MINING_TRAPS",
  EncounterMirana = "ENCOUNTER_MIRANA",
  EncounterMoleCave = "ENCOUNTER_MOLE_CAVE",
  EncounterMorphlingsB = "ENCOUNTER_MORPHLINGS_B",
  EncounterMortyTransition = "ENCOUNTER_MORTY_TRANSITION",
  EncounterMultiplicity = "ENCOUNTER_MULTIPLICITY",
  EncounterMushroomMines = "ENCOUNTER_MUSHROOM_MINES",
  EncounterMushroomMines_2021 = "ENCOUNTER_MUSHROOM_MINES_2021",
  EncounterMysticalTraps = "ENCOUNTER_MYSTICAL_TRAPS",
  EncounterNagaSiren = "ENCOUNTER_NAGA_SIREN",
  EncounterOgreSeals = "ENCOUNTER_OGRE_SEALS",
  EncounterOutworld = "ENCOUNTER_OUTWORLD",
  EncounterPalaceTraps = "ENCOUNTER_PALACE_TRAPS",
  EncounterPangolier = "ENCOUNTER_PANGOLIER",
  EncounterPenguinsTransition = "ENCOUNTER_PENGUINS_TRANSITION",
  EncounterPenguinSledding = "ENCOUNTER_PENGUIN_SLEDDING",
  EncounterPhoenix = "ENCOUNTER_PHOENIX",
  EncounterPinecones = "ENCOUNTER_PINECONES",
  EncounterPineGrove = "ENCOUNTER_PINE_GROVE",
  EncounterPolaritySwap = "ENCOUNTER_POLARITY_SWAP",
  EncounterPrimalBeast = "ENCOUNTER_PRIMAL_BEAST",
  EncounterPrisonTraps = "ENCOUNTER_PRISON_TRAPS",
  EncounterPucks = "ENCOUNTER_PUCKS",
  EncounterPudgeMiniboss = "ENCOUNTER_PUDGE_MINIBOSS",
  EncounterPugnaNetherReaches = "ENCOUNTER_PUGNA_NETHER_REACHES",
  EncounterPushPull = "ENCOUNTER_PUSH_PULL",
  EncounterQuillBeasts = "ENCOUNTER_QUILL_BEASTS",
  EncounterRegalTraps = "ENCOUNTER_REGAL_TRAPS",
  EncounterRockGolems = "ENCOUNTER_ROCK_GOLEMS",
  EncounterRuinousTraps = "ENCOUNTER_RUINOUS_TRAPS",
  EncounterSacredGrounds = "ENCOUNTER_SACRED_GROUNDS",
  EncounterSaltyShore = "ENCOUNTER_SALTY_SHORE",
  EncounterShadowDemons = "ENCOUNTER_SHADOW_DEMONS",
  EncounterSmashyAndBashy = "ENCOUNTER_SMASHY_AND_BASHY",
  EncounterSnapfire = "ENCOUNTER_SNAPFIRE",
  EncounterSpectres = "ENCOUNTER_SPECTRES",
  EncounterSplitsville = "ENCOUNTER_SPLITSVILLE",
  EncounterSpookTown = "ENCOUNTER_SPOOK_TOWN",
  EncounterStonehallCitadel = "ENCOUNTER_STONEHALL_CITADEL",
  EncounterStoregga = "ENCOUNTER_STOREGGA",
  EncounterSwampOfSadness = "ENCOUNTER_SWAMP_OF_SADNESS",
  EncounterTempleGarden = "ENCOUNTER_TEMPLE_GARDEN",
  EncounterTempleGuardians = "ENCOUNTER_TEMPLE_GUARDIANS",
  EncounterTempleSiege = "ENCOUNTER_TEMPLE_SIEGE",
  EncounterTempleTraps = "ENCOUNTER_TEMPLE_TRAPS",
  EncounterThunderMountain = "ENCOUNTER_THUNDER_MOUNTAIN",
  EncounterToxicTerrace = "ENCOUNTER_TOXIC_TERRACE",
  EncounterTransitionGateway = "ENCOUNTER_TRANSITION_GATEWAY",
  EncounterTrollWarlord = "ENCOUNTER_TROLL_WARLORD",
  EncounterTropicalKeep = "ENCOUNTER_TROPICAL_KEEP",
  EncounterTuskSkeletons = "ENCOUNTER_TUSK_SKELETONS",
  EncounterTwilightMaze = "ENCOUNTER_TWILIGHT_MAZE",
  EncounterUndeadWoods = "ENCOUNTER_UNDEAD_WOODS",
  EncounterVillageTraps = "ENCOUNTER_VILLAGE_TRAPS",
  EncounterWarlocks = "ENCOUNTER_WARLOCKS",
  EncounterWaveBlasters = "ENCOUNTER_WAVE_BLASTERS",
  EncounterWendigoes = "ENCOUNTER_WENDIGOES",
  EncounterZealotScarabs = "ENCOUNTER_ZEALOT_SCARABS",
}

export enum Ti2020CustomGameDepthListRewardType {
  RewardTypeExtraLives = "REWARD_TYPE_EXTRA_LIVES",
  RewardTypeGold = "REWARD_TYPE_GOLD",
  RewardTypeNone = "REWARD_TYPE_NONE",
  RewardTypeTreasure = "REWARD_TYPE_TREASURE",
}

export type Ti2020CustomGameHeroAbilityType = {
  __typename?: "TI2020CustomGameHeroAbilityType"
  customAbilityId?: Maybe<Scalars["Short"]>
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>
  heroId?: Maybe<Scalars["Short"]>
  matchCount?: Maybe<Scalars["Int"]>
  pickCount?: Maybe<Scalars["Int"]>
  winCount?: Maybe<Scalars["Int"]>
}

export type Ti2020CustomGameHeroCompositionType = {
  __typename?: "TI2020CustomGameHeroCompositionType"
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>
  duration?: Maybe<Scalars["Int"]>
  heroId1?: Maybe<Scalars["Short"]>
  heroId2?: Maybe<Scalars["Short"]>
  heroId3?: Maybe<Scalars["Short"]>
  heroId4?: Maybe<Scalars["Short"]>
  matchCount?: Maybe<Scalars["Int"]>
  wilsonScore?: Maybe<Scalars["Decimal"]>
  winCount?: Maybe<Scalars["Int"]>
}

export type Ti2020CustomGameHeroWinRateType = {
  __typename?: "TI2020CustomGameHeroWinRateType"
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>
  heroId?: Maybe<Scalars["Short"]>
  matchCount?: Maybe<Scalars["Int"]>
  winCount?: Maybe<Scalars["Int"]>
}

export type Ti2020CustomGameMatchDepthListType = {
  __typename?: "TI2020CustomGameMatchDepthListType"
  ascensionAbilities?: Maybe<
    Array<Maybe<Ti2020CustomGameDepthListAscensionAbilitiesObjectType>>
  >
  selectedElite?: Maybe<Scalars["Boolean"]>
  selectedEncounter?: Maybe<Ti2020CustomGameDepthListEncounterType>
  selectedEncounterType?: Maybe<Scalars["Byte"]>
  selectedHidden?: Maybe<Scalars["Boolean"]>
  selectedReward?: Maybe<Ti2020CustomGameDepthListRewardType>
  unselectedElite?: Maybe<Scalars["Boolean"]>
  unselectedEncounter?: Maybe<Ti2020CustomGameDepthListEncounterType>
  unselectedHidden?: Maybe<Scalars["Boolean"]>
  unselectedReward?: Maybe<Ti2020CustomGameDepthListRewardType>
}

export enum Ti2020CustomGameMatchDifficultyType {
  Apexmage = "APEXMAGE",
  Apprentice = "APPRENTICE",
  Grandmagus = "GRANDMAGUS",
  Magician = "MAGICIAN",
  Sorcerer = "SORCERER",
}

export type Ti2020CustomGameMatchType = {
  __typename?: "TI2020CustomGameMatchType"
  arcaneFragments?: Maybe<Scalars["Short"]>
  battlePoints?: Maybe<Scalars["Short"]>
  clusterId?: Maybe<Scalars["Short"]>
  depth?: Maybe<Scalars["Byte"]>
  depthList?: Maybe<Array<Maybe<Ti2020CustomGameMatchDepthListType>>>
  didWin?: Maybe<Scalars["Boolean"]>
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>
  durationSeconds?: Maybe<Scalars["Short"]>
  endDateTime?: Maybe<Scalars["Long"]>
  gameMode?: Maybe<Scalars["Byte"]>
  goldBags?: Maybe<Scalars["Short"]>
  id?: Maybe<Scalars["Long"]>
  lobbyType?: Maybe<Scalars["Byte"]>
  numDeaths?: Maybe<Scalars["Short"]>
  numHumanPlayers?: Maybe<Scalars["Byte"]>
  numKills?: Maybe<Scalars["Short"]>
  players?: Maybe<Array<Maybe<Ti2020CustomGamePlayerType>>>
  regionId?: Maybe<Scalars["Byte"]>
  replaySalt?: Maybe<Scalars["Long"]>
  score?: Maybe<Scalars["Int"]>
  seed?: Maybe<Scalars["Int"]>
  startDateTime?: Maybe<Scalars["Long"]>
}

export type Ti2020CustomGameMatchTypePlayersArgs = {
  steamAccountId?: InputMaybe<Scalars["Long"]>
}

export type Ti2020CustomGamePlayerBlessingObjectType = {
  __typename?: "TI2020CustomGamePlayerBlessingObjectType"
  type?: Maybe<Ti2020CustomGamePlayerBlessingType>
  value?: Maybe<Scalars["Short"]>
}

export enum Ti2020CustomGamePlayerBlessingType {
  AttackRange = "ATTACK_RANGE",
  BossTome = "BOSS_TOME",
  BottleCharges = "BOTTLE_CHARGES",
  BottleRegenDuration = "BOTTLE_REGEN_DURATION",
  BottleRegenMovementSpeed = "BOTTLE_REGEN_MOVEMENT_SPEED",
  CastRange = "CAST_RANGE",
  DamageOnStunned = "DAMAGE_ON_STUNNED",
  DeathDetonation = "DEATH_DETONATION",
  DebuffDurationIncrease = "DEBUFF_DURATION_INCREASE",
  EliteUpgrade = "ELITE_UPGRADE",
  ExtraLife = "EXTRA_LIFE",
  LowHpOutgoingDamage = "LOW_HP_OUTGOING_DAMAGE",
  MeleeCleave = "MELEE_CLEAVE",
  ModifierBlessingAgility = "MODIFIER_BLESSING_AGILITY",
  ModifierBlessingArmor = "MODIFIER_BLESSING_ARMOR",
  ModifierBlessingAttackSpeed = "MODIFIER_BLESSING_ATTACK_SPEED",
  ModifierBlessingBase = "MODIFIER_BLESSING_BASE",
  ModifierBlessingBookAgility = "MODIFIER_BLESSING_BOOK_AGILITY",
  ModifierBlessingBookIntelligence = "MODIFIER_BLESSING_BOOK_INTELLIGENCE",
  ModifierBlessingBookStrength = "MODIFIER_BLESSING_BOOK_STRENGTH",
  ModifierBlessingBottleUpgrade = "MODIFIER_BLESSING_BOTTLE_UPGRADE",
  ModifierBlessingDamageBonus = "MODIFIER_BLESSING_DAMAGE_BONUS",
  ModifierBlessingDamageReflect = "MODIFIER_BLESSING_DAMAGE_REFLECT",
  ModifierBlessingDetonation = "MODIFIER_BLESSING_DETONATION",
  ModifierBlessingEvasion = "MODIFIER_BLESSING_EVASION",
  ModifierBlessingHealthBoost = "MODIFIER_BLESSING_HEALTH_BOOST",
  ModifierBlessingIntelligence = "MODIFIER_BLESSING_INTELLIGENCE",
  ModifierBlessingLifeSteal = "MODIFIER_BLESSING_LIFE_STEAL",
  ModifierBlessingMagicDamageBonus = "MODIFIER_BLESSING_MAGIC_DAMAGE_BONUS",
  ModifierBlessingMagicResist = "MODIFIER_BLESSING_MAGIC_RESIST",
  ModifierBlessingManaBoost = "MODIFIER_BLESSING_MANA_BOOST",
  ModifierBlessingMovementSpeed = "MODIFIER_BLESSING_MOVEMENT_SPEED",
  ModifierBlessingPotionArcanist = "MODIFIER_BLESSING_POTION_ARCANIST",
  ModifierBlessingPotionDragon = "MODIFIER_BLESSING_POTION_DRAGON",
  ModifierBlessingPotionEchoSlam = "MODIFIER_BLESSING_POTION_ECHO_SLAM",
  ModifierBlessingPotionHealth = "MODIFIER_BLESSING_POTION_HEALTH",
  ModifierBlessingPotionMana = "MODIFIER_BLESSING_POTION_MANA",
  ModifierBlessingPotionPurification = "MODIFIER_BLESSING_POTION_PURIFICATION",
  ModifierBlessingPotionRavage = "MODIFIER_BLESSING_POTION_RAVAGE",
  ModifierBlessingPotionShadowWave = "MODIFIER_BLESSING_POTION_SHADOW_WAVE",
  ModifierBlessingPotionTorrent = "MODIFIER_BLESSING_POTION_TORRENT",
  ModifierBlessingRefresherShard = "MODIFIER_BLESSING_REFRESHER_SHARD",
  ModifierBlessingRespawnInvulnerability = "MODIFIER_BLESSING_RESPAWN_INVULNERABILITY",
  ModifierBlessingRespawnTimeReduction = "MODIFIER_BLESSING_RESPAWN_TIME_REDUCTION",
  ModifierBlessingRestoreMana = "MODIFIER_BLESSING_RESTORE_MANA",
  ModifierBlessingSpellLifeSteal = "MODIFIER_BLESSING_SPELL_LIFE_STEAL",
  ModifierBlessingStrength = "MODIFIER_BLESSING_STRENGTH",
  OracleShopDiscount = "ORACLE_SHOP_DISCOUNT",
  PotionHealth = "POTION_HEALTH",
  PotionMana = "POTION_MANA",
  ProjectileSpeed = "PROJECTILE_SPEED",
  PurificationPotion = "PURIFICATION_POTION",
  RegenAroundAllies = "REGEN_AROUND_ALLIES",
  RespawnAttackSpeed = "RESPAWN_ATTACK_SPEED",
  RespawnHaste = "RESPAWN_HASTE",
  RespawnInvulnerability = "RESPAWN_INVULNERABILITY",
  RespawnTimeReduction = "RESPAWN_TIME_REDUCTION",
  RoshanShopDiscount = "ROSHAN_SHOP_DISCOUNT",
  StartingGold = "STARTING_GOLD",
  StartTome = "START_TOME",
  StatAgi = "STAT_AGI",
  StatDamage = "STAT_DAMAGE",
  StatEvasion = "STAT_EVASION",
  StatHealth = "STAT_HEALTH",
  StatInt = "STAT_INT",
  StatMagicResist = "STAT_MAGIC_RESIST",
  StatMana = "STAT_MANA",
  StatSpellAmp = "STAT_SPELL_AMP",
  StatStr = "STAT_STR",
  UpgradeReroll = "UPGRADE_REROLL",
}

export type Ti2020CustomGamePlayerDepthListType = {
  __typename?: "TI2020CustomGamePlayerDepthListType"
  goldBags?: Maybe<Scalars["Short"]>
  kills?: Maybe<Scalars["Short"]>
  level?: Maybe<Scalars["Byte"]>
  networth?: Maybe<Scalars["Int"]>
  numDeaths?: Maybe<Scalars["Short"]>
  rarity?: Maybe<Scalars["Byte"]>
  selectedRewardAbility?: Maybe<AbilityCustomGameType>
  selectedRewardAbilityId?: Maybe<Scalars["Short"]>
  selectedRewardImageAbilityId?: Maybe<Scalars["Short"]>
  unSelectedRewardAbility1?: Maybe<AbilityCustomGameType>
  unSelectedRewardAbility2?: Maybe<AbilityCustomGameType>
  unSelectedRewardAbilityId1?: Maybe<Scalars["Short"]>
  unSelectedRewardAbilityId2?: Maybe<Scalars["Short"]>
}

export type Ti2020CustomGamePlayerDepthListTypeSelectedRewardAbilityArgs = {
  langaugeId?: InputMaybe<Scalars["Int"]>
}

export type Ti2020CustomGamePlayerDepthListTypeUnSelectedRewardAbility1Args = {
  langaugeId?: InputMaybe<Scalars["Int"]>
}

export type Ti2020CustomGamePlayerDepthListTypeUnSelectedRewardAbility2Args = {
  langaugeId?: InputMaybe<Scalars["Int"]>
}

export type Ti2020CustomGamePlayerType = {
  __typename?: "TI2020CustomGamePlayerType"
  arcaneFragments?: Maybe<Scalars["Short"]>
  blessings?: Maybe<Array<Maybe<Ti2020CustomGamePlayerBlessingObjectType>>>
  bonusArcaneFragments?: Maybe<Scalars["Short"]>
  deaths?: Maybe<Scalars["Byte"]>
  depthList?: Maybe<Array<Maybe<Ti2020CustomGamePlayerDepthListType>>>
  experiencePerMinute?: Maybe<Scalars["Short"]>
  goldBags?: Maybe<Scalars["Short"]>
  goldPerMinute?: Maybe<Scalars["Short"]>
  goldSpent?: Maybe<Scalars["Int"]>
  hero?: Maybe<HeroType>
  heroId?: Maybe<Scalars["Short"]>
  isVictory: Scalars["Boolean"]
  item0Id?: Maybe<Scalars["Short"]>
  item1Id?: Maybe<Scalars["Short"]>
  item2Id?: Maybe<Scalars["Short"]>
  item3Id?: Maybe<Scalars["Short"]>
  item4Id?: Maybe<Scalars["Short"]>
  item5Id?: Maybe<Scalars["Short"]>
  leaverStatus?: Maybe<Scalars["Byte"]>
  level?: Maybe<Scalars["Byte"]>
  matchId?: Maybe<Scalars["Long"]>
  networth?: Maybe<Scalars["Int"]>
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  neutral0Id?: Maybe<Scalars["Short"]>
  neutralItemId?: Maybe<Scalars["Short"]>
  numLastHits?: Maybe<Scalars["Short"]>
  partyId?: Maybe<Scalars["Byte"]>
  playerSlot?: Maybe<Scalars["Byte"]>
  steamAccount?: Maybe<SteamAccountType>
  steamAccountId?: Maybe<Scalars["Long"]>
}

export type Ti2020CustomGameRoomModifierType = {
  __typename?: "TI2020CustomGameRoomModifierType"
  deathCount?: Maybe<Scalars["Int"]>
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>
  eliteDeathCount?: Maybe<Scalars["Int"]>
  eliteMatchCount?: Maybe<Scalars["Int"]>
  eliteWinCount?: Maybe<Scalars["Int"]>
  matchCount?: Maybe<Scalars["Int"]>
  modifierId?: Maybe<Scalars["Short"]>
  winCount?: Maybe<Scalars["Int"]>
}

export type Ti2020CustomGameRoomType = {
  __typename?: "TI2020CustomGameRoomType"
  deathCount?: Maybe<Scalars["Int"]>
  difficulty?: Maybe<Ti2020CustomGameMatchDifficultyType>
  eliteDeathCount?: Maybe<Scalars["Int"]>
  eliteMatchCount?: Maybe<Scalars["Int"]>
  elitePickCount?: Maybe<Scalars["Int"]>
  eliteWinCount?: Maybe<Scalars["Int"]>
  encounterId?: Maybe<Ti2020CustomGameDepthListEncounterType>
  matchCount?: Maybe<Scalars["Int"]>
  pickCount?: Maybe<Scalars["Int"]>
  winCount?: Maybe<Scalars["Int"]>
}

export enum TableCalculateEnum {
  Average = "AVERAGE",
  Highest = "HIGHEST",
  Lowest = "LOWEST",
  Median = "MEDIAN",
}

export type TeamMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip: Scalars["Int"]
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars["Long"]>
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  take: Scalars["Int"]
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>
}

export type TeamPrizeType = {
  __typename?: "TeamPrizeType"
  league?: Maybe<LeagueType>
  leagueId?: Maybe<Scalars["Int"]>
  prizeAmount?: Maybe<Scalars["Float"]>
  standing?: Maybe<Scalars["Int"]>
  team?: Maybe<TeamType>
  teamId?: Maybe<Scalars["Int"]>
}

export type TeamType = {
  __typename?: "TeamType"
  bannerLogo?: Maybe<Scalars["String"]>
  baseLogo?: Maybe<Scalars["String"]>
  coachSteamAccount?: Maybe<SteamAccountType>
  coachSteamAccountId?: Maybe<Scalars["Long"]>
  countryCode?: Maybe<Scalars["String"]>
  countryName?: Maybe<Scalars["String"]>
  dateCreated?: Maybe<Scalars["Long"]>
  /** Find match details by team id. The return is modified to group the data by the GroupBy parameter. */
  heroPickBan?: Maybe<Array<Maybe<MatchPickBanGroupByType>>>
  id: Scalars["Int"]
  isLocked?: Maybe<Scalars["Boolean"]>
  isPro?: Maybe<Scalars["Boolean"]>
  lastMatchDateTime?: Maybe<Scalars["Long"]>
  /** Find a list of all the leagues that this team has played in. */
  leagues?: Maybe<Array<Maybe<LeagueType>>>
  logo?: Maybe<Scalars["String"]>
  lossCount?: Maybe<Scalars["Int"]>
  /** Find match details by leauge id. */
  matches?: Maybe<Array<Maybe<MatchType>>>
  /** Find match details by team id. The return is modified to group the data by the GroupBy parameter. */
  matchesGroupBy?: Maybe<Array<Maybe<MatchGroupByType>>>
  /** A List of all the players for a team. */
  members?: Maybe<Array<Maybe<SteamAccountTeamMemberType>>>
  name?: Maybe<Scalars["String"]>
  /** Find match details by series id. */
  series?: Maybe<Array<Maybe<SeriesType>>>
  tag?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  winCount?: Maybe<Scalars["Int"]>
}

export type TeamTypeMatchesArgs = {
  request: TeamMatchesRequestType
}

export type TeamTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType
}

export type TeamTypeMembersArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type TeamTypeSeriesArgs = {
  request: FilterSeriesRequestType
}

export type TopPlayersByHeroType = {
  __typename?: "TopPlayersByHeroType"
  heroId?: Maybe<Scalars["Short"]>
  players?: Maybe<Array<Maybe<PlayerLeaderBoardByHeroType>>>
}

export type TotalMatchCountType = {
  __typename?: "TotalMatchCountType"
  matchCount?: Maybe<Scalars["Long"]>
}

export type TotalPlayerCountType = {
  __typename?: "TotalPlayerCountType"
  playerCount?: Maybe<Scalars["Long"]>
}

export type TowerDamageDetailType = {
  __typename?: "TowerDamageDetailType"
  attacker?: Maybe<Scalars["Short"]>
  byAbility?: Maybe<Scalars["Short"]>
  byItem?: Maybe<Scalars["Short"]>
  damage: Scalars["Int"]
  npcId?: Maybe<Scalars["Short"]>
  time: Scalars["Int"]
}

export type TwitchTrackerPlayerHeroType = {
  __typename?: "TwitchTrackerPlayerHeroType"
  heroId: Scalars["Int"]
  matchCount: Scalars["Int"]
  winCount: Scalars["Int"]
}

export type TwitchTrackerPlayerMatchType = {
  __typename?: "TwitchTrackerPlayerMatchType"
  assistCount?: Maybe<Scalars["Short"]>
  award?: Maybe<Scalars["Byte"]>
  deathCount?: Maybe<Scalars["Short"]>
  endDateTime?: Maybe<Scalars["Long"]>
  heroId: Scalars["Int"]
  isVictory: Scalars["Boolean"]
  killCount?: Maybe<Scalars["Short"]>
  lane?: Maybe<MatchLaneType>
  matchId?: Maybe<Scalars["Long"]>
  position?: Maybe<MatchPlayerPositionType>
  role?: Maybe<MatchPlayerRoleType>
}

export type TwitchTrackerPlayerType = {
  __typename?: "TwitchTrackerPlayerType"
  activity?: Maybe<PlayerBehaviorActivity>
  avatar?: Maybe<Scalars["String"]>
  coreCountLast100: Scalars["Int"]
  leaderboardRank?: Maybe<Scalars["Int"]>
  matchCountLast100: Scalars["Int"]
  matches?: Maybe<Array<Maybe<TwitchTrackerPlayerMatchType>>>
  name?: Maybe<Scalars["String"]>
  proPlayerName?: Maybe<Scalars["String"]>
  rank?: Maybe<Scalars["Int"]>
  steamAccountId?: Maybe<Scalars["Long"]>
  topHeroLast100?: Maybe<Array<Maybe<TwitchTrackerPlayerHeroType>>>
  uniqueHeroLast100: Scalars["Int"]
  winCountLast100: Scalars["Int"]
}

export type UpdateFollowerRequestType = {
  dailyEmail?: InputMaybe<Scalars["Boolean"]>
  emailLevel?: InputMaybe<Scalars["Byte"]>
  feedLevel?: InputMaybe<Scalars["Byte"]>
  monthlyEmail?: InputMaybe<Scalars["Boolean"]>
  overrideAllUsers: Scalars["Boolean"]
  weeklyEmail?: InputMaybe<Scalars["Boolean"]>
}

export type UpdateMatchReplayMatchUploadPlayerObjectType = {
  position?: InputMaybe<MatchPlayerPositionType>
  steamAccountId: Scalars["Long"]
}

export type UpdateMatchReplayUploadObjectType = {
  direTeamId?: InputMaybe<Scalars["Int"]>
  isActive?: InputMaybe<Scalars["Boolean"]>
  leagueId?: InputMaybe<Scalars["Int"]>
  matchId?: InputMaybe<Scalars["Long"]>
  matchReplayUploadTeamId: Scalars["Int"]
  notes?: InputMaybe<Scalars["String"]>
  players?: InputMaybe<Array<InputMaybe<UpdateMatchReplayMatchUploadPlayerObjectType>>>
  radiantTeamId?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageType = {
  __typename?: "UserHomepageType"
  activeLeagueGames?: Maybe<Array<Maybe<MatchLiveType>>>
  /** A list of blog components to be displayed separately on the homepage. */
  blogs?: Maybe<Array<Maybe<BlogType>>>
  inProgressLeagues?: Maybe<Array<Maybe<LeagueType>>>
  leagueMetas?: Maybe<Array<Maybe<LeagueMetaType>>>
  matchAwards?: Maybe<Array<Maybe<MatchType>>>
  recentHighImps?: Maybe<Array<Maybe<RecentHighImpType>>>
  recentMatches?: Maybe<Array<Maybe<MatchPlayerType>>>
  recentRampages?: Maybe<Array<Maybe<RecentRampageType>>>
  recentWinStreaks?: Maybe<Array<Maybe<RecentWinStreakType>>>
  topLiveGames?: Maybe<Array<Maybe<MatchLiveType>>>
  topPlayersByHeroType?: Maybe<Array<Maybe<TopPlayersByHeroType>>>
  topProPlayers?: Maybe<Array<Maybe<ProPlayerFollowType>>>
  topSynergiesByHero?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>
  totalComponents?: Maybe<Scalars["Int"]>
  upcomingLeagues?: Maybe<Array<Maybe<LeagueType>>>
}

export type UserHomepageTypeActiveLeagueGamesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeBlogsArgs = {
  excludedBlogIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeInProgressLeaguesArgs = {
  excludedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  includedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  includedLeagueTierIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeLeagueMetasArgs = {
  excludedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  includedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  includedLeagueTierIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeMatchAwardsArgs = {
  matchPlayerAwardTypeIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeRecentHighImpsArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeRecentMatchesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeRecentRampagesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeRecentWinStreaksArgs = {
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeTopLiveGamesArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeTopPlayersByHeroTypeArgs = {
  heroComponentsTake?: InputMaybe<Scalars["Int"]>
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  playersTake?: InputMaybe<Scalars["Int"]>
  rankBracketIds?: InputMaybe<Array<InputMaybe<Scalars["Byte"]>>>
}

export type UserHomepageTypeTopProPlayersArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeTopSynergiesByHeroArgs = {
  heroIds?: InputMaybe<Array<InputMaybe<Scalars["Short"]>>>
  synergyComponentsTake?: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeUpcomingLeaguesArgs = {
  excludedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  includedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  includedLeagueTierIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserQuery = {
  __typename?: "UserQuery"
  /** Gets a list of completed tutorials from the logged in user. */
  completedTutorials?: Maybe<Array<Maybe<Scalars["Short"]>>>
  /** Returns a list of feed events for the logged in user. */
  feed?: Maybe<FeedResponseType>
  /** Gets the list of followers the person is following. */
  followers?: Maybe<Array<Maybe<FollowerType>>>
  /** Gets the list of followers the person is following. */
  following?: Maybe<Array<Maybe<FollowerType>>>
  /** Returns a list of Stratz blogs. */
  homepage?: Maybe<UserHomepageType>
  /** Find user details of the currently logged in user. */
  profile?: Maybe<UserType>
}

export type UserQueryFeedArgs = {
  skip?: InputMaybe<Scalars["Int"]>
  take?: InputMaybe<Scalars["Int"]>
}

export type UserQueryHomepageArgs = {
  take: Scalars["Int"]
}

export type UserType = {
  __typename?: "UserType"
  followerCount?: Maybe<Scalars["Int"]>
  followingCount?: Maybe<Scalars["Int"]>
  followingLeagueCount?: Maybe<Scalars["Int"]>
  followingTeamCount?: Maybe<Scalars["Int"]>
  profile?: Maybe<CaptainJackIdentityPrivateProfileType>
  recentMatch?: Maybe<MatchType>
  steamAccount?: Maybe<SteamAccountType>
  stratzApiApplications?: Maybe<Array<Maybe<CaptainJackIdentityApiApplicationType>>>
}

export type VendorQuery = {
  __typename?: "VendorQuery"
  dotaNext?: Maybe<DotaNextQuery>
  /** Used by the Dota 2 Twitch Tracker for Dota Stats */
  twitchTracker?: Maybe<TwitchTrackerPlayerType>
}

export type VendorQueryTwitchTrackerArgs = {
  steamAccountId: Scalars["Long"]
}

export enum XpReason {
  Creeps = "CREEPS",
  Heroes = "HEROES",
  Other = "OTHER",
  Outposts = "OUTPOSTS",
  Roshan = "ROSHAN",
  TomeOfKnowledge = "TOME_OF_KNOWLEDGE",
}

export type YogurtMutation = {
  __typename?: "YogurtMutation"
  /** Add a member to a match replay upload team. steamAccountId and matchReplayUploadTeamId are required input fields. */
  addTeamMember?: Maybe<Scalars["Boolean"]>
  /** Create a new match replay upload team. teamName, emailAddress, and teamId are required input fields. */
  createTeam?: Maybe<MatchReplayUploadTeamType>
  /** Delete the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  delete?: Maybe<Scalars["Boolean"]>
  /** Import a public match as a match replay upload to the match replay upload team's data set. matchReplayUploadTeamId and matchId are required input fields. */
  importMatch?: Maybe<Scalars["Boolean"]>
  /** If the Picks and Bans for a match are missing or invalid, this allows you to update them. */
  importPickBans?: Maybe<Scalars["Boolean"]>
  /** Invalidate the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  invalidate?: Maybe<Scalars["Boolean"]>
  /** Delete the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  linkSeriesId?: Maybe<Scalars["Boolean"]>
  /** Remove the series id for all of the input matches. matchReplayUploadTeamId and matchIds are required input fields. */
  removeSeriesId?: Maybe<Scalars["Boolean"]>
  /** Remove a member of a match replay upload team. memberCaptainJackIdentityId and matchReplayUploadTeamId are required input fields. */
  removeTeamMember?: Maybe<Scalars["Boolean"]>
  /** Set the default team of a match replay upload team member. memberCaptainJackIdentityId and matchReplayUploadTeamId are required input fields. */
  setTeamMemberDefaultTeam?: Maybe<Scalars["Boolean"]>
  /** Update the data of a match replay upload. updateMatchReplayUploadObject is a required input field. */
  update?: Maybe<Scalars["Boolean"]>
  /** Update a new match replay upload team. matchReplayUploadTeamId is a required input field. */
  updateTeam?: Maybe<Scalars["Boolean"]>
  /** Update a member of a match replay upload team. memberCaptainJackIdentityId, matchReplayUploadTeamId, and isAdmin are required input fields. */
  updateTeamMember?: Maybe<Scalars["Boolean"]>
  /** Validate the data of a match replay upload, adding the match replay upload to the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  validate?: Maybe<Scalars["Boolean"]>
}

export type YogurtMutationAddTeamMemberArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
  steamAccountId: Scalars["Long"]
}

export type YogurtMutationCreateTeamArgs = {
  emailAddress: Scalars["String"]
  matchReplayUploadTeamName: Scalars["String"]
  teamId: Scalars["Int"]
}

export type YogurtMutationDeleteArgs = {
  matchId: Scalars["Long"]
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationImportMatchArgs = {
  matchId: Scalars["Long"]
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationImportPickBansArgs = {
  matchId: Scalars["Long"]
  matchReplayUploadTeamId: Scalars["Int"]
  pickBans: Array<InputMaybe<ImportPickBanType>>
}

export type YogurtMutationInvalidateArgs = {
  matchId: Scalars["Long"]
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationLinkSeriesIdArgs = {
  matchIds: Array<InputMaybe<Scalars["Long"]>>
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationRemoveSeriesIdArgs = {
  matchIds: Array<InputMaybe<Scalars["Long"]>>
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationRemoveTeamMemberArgs = {
  captainJackIdentityId: Scalars["ID"]
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationSetTeamMemberDefaultTeamArgs = {
  captainJackIdentityId: Scalars["ID"]
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationUpdateArgs = {
  updateMatchReplayUploadObject: UpdateMatchReplayUploadObjectType
}

export type YogurtMutationUpdateTeamArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
  matchReplayUploadTeamName?: InputMaybe<Scalars["String"]>
  teamId?: InputMaybe<Scalars["Int"]>
}

export type YogurtMutationUpdateTeamMemberArgs = {
  captainJackIdentityId: Scalars["ID"]
  isAdmin: Scalars["Boolean"]
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationValidateArgs = {
  matchId: Scalars["Long"]
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtQuery = {
  __typename?: "YogurtQuery"
  /** Find the defualt match replay upload team associated with the currently logged in user. */
  defaultTeam?: Maybe<MatchReplayUploadTeamType>
  /** Find the list of Hero's in the game and determine basic output by grouping them together. */
  heroSummary?: Maybe<Array<Maybe<MatchReplayUploadHeroSummaryType>>>
  /** Find match replay uploads by match replay upload team id. matchReplayUploadTeamId and request are required input fields. */
  overview?: Maybe<MatchReplayUploadOverviewType>
  /** Find a match replay upload team by match replay upload team id. matchReplayUploadTeamId is a required input field. */
  team?: Maybe<MatchReplayUploadTeamType>
  /** Find match replay upload team members by match replay upload team id. matchReplayUploadTeamId is a required input field. */
  teamMembers?: Maybe<Array<Maybe<MatchReplayUploadTeamMemberType>>>
  /** Find all match replay upload teams associated with the currently logged in user. */
  teams?: Maybe<Array<Maybe<MatchReplayUploadTeamType>>>
}

export type YogurtQueryHeroSummaryArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
  request?: InputMaybe<FilterMatchReplayUploadRequestType>
}

export type YogurtQueryOverviewArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
  request?: InputMaybe<FilterMatchReplayUploadRequestType>
}

export type YogurtQueryTeamArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtQueryTeamMembersArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
}

export type LeagueQueryVariables = Exact<{
  id: Scalars["Int"]
}>

export type LeagueQuery = {
  __typename?: "DotaQuery"
  league?: {
    __typename?: "LeagueType"
    displayName?: string | null
    region?: LeagueRegion | null
    stats?: { __typename?: "LeagueStatType"; matchCount?: number | null } | null
    nodeGroups?: Array<{
      __typename?: "LeagueNodeGroupType"
      nodes?: Array<{
        __typename?: "LeagueNodeType"
        scheduledTime?: any | null
        hasStarted?: boolean | null
        isCompleted?: boolean | null
        nodeType?: LeagueNodeDefaultGroupEnum | null
        teamOneWins?: any | null
        teamTwoWins?: any | null
        teamOne?: { __typename?: "TeamType"; name?: string | null } | null
        teamTwo?: { __typename?: "TeamType"; name?: string | null } | null
        matches?: Array<{ __typename?: "MatchType"; id?: any | null } | null> | null
      } | null> | null
    } | null> | null
  } | null
}
