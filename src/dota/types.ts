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
  DateTime: string
  Decimal: number
  Guid: string
  Long: number
  Short: number
  UShort: number
}

export type AbilityActiveListType = {
  readonly __typename?: "AbilityActiveListType"
  readonly ability0: Maybe<Scalars["Short"]>
  readonly ability1: Maybe<Scalars["Short"]>
  readonly ability2: Maybe<Scalars["Short"]>
  readonly ability3: Maybe<Scalars["Short"]>
  readonly ability4: Maybe<Scalars["Short"]>
  readonly ability5: Maybe<Scalars["Short"]>
  readonly ability6: Maybe<Scalars["Short"]>
  readonly ability7: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
}

export type AbilityAttributeType = {
  readonly __typename?: "AbilityAttributeType"
  readonly linkedSpecialBonusAbilityId: Maybe<Scalars["Short"]>
  readonly name: Maybe<Scalars["String"]>
  readonly requiresScepter: Scalars["Boolean"]
  readonly value: Maybe<Scalars["String"]>
}

export type AbilityCustomGameLanguageType = {
  readonly __typename?: "AbilityCustomGameLanguageType"
  readonly description: Maybe<Scalars["String"]>
  readonly displayName: Maybe<Scalars["String"]>
}

export type AbilityCustomGameType = {
  readonly __typename?: "AbilityCustomGameType"
  readonly abilityName: Maybe<Scalars["String"]>
  readonly id: Maybe<Scalars["Short"]>
  readonly language: Maybe<AbilityCustomGameLanguageType>
  readonly name: Maybe<Scalars["String"]>
}

export enum AbilityDispellEnum {
  No = "NO",
  None = "NONE",
  Yes = "YES",
  YesStrong = "YES_STRONG",
}

export type AbilityLanguageType = {
  readonly __typename?: "AbilityLanguageType"
  readonly aghanimDescription: Maybe<Scalars["String"]>
  readonly attributes: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly description: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly displayName: Maybe<Scalars["String"]>
  readonly lore: Maybe<Scalars["String"]>
  readonly notes: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly shardDescription: Maybe<Scalars["String"]>
}

export type AbilityLearnEventsType = {
  readonly __typename?: "AbilityLearnEventsType"
  readonly abilityId: Maybe<Scalars["Short"]>
  readonly isMaxLevel: Maybe<Scalars["Boolean"]>
  readonly isTalent: Maybe<Scalars["Boolean"]>
  readonly isUltimate: Maybe<Scalars["Boolean"]>
  readonly level: Scalars["Int"]
  readonly levelObtained: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type AbilityStatType = {
  readonly __typename?: "AbilityStatType"
  readonly abilityId: Maybe<Scalars["Short"]>
  readonly behavior: Maybe<Scalars["Long"]>
  readonly castPoint: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly castRange: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly castRangeBuffer: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly channelTime: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly chargeRestoreTime: Maybe<Scalars["String"]>
  readonly charges: Maybe<Scalars["String"]>
  readonly cooldown: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly damage: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly dispellable: Maybe<AbilityDispellEnum>
  readonly displayAdditionalHeroes: Maybe<Scalars["Boolean"]>
  readonly duration: Maybe<Scalars["String"]>
  readonly fightRecapLevel: Maybe<Scalars["Short"]>
  readonly hasScepterUpgrade: Maybe<Scalars["Boolean"]>
  readonly hotKeyOverride: Maybe<Scalars["String"]>
  readonly isGrantedByScepter: Maybe<Scalars["Boolean"]>
  readonly isGrantedByShard: Maybe<Scalars["Boolean"]>
  readonly isOnCastbar: Maybe<Scalars["Boolean"]>
  readonly isOnLearnbar: Maybe<Scalars["Boolean"]>
  readonly isUltimate: Maybe<Scalars["Boolean"]>
  readonly levelsBetweenUpgrades: Maybe<Scalars["Byte"]>
  readonly manaCost: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly maxLevel: Maybe<Scalars["Byte"]>
  readonly modifierSupportBonus: Maybe<Scalars["Short"]>
  readonly modifierSupportValue: Maybe<Scalars["Float"]>
  readonly requiredLevel: Maybe<Scalars["Byte"]>
  readonly spellImmunity: Maybe<Scalars["Int"]>
  readonly type: Maybe<Scalars["Int"]>
  readonly unitDamageType: Maybe<Scalars["Int"]>
  readonly unitTargetFlags: Maybe<Scalars["Long"]>
  readonly unitTargetTeam: Maybe<Scalars["Int"]>
  readonly unitTargetType: Maybe<Scalars["Long"]>
}

export type AbilityType = {
  readonly __typename?: "AbilityType"
  readonly attributes: Maybe<ReadonlyArray<Maybe<AbilityAttributeType>>>
  readonly drawMatchPage: Maybe<Scalars["Boolean"]>
  readonly id: Maybe<Scalars["Short"]>
  readonly isTalent: Maybe<Scalars["Boolean"]>
  readonly language: Maybe<AbilityLanguageType>
  readonly name: Maybe<Scalars["String"]>
  readonly stat: Maybe<AbilityStatType>
  readonly uri: Maybe<Scalars["String"]>
}

export type AbilityUsedEventsType = {
  readonly __typename?: "AbilityUsedEventsType"
  readonly abilityId: Maybe<Scalars["Short"]>
  readonly attacker: Maybe<Scalars["Short"]>
  readonly target: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
}

export type AdminMutation = {
  readonly __typename?: "AdminMutation"
  readonly deleteProSteamAccount: Maybe<Scalars["Boolean"]>
  readonly mergeProSteamAccount: Maybe<Scalars["Boolean"]>
}

export type AdminMutationDeleteProSteamAccountArgs = {
  request: DeleteProSteamAccountRequestType
}

export type AdminMutationMergeProSteamAccountArgs = {
  request: ReadonlyArray<InputMaybe<MergeProSteamAccountRequestType>>
}

export type AdminQuery = {
  readonly __typename?: "AdminQuery"
  /** Returns a list of Stratz blogs. */
  readonly apiMemoryReport: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
}

export type AssistDetailType = {
  readonly __typename?: "AssistDetailType"
  readonly attacker: Maybe<Scalars["Short"]>
  readonly gold: Maybe<Scalars["Int"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly subTime: Maybe<Scalars["Int"]>
  readonly target: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
  readonly xp: Maybe<Scalars["Int"]>
}

export enum BasicRegionType {
  China = "CHINA",
  Europe = "EUROPE",
  NorthAmerica = "NORTH_AMERICA",
  Sea = "SEA",
  SouthAmerica = "SOUTH_AMERICA",
}

export type BlogMetaTagInfoType = {
  readonly __typename?: "BlogMetaTagInfoType"
  readonly id: Maybe<Scalars["Short"]>
  readonly name: Scalars["String"]
}

export type BlogMetaTagType = {
  readonly __typename?: "BlogMetaTagType"
  readonly blogId: Maybe<Scalars["Byte"]>
  readonly blogMetaTagTypeId: Maybe<Scalars["Short"]>
  readonly id: Maybe<Scalars["Byte"]>
  readonly metaTag: Maybe<BlogMetaTagInfoType>
}

export type BlogType = {
  readonly __typename?: "BlogType"
  readonly bannerImageUrl: Scalars["String"]
  readonly captainJackIdentityId: Maybe<Scalars["Guid"]>
  readonly data: Scalars["String"]
  readonly id: Maybe<Scalars["Byte"]>
  readonly link: Scalars["String"]
  readonly liveDateTime: Maybe<Scalars["DateTime"]>
  readonly metaTags: Maybe<ReadonlyArray<Maybe<BlogMetaTagType>>>
  readonly poster: Maybe<SteamAccountType>
  readonly title: Scalars["String"]
}

export enum BuildingType {
  Barracks = "BARRACKS",
  Fort = "FORT",
  Healer = "HEALER",
  Outpost = "OUTPOST",
  Tower = "TOWER",
}

export type BuyBackDetailType = {
  readonly __typename?: "BuyBackDetailType"
  readonly cost: Scalars["Int"]
  readonly deathTimeRemaining: Scalars["Int"]
  readonly heroId: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
}

export type CaptainJackIdentityApiApplicationType = {
  readonly __typename?: "CaptainJackIdentityApiApplicationType"
  readonly apiKey: Maybe<Scalars["String"]>
  readonly captainJackIdentityId: Maybe<Scalars["Guid"]>
  readonly description: Maybe<Scalars["String"]>
  readonly discordAddress: Maybe<Scalars["String"]>
  readonly emailAddress: Maybe<Scalars["String"]>
  readonly isApproved: Maybe<Scalars["Boolean"]>
  readonly issuer: Maybe<Scalars["String"]>
  readonly matomoReferenceToken: Maybe<Scalars["String"]>
  readonly secretKey: Maybe<Scalars["String"]>
  readonly tokenType: Maybe<StratzApiType>
  readonly websiteAddress: Maybe<Scalars["String"]>
}

export type CaptainJackIdentityPrivateProfileType = {
  readonly __typename?: "CaptainJackIdentityPrivateProfileType"
  readonly captainJackIdentityId: Maybe<Scalars["Guid"]>
  readonly dailyEmail: Scalars["Boolean"]
  readonly email: Maybe<Scalars["String"]>
  readonly emailHour: Maybe<Scalars["Byte"]>
  readonly emailLevel: Maybe<Scalars["Byte"]>
  readonly emailValidationCode: Maybe<Scalars["String"]>
  readonly facebook: Maybe<Scalars["String"]>
  readonly feedLevel: Maybe<Scalars["Byte"]>
  readonly isAdmin: Maybe<Scalars["Boolean"]>
  readonly isEmailValidated: Scalars["Boolean"]
  readonly languageId: Maybe<Scalars["Byte"]>
  readonly lastDailyEmail: Maybe<Scalars["Long"]>
  readonly lastLeagueDailyEmail: Maybe<Scalars["Long"]>
  readonly lastMonthlyEmail: Maybe<Scalars["Long"]>
  readonly lastProCircuitDailyEmail: Maybe<Scalars["Long"]>
  readonly lastReadFeedTime: Maybe<Scalars["Long"]>
  readonly lastSeen: Maybe<Scalars["Long"]>
  readonly lastTeamDailyEmail: Maybe<Scalars["Long"]>
  readonly lastWeeklyEmail: Maybe<Scalars["Long"]>
  readonly monthlyEmail: Scalars["Boolean"]
  readonly name: Maybe<Scalars["String"]>
  readonly premiumEndDate: Maybe<Scalars["Long"]>
  readonly proCircuitEmailLevel: Maybe<Scalars["Byte"]>
  readonly proCircuitFeedLevel: Maybe<Scalars["Byte"]>
  readonly themeType: Maybe<Scalars["Byte"]>
  readonly twitch: Maybe<Scalars["String"]>
  readonly twitter: Maybe<Scalars["String"]>
  readonly unsubscribeCode: Maybe<Scalars["String"]>
  readonly weeklyEmail: Scalars["Boolean"]
  readonly youTube: Maybe<Scalars["String"]>
}

export type CaptainJackIdentityProfileUpdateRequestType = {
  readonly dailyEmail: InputMaybe<Scalars["Boolean"]>
  readonly email: InputMaybe<Scalars["String"]>
  readonly emailHour: InputMaybe<Scalars["Byte"]>
  readonly emailLevel: InputMaybe<Scalars["Byte"]>
  readonly feedLevel: InputMaybe<Scalars["Byte"]>
  readonly isStratzAnonymous: InputMaybe<Scalars["Byte"]>
  readonly languageId: InputMaybe<Scalars["Byte"]>
  readonly monthlyEmail: InputMaybe<Scalars["Boolean"]>
  readonly proCircuitEmailLevel: InputMaybe<Scalars["Byte"]>
  readonly proCircuitFeedLevel: InputMaybe<Scalars["Byte"]>
  readonly themeType: InputMaybe<Scalars["Byte"]>
  readonly weeklyEmail: InputMaybe<Scalars["Boolean"]>
}

export type CaptainJackIdentityPublicProfileType = {
  readonly __typename?: "CaptainJackIdentityPublicProfileType"
  readonly captainJackIdentityId: Maybe<Scalars["Guid"]>
  readonly facebook: Maybe<Scalars["String"]>
  readonly isAdmin: Maybe<Scalars["Boolean"]>
  readonly name: Maybe<Scalars["String"]>
  readonly twitch: Maybe<Scalars["String"]>
  readonly twitter: Maybe<Scalars["String"]>
  readonly youTube: Maybe<Scalars["String"]>
}

export type CaptainJackIdentityType = {
  readonly __typename?: "CaptainJackIdentityType"
  readonly id: Maybe<Scalars["Guid"]>
  readonly profile: Maybe<CaptainJackIdentityPublicProfileType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["String"]>
}

export type ClusterType = {
  readonly __typename?: "ClusterType"
  /** ClusterId which determines in which region a match was played. One region has multiple clusters. When selecting your region in the Dota 2 client, a random cluster is provided to you for each match for load balancing purposes. */
  readonly id: Maybe<Scalars["Int"]>
  /** RegionId gives the exact geographical area where the match is played. */
  readonly regionId: Maybe<Scalars["Short"]>
}

export type ConstantQuery = {
  readonly __typename?: "ConstantQuery"
  /** Find ability details. */
  readonly abilities: Maybe<ReadonlyArray<Maybe<AbilityType>>>
  /** Find ability details by ability id. id is a required input field. */
  readonly ability: Maybe<AbilityType>
  /** Provided directly from Dota 2 Region files, the cluster is the geographically breakdown of where the game is played. */
  readonly clusters: Maybe<ReadonlyArray<Maybe<ClusterType>>>
  /** Find all abilities that are used in custom events. For example Aghnims Labyrinth. */
  readonly customAbilities: Maybe<ReadonlyArray<Maybe<AbilityCustomGameType>>>
  /** Returns a list of game mode types which is directly supplied by Dota 2. Matches API call will have a input for this value. */
  readonly gameModes: Maybe<ReadonlyArray<Maybe<GameModeType>>>
  /** Find game version details by game version id. id is a required input field. */
  readonly gameVersion: Maybe<GameVersionType>
  /** Find game version details. */
  readonly gameVersions: Maybe<ReadonlyArray<Maybe<GameVersionType>>>
  readonly hero: Maybe<HeroType>
  readonly heroes: Maybe<ReadonlyArray<Maybe<HeroType>>>
  /** Find item details by item id. id is a required input field. */
  readonly item: Maybe<ItemType>
  /** Find item details by item id. id is a required input field. */
  readonly items: Maybe<ReadonlyArray<Maybe<ItemType>>>
  /** Returns a list of lobby types which are mirrored from the Dota 2 client. */
  readonly lobbyTypes: Maybe<ReadonlyArray<Maybe<LobbyTypeType>>>
  /** Find all modifiers that are used in the game. If you find a bug on a modifier, let us know as we have to control this ourselves. */
  readonly modifiers: Maybe<ReadonlyArray<Maybe<ModifierType>>>
  /** Find npc details by npc id. id is a required input field. */
  readonly npc: Maybe<NpcType>
  /** Find npc details. */
  readonly npcs: Maybe<ReadonlyArray<Maybe<NpcType>>>
  /** Find all patch notes for each item and ability. These are found when you hover over each object in-game. */
  readonly patchNotes: Maybe<ReadonlyArray<Maybe<PatchNoteLanguageType>>>
  /** Find all players who Valve qualifies as a Pro Player or Streamer. */
  readonly proSteamAccounts: Maybe<ReadonlyArray<Maybe<ProSteamAccountType>>>
  /** Returns a list of region details and an Id for reference. */
  readonly regions: Maybe<ReadonlyArray<Maybe<RegionType>>>
  /** List of all the roles types for heroes. */
  readonly roles: Maybe<ReadonlyArray<Maybe<RoleType>>>
}

export type ConstantQueryAbilitiesArgs = {
  gameVersionId: InputMaybe<Scalars["Short"]>
  language: InputMaybe<Language>
}

export type ConstantQueryAbilityArgs = {
  gameVersionId: InputMaybe<Scalars["Short"]>
  id: Scalars["Int"]
  language: InputMaybe<Language>
}

export type ConstantQueryCustomAbilitiesArgs = {
  languageId: InputMaybe<Language>
}

export type ConstantQueryGameVersionArgs = {
  id: Scalars["Short"]
}

export type ConstantQueryHeroArgs = {
  gameVersionId: InputMaybe<Scalars["Short"]>
  id: Scalars["Short"]
  language: InputMaybe<Language>
}

export type ConstantQueryHeroesArgs = {
  gameVersionId: InputMaybe<Scalars["Short"]>
  language: InputMaybe<Language>
}

export type ConstantQueryItemArgs = {
  gameVersionId: InputMaybe<Scalars["Short"]>
  id: Scalars["Int"]
  language: InputMaybe<Language>
}

export type ConstantQueryItemsArgs = {
  gameVersionId: InputMaybe<Scalars["Short"]>
  language: InputMaybe<Language>
}

export type ConstantQueryModifiersArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type ConstantQueryNpcArgs = {
  gameVersionId: InputMaybe<Scalars["Short"]>
  id: Scalars["Short"]
}

export type ConstantQueryNpcsArgs = {
  gameVersionId: InputMaybe<Scalars["Short"]>
}

export type ConstantQueryPatchNotesArgs = {
  languageId: InputMaybe<Language>
}

export enum Damage {
  Magical = "MAGICAL",
  Physical = "PHYSICAL",
  Pure = "PURE",
}

export type DeathDetailType = {
  readonly __typename?: "DeathDetailType"
  readonly assist: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly attacker: Maybe<Scalars["Short"]>
  readonly byAbility: Maybe<Scalars["Short"]>
  readonly byItem: Maybe<Scalars["Short"]>
  readonly goldFed: Maybe<Scalars["Int"]>
  readonly goldLost: Maybe<Scalars["Int"]>
  readonly hasHealAvailable: Maybe<Scalars["Boolean"]>
  readonly isAttemptTpOut: Maybe<Scalars["Boolean"]>
  readonly isBurst: Maybe<Scalars["Boolean"]>
  readonly isDieBack: Maybe<Scalars["Boolean"]>
  readonly isEngagedOnDeath: Maybe<Scalars["Boolean"]>
  readonly isFeed: Maybe<Scalars["Boolean"]>
  readonly isFromIllusion: Maybe<Scalars["Boolean"]>
  readonly isTracked: Maybe<Scalars["Boolean"]>
  readonly isWardWalkThrough: Maybe<Scalars["Boolean"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly reliableGold: Maybe<Scalars["Int"]>
  readonly target: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
  readonly timeDead: Maybe<Scalars["Int"]>
  readonly unreliableGold: Maybe<Scalars["Int"]>
  readonly xpFed: Maybe<Scalars["Int"]>
}

export type DeleteProSteamAccountRequestType = {
  readonly name: InputMaybe<Scalars["String"]>
  readonly realName: InputMaybe<Scalars["String"]>
  readonly steamAccountId: InputMaybe<Scalars["Long"]>
}

export type DireTide2020CustomGameHeroWinDayType = {
  readonly __typename?: "DireTide2020CustomGameHeroWinDayType"
  readonly candyScored: Scalars["Int"]
  readonly day: Scalars["Long"]
  readonly heroId: Scalars["Short"]
  readonly matchCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
}

export type DireTide2020CustomGameMatchType = {
  readonly __typename?: "DireTide2020CustomGameMatchType"
  readonly candyLost: Maybe<Scalars["Short"]>
  readonly candyPickedUp: Maybe<Scalars["Short"]>
  readonly candyScored: Maybe<Scalars["Short"]>
  readonly clusterId: Maybe<Scalars["Short"]>
  readonly didRadiantWin: Maybe<Scalars["Boolean"]>
  readonly direCandyScored: Maybe<Scalars["Short"]>
  readonly durationSeconds: Maybe<Scalars["Short"]>
  readonly endDateTime: Maybe<Scalars["Long"]>
  readonly id: Maybe<Scalars["Long"]>
  readonly players: Maybe<ReadonlyArray<Maybe<DireTide2020CustomGamePlayerType>>>
  readonly radiantCandyScored: Maybe<Scalars["Short"]>
  readonly replaySalt: Maybe<Scalars["Long"]>
  readonly startDateTime: Maybe<Scalars["Long"]>
}

export type DireTide2020CustomGameMatchTypePlayersArgs = {
  steamAccountId: InputMaybe<Scalars["Long"]>
}

export type DireTide2020CustomGamePlayerType = {
  readonly __typename?: "DireTide2020CustomGamePlayerType"
  readonly assists: Maybe<Scalars["Byte"]>
  readonly backpack0Id: Maybe<Scalars["Short"]>
  readonly backpack1Id: Maybe<Scalars["Short"]>
  readonly backpack2Id: Maybe<Scalars["Short"]>
  readonly candyLost: Maybe<Scalars["Short"]>
  readonly candyPickedUp: Maybe<Scalars["Short"]>
  readonly candyScored: Maybe<Scalars["Short"]>
  readonly deaths: Maybe<Scalars["Byte"]>
  readonly goldPerMinute: Maybe<Scalars["Short"]>
  readonly goldSpent: Maybe<Scalars["Int"]>
  readonly hero: Maybe<HeroType>
  readonly heroDamage: Maybe<Scalars["Int"]>
  readonly heroHealing: Maybe<Scalars["Int"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly isVictory: Scalars["Boolean"]
  readonly item0Id: Maybe<Scalars["Short"]>
  readonly item1Id: Maybe<Scalars["Short"]>
  readonly item2Id: Maybe<Scalars["Short"]>
  readonly item3Id: Maybe<Scalars["Short"]>
  readonly item4Id: Maybe<Scalars["Short"]>
  readonly item5Id: Maybe<Scalars["Short"]>
  readonly kills: Maybe<Scalars["Byte"]>
  readonly leaverStatus: Maybe<Scalars["Byte"]>
  readonly level: Maybe<Scalars["Byte"]>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly networth: Maybe<Scalars["Int"]>
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  readonly neutral0Id: Maybe<Scalars["Short"]>
  readonly numLastHits: Maybe<Scalars["Short"]>
  readonly partyId: Maybe<Scalars["Byte"]>
  readonly playerSlot: Maybe<Scalars["Byte"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
}

export type DotaMutation = {
  readonly __typename?: "DotaMutation"
  readonly admin: Maybe<AdminMutation>
  readonly user: Maybe<DotaUserMutation>
  readonly yogurt: Maybe<YogurtMutation>
}

export type DotaNextQuery = {
  readonly __typename?: "DotaNextQuery"
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  readonly ally: Maybe<ReadonlyArray<Maybe<DotaNextWithAllyType>>>
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  readonly enemy: Maybe<ReadonlyArray<Maybe<DotaNextWithAllyType>>>
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  readonly playerHero: Maybe<
    ReadonlyArray<Maybe<ReadonlyArray<Maybe<MatchPlayerItemPurchaseEventType>>>>
  >
}

export type DotaNextQueryAllyArgs = {
  matchSteamAccountId: Scalars["Long"]
  steamAccountIds: ReadonlyArray<InputMaybe<Scalars["Long"]>>
}

export type DotaNextQueryEnemyArgs = {
  matchSteamAccountId: Scalars["Long"]
  steamAccountIds: ReadonlyArray<InputMaybe<Scalars["Long"]>>
}

export type DotaNextQueryPlayerHeroArgs = {
  gameModeIds: Scalars["Byte"]
  heroId: InputMaybe<Scalars["Short"]>
  limitByItemIds: Scalars["Int"]
  lobbyTypeIds: Scalars["Byte"]
  startDateTime: Scalars["Long"]
  steamAccountIds: Scalars["Long"]
}

export type DotaNextWithAllyType = {
  readonly __typename?: "DotaNextWithAllyType"
  readonly lifetimeMatchCount: Maybe<Scalars["Int"]>
  readonly lifetimeWinMatchCount: Maybe<Scalars["Int"]>
  readonly steamAccountId: Maybe<Scalars["Long"]>
}

export type DotaPlusWeekType = {
  readonly __typename?: "DotaPlusWeekType"
  readonly active: Maybe<Scalars["Int"]>
  readonly expired: Maybe<Scalars["Int"]>
  readonly week: Maybe<Scalars["Long"]>
}

export type DotaQuery = {
  readonly __typename?: "DotaQuery"
  /** Queries used to query constants in Dota. */
  readonly constants: Maybe<ConstantQuery>
  /** For getting access to one specific Guild which was used at the start of TI10 Compendium. */
  readonly guild: Maybe<GuildType>
  /** Queries used to gain insights into hero data and statistics. */
  readonly heroStats: Maybe<HeroStatsQuery>
  /** Queries used to get leaderboard information. */
  readonly leaderboard: Maybe<LeaderboardQuery>
  /** Find league details by league Id. Id is a required field. */
  readonly league: Maybe<LeagueType>
  /** Find league details by searching for leagues using a LeagueRequest. */
  readonly leagues: Maybe<ReadonlyArray<Maybe<LeagueType>>>
  /** Queries used to find live match data. */
  readonly live: Maybe<LiveQuery>
  /** Find match details by the match id. id is a required input field. */
  readonly match: Maybe<MatchType>
  /** Find match details for each match id. ids is a required input field. */
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchType>>>
  /** Find player details by steam account id. id is a required input field. */
  readonly player: Maybe<PlayerType>
  /** Find player details for each steam account id. ids is a required input field. */
  readonly players: Maybe<ReadonlyArray<Maybe<PlayerType>>>
  /** Queries used to populate Stratz Plus. */
  readonly plus: Maybe<PlusQuery>
  /** Stratz specific queries. */
  readonly stratz: Maybe<StratzQuery>
  /** Find player details for each steam account id. ids is a required input field. */
  readonly team: Maybe<TeamType>
  /** Results in a list of team objects that contain data about them and their players. */
  readonly teams: Maybe<ReadonlyArray<Maybe<TeamType>>>
  /** Queries used by 3rd party applications. */
  readonly vendor: Maybe<VendorQuery>
  /** Queries used for Stratz Yogurt - users won't be able to access these calls until they have access to the app. */
  readonly yogurt: Maybe<YogurtQuery>
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
  ids: ReadonlyArray<InputMaybe<Scalars["Long"]>>
}

export type DotaQueryPlayerArgs = {
  steamAccountId: Scalars["Long"]
}

export type DotaQueryPlayersArgs = {
  steamAccountIds: ReadonlyArray<InputMaybe<Scalars["Long"]>>
}

export type DotaQueryTeamArgs = {
  teamId: Scalars["Int"]
}

export type DotaQueryTeamsArgs = {
  teamIds: ReadonlyArray<InputMaybe<Scalars["Int"]>>
}

export type DotaSubscription = {
  readonly __typename?: "DotaSubscription"
  readonly feedLive: Maybe<LiveEventType>
  readonly matchCount: Maybe<TotalMatchCountType>
  readonly matchLive: Maybe<MatchLiveType>
  readonly matchLiveLeague: Maybe<MatchLiveType>
  readonly playerCount: Maybe<TotalPlayerCountType>
}

export type DotaSubscriptionMatchLiveArgs = {
  matchId: Scalars["Long"]
}

export type DotaSubscriptionMatchLiveLeagueArgs = {
  leagueId: Scalars["Int"]
}

export type DotaUserMutation = {
  readonly __typename?: "DotaUserMutation"
  readonly applyStratzApiKey: Maybe<Scalars["Boolean"]>
  /** If a user moves from annoymous to public, this will turn it on instantly for them. */
  readonly checkPublicDotaAccount: Maybe<Scalars["Boolean"]>
  /** Update your user to unsubscribe from Stratz emails. */
  readonly emailUnsubscribe: Maybe<UserHomepageType>
  /** Update your user to (un)follow a specific LeagueId */
  readonly followLeague: Maybe<Scalars["Boolean"]>
  /** Update your user to (un)follow a specific SteamAccountId */
  readonly followPlayer: Maybe<Scalars["Boolean"]>
  /** Marks the user's LastReadFeedTime to the current time. */
  readonly readAllFeed: Maybe<Scalars["Boolean"]>
  readonly unfollowLeague: Maybe<Scalars["Boolean"]>
  /** Update your user to (un)follow a specific SteamAccountId */
  readonly unfollowPlayer: Maybe<Scalars["Boolean"]>
  /** Updates every user you are following.  This should be handled with care, as this overrides all your predefinded user specific settings with these settings. */
  readonly updateAllFollowing: Maybe<Scalars["Boolean"]>
  /** Update your user to (un)follow a specific SteamAccountId */
  readonly updateFollowing: Maybe<Scalars["Boolean"]>
  /** Gets more in-depth information about the person you are following.  This is a user specific request, and you can only edit yourself. */
  readonly updateFollowingFavorite: Maybe<Scalars["Boolean"]>
  /** Updates the logged in user information profile. */
  readonly updateProfile: Maybe<Scalars["Boolean"]>
  /** Validates a user email address if the password id is correct. */
  readonly updateTutorial: Maybe<ReadonlyArray<Maybe<Scalars["Short"]>>>
  /** Validates a user email address if the password id is correct. */
  readonly validateEmail: Maybe<Scalars["Boolean"]>
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
  readonly __typename?: "ExperienceDetailType"
  readonly amount: Scalars["Int"]
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly reason: Maybe<XpReason>
  readonly time: Scalars["Int"]
}

export enum Feat {
  DotaAccountLevel = "DOTA_ACCOUNT_LEVEL",
  HighImp = "HIGH_IMP",
  Rampage = "RAMPAGE",
  WinStreak = "WIN_STREAK",
}

export type FeatType = {
  readonly __typename?: "FeatType"
  readonly hero: Maybe<HeroType>
  readonly heroId: Maybe<Scalars["Int"]>
  readonly match: Maybe<MatchType>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly type: Maybe<Feat>
  readonly value: Maybe<Scalars["Int"]>
}

export type FeedResponseType = {
  readonly __typename?: "FeedResponseType"
  readonly count: Maybe<Scalars["Int"]>
  readonly data: Maybe<ReadonlyArray<Maybe<FeedType>>>
  readonly date: Maybe<Scalars["DateTime"]>
}

export type FeedType = {
  readonly __typename?: "FeedType"
  readonly date: Maybe<Scalars["Long"]>
  readonly didWin: Maybe<Scalars["Boolean"]>
  readonly heroId: Scalars["Int"]
  readonly league: Maybe<LeagueType>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly targetSteamAccountId: Maybe<Scalars["Long"]>
  readonly type: Maybe<Scalars["Byte"]>
  readonly value: Scalars["Int"]
}

export enum FilterDireTide2020CustomGameMatchOrderBy {
  CandyScored = "CANDY_SCORED",
  EndDateTime = "END_DATE_TIME",
}

export type FilterDireTide2020CustomMatchRequestType = {
  /** The order in which the data returned will be sorted by. */
  readonly orderBy: InputMaybe<FilterDireTide2020CustomGameMatchOrderBy>
  /** If the return should be ordered by Ascending or Desending order. */
  readonly orderDirection: InputMaybe<FilterOrder>
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  readonly steamAccountId: InputMaybe<Scalars["Long"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
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
  readonly createdAfterDateTime: InputMaybe<Scalars["Long"]>
  /** The guild was created before this date time (in Unix TimeStamp). */
  readonly createdBeforeDateTime: InputMaybe<Scalars["Long"]>
  /** If the guild is current set to 50 members. */
  readonly isFull: InputMaybe<Scalars["Boolean"]>
  /** If anyone is able to join the guild. */
  readonly isUnlocked: InputMaybe<Scalars["Boolean"]>
  /** The language required to join the guild. */
  readonly language: InputMaybe<Scalars["Byte"]>
  /** The max amount of members a guild can have. */
  readonly maxMemberCount: InputMaybe<Scalars["Byte"]>
  /** The rank required to join the guild. */
  readonly maxRequiredRank: InputMaybe<Scalars["Byte"]>
  /** The amount of members a guild must have. */
  readonly memberCount: InputMaybe<Scalars["Byte"]>
  /** The minimum amount of members a guild must have. */
  readonly minMemberCount: InputMaybe<Scalars["Byte"]>
  /** The rank required to join the guild. */
  readonly minRequiredRank: InputMaybe<Scalars["Byte"]>
  /** If the return should be ordered by Ascending or Desending order. */
  readonly order: InputMaybe<FilterOrder>
  /** What field to order the data by. Enum values. */
  readonly orderBy: InputMaybe<FilterLeaderboardGuildOrderBy>
  /** The region where the guild was registered. */
  readonly region: InputMaybe<Scalars["Byte"]>
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
}

export type FilterLeaderboardHeroRequestType = {
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  readonly bracketIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
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
  readonly byGameMode: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  readonly byGameVersion: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  readonly byHeroId: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  readonly byLeagueId: InputMaybe<Scalars["Int"]>
  readonly byLobbyType: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  readonly byMatchId: InputMaybe<Scalars["Long"]>
  readonly byMatchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  readonly byMatchUploadFileName: InputMaybe<Scalars["String"]>
  readonly byMatchUploadUploaderCaptainJackId: InputMaybe<Scalars["Guid"]>
  readonly bySeriesId: InputMaybe<Scalars["Int"]>
  readonly bySeriesIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  readonly bySteamAccountId: InputMaybe<Scalars["Long"]>
  readonly bySteamAccountIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  readonly byTeamId: InputMaybe<Scalars["Int"]>
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  readonly filterPosition: InputMaybe<MatchPlayerPositionType>
  readonly filterPositionIsUs: InputMaybe<Scalars["Boolean"]>
  readonly filterPositionOrder: InputMaybe<
    ReadonlyArray<InputMaybe<MatchPlayerTeamPickOrderType>>
  >
  readonly firstPick: InputMaybe<Scalars["Boolean"]>
  readonly isActive: InputMaybe<Scalars["Boolean"]>
  readonly isComplete: InputMaybe<Scalars["Boolean"]>
  readonly isLeague: InputMaybe<Scalars["Boolean"]>
  readonly isRadiant: InputMaybe<Scalars["Boolean"]>
  readonly isRadiantFirstPick: InputMaybe<Scalars["Boolean"]>
  readonly isValidated: InputMaybe<Scalars["Boolean"]>
  readonly isVictory: InputMaybe<Scalars["Boolean"]>
  readonly maxDuration: InputMaybe<Scalars["Int"]>
  readonly maxGameVersionId: InputMaybe<Scalars["Int"]>
  readonly minDuration: InputMaybe<Scalars["Int"]>
  readonly minGameVersionId: InputMaybe<Scalars["Int"]>
  readonly skip: InputMaybe<Scalars["Int"]>
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  readonly take: InputMaybe<Scalars["Int"]>
  readonly withEnemyBannedHeroId: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  readonly withEnemyHeroId: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  readonly withEnemySteamAccount: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  readonly withFriendBannedHeroId: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  readonly withFriendHeroId: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
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
  readonly lastMatchPlayedAgo: InputMaybe<Scalars["Long"]>
  /** The leaderboard is split into 4 regions. The user must appear in this region(s) for them to be allowed inside the search query. */
  readonly leaderboardRegionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** When searching for a league, the tier the league must be in. Tiers: Amateur = 1, Professional = 2, Premium = 3, Pro Circuit = 4, Main Event = 5 */
  readonly leagueTierIds: InputMaybe<ReadonlyArray<InputMaybe<LeagueTier>>>
  /** The maximum rank a player must have to be allowed inside the search query. */
  readonly maximumRank: InputMaybe<Scalars["Int"]>
  /** The minimum rank a player must have to be allowed inside the search query. */
  readonly minimumRank: InputMaybe<Scalars["Int"]>
  /** The term used to define the search parameters. Minimum input is 2 characters. */
  readonly query: Scalars["String"]
  /** Searching our entire database can take time. If you already know what your searching for you, you can limit the query down to a set of specific types. (0 - Playuers, 1 - Matches, 2 - Leagues, 3 - Teams, 4 - ProPlayers, 5 - Casters). Default is all types. */
  readonly searchType: InputMaybe<ReadonlyArray<InputMaybe<Search>>>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
  /** When searching for a team, only return results of those teams of which are considered Professionals. */
  readonly teamIsPro: InputMaybe<Scalars["Boolean"]>
}

export type FilterSeasonLeaderboardRequestType = {
  readonly heroId: InputMaybe<Scalars["Short"]>
  readonly leaderBoardDivision: InputMaybe<LeaderboardDivision>
  readonly position: InputMaybe<MatchPlayerPositionType>
  readonly query: InputMaybe<Scalars["String"]>
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
}

export type FilterSeriesRequestType = {
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
}

export enum FilterTi2020CustomGameMatchOrderBy {
  Duration = "DURATION",
  EndDateTime = "END_DATE_TIME",
}

export type FilterTi2020HeroCompositionRequestType = {
  /** The base level of difficulty */
  readonly difficulty: Ti2020CustomGameMatchDifficultyType
  /** If the return should be ordered by Ascending or Desending order. */
  readonly orderDirection: InputMaybe<FilterOrder>
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
}

export type FilterTi2020MatchRequestType = {
  /** The game must of been played after this set time. In Unix Time Stamp Format. */
  readonly createdAfterDateTime: InputMaybe<Scalars["Long"]>
  /** The game must of been played before this set time. In Unix Time Stamp Format. */
  readonly createdBeforeDateTime: InputMaybe<Scalars["Long"]>
  /** How far into the game (levels) they completed. */
  readonly depth: InputMaybe<Scalars["Byte"]>
  /** Required that the team playing the game won. */
  readonly didWin: InputMaybe<Scalars["Boolean"]>
  /** The base level of difficulty */
  readonly difficulty: InputMaybe<Ti2020CustomGameMatchDifficultyType>
  /** Return Matches that only include the set of Match Ids provided. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** The team had to make it at least this far (level). */
  readonly minDepth: InputMaybe<Scalars["Byte"]>
  /** The order in which the data returned will be sorted by. */
  readonly orderBy: InputMaybe<FilterTi2020CustomGameMatchOrderBy>
  /** If the return should be ordered by Ascending or Desending order. */
  readonly orderDirection: InputMaybe<FilterOrder>
  /** The max must be played in this list of regions */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  readonly seasonId: InputMaybe<Scalars["Byte"]>
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** Return matches that only include this single player. */
  readonly steamAccountId: InputMaybe<Scalars["Long"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
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
  readonly __typename?: "FollowerType"
  readonly captainJackIdentity: Maybe<CaptainJackIdentityType>
  readonly captainJackIdentityId: Maybe<Scalars["Guid"]>
  readonly dailyEmail: Maybe<Scalars["Boolean"]>
  readonly didManualUpdate: Scalars["Boolean"]
  readonly emailLevel: Maybe<Scalars["Byte"]>
  readonly feedLevel: Maybe<Scalars["Byte"]>
  readonly isFavorite: Maybe<Scalars["Boolean"]>
  readonly lastEmail: Maybe<Scalars["Long"]>
  readonly monthlyEmail: Maybe<Scalars["Boolean"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly weeklyEmail: Maybe<Scalars["Boolean"]>
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
  readonly __typename?: "GameModeType"
  readonly id: Maybe<Scalars["Short"]>
  readonly name: Maybe<Scalars["String"]>
}

export type GameVersionType = {
  readonly __typename?: "GameVersionType"
  readonly asOfDateTime: Maybe<Scalars["Long"]>
  readonly id: Maybe<Scalars["Short"]>
  readonly name: Maybe<Scalars["String"]>
}

export type GoldDetailType = {
  readonly __typename?: "GoldDetailType"
  readonly amount: Scalars["Int"]
  readonly isValidForStats: Maybe<Scalars["Boolean"]>
  readonly npcId: Maybe<Scalars["Int"]>
  readonly reason: Maybe<GoldReason>
  readonly time: Scalars["Int"]
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
  readonly __typename?: "GuildMemberType"
  readonly guild: Maybe<GuildType>
  readonly guildId: Maybe<Scalars["Int"]>
  readonly imp: Maybe<Scalars["Int"]>
  readonly joinDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Int"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type GuildType = {
  readonly __typename?: "GuildType"
  readonly createdDateTime: Maybe<Scalars["Long"]>
  readonly currentPercentile: Maybe<Scalars["Byte"]>
  readonly description: Maybe<Scalars["String"]>
  readonly flags: Maybe<Scalars["Int"]>
  readonly id: Maybe<Scalars["Int"]>
  readonly language: Maybe<Scalars["Byte"]>
  readonly lastUpdateDateTime: Maybe<Scalars["Long"]>
  readonly logo: Maybe<Scalars["String"]>
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchType>>>
  readonly memberCount: Maybe<Scalars["Byte"]>
  readonly members: Maybe<ReadonlyArray<Maybe<GuildMemberType>>>
  readonly motd: Maybe<Scalars["String"]>
  readonly name: Maybe<Scalars["String"]>
  readonly pastWeeklyPercentile: Maybe<Scalars["Byte"]>
  readonly pastWeeklyRank: Maybe<Scalars["Int"]>
  readonly pattern: Maybe<Scalars["Byte"]>
  readonly points: Maybe<Scalars["Int"]>
  readonly primaryColor: Maybe<Scalars["Byte"]>
  readonly rank: Maybe<Scalars["Byte"]>
  readonly region: Maybe<Scalars["Byte"]>
  readonly requiredRank: Maybe<Scalars["Byte"]>
  readonly secondaryColor: Maybe<Scalars["Byte"]>
  readonly tag: Maybe<Scalars["String"]>
  readonly totalBattlePassLevels: Maybe<Scalars["Int"]>
}

export type GuildTypeMatchesArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type HealDetailType = {
  readonly __typename?: "HealDetailType"
  readonly attacker: Maybe<Scalars["Short"]>
  readonly byAbility: Maybe<Scalars["Short"]>
  readonly byItem: Maybe<Scalars["Short"]>
  readonly target: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
  readonly value: Maybe<Scalars["Int"]>
}

export type HeroAbilityTalentType = {
  readonly __typename?: "HeroAbilityTalentType"
  readonly abilityId: Scalars["Int"]
  readonly bracketBasic: Maybe<RankBracketHeroTimeDetail>
  readonly count: Maybe<Scalars["Long"]>
  readonly heroId: Scalars["Int"]
  readonly position: Maybe<MatchPlayerPositionType>
  readonly time: Maybe<Scalars["Long"]>
  readonly timeAverage: Maybe<Scalars["Decimal"]>
  readonly week: Scalars["Int"]
  readonly wins: Maybe<Scalars["Long"]>
  readonly winsAverage: Maybe<Scalars["Decimal"]>
}

export type HeroAbilityType = {
  readonly __typename?: "HeroAbilityType"
  readonly ability: Maybe<AbilityType>
  readonly abilityId: Maybe<Scalars["Short"]>
  readonly gameVersionId: Maybe<Scalars["Short"]>
  readonly slot: Maybe<Scalars["Byte"]>
}

export type HeroDamageDetailType = {
  readonly __typename?: "HeroDamageDetailType"
  readonly attacker: Maybe<Scalars["Short"]>
  readonly byAbility: Maybe<Scalars["Short"]>
  readonly byItem: Maybe<Scalars["Short"]>
  readonly damageType: Maybe<Damage>
  readonly fromIllusion: Maybe<Scalars["Boolean"]>
  readonly fromNpc: Maybe<Scalars["Short"]>
  readonly isPhysicalAttack: Maybe<Scalars["Boolean"]>
  readonly isSourceMainHero: Maybe<Scalars["Boolean"]>
  readonly isTargetMainHero: Maybe<Scalars["Boolean"]>
  readonly target: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
  readonly toIllusion: Maybe<Scalars["Boolean"]>
  readonly toNpc: Maybe<Scalars["Short"]>
  readonly value: Scalars["Int"]
}

export type HeroDotaPlusLeaderboardRankType = {
  readonly __typename?: "HeroDotaPlusLeaderboardRankType"
  readonly createdDateTime: Maybe<Scalars["Long"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly level: Maybe<Scalars["Byte"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamId: Maybe<Scalars["Long"]>
  readonly totalActions: Maybe<Scalars["Long"]>
}

export type HeroDryadType = {
  readonly __typename?: "HeroDryadType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly matchCountVs: Maybe<Scalars["Long"]>
  readonly matchCountWith: Maybe<Scalars["Long"]>
  readonly vs: Maybe<ReadonlyArray<Maybe<HeroStatsHeroDryadType>>>
  readonly with: Maybe<ReadonlyArray<Maybe<HeroStatsHeroDryadType>>>
}

export type HeroGuideListType = {
  readonly __typename?: "HeroGuideListType"
  /** Guides are auto-generated of games that are successful in a game. */
  readonly guides: Maybe<ReadonlyArray<Maybe<HeroGuideType>>>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly matchCount: Maybe<Scalars["Int"]>
}

export type HeroGuideListTypeGuidesArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type HeroGuideType = {
  readonly __typename?: "HeroGuideType"
  readonly createdDateTime: Maybe<Scalars["Long"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly matchPlayer: Maybe<MatchPlayerType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
}

export type HeroHighPerformanceMatchObjectType = {
  readonly __typename?: "HeroHighPerformanceMatchObjectType"
  readonly endDateTime: Maybe<Scalars["Long"]>
  readonly imp: Scalars["Int"]
  readonly matchId: Maybe<Scalars["Long"]>
}

export type HeroHighPerformancePlayerObjectType = {
  readonly __typename?: "HeroHighPerformancePlayerObjectType"
  readonly endDateTime: Maybe<Scalars["Long"]>
  readonly imp: Scalars["Int"]
  readonly playerName: Scalars["String"]
  readonly steamId: Maybe<Scalars["Long"]>
}

export type HeroHighPerformanceRampageObjectType = {
  readonly __typename?: "HeroHighPerformanceRampageObjectType"
  readonly endDateTime: Maybe<Scalars["Long"]>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly playerName: Scalars["String"]
  readonly steamId: Maybe<Scalars["Long"]>
  readonly time: Scalars["Int"]
}

export type HeroHighPerformanceType = {
  readonly __typename?: "HeroHighPerformanceType"
  readonly bracketBasic: Maybe<RankBracketHeroTimeDetail>
  readonly heroId: Scalars["Int"]
  readonly items: Maybe<HeroPurchasePatternType>
  readonly matches: Maybe<ReadonlyArray<Maybe<HeroHighPerformanceMatchObjectType>>>
  readonly players: Maybe<ReadonlyArray<Maybe<HeroHighPerformancePlayerObjectType>>>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly rampages: Maybe<ReadonlyArray<Maybe<HeroHighPerformanceRampageObjectType>>>
  readonly week: Scalars["Int"]
}

export type HeroItemBootPurchaseObjectType = {
  readonly __typename?: "HeroItemBootPurchaseObjectType"
  readonly activationTime: Maybe<Scalars["Long"]>
  readonly activations: Maybe<Scalars["Long"]>
  readonly activationsAverage: Maybe<Scalars["Decimal"]>
  readonly activationsTimeAverage: Maybe<Scalars["Decimal"]>
  readonly assists: Maybe<Scalars["Long"]>
  readonly assistsAverage: Maybe<Scalars["Decimal"]>
  readonly count: Maybe<Scalars["Long"]>
  readonly deaths: Maybe<Scalars["Long"]>
  readonly deathsAverage: Maybe<Scalars["Decimal"]>
  readonly goldEarned: Maybe<Scalars["Long"]>
  readonly goldEarnedAverage: Maybe<Scalars["Decimal"]>
  readonly instance: Scalars["Int"]
  readonly itemId: Scalars["Int"]
  readonly kills: Maybe<Scalars["Long"]>
  readonly killsAverage: Maybe<Scalars["Decimal"]>
  readonly time: Maybe<Scalars["Long"]>
  readonly timeAverage: Maybe<Scalars["Decimal"]>
  readonly winAverage: Maybe<Scalars["Decimal"]>
  readonly wins: Maybe<Scalars["Long"]>
  readonly xp: Maybe<Scalars["Long"]>
  readonly xpAverage: Maybe<Scalars["Decimal"]>
}

export type HeroItemBootPurchaseType = {
  readonly __typename?: "HeroItemBootPurchaseType"
  readonly bracketBasic: Maybe<RankBracketHeroTimeDetail>
  readonly count: Maybe<Scalars["Long"]>
  readonly events: Maybe<ReadonlyArray<Maybe<HeroItemBootPurchaseObjectType>>>
  readonly heroId: Scalars["Int"]
  readonly position: Maybe<MatchPlayerPositionType>
  readonly week: Scalars["Int"]
}

export type HeroItemPurchaseObjectType = {
  readonly __typename?: "HeroItemPurchaseObjectType"
  readonly count: Maybe<Scalars["Long"]>
  readonly instance: Scalars["Int"]
  readonly itemId: Scalars["Int"]
  readonly time: Maybe<Scalars["Long"]>
  readonly wins: Maybe<Scalars["Long"]>
  readonly winsAverage: Maybe<Scalars["Decimal"]>
}

export type HeroItemPurchaseType = {
  readonly __typename?: "HeroItemPurchaseType"
  readonly bracketBasic: Maybe<RankBracketHeroTimeDetail>
  readonly count: Maybe<Scalars["Long"]>
  readonly events: Maybe<ReadonlyArray<Maybe<HeroItemPurchaseObjectType>>>
  readonly heroId: Scalars["Int"]
  readonly position: Maybe<MatchPlayerPositionType>
  readonly week: Scalars["Int"]
}

export type HeroItemStartingPurchaseObjectType = {
  readonly __typename?: "HeroItemStartingPurchaseObjectType"
  readonly count: Maybe<Scalars["Long"]>
  readonly instance: Scalars["Int"]
  readonly itemId: Scalars["Int"]
  readonly wasGiven: Scalars["Boolean"]
  readonly wins: Maybe<Scalars["Long"]>
  readonly winsAverage: Maybe<Scalars["Decimal"]>
}

export type HeroItemStartingPurchaseType = {
  readonly __typename?: "HeroItemStartingPurchaseType"
  readonly bracketBasic: Maybe<RankBracketHeroTimeDetail>
  readonly count: Maybe<Scalars["Long"]>
  readonly events: Maybe<ReadonlyArray<Maybe<HeroItemStartingPurchaseObjectType>>>
  readonly heroId: Scalars["Int"]
  readonly position: Maybe<MatchPlayerPositionType>
  readonly week: Scalars["Int"]
}

export type HeroLanguageType = {
  readonly __typename?: "HeroLanguageType"
  readonly displayName: Maybe<Scalars["String"]>
  readonly hype: Maybe<Scalars["String"]>
  readonly lore: Maybe<Scalars["String"]>
}

export type HeroMatchupType = {
  readonly __typename?: "HeroMatchupType"
  readonly advantage: Maybe<ReadonlyArray<Maybe<HeroDryadType>>>
  readonly disadvantage: Maybe<ReadonlyArray<Maybe<HeroDryadType>>>
}

export type HeroMetaTrendType = {
  readonly __typename?: "HeroMetaTrendType"
  readonly ban: Maybe<ReadonlyArray<Maybe<Scalars["Long"]>>>
  readonly heroId: Scalars["Int"]
  readonly pick: Maybe<ReadonlyArray<Maybe<Scalars["Long"]>>>
  readonly win: Maybe<ReadonlyArray<Maybe<Scalars["Long"]>>>
}

export type HeroPositionDetailType = {
  readonly __typename?: "HeroPositionDetailType"
  readonly assists: Maybe<Scalars["Decimal"]>
  readonly count: Maybe<Scalars["Long"]>
  readonly cs: Maybe<Scalars["Decimal"]>
  readonly deaths: Maybe<Scalars["Decimal"]>
  readonly dn: Maybe<Scalars["Decimal"]>
  readonly heroDamage: Maybe<Scalars["Decimal"]>
  readonly kills: Maybe<Scalars["Decimal"]>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly towerDamage: Maybe<Scalars["Decimal"]>
  readonly wins: Maybe<Scalars["Decimal"]>
}

export type HeroPositionTimeDetailAverageObjectType = {
  readonly __typename?: "HeroPositionTimeDetailAverageObjectType"
  readonly abilityCasts: Maybe<Scalars["Decimal"]>
  readonly ancients: Maybe<Scalars["Decimal"]>
  readonly apm: Maybe<Scalars["Decimal"]>
  readonly assists: Maybe<Scalars["Decimal"]>
  readonly attackDamage: Maybe<Scalars["Decimal"]>
  readonly buybackCount: Maybe<Scalars["Decimal"]>
  readonly campsStacked: Maybe<Scalars["Decimal"]>
  readonly castDamage: Maybe<Scalars["Decimal"]>
  readonly casts: Maybe<Scalars["Decimal"]>
  readonly comeBackLost: Maybe<Scalars["Decimal"]>
  readonly comeBackWon: Maybe<Scalars["Decimal"]>
  readonly courierKills: Maybe<Scalars["Decimal"]>
  readonly cs: Maybe<Scalars["Decimal"]>
  readonly damage: Maybe<Scalars["Decimal"]>
  readonly damageReceived: Maybe<Scalars["Decimal"]>
  readonly deaths: Maybe<Scalars["Decimal"]>
  readonly disableCount: Maybe<Scalars["Decimal"]>
  readonly disableDuration: Maybe<Scalars["Decimal"]>
  readonly dn: Maybe<Scalars["Decimal"]>
  readonly godLike: Maybe<Scalars["Decimal"]>
  readonly goldFed: Maybe<Scalars["Decimal"]>
  readonly goldLost: Maybe<Scalars["Decimal"]>
  readonly healingAllies: Maybe<Scalars["Decimal"]>
  readonly healingItemAllies: Maybe<Scalars["Decimal"]>
  readonly healingItemSelf: Maybe<Scalars["Decimal"]>
  readonly healingSelf: Maybe<Scalars["Decimal"]>
  readonly heroDamage: Maybe<Scalars["Decimal"]>
  readonly invisibleCount: Maybe<Scalars["Decimal"]>
  readonly kDAAverage: Maybe<Scalars["Decimal"]>
  readonly killContributionAverage: Maybe<Scalars["Decimal"]>
  readonly kills: Maybe<Scalars["Decimal"]>
  readonly level: Maybe<Scalars["Decimal"]>
  readonly magicalDamage: Maybe<Scalars["Decimal"]>
  readonly magicalDamageReceived: Maybe<Scalars["Decimal"]>
  readonly magicalItemDamage: Maybe<Scalars["Decimal"]>
  readonly matchCount: Maybe<Scalars["Long"]>
  readonly mvp: Maybe<Scalars["Decimal"]>
  readonly networth: Maybe<Scalars["Decimal"]>
  readonly neutrals: Maybe<Scalars["Decimal"]>
  readonly physicalDamage: Maybe<Scalars["Decimal"]>
  readonly physicalDamageReceived: Maybe<Scalars["Decimal"]>
  readonly physicalItemDamage: Maybe<Scalars["Decimal"]>
  readonly pureDamage: Maybe<Scalars["Decimal"]>
  readonly pureDamageReceived: Maybe<Scalars["Decimal"]>
  readonly purgeModifiers: Maybe<Scalars["Decimal"]>
  readonly rampage: Maybe<Scalars["Decimal"]>
  readonly remainingMatchCount: Maybe<Scalars["Int"]>
  readonly runeBounty: Maybe<Scalars["Decimal"]>
  readonly runePower: Maybe<Scalars["Decimal"]>
  readonly slowCount: Maybe<Scalars["Decimal"]>
  readonly slowDuration: Maybe<Scalars["Decimal"]>
  readonly stompLost: Maybe<Scalars["Decimal"]>
  readonly stompWon: Maybe<Scalars["Decimal"]>
  readonly stunCount: Maybe<Scalars["Decimal"]>
  readonly stunDuration: Maybe<Scalars["Decimal"]>
  readonly supportGold: Maybe<Scalars["Decimal"]>
  readonly teamKills: Maybe<Scalars["Decimal"]>
  readonly time: Scalars["Int"]
  readonly topCore: Maybe<Scalars["Decimal"]>
  readonly topSupport: Maybe<Scalars["Decimal"]>
  readonly towerDamage: Maybe<Scalars["Decimal"]>
  readonly tripleKill: Maybe<Scalars["Decimal"]>
  readonly ultraKill: Maybe<Scalars["Decimal"]>
  readonly weakenCount: Maybe<Scalars["Decimal"]>
  readonly weakenDuration: Maybe<Scalars["Decimal"]>
  readonly wins: Maybe<Scalars["Decimal"]>
  readonly xp: Maybe<Scalars["Decimal"]>
  readonly xpFed: Maybe<Scalars["Decimal"]>
}

export type HeroPositionTimeDetailAverageType = {
  readonly __typename?: "HeroPositionTimeDetailAverageType"
  readonly bracketBasic: Maybe<RankBracketHeroTimeDetail>
  readonly events: Maybe<ReadonlyArray<Maybe<HeroPositionTimeDetailAverageObjectType>>>
  readonly heroId: Scalars["Short"]
  readonly position: Maybe<MatchPlayerPositionType>
  readonly week: Scalars["Int"]
}

export type HeroPurchasePatternType = {
  readonly __typename?: "HeroPurchasePatternType"
  readonly earlyGame: Maybe<HeroItemPurchaseType>
  readonly lateGame: Maybe<HeroItemPurchaseType>
  readonly midGame: Maybe<HeroItemPurchaseType>
  readonly startingItems: Maybe<HeroItemStartingPurchaseType>
}

export type HeroRatingObjectType = {
  readonly __typename?: "HeroRatingObjectType"
  readonly banRate: Maybe<Scalars["Decimal"]>
  readonly heroId1: Scalars["Int"]
  readonly heroId2: Maybe<Scalars["Int"]>
  readonly heroId3: Maybe<Scalars["Int"]>
  readonly pickRate: Maybe<Scalars["Decimal"]>
  readonly winRate: Maybe<Scalars["Decimal"]>
}

export type HeroRatingType = {
  readonly __typename?: "HeroRatingType"
  readonly dryad: Maybe<ReadonlyArray<Maybe<HeroRatingObjectType>>>
  readonly single: Maybe<ReadonlyArray<Maybe<HeroRatingObjectType>>>
}

export type HeroRoleType = {
  readonly __typename?: "HeroRoleType"
  readonly level: Maybe<Scalars["Short"]>
  readonly roleId: Maybe<Scalars["Short"]>
}

export type HeroStatType = {
  readonly __typename?: "HeroStatType"
  readonly agilityBase: Maybe<Scalars["Float"]>
  readonly agilityGain: Maybe<Scalars["Float"]>
  readonly attackAcquisitionRange: Maybe<Scalars["Float"]>
  readonly attackAnimationPoint: Maybe<Scalars["Float"]>
  readonly attackRange: Maybe<Scalars["Float"]>
  readonly attackRate: Maybe<Scalars["Float"]>
  readonly attackType: Maybe<Scalars["String"]>
  readonly cMEnabled: Maybe<Scalars["Boolean"]>
  readonly complexity: Maybe<Scalars["Byte"]>
  readonly enabled: Maybe<Scalars["Boolean"]>
  readonly heroUnlockOrder: Maybe<Scalars["Float"]>
  readonly hpBarOffset: Maybe<Scalars["Float"]>
  readonly hpRegen: Maybe<Scalars["Float"]>
  readonly intelligenceBase: Maybe<Scalars["Float"]>
  readonly intelligenceGain: Maybe<Scalars["Float"]>
  readonly moveSpeed: Maybe<Scalars["Float"]>
  readonly moveTurnRate: Maybe<Scalars["Float"]>
  readonly mpRegen: Maybe<Scalars["Float"]>
  readonly newPlayerEnabled: Maybe<Scalars["Boolean"]>
  readonly primaryAttribute: Maybe<Scalars["String"]>
  readonly startingArmor: Maybe<Scalars["Float"]>
  readonly startingDamageMax: Maybe<Scalars["Float"]>
  readonly startingDamageMin: Maybe<Scalars["Float"]>
  readonly startingMagicArmor: Maybe<Scalars["Float"]>
  readonly strengthBase: Maybe<Scalars["Float"]>
  readonly strengthGain: Maybe<Scalars["Float"]>
  readonly team: Maybe<Scalars["Boolean"]>
  readonly visionDaytimeRange: Maybe<Scalars["Float"]>
  readonly visionNighttimeRange: Maybe<Scalars["Float"]>
}

export type HeroStatsHeroDryadType = {
  readonly __typename?: "HeroStatsHeroDryadType"
  readonly assists: Maybe<Scalars["Long"]>
  readonly bracketBasic: Maybe<RankBracketHeroTimeDetail>
  readonly count: Maybe<Scalars["Long"]>
  readonly cs: Maybe<Scalars["Long"]>
  readonly deaths: Maybe<Scalars["Long"]>
  readonly dn: Maybe<Scalars["Long"]>
  readonly duration: Maybe<Scalars["Long"]>
  readonly firstBloodTime: Maybe<Scalars["Long"]>
  readonly goldEarned: Maybe<Scalars["Long"]>
  readonly heroDamage: Maybe<Scalars["Long"]>
  readonly heroHealing: Maybe<Scalars["Long"]>
  readonly heroId1: Maybe<Scalars["Short"]>
  readonly heroId2: Maybe<Scalars["Short"]>
  readonly kills: Maybe<Scalars["Long"]>
  readonly level: Maybe<Scalars["Long"]>
  readonly networth: Maybe<Scalars["Long"]>
  readonly synergy: Maybe<Scalars["Decimal"]>
  readonly towerDamage: Maybe<Scalars["Long"]>
  readonly week: Maybe<Scalars["Int"]>
  readonly winRateHeroId1: Maybe<Scalars["Decimal"]>
  readonly winRateHeroId2: Maybe<Scalars["Decimal"]>
  readonly wins: Maybe<Scalars["Long"]>
  readonly winsAverage: Maybe<Scalars["Decimal"]>
  readonly xp: Maybe<Scalars["Long"]>
}

export type HeroStatsQuery = {
  readonly __typename?: "HeroStatsQuery"
  readonly guide: Maybe<ReadonlyArray<Maybe<HeroGuideListType>>>
  /** This is used on the Hero page to show the comparison of skill with the selected hero with other heroes.  It includes our Synergy and our Advantage formulas to ensure that a hero with a high win rate isn't simply just on the top of all the fields. */
  readonly heroVsHeroMatchup: Maybe<HeroMatchupType>
  /** This call is used in Hero Of the Day.  It shows recent Rampages, High Performance and Good Players on the selected hero. */
  readonly highPerformance: Maybe<HeroHighPerformanceType>
  /** The purchase Item Components for a Hero's Boots.  Tracks things like activations or uses throughout the game. */
  readonly itemBootPurchase: Maybe<HeroItemBootPurchaseType>
  /** Returns the items purchased for the selected hero. Adjusting the time adjusts the purchase amount. Shows win rate by item timings. */
  readonly itemFullPurchase: Maybe<HeroItemPurchaseType>
  /** This snapshots all items in the inventory of a hero at -00:30.   It tracks if an item was given or purchased. */
  readonly itemStartingPurchase: Maybe<HeroItemStartingPurchaseType>
  /** Returns back a list of the hero matchups, showing how that hero's win rate is affected with or against other heroes. */
  readonly matchUp: Maybe<ReadonlyArray<Maybe<HeroDryadType>>>
  /** Used on the Heroes page, for determining popular hero trends. */
  readonly metaTrend: Maybe<ReadonlyArray<Maybe<HeroMetaTrendType>>>
  /** Hero Data and statistics listed by what lane the hero plays in. */
  readonly position: Maybe<ReadonlyArray<Maybe<HeroPositionDetailType>>>
  /** Used in STRATZ Hero Page. Includes Starting items and full items based in groupings of 0-14 minutes, 15-34 minutes and 35+ */
  readonly purchasePattern: Maybe<HeroPurchasePatternType>
  /** Used on the Heroes page, includes a small subset of Single Heroes, Dryads and Triads.  Includes Win Rate, Pick Rate, Ban Rate. */
  readonly ratings: Maybe<HeroRatingType>
  /** Detailed output of data per minute for each hero. */
  readonly stats: Maybe<ReadonlyArray<Maybe<HeroPositionTimeDetailAverageType>>>
  /** This is used on the Hero page to show the comparison of all Hero Talents with the selected hero. */
  readonly talent: Maybe<ReadonlyArray<Maybe<HeroAbilityTalentType>>>
  /** Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id. */
  readonly winDay: Maybe<ReadonlyArray<Maybe<HeroWinDayType>>>
  /** Returns the data by game version showing the amount of matches and the amount of wins by hero id. */
  readonly winGameVersion: Maybe<ReadonlyArray<Maybe<HeroWinGameVersionType>>>
  /** Returns the last 12 hours by hour showing the amount of matches and the amount of wins by hero id. */
  readonly winHour: Maybe<ReadonlyArray<Maybe<HeroWinHourType>>>
  /** Returns the data by month showing the amount of matches and the amount of wins by hero id. */
  readonly winMonth: Maybe<ReadonlyArray<Maybe<HeroWinMonthType>>>
  /** Returns the last 12 weeks by week showing the amount of matches and the amount of wins by hero id. */
  readonly winWeek: Maybe<ReadonlyArray<Maybe<HeroWinWeekType>>>
}

export type HeroStatsQueryGuideArgs = {
  againstHeroId: InputMaybe<Scalars["Short"]>
  heroId: InputMaybe<Scalars["Short"]>
  isPro: InputMaybe<Scalars["Boolean"]>
  positionId: InputMaybe<MatchPlayerPositionType>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
  withHeroId: InputMaybe<Scalars["Short"]>
}

export type HeroStatsQueryHeroVsHeroMatchupArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  matchLimit: InputMaybe<Scalars["Int"]>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryHighPerformanceArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryItemBootPurchaseArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryItemFullPurchaseArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  matchLimit: InputMaybe<Scalars["Int"]>
  maxTime: InputMaybe<Scalars["Int"]>
  minTime: InputMaybe<Scalars["Int"]>
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryItemStartingPurchaseArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryMatchUpArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  matchLimit: InputMaybe<Scalars["Int"]>
  orderBy: InputMaybe<Scalars["Byte"]>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryMetaTrendArgs = {
  day: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryPositionArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  maxTime: InputMaybe<Scalars["Int"]>
  minTime: InputMaybe<Scalars["Int"]>
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryPurchasePatternArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryRatingsArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroIds: Scalars["Short"]
  positionIds: InputMaybe<Scalars["Byte"]>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryStatsArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  groupByBracket: InputMaybe<Scalars["Boolean"]>
  groupByPosition: InputMaybe<Scalars["Boolean"]>
  groupByTime: InputMaybe<Scalars["Boolean"]>
  heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  maxTime: InputMaybe<Scalars["Int"]>
  minTime: InputMaybe<Scalars["Int"]>
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryTalentArgs = {
  bracketBasicIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracketHeroTimeDetail>>>
  heroId: Scalars["Short"]
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  week: InputMaybe<Scalars["Long"]>
}

export type HeroStatsQueryWinDayArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  groupBy: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  take: InputMaybe<Scalars["Int"]>
}

export type HeroStatsQueryWinGameVersionArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  groupBy: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type HeroStatsQueryWinHourArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  groupBy: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  take: InputMaybe<Scalars["Int"]>
}

export type HeroStatsQueryWinMonthArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  groupBy: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type HeroStatsQueryWinWeekArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  groupBy: InputMaybe<FilterHeroWinRequestGroupBy>
  heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  take: InputMaybe<Scalars["Int"]>
}

export type HeroTalentType = {
  readonly __typename?: "HeroTalentType"
  readonly abilityId: Maybe<Scalars["Short"]>
  readonly slot: Maybe<Scalars["Byte"]>
}

export type HeroType = {
  readonly __typename?: "HeroType"
  readonly abilities: Maybe<ReadonlyArray<Maybe<HeroAbilityType>>>
  readonly aliases: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly displayName: Maybe<Scalars["String"]>
  readonly gameVersionId: Maybe<Scalars["Short"]>
  readonly id: Maybe<Scalars["Short"]>
  readonly language: Maybe<HeroLanguageType>
  readonly name: Maybe<Scalars["String"]>
  readonly roles: Maybe<ReadonlyArray<Maybe<HeroRoleType>>>
  readonly shortName: Maybe<Scalars["String"]>
  readonly stats: Maybe<HeroStatType>
  readonly talents: Maybe<ReadonlyArray<Maybe<HeroTalentType>>>
}

export type HeroWinDayType = {
  readonly __typename?: "HeroWinDayType"
  readonly day: Scalars["Long"]
  readonly heroId: Scalars["Short"]
  readonly matchCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
}

export type HeroWinGameVersionType = {
  readonly __typename?: "HeroWinGameVersionType"
  readonly durationMinute: Scalars["Byte"]
  readonly gameVersionId: Scalars["Short"]
  readonly heroId: Scalars["Short"]
  readonly matchCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
}

export type HeroWinHourType = {
  readonly __typename?: "HeroWinHourType"
  readonly heroId: Scalars["Short"]
  readonly hour: Scalars["Long"]
  readonly matchCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
}

export type HeroWinMonthType = {
  readonly __typename?: "HeroWinMonthType"
  readonly durationMinute: Scalars["Byte"]
  readonly heroId: Scalars["Short"]
  readonly matchCount: Scalars["Int"]
  readonly month: Scalars["Long"]
  readonly winCount: Scalars["Int"]
}

export type HeroWinWeekType = {
  readonly __typename?: "HeroWinWeekType"
  readonly durationMinute: Scalars["Byte"]
  readonly heroId: Scalars["Short"]
  readonly matchCount: Scalars["Int"]
  readonly week: Scalars["Long"]
  readonly winCount: Scalars["Int"]
}

export type HomepageHeroDryadType = {
  readonly __typename?: "HomepageHeroDryadType"
  readonly bracketBasic: Maybe<RankBracketHeroTimeDetail>
  readonly comparisonHeroBaseWinRate: Maybe<Scalars["Decimal"]>
  readonly comparisonHeroId: Maybe<Scalars["Short"]>
  readonly mainHeroId: Maybe<Scalars["Short"]>
  readonly matchCount: Maybe<Scalars["Long"]>
  readonly synergy: Maybe<Scalars["Decimal"]>
  readonly winCount: Maybe<Scalars["Long"]>
  readonly winsAverage: Maybe<Scalars["Decimal"]>
}

export type HomepageHeroSynergyType = {
  readonly __typename?: "HomepageHeroSynergyType"
  readonly heroDryads: Maybe<ReadonlyArray<Maybe<HomepageHeroDryadType>>>
  readonly mainHeroBaseWinRate: Maybe<Scalars["Decimal"]>
  readonly mainHeroId: Maybe<Scalars["Short"]>
}

export type ImpGeneratorMatchPlayerType = {
  readonly __typename?: "ImpGeneratorMatchPlayerType"
  readonly events: Maybe<
    ReadonlyArray<Maybe<ReadonlyArray<Maybe<ImpGeneratorPlayerEventType>>>>
  >
  readonly impValues: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>>>
  readonly winChance: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly winRateByPlayerMinuteValues: Maybe<
    ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>>
  >
}

export type ImpGeneratorPlayerEventRequestType = {
  readonly assists: Scalars["UShort"]
  readonly cs: Scalars["UShort"]
  readonly damageReceived: Scalars["Int"]
  readonly deaths: Scalars["UShort"]
  readonly dn: Scalars["UShort"]
  readonly healingAllies: Scalars["Int"]
  readonly kills: Scalars["UShort"]
  readonly level: Scalars["Byte"]
  readonly magicalDamage: Scalars["Int"]
  readonly neutrals: Scalars["Int"]
  readonly physicalDamage: Scalars["Int"]
  readonly pureDamage: Scalars["Int"]
  readonly runePower: Scalars["Int"]
  readonly time: Scalars["Byte"]
}

export type ImpGeneratorPlayerEventType = {
  readonly __typename?: "ImpGeneratorPlayerEventType"
  readonly assists: Maybe<Scalars["UShort"]>
  readonly cs: Maybe<Scalars["UShort"]>
  readonly damageReceived: Maybe<Scalars["Int"]>
  readonly deaths: Maybe<Scalars["UShort"]>
  readonly dn: Maybe<Scalars["UShort"]>
  readonly healingAllies: Maybe<Scalars["Int"]>
  readonly kills: Maybe<Scalars["UShort"]>
  readonly level: Maybe<Scalars["Byte"]>
  readonly magicalDamage: Maybe<Scalars["Int"]>
  readonly neutrals: Maybe<Scalars["Int"]>
  readonly physicalDamage: Maybe<Scalars["Int"]>
  readonly pureDamage: Maybe<Scalars["Int"]>
  readonly runePower: Maybe<Scalars["Int"]>
  readonly time: Maybe<Scalars["Byte"]>
}

export type ImpGeneratorPlayerRequestType = {
  readonly bracket: RankBracket
  readonly events: ReadonlyArray<InputMaybe<ImpGeneratorPlayerEventRequestType>>
  readonly heroId: Scalars["Short"]
  readonly position: MatchPlayerPositionType
}

export type ImpGeneratorPlayerType = {
  readonly __typename?: "ImpGeneratorPlayerType"
  readonly events: Maybe<ReadonlyArray<Maybe<ImpGeneratorPlayerEventType>>>
  readonly impValues: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>>>
  readonly winChance: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly winRateByPlayerMinuteValues: Maybe<
    ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>>
  >
}

export type ImpGeneratorRequestType = {
  readonly bans: ReadonlyArray<InputMaybe<Scalars["Short"]>>
  readonly isTurbo: Scalars["Boolean"]
  readonly players: ReadonlyArray<InputMaybe<ImpGeneratorPlayerRequestType>>
}

export type ImpQuery = {
  readonly __typename?: "ImpQuery"
  /** Returns details about all players in a specific match and details regarding Imp */
  readonly matchGenerator: Maybe<ImpGeneratorMatchPlayerType>
  /** Returns details about a specific player in a game with certains events. */
  readonly playerGenerator: Maybe<ImpGeneratorPlayerType>
}

export type ImpQueryMatchGeneratorArgs = {
  matchId: Scalars["Long"]
}

export type ImpQueryPlayerGeneratorArgs = {
  request: ImpGeneratorRequestType
}

export type ImportPickBanType = {
  readonly heroId: InputMaybe<Scalars["Short"]>
  readonly isPick: Scalars["Boolean"]
  readonly isRadiant: InputMaybe<Scalars["Boolean"]>
  readonly order: InputMaybe<Scalars["Byte"]>
  readonly playerSlot: InputMaybe<Scalars["Byte"]>
  readonly time: InputMaybe<Scalars["Byte"]>
  readonly wasBannedSuccessfully: InputMaybe<Scalars["Boolean"]>
}

export type InventoryObjectType = {
  readonly __typename?: "InventoryObjectType"
  readonly charges: Maybe<Scalars["Int"]>
  readonly itemId: Maybe<Scalars["Short"]>
  readonly secondaryCharges: Maybe<Scalars["Int"]>
}

export type InventoryType = {
  readonly __typename?: "InventoryType"
  readonly backPack0: Maybe<InventoryObjectType>
  readonly backPack1: Maybe<InventoryObjectType>
  readonly backPack2: Maybe<InventoryObjectType>
  readonly item0: Maybe<InventoryObjectType>
  readonly item1: Maybe<InventoryObjectType>
  readonly item2: Maybe<InventoryObjectType>
  readonly item3: Maybe<InventoryObjectType>
  readonly item4: Maybe<InventoryObjectType>
  readonly item5: Maybe<InventoryObjectType>
  readonly neutral0: Maybe<InventoryObjectType>
  readonly teleport0: Maybe<InventoryObjectType>
  readonly time: Scalars["Int"]
}

export type ItemAttributeType = {
  readonly __typename?: "ItemAttributeType"
  readonly name: Maybe<Scalars["String"]>
  readonly value: Maybe<Scalars["String"]>
}

export type ItemComponentType = {
  readonly __typename?: "ItemComponentType"
  readonly componentId: Maybe<Scalars["Short"]>
  readonly index: Maybe<Scalars["Byte"]>
}

export type ItemLanguageType = {
  readonly __typename?: "ItemLanguageType"
  readonly attributes: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly description: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly displayName: Maybe<Scalars["String"]>
  readonly lore: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly notes: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
}

export type ItemPurchaseType = {
  readonly __typename?: "ItemPurchaseType"
  readonly itemId: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
}

export type ItemStatType = {
  readonly __typename?: "ItemStatType"
  readonly aliases: Maybe<Scalars["String"]>
  readonly behavior: Maybe<Scalars["Long"]>
  readonly castPoint: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly castRange: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly channelTime: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly cooldown: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly cost: Maybe<Scalars["Int"]>
  readonly fightRecapLevel: Maybe<Scalars["Byte"]>
  readonly initialCharges: Maybe<Scalars["Short"]>
  readonly initialStock: Maybe<Scalars["Short"]>
  readonly initialStockTime: Maybe<Scalars["Short"]>
  readonly isAlertable: Maybe<Scalars["Boolean"]>
  readonly isDisplayCharges: Maybe<Scalars["Boolean"]>
  readonly isDroppable: Maybe<Scalars["Boolean"]>
  readonly isHideCharges: Maybe<Scalars["Boolean"]>
  readonly isPermanent: Maybe<Scalars["Boolean"]>
  readonly isPurchasable: Maybe<Scalars["Boolean"]>
  readonly isRecipe: Maybe<Scalars["Boolean"]>
  readonly isRequiresCharges: Maybe<Scalars["Boolean"]>
  readonly isSellable: Maybe<Scalars["Boolean"]>
  readonly isSideShop: Maybe<Scalars["Boolean"]>
  readonly isStackable: Maybe<Scalars["Boolean"]>
  readonly isSupport: Maybe<Scalars["Boolean"]>
  readonly isTempestDoubleClonable: Maybe<Scalars["Boolean"]>
  readonly itemResult: Maybe<Scalars["Short"]>
  readonly manaCost: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly needsComponents: Maybe<Scalars["Boolean"]>
  readonly quality: Maybe<Scalars["String"]>
  readonly sharedCooldown: Maybe<Scalars["String"]>
  readonly shopTags: Maybe<Scalars["String"]>
  readonly stockMax: Maybe<Scalars["Short"]>
  readonly stockTime: Maybe<Scalars["Int"]>
  readonly unitTargetFlags: Maybe<Scalars["Long"]>
  readonly unitTargetTeam: Maybe<Scalars["Long"]>
  readonly unitTargetType: Maybe<Scalars["Long"]>
  readonly upgradeItem: Maybe<Scalars["Short"]>
  readonly upgradeRecipe: Maybe<Scalars["Short"]>
}

export type ItemType = {
  readonly __typename?: "ItemType"
  readonly attributes: Maybe<ReadonlyArray<Maybe<ItemAttributeType>>>
  readonly components: Maybe<ReadonlyArray<Maybe<ItemComponentType>>>
  readonly displayName: Maybe<Scalars["String"]>
  readonly id: Maybe<Scalars["Short"]>
  readonly image: Maybe<Scalars["String"]>
  readonly isSupportFullItem: Maybe<Scalars["Boolean"]>
  readonly language: Maybe<ItemLanguageType>
  readonly name: Maybe<Scalars["String"]>
  readonly shortName: Maybe<Scalars["String"]>
  readonly stat: Maybe<ItemStatType>
}

export type ItemUsedEventType = {
  readonly __typename?: "ItemUsedEventType"
  readonly attacker: Maybe<Scalars["Short"]>
  readonly itemId: Maybe<Scalars["Short"]>
  readonly target: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
}

export type KillDetailType = {
  readonly __typename?: "KillDetailType"
  readonly assist: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly attacker: Maybe<Scalars["Short"]>
  readonly byAbility: Maybe<Scalars["Short"]>
  readonly byItem: Maybe<Scalars["Short"]>
  readonly gold: Maybe<Scalars["Int"]>
  readonly isFromIllusion: Maybe<Scalars["Boolean"]>
  readonly isGank: Maybe<Scalars["Boolean"]>
  readonly isInvisible: Maybe<Scalars["Boolean"]>
  readonly isRuneEffected: Maybe<Scalars["Boolean"]>
  readonly isSmoke: Maybe<Scalars["Boolean"]>
  readonly isSolo: Maybe<Scalars["Boolean"]>
  readonly isTpRecently: Maybe<Scalars["Boolean"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly target: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
  readonly xp: Maybe<Scalars["Int"]>
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
  readonly __typename?: "LanguageType"
  readonly id: Scalars["Byte"]
  readonly languageCode: Maybe<Scalars["String"]>
  readonly languageName: Maybe<Scalars["String"]>
}

export type LastHitDetailType = {
  readonly __typename?: "LastHitDetailType"
  readonly attacker: Maybe<Scalars["Short"]>
  readonly byAbility: Maybe<Scalars["Short"]>
  readonly byItem: Maybe<Scalars["Short"]>
  readonly gold: Maybe<Scalars["Int"]>
  readonly isAncient: Maybe<Scalars["Boolean"]>
  readonly isCreep: Maybe<Scalars["Boolean"]>
  readonly isFromIllusion: Maybe<Scalars["Boolean"]>
  readonly isNeutral: Maybe<Scalars["Boolean"]>
  readonly mapLocation: Maybe<MapLocationEnums>
  readonly npcId: Maybe<Scalars["Short"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
  readonly xp: Maybe<Scalars["Int"]>
}

export enum LeaderboardDivision {
  Americas = "AMERICAS",
  China = "CHINA",
  Europe = "EUROPE",
  SeAsia = "SE_ASIA",
}

export type LeaderboardQuery = {
  readonly __typename?: "LeaderboardQuery"
  /** Gets the current leaderboard for Battle Pass levels. */
  readonly battlePass: Maybe<PlayerBattlePassResponseType>
  /** Gets the current leaderboard for all coaches by level. */
  readonly coaching: Maybe<PlayerCoachingLeaderboardResponseType>
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  readonly dotaPlus: Maybe<PlayerHeroDotaPlusLeaderboardRankResponseType>
  /** Gets the top player of DotaPlus order by Level and Time Achived. */
  readonly dotaPlusTopLevels: Maybe<ReadonlyArray<Maybe<HeroDotaPlusLeaderboardRankType>>>
  /** Show amount of active and expired DotaPlus users by Week */
  readonly dotaPlusWeek: Maybe<ReadonlyArray<Maybe<DotaPlusWeekType>>>
  /** Gets the current leaderboard for all guilds by points. */
  readonly guild: Maybe<ReadonlyArray<Maybe<GuildType>>>
  /** Gets the current leaderboard for all players by a specific Hero, order by IMP. */
  readonly hero: Maybe<ReadonlyArray<Maybe<PlayerLeaderBoardByHeroType>>>
  /** Returns the list of the current season leaderboard. */
  readonly season: Maybe<
    ReadonlyArray<Maybe<SteamAccountSeasonActiveLeaderboardRankType>>
  >
}

export type LeaderboardQueryBattlePassArgs = {
  eventId: InputMaybe<Scalars["Byte"]>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type LeaderboardQueryCoachingArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type LeaderboardQueryDotaPlusArgs = {
  heroId: InputMaybe<Scalars["Short"]>
  level: InputMaybe<Scalars["Byte"]>
  orderBy: InputMaybe<FilterLeaderboardOrder>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type LeaderboardQueryGuildArgs = {
  request: InputMaybe<FilterLeaderboardGuildRequestType>
}

export type LeaderboardQueryHeroArgs = {
  request: InputMaybe<FilterLeaderboardHeroRequestType>
}

export type LeaderboardQuerySeasonArgs = {
  request: InputMaybe<FilterSeasonLeaderboardRequestType>
}

export type LeagueBattlePassType = {
  readonly __typename?: "LeagueBattlePassType"
  readonly average: Maybe<Scalars["Int"]>
  readonly count: Maybe<Scalars["Int"]>
}

export type LeagueDpcPositionStatObjectType = {
  readonly __typename?: "LeagueDpcPositionStatObjectType"
  readonly avgAssists: Maybe<Scalars["Float"]>
  readonly avgDeaths: Maybe<Scalars["Float"]>
  readonly avgKills: Maybe<Scalars["Float"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly position: Maybe<MatchPlayerPositionType>
}

export type LeagueMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of stage type ids to include in this query, excluding all results that do not include one of these stage types. */
  readonly leagueStageTypeIds: InputMaybe<ReadonlyArray<InputMaybe<LeagueStage>>>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  readonly skip: Scalars["Int"]
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  readonly steamAccountId: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  readonly take: Scalars["Int"]
  /** A team id to include in this query, excluding all results that do not have this team id. */
  readonly teamId: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type LeagueMetaDetailType = {
  readonly __typename?: "LeagueMetaDetailType"
  readonly banCount: Maybe<Scalars["Int"]>
  readonly banRate: Maybe<Scalars["Decimal"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly lossCount: Maybe<Scalars["Int"]>
  readonly pickCount: Maybe<Scalars["Int"]>
  readonly pickRate: Maybe<Scalars["Decimal"]>
  readonly winCount: Maybe<Scalars["Int"]>
  readonly winRate: Maybe<Scalars["Decimal"]>
}

export type LeagueMetaType = {
  readonly __typename?: "LeagueMetaType"
  readonly bestRecord: Maybe<LeagueMetaDetailType>
  readonly league: Maybe<LeagueType>
  readonly leagueId: Maybe<Scalars["Int"]>
  readonly missingMatchCount: Maybe<Scalars["Int"]>
  readonly mostBanned: Maybe<LeagueMetaDetailType>
  readonly mostPicked: Maybe<LeagueMetaDetailType>
  readonly totalMatchCount: Maybe<Scalars["Int"]>
}

export enum LeagueNodeDefaultGroupEnum {
  BestOfFive = "BEST_OF_FIVE",
  BestOfOne = "BEST_OF_ONE",
  BestOfThree = "BEST_OF_THREE",
  BestOfTwo = "BEST_OF_TWO",
  Invalid = "INVALID",
}

export type LeagueNodeGroupType = {
  readonly __typename?: "LeagueNodeGroupType"
  readonly advancingNodeGroupId: Maybe<Scalars["Short"]>
  readonly advancingTeamCount: Maybe<Scalars["Byte"]>
  readonly defaultNodeType: Maybe<LeagueNodeDefaultGroupEnum>
  readonly eliminationDPCPoints: Maybe<Scalars["Int"]>
  readonly endDate: Maybe<Scalars["Long"]>
  readonly id: Maybe<Scalars["Short"]>
  readonly isCompleted: Maybe<Scalars["Boolean"]>
  readonly isFinalGroup: Maybe<Scalars["Boolean"]>
  readonly isTieBreaker: Maybe<Scalars["Boolean"]>
  readonly maxRounds: Maybe<Scalars["Byte"]>
  readonly name: Maybe<Scalars["String"]>
  readonly nodeGroupType: Maybe<LeagueNodeGroupTypeEnum>
  readonly nodes: Maybe<ReadonlyArray<Maybe<LeagueNodeType>>>
  readonly parentNodeGroupId: Maybe<Scalars["Short"]>
  readonly phase: Maybe<Scalars["Byte"]>
  readonly region: Maybe<Scalars["Byte"]>
  readonly round: Maybe<Scalars["Byte"]>
  readonly secondaryAdvancingNodeGroupId: Maybe<Scalars["Short"]>
  readonly secondaryAdvancingTeamCount: Maybe<Scalars["Byte"]>
  readonly startDate: Maybe<Scalars["Long"]>
  readonly teamCount: Maybe<Scalars["Byte"]>
  readonly tertiaryAdvancingNodeGroupId: Maybe<Scalars["Short"]>
  readonly tertiaryAdvancingTeamCount: Maybe<Scalars["Byte"]>
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
  readonly __typename?: "LeagueNodeType"
  readonly actualTime: Maybe<Scalars["Long"]>
  readonly hasStarted: Maybe<Scalars["Boolean"]>
  readonly id: Maybe<Scalars["Short"]>
  readonly isCompleted: Maybe<Scalars["Boolean"]>
  readonly losingNodeId: Maybe<Scalars["Short"]>
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchType>>>
  readonly name: Maybe<Scalars["String"]>
  readonly nodeGroupId: Maybe<Scalars["Short"]>
  readonly nodeType: Maybe<LeagueNodeDefaultGroupEnum>
  readonly scheduledTime: Maybe<Scalars["Long"]>
  readonly seriesId: Maybe<Scalars["Long"]>
  readonly streamIds: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly streams: Maybe<ReadonlyArray<Maybe<LeagueStreamType>>>
  readonly teamOne: Maybe<TeamType>
  readonly teamOneId: Maybe<Scalars["Int"]>
  readonly teamOneWins: Maybe<Scalars["Byte"]>
  readonly teamTwo: Maybe<TeamType>
  readonly teamTwoId: Maybe<Scalars["Int"]>
  readonly teamTwoWins: Maybe<Scalars["Byte"]>
  readonly winningNodeId: Maybe<Scalars["Short"]>
}

export type LeaguePrizePoolPercentageType = {
  readonly __typename?: "LeaguePrizePoolPercentageType"
  readonly index: Maybe<Scalars["Byte"]>
  readonly leagueId: Maybe<Scalars["Int"]>
  readonly percentage: Maybe<Scalars["Int"]>
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
  readonly __typename?: "LeagueRegisteredPlayerType"
  readonly league: Maybe<LeagueType>
  readonly leagueId: Maybe<Scalars["Int"]>
  readonly radiantTeam: Maybe<TeamType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly teamId: Maybe<Scalars["Int"]>
}

export type LeagueRequestType = {
  /** Determine to End value of finding a League Between two specific datetimes. */
  readonly betweenEndDateTime: InputMaybe<Scalars["Long"]>
  /** Determine to Start value of finding a League Between two specific datetimes. */
  readonly betweenStartDateTime: InputMaybe<Scalars["Long"]>
  /** If a league is set to end before this time. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** Whether a league has live matches or not, represented in a boolean. */
  readonly hasLiveMatches: InputMaybe<Scalars["Boolean"]>
  /** Whether a league has started or not, represented in a boolean. */
  readonly isFutureLeague: InputMaybe<Scalars["Boolean"]>
  /** Whether a league has ended or not, represented in a boolean. */
  readonly leagueEnded: InputMaybe<Scalars["Boolean"]>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  readonly leagueIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The id to order the results by in this query. */
  readonly orderBy: InputMaybe<FilterOrderBy>
  /** Whether an image is required or not, represented in a boolean. */
  readonly requireImage: InputMaybe<Scalars["Boolean"]>
  /** Whether a prize pool is required or not, represented in a boolean. */
  readonly requirePrizePool: InputMaybe<Scalars["Boolean"]>
  /** Whether a start and end date is required or not, represented in a boolean. */
  readonly requireStartAndEndDates: InputMaybe<Scalars["Boolean"]>
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** If a league is set to start after this time. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
  /** An array of tier ids to include in this query, excluding all results that do not include one of these tiers. */
  readonly tiers: InputMaybe<ReadonlyArray<InputMaybe<LeagueTier>>>
}

export enum LeagueStage {
  ChampionsQualifers = "CHAMPIONS_QUALIFERS",
  ClosedQualifers = "CLOSED_QUALIFERS",
  GroupStage = "GROUP_STAGE",
  MainEvent = "MAIN_EVENT",
  OpenQualifers = "OPEN_QUALIFERS",
}

export type LeagueStatType = {
  readonly __typename?: "LeagueStatType"
  readonly averageMatchDurationSeconds: Maybe<Scalars["Int"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly radiantWinMatchCount: Maybe<Scalars["Int"]>
}

export type LeagueStreamType = {
  readonly __typename?: "LeagueStreamType"
  readonly broadcastProvider: Maybe<Scalars["Byte"]>
  readonly id: Maybe<Scalars["Int"]>
  readonly languageId: Maybe<Language>
  readonly name: Maybe<Scalars["String"]>
  readonly streamUrl: Maybe<Scalars["String"]>
  readonly vodUrl: Maybe<Scalars["String"]>
}

export type LeagueTableHeroLanesObjectType = {
  readonly __typename?: "LeagueTableHeroLanesObjectType"
  readonly id: Maybe<Scalars["Byte"]>
  readonly matchCount: Scalars["Int"]
  readonly matchWins: Scalars["Int"]
}

export type LeagueTableHeroOverviewType = {
  readonly __typename?: "LeagueTableHeroOverviewType"
  readonly banCount: Scalars["Int"]
  readonly banPhaseOne: Scalars["Int"]
  readonly banPhaseThree: Scalars["Int"]
  readonly banPhaseTwo: Scalars["Int"]
  readonly matchCount: Scalars["Int"]
  readonly matchWins: Scalars["Int"]
  readonly pickPhaseOne: Scalars["Int"]
  readonly pickPhaseThree: Scalars["Int"]
  readonly pickPhaseTwo: Scalars["Int"]
}

export type LeagueTableHeroStatsType = {
  readonly __typename?: "LeagueTableHeroStatsType"
  readonly assists: Scalars["Float"]
  readonly cs: Scalars["Float"]
  readonly deaths: Scalars["Float"]
  readonly gpm: Scalars["Float"]
  readonly heal: Scalars["Float"]
  readonly heroDamage: Scalars["Float"]
  readonly killContribution: Scalars["Float"]
  readonly kills: Scalars["Float"]
  readonly towerDamage: Scalars["Float"]
  readonly xpm: Scalars["Float"]
}

export type LeagueTableHeroType = {
  readonly __typename?: "LeagueTableHeroType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly heroes: Maybe<ReadonlyArray<Maybe<LeagueTableHeroStatsType>>>
  readonly lanes: Maybe<ReadonlyArray<Maybe<LeagueTableHeroLanesObjectType>>>
  readonly overview: Maybe<LeagueTableHeroOverviewType>
  readonly stats: Maybe<LeagueTableHeroStatsType>
}

export type LeagueTablePlayerHeroesObjectType = {
  readonly __typename?: "LeagueTablePlayerHeroesObjectType"
  readonly heroId: Scalars["Int"]
  readonly imp: Scalars["Int"]
  readonly matchCount: Scalars["Int"]
  readonly matchWins: Scalars["Int"]
}

export type LeagueTablePlayerLanesObjectType = {
  readonly __typename?: "LeagueTablePlayerLanesObjectType"
  readonly id: Maybe<Scalars["Byte"]>
  readonly matchCount: Scalars["Int"]
  readonly matchWins: Scalars["Int"]
}

export type LeagueTablePlayerOverviewType = {
  readonly __typename?: "LeagueTablePlayerOverviewType"
  readonly earnings: Maybe<Scalars["Float"]>
  readonly imp: Scalars["Int"]
  readonly matchCount: Scalars["Int"]
  readonly matchWins: Scalars["Int"]
  readonly points: Maybe<Scalars["Float"]>
  readonly seriesCount: Scalars["Int"]
  readonly seriesWins: Scalars["Int"]
}

export type LeagueTablePlayerStatsType = {
  readonly __typename?: "LeagueTablePlayerStatsType"
  readonly assists: Scalars["Float"]
  readonly cs: Scalars["Float"]
  readonly deaths: Scalars["Float"]
  readonly gpm: Scalars["Float"]
  readonly heal: Scalars["Float"]
  readonly heroDamage: Scalars["Float"]
  readonly killContribution: Scalars["Float"]
  readonly kills: Scalars["Float"]
  readonly towerDamage: Scalars["Float"]
  readonly xpm: Scalars["Float"]
}

export type LeagueTablePlayerType = {
  readonly __typename?: "LeagueTablePlayerType"
  readonly heroes: Maybe<ReadonlyArray<Maybe<LeagueTablePlayerHeroesObjectType>>>
  readonly lanes: Maybe<ReadonlyArray<Maybe<LeagueTablePlayerLanesObjectType>>>
  readonly overview: Maybe<LeagueTablePlayerOverviewType>
  readonly stats: Maybe<LeagueTablePlayerStatsType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
}

export type LeagueTableTeamHeroesObjectType = {
  readonly __typename?: "LeagueTableTeamHeroesObjectType"
  readonly banCount: Maybe<Scalars["Int"]>
  readonly heroId: Scalars["Int"]
  readonly imp: Maybe<Scalars["Decimal"]>
  readonly matchCount: Scalars["Int"]
  readonly matchWins: Scalars["Int"]
}

export type LeagueTableTeamLanesObjectType = {
  readonly __typename?: "LeagueTableTeamLanesObjectType"
  readonly id: Maybe<Scalars["Byte"]>
  readonly matchCount: Scalars["Int"]
  readonly matchWins: Scalars["Int"]
}

export type LeagueTableTeamOverviewType = {
  readonly __typename?: "LeagueTableTeamOverviewType"
  readonly earnings: Maybe<Scalars["Float"]>
  readonly matchCount: Scalars["Int"]
  readonly matchWins: Scalars["Int"]
  readonly points: Maybe<Scalars["Float"]>
  readonly seriesCount: Scalars["Int"]
  readonly seriesDraws: Scalars["Int"]
  readonly seriesWins: Scalars["Int"]
  readonly tmp: Maybe<Scalars["Float"]>
}

export type LeagueTableTeamStatsType = {
  readonly __typename?: "LeagueTableTeamStatsType"
  readonly assists: Scalars["Float"]
  readonly cs: Scalars["Float"]
  readonly deaths: Scalars["Float"]
  readonly duration: Scalars["Float"]
  readonly gpm: Scalars["Float"]
  readonly heal: Scalars["Float"]
  readonly heroDamage: Scalars["Float"]
  readonly kills: Scalars["Float"]
  readonly towerDamage: Scalars["Float"]
  readonly xpm: Scalars["Float"]
}

export type LeagueTableTeamType = {
  readonly __typename?: "LeagueTableTeamType"
  readonly heroes: Maybe<ReadonlyArray<Maybe<LeagueTableTeamHeroesObjectType>>>
  readonly lanes: Maybe<ReadonlyArray<Maybe<LeagueTableTeamLanesObjectType>>>
  readonly members: Maybe<ReadonlyArray<Maybe<LeagueRegisteredPlayerType>>>
  readonly overview: Maybe<LeagueTableTeamOverviewType>
  readonly stats: Maybe<LeagueTableTeamStatsType>
  readonly team: Maybe<TeamType>
  readonly teamId: Maybe<Scalars["Int"]>
}

export type LeagueTableType = {
  readonly __typename?: "LeagueTableType"
  readonly leagueId: Scalars["Int"]
  readonly tableHeroes: Maybe<ReadonlyArray<Maybe<LeagueTableHeroType>>>
  readonly tablePlayers: Maybe<ReadonlyArray<Maybe<LeagueTablePlayerType>>>
  readonly tableTeams: Maybe<ReadonlyArray<Maybe<LeagueTableTeamType>>>
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
  readonly __typename?: "LeagueType"
  readonly banner: Maybe<Scalars["String"]>
  readonly basePrizePool: Maybe<Scalars["Int"]>
  readonly battlePass: Maybe<LeagueBattlePassType>
  readonly country: Maybe<Scalars["String"]>
  readonly description: Maybe<Scalars["String"]>
  readonly displayName: Maybe<Scalars["String"]>
  readonly endDateTime: Maybe<Scalars["Long"]>
  readonly freeToSpectate: Maybe<Scalars["Boolean"]>
  readonly hasLiveMatches: Maybe<Scalars["Boolean"]>
  readonly id: Maybe<Scalars["Int"]>
  readonly imageUri: Maybe<Scalars["String"]>
  readonly isFollowed: Maybe<Scalars["Boolean"]>
  readonly lastMatchDate: Maybe<Scalars["Long"]>
  readonly liveMatches: Maybe<ReadonlyArray<Maybe<MatchLiveType>>>
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchType>>>
  /** Find match details by steam account id. The return is modified to group the data by the GroupBy parameter. */
  readonly matchesGroupBy: Maybe<ReadonlyArray<Maybe<MatchGroupByType>>>
  readonly modifiedDateTime: Maybe<Scalars["Long"]>
  readonly name: Maybe<Scalars["String"]>
  readonly nodeGroups: Maybe<ReadonlyArray<Maybe<LeagueNodeGroupType>>>
  readonly private: Maybe<Scalars["Boolean"]>
  readonly prizePool: Maybe<Scalars["Int"]>
  readonly prizePoolPercentages: Maybe<
    ReadonlyArray<Maybe<LeaguePrizePoolPercentageType>>
  >
  readonly region: Maybe<LeagueRegion>
  readonly series: Maybe<ReadonlyArray<Maybe<SeriesType>>>
  readonly standings: Maybe<ReadonlyArray<Maybe<TeamPrizeType>>>
  readonly startDateTime: Maybe<Scalars["Long"]>
  readonly stats: Maybe<LeagueStatType>
  readonly stopSalesTime: Maybe<Scalars["DateTime"]>
  readonly streams: Maybe<ReadonlyArray<Maybe<LeagueStreamType>>>
  readonly tables: Maybe<LeagueTableType>
  readonly tier: Maybe<LeagueTier>
  readonly tournamentUrl: Maybe<Scalars["String"]>
  readonly venue: Maybe<Scalars["String"]>
}

export type LeagueTypeMatchesArgs = {
  request: LeagueMatchesRequestType
}

export type LeagueTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType
}

export type LeagueTypeSeriesArgs = {
  leagueStageTypeIds: InputMaybe<ReadonlyArray<InputMaybe<LeagueStage>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
  teamId: InputMaybe<Scalars["Int"]>
}

export type LeagueTypeStatsArgs = {
  leagueStageTypeIds: InputMaybe<ReadonlyArray<InputMaybe<LeagueStage>>>
}

export type LeagueTypeTablesArgs = {
  calculateTypeId: InputMaybe<TableCalculateEnum>
  leagueStageTypeIds: InputMaybe<ReadonlyArray<InputMaybe<LeagueStage>>>
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
  readonly __typename?: "LiveEventMatchDireTide2020StompType"
  readonly match: Maybe<DireTide2020CustomGameMatchType>
}

export type LiveEventPlayerDireTide2020CandyScoredType = {
  readonly __typename?: "LiveEventPlayerDireTide2020CandyScoredType"
  readonly candyScored: Maybe<Scalars["Short"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<DireTide2020CustomGameMatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroAssistsType = {
  readonly __typename?: "LiveEventPlayerHeroAssistsType"
  readonly assistCount: Maybe<Scalars["Byte"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroBuildingDamageType = {
  readonly __typename?: "LiveEventPlayerHeroBuildingDamageType"
  readonly buildingDamage: Maybe<Scalars["Int"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroDewardType = {
  readonly __typename?: "LiveEventPlayerHeroDewardType"
  readonly dewardCount: Maybe<Scalars["Byte"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroDotaPlusLevelType = {
  readonly __typename?: "LiveEventPlayerHeroDotaPlusLevelType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly level: Maybe<Scalars["Byte"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroExpPerMinuteType = {
  readonly __typename?: "LiveEventPlayerHeroExpPerMinuteType"
  readonly expPerMinute: Maybe<Scalars["Short"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroGoldPerMinuteType = {
  readonly __typename?: "LiveEventPlayerHeroGoldPerMinuteType"
  readonly goldPerMinute: Maybe<Scalars["Short"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroHealingType = {
  readonly __typename?: "LiveEventPlayerHeroHealingType"
  readonly healingAmount: Maybe<Scalars["Int"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroHeroDamageType = {
  readonly __typename?: "LiveEventPlayerHeroHeroDamageType"
  readonly heroDamage: Maybe<Scalars["Int"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroHighImpType = {
  readonly __typename?: "LiveEventPlayerHeroHighImpType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly imp: Maybe<Scalars["Byte"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroItemPurchaseType = {
  readonly __typename?: "LiveEventPlayerHeroItemPurchaseType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly itemCount: Maybe<Scalars["Byte"]>
  readonly itemId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroKillsType = {
  readonly __typename?: "LiveEventPlayerHeroKillsType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly killCount: Maybe<Scalars["Byte"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerHeroWinStreakType = {
  readonly __typename?: "LiveEventPlayerHeroWinStreakType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly winStreakCount: Maybe<Scalars["Byte"]>
}

export type LiveEventPlayerRampageType = {
  readonly __typename?: "LiveEventPlayerRampageType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly rampageCount: Maybe<Scalars["Byte"]>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerRankUpType = {
  readonly __typename?: "LiveEventPlayerRankUpType"
  readonly match: Maybe<MatchType>
  readonly rank: Maybe<Scalars["Byte"]>
  readonly steamAccount: Maybe<SteamAccountType>
}

export type LiveEventPlayerWinStreakType = {
  readonly __typename?: "LiveEventPlayerWinStreakType"
  readonly match: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly winStreakCount: Maybe<Scalars["Byte"]>
}

export type LiveEventProPlayerLiveType = {
  readonly __typename?: "LiveEventProPlayerLiveType"
  readonly match: Maybe<MatchLiveType>
  readonly steamAccounts: Maybe<ReadonlyArray<Maybe<SteamAccountType>>>
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
  readonly __typename?: "LiveQuery"
  /** Find a live match by match id. A live match is data where a match is on the Dota watch list and still active. All League games are also Live. id is a required input field. */
  readonly match: Maybe<MatchLiveType>
  /** Find all live matches. A live match is data where a match is on the Dota watch list and still active. All League games are also Live. */
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchLiveType>>>
}

export type LiveQueryMatchArgs = {
  id: Scalars["Long"]
  skipPlaybackDuration: InputMaybe<Scalars["Int"]>
}

export type LiveQueryMatchesArgs = {
  request: InputMaybe<MatchLiveRequestType>
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
  readonly __typename?: "LobbyTypeType"
  readonly id: Scalars["Int"]
  readonly name: Maybe<Scalars["String"]>
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
  readonly __typename?: "MatchGroupByType"
  readonly avgAssists: Maybe<Scalars["Float"]>
  readonly avgDeaths: Maybe<Scalars["Float"]>
  readonly avgExperiencePerMinute: Maybe<Scalars["Int"]>
  readonly avgGoldPerMinute: Maybe<Scalars["Int"]>
  readonly avgImp: Maybe<Scalars["Int"]>
  readonly avgKDA: Maybe<Scalars["Float"]>
  readonly avgKills: Maybe<Scalars["Float"]>
  readonly firstMatchDateTime: Maybe<Scalars["Long"]>
  readonly id: Maybe<Scalars["Long"]>
  readonly id2: Maybe<Scalars["Long"]>
  readonly id3: Maybe<Scalars["Long"]>
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly winCount: Maybe<Scalars["Int"]>
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
  readonly __typename?: "MatchLiveBuildingDetailType"
  readonly indexId: Maybe<Scalars["Int"]>
  readonly isAlive: Scalars["Boolean"]
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly npcId: Maybe<Scalars["Int"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
  readonly type: Maybe<BuildingType>
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
  readonly __typename?: "MatchLiveInsightType"
  readonly lastSeries: Maybe<ReadonlyArray<Maybe<SeriesType>>>
  readonly teamOneLeagueMatchCount: Scalars["Int"]
  readonly teamOneLeagueWinCount: Scalars["Int"]
  readonly teamOneVsWinCount: Scalars["Int"]
  readonly teamTwoLeagueMatchCount: Scalars["Int"]
  readonly teamTwoLeagueWinCount: Scalars["Int"]
  readonly teamTwoVsWinCount: Scalars["Int"]
}

export type MatchLivePickBanType = {
  readonly __typename?: "MatchLivePickBanType"
  readonly adjustedWinRate: Maybe<Scalars["Float"]>
  readonly bannedHeroId: Maybe<Scalars["Short"]>
  readonly baseWinRate: Maybe<Scalars["Float"]>
  readonly durationValues: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly isPick: Scalars["Boolean"]
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly letter: Maybe<PlusLetterType>
  readonly order: Maybe<Scalars["Int"]>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly positionValues: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly winRateValues: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
}

export type MatchLivePlaybackDataType = {
  readonly __typename?: "MatchLivePlaybackDataType"
  readonly buildingEvents: Maybe<ReadonlyArray<Maybe<MatchLiveBuildingDetailType>>>
  readonly direScore: Maybe<ReadonlyArray<Maybe<MatchLiveTeamScoreDetailType>>>
  readonly pickBans: Maybe<ReadonlyArray<Maybe<MatchLivePickBanType>>>
  readonly radiantScore: Maybe<ReadonlyArray<Maybe<MatchLiveTeamScoreDetailType>>>
  readonly roshanEvents: Maybe<ReadonlyArray<Maybe<MatchLiveRoshanDetailType>>>
}

export type MatchLivePlayerAssistDetailType = {
  readonly __typename?: "MatchLivePlayerAssistDetailType"
  readonly positionX: Scalars["Int"]
  readonly positionY: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerDeathDetailType = {
  readonly __typename?: "MatchLivePlayerDeathDetailType"
  readonly positionX: Scalars["Int"]
  readonly positionY: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerDenyDetailType = {
  readonly __typename?: "MatchLivePlayerDenyDetailType"
  readonly positionX: Scalars["Int"]
  readonly positionY: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerExperienceDetailType = {
  readonly __typename?: "MatchLivePlayerExperienceDetailType"
  readonly expPerMinute: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerGoldDetailType = {
  readonly __typename?: "MatchLivePlayerGoldDetailType"
  readonly gold: Scalars["Int"]
  readonly goldPerMinute: Scalars["Int"]
  readonly networth: Scalars["Int"]
  readonly networthDifference: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerImpDetailType = {
  readonly __typename?: "MatchLivePlayerImpDetailType"
  readonly imp: Scalars["Short"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerInventoryDetailType = {
  readonly __typename?: "MatchLivePlayerInventoryDetailType"
  readonly backpackId0: Maybe<Scalars["Short"]>
  readonly backpackId1: Maybe<Scalars["Short"]>
  readonly backpackId2: Maybe<Scalars["Short"]>
  readonly itemId0: Maybe<Scalars["Short"]>
  readonly itemId1: Maybe<Scalars["Short"]>
  readonly itemId2: Maybe<Scalars["Short"]>
  readonly itemId3: Maybe<Scalars["Short"]>
  readonly itemId4: Maybe<Scalars["Short"]>
  readonly itemId5: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerKillDetailType = {
  readonly __typename?: "MatchLivePlayerKillDetailType"
  readonly positionX: Scalars["Int"]
  readonly positionY: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerLastHitDetailType = {
  readonly __typename?: "MatchLivePlayerLastHitDetailType"
  readonly positionX: Scalars["Int"]
  readonly positionY: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerLevelDetailType = {
  readonly __typename?: "MatchLivePlayerLevelDetailType"
  readonly level: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchLivePlayerPositionDetailType = {
  readonly __typename?: "MatchLivePlayerPositionDetailType"
  readonly time: Scalars["Int"]
  readonly x: Scalars["Int"]
  readonly y: Scalars["Int"]
}

export type MatchLivePlayerType = {
  readonly __typename?: "MatchLivePlayerType"
  readonly backpackId0: Maybe<Scalars["Short"]>
  readonly backpackId1: Maybe<Scalars["Short"]>
  readonly backpackId2: Maybe<Scalars["Short"]>
  readonly baseWinRateValue: Maybe<Scalars["Float"]>
  readonly experiencePerMinute: Maybe<Scalars["UShort"]>
  readonly gameVersionId: Maybe<Scalars["Short"]>
  readonly gold: Maybe<Scalars["Int"]>
  readonly goldPerMinute: Maybe<Scalars["UShort"]>
  readonly goldSpent: Maybe<Scalars["Int"]>
  readonly hero: Maybe<HeroType>
  readonly heroDamage: Maybe<Scalars["Int"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly impPerMinute: Maybe<ReadonlyArray<Maybe<MatchLivePlayerImpDetailType>>>
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly itemId0: Maybe<Scalars["Short"]>
  readonly itemId1: Maybe<Scalars["Short"]>
  readonly itemId2: Maybe<Scalars["Short"]>
  readonly itemId3: Maybe<Scalars["Short"]>
  readonly itemId4: Maybe<Scalars["Short"]>
  readonly itemId5: Maybe<Scalars["Short"]>
  readonly leaverStatus: Maybe<Scalars["Byte"]>
  readonly level: Maybe<Scalars["Byte"]>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly name: Maybe<Scalars["String"]>
  readonly networth: Maybe<Scalars["Int"]>
  readonly numAssists: Maybe<Scalars["Byte"]>
  readonly numDeaths: Maybe<Scalars["Byte"]>
  readonly numDenies: Maybe<Scalars["UShort"]>
  readonly numKills: Maybe<Scalars["Byte"]>
  readonly numLastHits: Maybe<Scalars["UShort"]>
  readonly playbackData: Maybe<MatchPlayerLivePlaybackDataType>
  readonly playerSlot: Maybe<Scalars["Byte"]>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly respawnTimer: Maybe<Scalars["Short"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly towerDamage: Maybe<Scalars["Int"]>
  readonly ultimateCooldown: Maybe<Scalars["Short"]>
  readonly ultimateState: Maybe<Scalars["Short"]>
}

export enum MatchLiveRequestOrderBy {
  GameTime = "GAME_TIME",
  MatchId = "MATCH_ID",
  SpectatorCount = "SPECTATOR_COUNT",
}

export type MatchLiveRequestType = {
  /** Only return Live Matches In Progress that are currently in these states. */
  readonly gameStates: InputMaybe<ReadonlyArray<InputMaybe<MatchLiveGameState>>>
  /** The hero id to include in this query, excluding all results that do not include this hero. */
  readonly heroId: InputMaybe<Scalars["Short"]>
  /** Returns only matches that are no longer active and completed but not yet deleted. */
  readonly isCompleted: InputMaybe<Scalars["Boolean"]>
  /** Returns only matches that are currently still being updated by the backend. */
  readonly isParsing: InputMaybe<Scalars["Boolean"]>
  /** Playback Data can contain a lot of information. This will only display the most recent event for each of the fields. */
  readonly lastPlaybackEventOnly: InputMaybe<Scalars["Boolean"]>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  readonly leagueIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** If the return should be ordered by Ascending or Desending order. */
  readonly orderBy: InputMaybe<MatchLiveRequestOrderBy>
  /** The amount to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The amount to have returned in your query. The maximum of this is always dynamic. */
  readonly take: InputMaybe<Scalars["Int"]>
  /** An array of tier ids to include in this query, excluding all results that do not include one of these tiers. */
  readonly tiers: InputMaybe<ReadonlyArray<InputMaybe<LeagueTier>>>
}

export type MatchLiveRoshanDetailType = {
  readonly __typename?: "MatchLiveRoshanDetailType"
  readonly isAlive: Maybe<Scalars["Boolean"]>
  readonly respawnTimer: Maybe<Scalars["Int"]>
  readonly time: Maybe<Scalars["Int"]>
}

export type MatchLiveTeamScoreDetailType = {
  readonly __typename?: "MatchLiveTeamScoreDetailType"
  readonly score: Maybe<Scalars["Short"]>
  readonly time: Maybe<Scalars["Int"]>
}

export type MatchLiveType = {
  readonly __typename?: "MatchLiveType"
  readonly averageRank: Maybe<Scalars["Int"]>
  readonly buildingState: Maybe<Scalars["Long"]>
  readonly completed: Maybe<Scalars["Boolean"]>
  readonly createdDateTime: Maybe<Scalars["Long"]>
  readonly delay: Maybe<Scalars["Short"]>
  readonly direScore: Maybe<Scalars["Byte"]>
  readonly direTeam: Maybe<TeamType>
  readonly direTeamId: Maybe<Scalars["Int"]>
  readonly durationValues: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
  readonly gameMinute: Maybe<Scalars["Short"]>
  readonly gameMode: Maybe<GameModeEnumType>
  readonly gameState: Maybe<MatchLiveGameState>
  readonly gameTime: Maybe<Scalars["Int"]>
  readonly insight: Maybe<MatchLiveInsightType>
  readonly isParsing: Maybe<Scalars["Boolean"]>
  readonly isUpdating: Maybe<Scalars["Boolean"]>
  readonly league: Maybe<LeagueType>
  readonly leagueId: Maybe<Scalars["Int"]>
  readonly liveWinRateValues: Maybe<ReadonlyArray<Maybe<MatchLiveWinRateDetailType>>>
  readonly lobbyId: Maybe<Scalars["Long"]>
  readonly lobbyType: Maybe<LobbyTypeEnum>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly modifiedDateTime: Maybe<Scalars["Long"]>
  readonly numHumanPlayers: Maybe<Scalars["Byte"]>
  readonly parseBeginGameTime: Maybe<Scalars["Int"]>
  readonly playbackData: Maybe<MatchLivePlaybackDataType>
  readonly players: Maybe<ReadonlyArray<Maybe<MatchLivePlayerType>>>
  readonly radiantLead: Maybe<Scalars["Int"]>
  readonly radiantScore: Maybe<Scalars["Byte"]>
  readonly radiantTeam: Maybe<TeamType>
  readonly radiantTeamId: Maybe<Scalars["Int"]>
  readonly serverSteamId: Maybe<Scalars["String"]>
  readonly spectators: Maybe<Scalars["Int"]>
  readonly winRateValues: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>
}

export type MatchLiveWinRateDetailType = {
  readonly __typename?: "MatchLiveWinRateDetailType"
  readonly time: Scalars["Int"]
  readonly winRate: Scalars["Float"]
}

export type MatchPickBanGroupByType = {
  readonly __typename?: "MatchPickBanGroupByType"
  readonly banCount: Maybe<Scalars["Int"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly pickCount: Maybe<Scalars["Int"]>
}

export type MatchPlaybackDataBuildingEventType = {
  readonly __typename?: "MatchPlaybackDataBuildingEventType"
  readonly didShrineActivate: Maybe<Scalars["Boolean"]>
  readonly hp: Maybe<Scalars["Int"]>
  readonly indexId: Maybe<Scalars["Int"]>
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly maxHp: Maybe<Scalars["Int"]>
  readonly npcId: Maybe<Scalars["Int"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
  readonly type: Maybe<BuildingType>
}

export type MatchPlaybackDataCourierEventType = {
  readonly __typename?: "MatchPlaybackDataCourierEventType"
  readonly events: Maybe<ReadonlyArray<Maybe<MatchplaybackDataCourierEventObjectType>>>
  readonly id: Scalars["Int"]
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly ownerHero: Maybe<Scalars["Int"]>
}

export type MatchPlaybackDataRoshanEventType = {
  readonly __typename?: "MatchPlaybackDataRoshanEventType"
  readonly createTime: Maybe<Scalars["Int"]>
  readonly hp: Maybe<Scalars["Int"]>
  readonly item0: Maybe<Scalars["Int"]>
  readonly item1: Maybe<Scalars["Int"]>
  readonly item2: Maybe<Scalars["Int"]>
  readonly item3: Maybe<Scalars["Int"]>
  readonly item4: Maybe<Scalars["Int"]>
  readonly item5: Maybe<Scalars["Int"]>
  readonly maxHp: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
  readonly totalDamageTaken: Maybe<Scalars["Int"]>
  readonly x: Maybe<Scalars["Int"]>
  readonly y: Maybe<Scalars["Int"]>
}

export type MatchPlaybackDataRuneEventType = {
  readonly __typename?: "MatchPlaybackDataRuneEventType"
  readonly action: Scalars["Int"]
  readonly fromPlayer: Scalars["Int"]
  readonly indexId: Scalars["Int"]
  readonly location: Scalars["Int"]
  readonly positionX: Scalars["Int"]
  readonly positionY: Scalars["Int"]
  readonly rune: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchPlaybackDataTowerDeathEventType = {
  readonly __typename?: "MatchPlaybackDataTowerDeathEventType"
  readonly dire: Scalars["Int"]
  readonly radiant: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchPlaybackDataType = {
  readonly __typename?: "MatchPlaybackDataType"
  readonly buildingEvents: Maybe<ReadonlyArray<Maybe<MatchPlaybackDataBuildingEventType>>>
  readonly courierEvents: Maybe<ReadonlyArray<Maybe<MatchPlaybackDataCourierEventType>>>
  readonly direCaptainSteamAccount: Maybe<SteamAccountType>
  readonly direCaptainSteamAccountId: Maybe<Scalars["Long"]>
  readonly radiantCaptainSteamAccount: Maybe<SteamAccountType>
  readonly radiantCaptainSteamAccountId: Maybe<Scalars["Long"]>
  readonly roshanEvents: Maybe<ReadonlyArray<Maybe<MatchPlaybackDataRoshanEventType>>>
  readonly runeEvents: Maybe<ReadonlyArray<Maybe<MatchPlaybackDataRuneEventType>>>
  readonly towerDeathEvents: Maybe<
    ReadonlyArray<Maybe<MatchPlaybackDataTowerDeathEventType>>
  >
  readonly wardEvents: Maybe<ReadonlyArray<Maybe<MatchPlaybackDataWardEventType>>>
}

export type MatchPlaybackDataWardEventType = {
  readonly __typename?: "MatchPlaybackDataWardEventType"
  readonly action: Maybe<Scalars["Byte"]>
  readonly fromPlayer: Maybe<Scalars["Int"]>
  readonly indexId: Scalars["Int"]
  readonly playerDestroyed: Maybe<Scalars["Int"]>
  readonly positionX: Scalars["Int"]
  readonly positionY: Scalars["Int"]
  readonly time: Scalars["Int"]
  readonly wardType: Maybe<Scalars["Byte"]>
}

export type MatchPlayerAdditionalUnitType = {
  readonly __typename?: "MatchPlayerAdditionalUnitType"
  readonly backpack0Id: Maybe<Scalars["Short"]>
  readonly backpack1Id: Maybe<Scalars["Short"]>
  readonly backpack2Id: Maybe<Scalars["Short"]>
  readonly item0Id: Maybe<Scalars["Short"]>
  readonly item1Id: Maybe<Scalars["Short"]>
  readonly item2Id: Maybe<Scalars["Short"]>
  readonly item3Id: Maybe<Scalars["Short"]>
  readonly item4Id: Maybe<Scalars["Short"]>
  readonly item5Id: Maybe<Scalars["Short"]>
  readonly neutral0Id: Maybe<Scalars["Short"]>
}

export enum MatchPlayerAward {
  Mvp = "MVP",
  None = "NONE",
  TopCore = "TOP_CORE",
  TopSupport = "TOP_SUPPORT",
}

export type MatchPlayerHeroDamageSourceAbilityReportObjectType = {
  readonly __typename?: "MatchPlayerHeroDamageSourceAbilityReportObjectType"
  readonly abilityId: Scalars["Int"]
  readonly amount: Scalars["Int"]
  readonly count: Scalars["Int"]
}

export type MatchPlayerHeroDamageSourceItemReportObjectType = {
  readonly __typename?: "MatchPlayerHeroDamageSourceItemReportObjectType"
  readonly amount: Scalars["Int"]
  readonly count: Scalars["Int"]
  readonly itemId: Scalars["Int"]
}

export type MatchPlayerHeroDamageTargetReportObjectType = {
  readonly __typename?: "MatchPlayerHeroDamageTargetReportObjectType"
  readonly amount: Scalars["Int"]
  readonly target: Scalars["Int"]
}

export type MatchPlayerHeroDamageTotalRecievedReportObjectType = {
  readonly __typename?: "MatchPlayerHeroDamageTotalRecievedReportObjectType"
  readonly disableCount: Scalars["Int"]
  readonly disableDuration: Scalars["Int"]
  readonly heal: Scalars["Int"]
  readonly magicalDamage: Scalars["Int"]
  readonly physicalDamage: Scalars["Int"]
  readonly pureDamage: Scalars["Int"]
  readonly slowCount: Scalars["Int"]
  readonly slowDuration: Scalars["Int"]
  readonly stunCount: Scalars["Int"]
  readonly stunDuration: Scalars["Int"]
}

export type MatchPlayerHeroDamageTotalReportObjectType = {
  readonly __typename?: "MatchPlayerHeroDamageTotalReportObjectType"
  readonly allyHeal: Scalars["Int"]
  readonly disableCount: Scalars["Int"]
  readonly disableDuration: Scalars["Int"]
  readonly magicalDamage: Scalars["Int"]
  readonly physicalDamage: Scalars["Int"]
  readonly pureDamage: Scalars["Int"]
  readonly selfHeal: Scalars["Int"]
  readonly slowCount: Scalars["Int"]
  readonly slowDuration: Scalars["Int"]
  readonly stunCount: Scalars["Int"]
  readonly stunDuration: Scalars["Int"]
}

export type MatchPlayerInventoryObjectType = {
  readonly __typename?: "MatchPlayerInventoryObjectType"
  readonly charges: Maybe<Scalars["Int"]>
  readonly itemId: Scalars["Int"]
  readonly secondaryCharges: Maybe<Scalars["Int"]>
}

export type MatchPlayerInventoryType = {
  readonly __typename?: "MatchPlayerInventoryType"
  readonly backPack0: Maybe<MatchPlayerInventoryObjectType>
  readonly backPack1: Maybe<MatchPlayerInventoryObjectType>
  readonly backPack2: Maybe<MatchPlayerInventoryObjectType>
  readonly item0: Maybe<MatchPlayerInventoryObjectType>
  readonly item1: Maybe<MatchPlayerInventoryObjectType>
  readonly item2: Maybe<MatchPlayerInventoryObjectType>
  readonly item3: Maybe<MatchPlayerInventoryObjectType>
  readonly item4: Maybe<MatchPlayerInventoryObjectType>
  readonly item5: Maybe<MatchPlayerInventoryObjectType>
  readonly neutral0: Maybe<MatchPlayerInventoryObjectType>
}

export type MatchPlayerItemPurchaseEventType = {
  readonly __typename?: "MatchPlayerItemPurchaseEventType"
  readonly itemId: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchPlayerLivePlaybackDataType = {
  readonly __typename?: "MatchPlayerLivePlaybackDataType"
  readonly assistEvents: Maybe<ReadonlyArray<Maybe<MatchLivePlayerAssistDetailType>>>
  readonly csEvents: Maybe<ReadonlyArray<Maybe<MatchLivePlayerLastHitDetailType>>>
  readonly deathEvents: Maybe<ReadonlyArray<Maybe<MatchLivePlayerDeathDetailType>>>
  readonly denyEvents: Maybe<ReadonlyArray<Maybe<MatchLivePlayerDenyDetailType>>>
  readonly experienceEvents: Maybe<
    ReadonlyArray<Maybe<MatchLivePlayerExperienceDetailType>>
  >
  readonly goldEvents: Maybe<ReadonlyArray<Maybe<MatchLivePlayerGoldDetailType>>>
  readonly inventoryEvents: Maybe<
    ReadonlyArray<Maybe<MatchLivePlayerInventoryDetailType>>
  >
  readonly killEvents: Maybe<ReadonlyArray<Maybe<MatchLivePlayerKillDetailType>>>
  readonly levelEvents: Maybe<ReadonlyArray<Maybe<MatchLivePlayerLevelDetailType>>>
  readonly positionEvents: Maybe<ReadonlyArray<Maybe<MatchLivePlayerPositionDetailType>>>
}

export type MatchPlayerPlaybackDataType = {
  readonly __typename?: "MatchPlayerPlaybackDataType"
  readonly abilityActiveLists: Maybe<ReadonlyArray<Maybe<AbilityActiveListType>>>
  readonly abilityLearnEvents: Maybe<ReadonlyArray<Maybe<AbilityLearnEventsType>>>
  readonly abilityUsedEvents: Maybe<ReadonlyArray<Maybe<AbilityUsedEventsType>>>
  readonly assistEvents: Maybe<ReadonlyArray<Maybe<AssistDetailType>>>
  readonly buyBackEvents: Maybe<ReadonlyArray<Maybe<BuyBackDetailType>>>
  readonly csEvents: Maybe<ReadonlyArray<Maybe<LastHitDetailType>>>
  readonly deathEvents: Maybe<ReadonlyArray<Maybe<DeathDetailType>>>
  readonly experienceEvents: Maybe<ReadonlyArray<Maybe<ExperienceDetailType>>>
  readonly goldEvents: Maybe<ReadonlyArray<Maybe<GoldDetailType>>>
  readonly healEvents: Maybe<ReadonlyArray<Maybe<HealDetailType>>>
  readonly heroDamageEvents: Maybe<ReadonlyArray<Maybe<HeroDamageDetailType>>>
  readonly inventoryEvents: Maybe<ReadonlyArray<Maybe<InventoryType>>>
  readonly itemUsedEvents: Maybe<ReadonlyArray<Maybe<ItemUsedEventType>>>
  readonly killEvents: Maybe<ReadonlyArray<Maybe<KillDetailType>>>
  readonly playerUpdateAttributeEvents: Maybe<
    ReadonlyArray<Maybe<PlayerUpdateAttributeDetailType>>
  >
  readonly playerUpdateBattleEvents: Maybe<
    ReadonlyArray<Maybe<PlayerUpdateBattleDetailType>>
  >
  readonly playerUpdateGoldEvents: Maybe<ReadonlyArray<Maybe<PlayerUpdateGoldDetailType>>>
  readonly playerUpdateHealthEvents: Maybe<
    ReadonlyArray<Maybe<PlayerUpdateHealthDetailType>>
  >
  readonly playerUpdateLevelEvents: Maybe<
    ReadonlyArray<Maybe<PlayerUpdateLevelDetailType>>
  >
  readonly playerUpdatePositionEvents: Maybe<
    ReadonlyArray<Maybe<PlayerUpdatePositionDetailType>>
  >
  readonly purchaseEvents: Maybe<ReadonlyArray<Maybe<ItemPurchaseType>>>
  readonly spiritBearInventoryEvents: Maybe<ReadonlyArray<Maybe<SpiritBearInventoryType>>>
  readonly streakEvents: Maybe<ReadonlyArray<Maybe<StreakEventType>>>
  readonly towerDamageEvents: Maybe<ReadonlyArray<Maybe<TowerDamageDetailType>>>
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
  readonly __typename?: "MatchPlayerSpectatorType"
  readonly isRadiantCoach: Maybe<Scalars["Boolean"]>
  readonly isVictory: Maybe<Scalars["Boolean"]>
  readonly steamId: Maybe<Scalars["Long"]>
}

export type MatchPlayerSpiritBearInventoryType = {
  readonly __typename?: "MatchPlayerSpiritBearInventoryType"
  readonly backPack0Id: Maybe<Scalars["Int"]>
  readonly backPack1Id: Maybe<Scalars["Int"]>
  readonly backPack2Id: Maybe<Scalars["Int"]>
  readonly item0Id: Maybe<Scalars["Int"]>
  readonly item1Id: Maybe<Scalars["Int"]>
  readonly item2Id: Maybe<Scalars["Int"]>
  readonly item3Id: Maybe<Scalars["Int"]>
  readonly item4Id: Maybe<Scalars["Int"]>
  readonly item5Id: Maybe<Scalars["Int"]>
  readonly neutral0Id: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsAbilityCastObjectType = {
  readonly __typename?: "MatchPlayerStatsAbilityCastObjectType"
  readonly count: Scalars["Int"]
  readonly damage: Scalars["Int"]
  readonly duration: Maybe<Scalars["Int"]>
  readonly target: Scalars["Int"]
}

export type MatchPlayerStatsAbilityCastReportType = {
  readonly __typename?: "MatchPlayerStatsAbilityCastReportType"
  readonly abilityId: Scalars["Int"]
  readonly count: Scalars["Int"]
  readonly targets: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsAbilityCastObjectType>>>
}

export type MatchPlayerStatsActionReportType = {
  readonly __typename?: "MatchPlayerStatsActionReportType"
  readonly attackPosition: Scalars["Int"]
  readonly attackTarget: Scalars["Int"]
  readonly castNoTarget: Scalars["Int"]
  readonly castPosition: Scalars["Int"]
  readonly castTarget: Scalars["Int"]
  readonly glyphCast: Scalars["Int"]
  readonly heldPosition: Scalars["Int"]
  readonly moveToPosition: Scalars["Int"]
  readonly moveToTarget: Scalars["Int"]
  readonly pingUsed: Scalars["Int"]
  readonly scanUsed: Scalars["Int"]
}

export type MatchPlayerStatsAllTalkEventType = {
  readonly __typename?: "MatchPlayerStatsAllTalkEventType"
  readonly message: Maybe<Scalars["String"]>
  readonly pausedTick: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchPlayerStatsAssistEventType = {
  readonly __typename?: "MatchPlayerStatsAssistEventType"
  readonly gold: Maybe<Scalars["Int"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly target: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
  readonly xp: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsBuffEventType = {
  readonly __typename?: "MatchPlayerStatsBuffEventType"
  readonly abilityId: Maybe<Scalars["Int"]>
  readonly itemId: Maybe<Scalars["Int"]>
  readonly stackCount: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
}

export type MatchPlayerStatsChatWheelEventType = {
  readonly __typename?: "MatchPlayerStatsChatWheelEventType"
  readonly chatWheelId: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
}

export type MatchPlayerStatsCourierKillEventType = {
  readonly __typename?: "MatchPlayerStatsCourierKillEventType"
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
}

export type MatchPlayerStatsDeathEventType = {
  readonly __typename?: "MatchPlayerStatsDeathEventType"
  readonly assist: Maybe<ReadonlyArray<Scalars["Short"]>>
  readonly attacker: Maybe<Scalars["Short"]>
  readonly byAbility: Maybe<Scalars["Int"]>
  readonly byItem: Maybe<Scalars["Int"]>
  readonly goldFed: Maybe<Scalars["Int"]>
  readonly goldLost: Maybe<Scalars["Int"]>
  readonly hasHealAvailable: Maybe<Scalars["Boolean"]>
  readonly isAttemptTpOut: Maybe<Scalars["Boolean"]>
  readonly isBurst: Maybe<Scalars["Boolean"]>
  readonly isDieBack: Maybe<Scalars["Boolean"]>
  readonly isEngagedOnDeath: Maybe<Scalars["Boolean"]>
  readonly isTracked: Maybe<Scalars["Boolean"]>
  readonly isWardWalkThrough: Maybe<Scalars["Boolean"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly target: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
  readonly timeDead: Maybe<Scalars["Int"]>
  readonly xpFed: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsFarmDistributionObjectType = {
  readonly __typename?: "MatchPlayerStatsFarmDistributionObjectType"
  readonly count: Scalars["Int"]
  readonly gold: Maybe<Scalars["Int"]>
  readonly id: Scalars["Int"]
  readonly xp: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsFarmDistributionReportType = {
  readonly __typename?: "MatchPlayerStatsFarmDistributionReportType"
  readonly abandonGold: Scalars["Int"]
  readonly ancientLocation: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsFarmDistributionObjectType>>
  >
  readonly bountyGold: Maybe<MatchPlayerStatsFarmDistributionObjectType>
  readonly buildings: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsFarmDistributionObjectType>>
  >
  readonly buyBackGold: Scalars["Int"]
  readonly creepLocation: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsFarmDistributionObjectType>>
  >
  readonly creepType: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsFarmDistributionObjectType>>
  >
  readonly itemGold: Scalars["Int"]
  readonly neutralLocation: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsFarmDistributionObjectType>>
  >
  readonly other: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>
  readonly talentGold: Scalars["Int"]
}

export type MatchPlayerStatsHeroDamageReportType = {
  readonly __typename?: "MatchPlayerStatsHeroDamageReportType"
  readonly dealtSourceAbility: Maybe<
    ReadonlyArray<Maybe<MatchPlayerHeroDamageSourceAbilityReportObjectType>>
  >
  readonly dealtSourceItem: Maybe<
    ReadonlyArray<Maybe<MatchPlayerHeroDamageSourceItemReportObjectType>>
  >
  readonly dealtTargets: Maybe<
    ReadonlyArray<Maybe<MatchPlayerHeroDamageTargetReportObjectType>>
  >
  readonly dealtTotal: Maybe<MatchPlayerHeroDamageTotalReportObjectType>
  readonly receivedSourceAbility: Maybe<
    ReadonlyArray<Maybe<MatchPlayerHeroDamageSourceAbilityReportObjectType>>
  >
  readonly receivedSourceItem: Maybe<
    ReadonlyArray<Maybe<MatchPlayerHeroDamageSourceItemReportObjectType>>
  >
  readonly receivedTargets: Maybe<
    ReadonlyArray<Maybe<MatchPlayerHeroDamageTargetReportObjectType>>
  >
  readonly receivedTotal: Maybe<MatchPlayerHeroDamageTotalRecievedReportObjectType>
}

export type MatchPlayerStatsItemUsedEventType = {
  readonly __typename?: "MatchPlayerStatsItemUsedEventType"
  readonly count: Maybe<Scalars["Int"]>
  readonly itemId: Scalars["Int"]
}

export type MatchPlayerStatsKillEventType = {
  readonly __typename?: "MatchPlayerStatsKillEventType"
  readonly assist: Maybe<ReadonlyArray<Scalars["Int"]>>
  readonly byAbility: Maybe<Scalars["Int"]>
  readonly byItem: Maybe<Scalars["Int"]>
  readonly gold: Maybe<Scalars["Int"]>
  readonly isGank: Maybe<Scalars["Boolean"]>
  readonly isInvisible: Maybe<Scalars["Boolean"]>
  readonly isSmoke: Maybe<Scalars["Boolean"]>
  readonly isSolo: Maybe<Scalars["Boolean"]>
  readonly isTpRecently: Maybe<Scalars["Boolean"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly target: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
  readonly xp: Maybe<Scalars["Int"]>
}

export type MatchPlayerStatsLocationReportType = {
  readonly __typename?: "MatchPlayerStatsLocationReportType"
  readonly positionX: Scalars["Int"]
  readonly positionY: Scalars["Int"]
}

export type MatchPlayerStatsRuneEventType = {
  readonly __typename?: "MatchPlayerStatsRuneEventType"
  readonly action: Maybe<RuneAction>
  readonly gold: Maybe<Scalars["Int"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly rune: Maybe<RuneEnums>
  readonly time: Scalars["Int"]
}

export type MatchPlayerStatsTowerDamageReportType = {
  readonly __typename?: "MatchPlayerStatsTowerDamageReportType"
  readonly damage: Scalars["Int"]
  readonly damageCreeps: Scalars["Int"]
  readonly damageFromAbility: Scalars["Int"]
  readonly npcId: Scalars["Int"]
}

export type MatchPlayerStatsType = {
  readonly __typename?: "MatchPlayerStatsType"
  readonly abilities: Maybe<ReadonlyArray<Maybe<PlayerAbilityType>>>
  readonly abilityCastReport: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsAbilityCastReportType>>
  >
  readonly actionReport: Maybe<MatchPlayerStatsActionReportType>
  readonly actionsPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly allTalks: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsAllTalkEventType>>>
  readonly assistCount: Maybe<Scalars["Int"]>
  readonly assistEvents: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsAssistEventType>>>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly campStack: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly chatWheels: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsChatWheelEventType>>>
  readonly courierKills: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsCourierKillEventType>>>
  readonly deathCount: Maybe<Scalars["Int"]>
  readonly deathEvents: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsDeathEventType>>>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly deniesPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly dotaPlusHeroXp: Maybe<Scalars["Int"]>
  readonly experienceCount: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly experiencePerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly farmDistributionReport: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsFarmDistributionReportType>>
  >
  readonly gameVersionId: Maybe<Scalars["Short"]>
  readonly goldCount: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly goldPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly healCount: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly healPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly heroDamageCount: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly heroDamagePerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly heroDamageReceivedPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly heroDamageReport: Maybe<MatchPlayerStatsHeroDamageReportType>
  /** Starts at minute 0:00.  The last index will contain the last subset of data, so if a match is 41:01 long, the last index will be the change in the last 1 second. */
  readonly impPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  /** Starts at minute 0:00.  The last index will contain the last subset of data, so if a match is 41:01 long, the last index will be the change in the last 1 second. */
  readonly impPerMinute2: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly inventoryReport: Maybe<ReadonlyArray<Maybe<MatchPlayerInventoryType>>>
  readonly invisibleSeconds: Maybe<Scalars["Int"]>
  readonly itemPurchases: Maybe<ReadonlyArray<Maybe<MatchPlayerItemPurchaseEventType>>>
  readonly itemUsed: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsItemUsedEventType>>>
  readonly killCount: Maybe<Scalars["Int"]>
  readonly killEvents: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsKillEventType>>>
  readonly lastHitCount: Maybe<Scalars["Int"]>
  readonly lastHitsPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly level: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly locationReport: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsLocationReportType>>>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly matchPlayerBuffEvent: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsBuffEventType>>
  >
  /** Starts at minute 0:00 and Index 0 will show the Networth at 0:00 in the game. */
  readonly networthPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly runes: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsRuneEventType>>>
  readonly spiritBearInventoryReport: Maybe<
    ReadonlyArray<Maybe<MatchPlayerSpiritBearInventoryType>>
  >
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly towerDamageCount: Maybe<Scalars["Int"]>
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly towerDamagePerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly towerDamageReport: Maybe<
    ReadonlyArray<Maybe<MatchPlayerStatsTowerDamageReportType>>
  >
  /** Starts at minute 0:00.  Each index contains the data for that minute. Index 0 has everything from 0:00 to 0:59. */
  readonly tripsFountainPerMinute: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  /** A list of events that contain all the times a player got gold for a destroyed ward (and experience). */
  readonly wardDestruction: Maybe<
    ReadonlyArray<Maybe<MatchPlayerWardDestuctionObjectType>>
  >
  readonly wards: Maybe<ReadonlyArray<Maybe<MatchPlayerStatsWardEventType>>>
}

export type MatchPlayerStatsTypeAbilitiesArgs = {
  gameVerionId: InputMaybe<Scalars["Int"]>
}

export type MatchPlayerStatsWardEventType = {
  readonly __typename?: "MatchPlayerStatsWardEventType"
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
  readonly type: Scalars["Int"]
}

export enum MatchPlayerTeamPickOrderType {
  FifthPick = "FIFTH_PICK",
  FirstPick = "FIRST_PICK",
  FourthPick = "FOURTH_PICK",
  SecondPick = "SECOND_PICK",
  ThirdPick = "THIRD_PICK",
}

export type MatchPlayerType = {
  readonly __typename?: "MatchPlayerType"
  readonly additionalUnit: Maybe<MatchPlayerAdditionalUnitType>
  readonly assists: Maybe<Scalars["Byte"]>
  readonly award: Maybe<MatchPlayerAward>
  readonly backpack0Id: Maybe<Scalars["Short"]>
  readonly backpack1Id: Maybe<Scalars["Short"]>
  readonly backpack2Id: Maybe<Scalars["Short"]>
  readonly behavior: Maybe<Scalars["Short"]>
  readonly deaths: Maybe<Scalars["Byte"]>
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  readonly dotaPlus: Maybe<HeroDotaPlusLeaderboardRankType>
  readonly experiencePerMinute: Maybe<Scalars["Short"]>
  readonly gameVersionId: Maybe<Scalars["Short"]>
  readonly gold: Maybe<Scalars["Int"]>
  readonly goldPerMinute: Maybe<Scalars["Short"]>
  readonly goldSpent: Maybe<Scalars["Int"]>
  readonly hero: Maybe<HeroType>
  readonly heroAverage: Maybe<
    ReadonlyArray<Maybe<HeroPositionTimeDetailAverageObjectType>>
  >
  readonly heroDamage: Maybe<Scalars["Int"]>
  readonly heroHealing: Maybe<Scalars["Int"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly imp: Maybe<Scalars["Short"]>
  readonly intentionalFeeding: Maybe<Scalars["Boolean"]>
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly isRandom: Maybe<Scalars["Boolean"]>
  readonly isVictory: Maybe<Scalars["Boolean"]>
  readonly item0Id: Maybe<Scalars["Short"]>
  readonly item1Id: Maybe<Scalars["Short"]>
  readonly item2Id: Maybe<Scalars["Short"]>
  readonly item3Id: Maybe<Scalars["Short"]>
  readonly item4Id: Maybe<Scalars["Short"]>
  readonly item5Id: Maybe<Scalars["Short"]>
  readonly kills: Maybe<Scalars["Byte"]>
  readonly lane: Maybe<MatchLaneType>
  readonly leaverStatus: Maybe<LeaverStatusEnum>
  readonly level: Maybe<Scalars["Byte"]>
  readonly match: Maybe<MatchType>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly networth: Maybe<Scalars["Int"]>
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  readonly neutral0Id: Maybe<Scalars["Short"]>
  readonly numDenies: Maybe<Scalars["Short"]>
  readonly numLastHits: Maybe<Scalars["Short"]>
  readonly partyId: Maybe<Scalars["Byte"]>
  readonly playbackData: Maybe<MatchPlayerPlaybackDataType>
  readonly playerSlot: Maybe<Scalars["Byte"]>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly role: Maybe<MatchPlayerRoleType>
  readonly roleBasic: Maybe<MatchPlayerRoleType>
  readonly stats: Maybe<MatchPlayerStatsType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly streakPrediction: Maybe<Scalars["Byte"]>
  readonly towerDamage: Maybe<Scalars["Int"]>
}

export type MatchPlayerWardDestuctionObjectType = {
  readonly __typename?: "MatchPlayerWardDestuctionObjectType"
  readonly experience: Maybe<Scalars["Int"]>
  readonly gold: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type MatchReplayUploadHeroDuoSummaryType = {
  readonly __typename?: "MatchReplayUploadHeroDuoSummaryType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly matchCountAgainst: Scalars["Int"]
  readonly matchCountWith: Scalars["Int"]
  readonly winCountAgainst: Scalars["Int"]
  readonly winCountWith: Scalars["Int"]
}

export type MatchReplayUploadHeroSummaryType = {
  readonly __typename?: "MatchReplayUploadHeroSummaryType"
  readonly banCountAgainst: Scalars["Int"]
  readonly banCountWith: Scalars["Int"]
  readonly duos: Maybe<ReadonlyArray<Maybe<MatchReplayUploadHeroDuoSummaryType>>>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly matchCountAgainst: Scalars["Int"]
  readonly matchCountWith: Scalars["Int"]
  readonly winCountAgainst: Scalars["Int"]
  readonly winCountWith: Scalars["Int"]
}

export type MatchReplayUploadMatchType = {
  readonly __typename?: "MatchReplayUploadMatchType"
  readonly didRadiantWin: Scalars["Boolean"]
  readonly direKills: Maybe<Scalars["Byte"]>
  readonly direTeam: Maybe<TeamType>
  readonly direTeamId: Maybe<Scalars["Int"]>
  readonly durationMinutes: Scalars["Int"]
  readonly durationSeconds: Maybe<Scalars["Short"]>
  readonly endDateTime: Maybe<Scalars["DateTime"]>
  readonly fileName: Scalars["String"]
  readonly gameMode: Maybe<Scalars["Byte"]>
  readonly gameVersionId: Scalars["Int"]
  readonly id: Maybe<Scalars["Long"]>
  readonly isActive: Scalars["Boolean"]
  readonly isComplete: Scalars["Boolean"]
  readonly isRadiantFirstPick: Scalars["Boolean"]
  readonly isValidated: Scalars["Boolean"]
  readonly league: Maybe<LeagueType>
  readonly leagueId: Maybe<Scalars["Int"]>
  readonly lobbyType: Maybe<Scalars["Byte"]>
  readonly matchUploadTeamId: Scalars["Int"]
  readonly notes: Maybe<Scalars["String"]>
  readonly numHumanPlayers: Maybe<Scalars["Byte"]>
  readonly numHumanSpectators: Maybe<Scalars["Byte"]>
  readonly players: Maybe<ReadonlyArray<Maybe<MatchReplayUploadPlayerType>>>
  readonly radiantKills: Maybe<Scalars["Byte"]>
  readonly radiantTeam: Maybe<TeamType>
  readonly radiantTeamId: Maybe<Scalars["Int"]>
  readonly seriesId: Maybe<Scalars["Long"]>
  readonly startDateTime: Maybe<Scalars["DateTime"]>
  readonly stats: Maybe<MatchReplayUploadStatsType>
  readonly uploaderCaptainJackIdentityId: Maybe<Scalars["Guid"]>
}

export type MatchReplayUploadOverviewType = {
  readonly __typename?: "MatchReplayUploadOverviewType"
  readonly matchCount: Scalars["Int"]
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchReplayUploadMatchType>>>
  readonly winCount: Scalars["Int"]
}

export type MatchReplayUploadPickBanType = {
  readonly __typename?: "MatchReplayUploadPickBanType"
  readonly bannedHeroId: Maybe<Scalars["Short"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly isPick: Scalars["Boolean"]
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly order: Maybe<Scalars["Byte"]>
  readonly playerSlot: Maybe<Scalars["Byte"]>
  readonly time: Maybe<Scalars["Byte"]>
  readonly wasBannedSuccessfully: Scalars["Boolean"]
}

export type MatchReplayUploadPlayerStatsItemsType = {
  readonly __typename?: "MatchReplayUploadPlayerStatsItemsType"
  readonly backpack0IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
  readonly backpack1IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
  readonly backpack2IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
  readonly item0IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
  readonly item1IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
  readonly item2IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
  readonly item3IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
  readonly item4IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
  readonly item5IdList: Maybe<ReadonlyArray<Maybe<Scalars["Byte"]>>>
}

export type MatchReplayUploadPlayerStatsType = {
  readonly __typename?: "MatchReplayUploadPlayerStatsType"
  readonly agilityTotalList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly assistsList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly bkbChargesUsedList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly campStackList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly claimedDenyCountList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly claimedMissCountList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly commandsIssuedList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly creepKillGoldList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly creepStackList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly damageBonusList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly damageMaxList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly damageMinList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly deathsList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly denyCountList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly goldLostToDeathList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly goldSpentOnBuybacksList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly goldSpentOnConsumablesList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly goldSpentOnItemsList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly goldSpentOnSupportList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly heroDamageList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly heroHealingList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly heroKillGoldList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly incomeGoldList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly intellectTotalList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly items: Maybe<MatchReplayUploadPlayerStatsItemsType>
  readonly killsList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly lastHitCountList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly lastHitMultiKillList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly lastHitStreakList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly levelList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly maxHealthList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly maxManaList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly missCountList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly nearbyCreepDeathCountList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly networthList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly observerWardsPlacedList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly reliableGoldList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly roshanKillsList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly runePicksupList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly sentryWardsPlacedList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly sharedGoldList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly streakList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly strengthTotalList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly stunsList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly totalEarnedGoldList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly totalEarnedXpList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly towerDamageList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly towerKillsList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly unreliableGoldList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly wardsDestroyedList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly wardsPurchasedList: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
}

export type MatchReplayUploadPlayerType = {
  readonly __typename?: "MatchReplayUploadPlayerType"
  readonly assists: Maybe<Scalars["Byte"]>
  readonly backpack0Id: Maybe<Scalars["Short"]>
  readonly backpack1Id: Maybe<Scalars["Short"]>
  readonly backpack2Id: Maybe<Scalars["Short"]>
  readonly deaths: Maybe<Scalars["Byte"]>
  readonly denies: Maybe<Scalars["Short"]>
  readonly experiencePerMinute: Maybe<Scalars["Short"]>
  readonly goldPerMinute: Maybe<Scalars["Short"]>
  readonly goldSpentOnBuybacks: Maybe<Scalars["Int"]>
  readonly goldSpentOnConsumables: Maybe<Scalars["Int"]>
  readonly goldSpentOnItems: Maybe<Scalars["Int"]>
  readonly goldSpentOnSupport: Maybe<Scalars["Int"]>
  readonly heroDamage: Scalars["Int"]
  readonly heroHealing: Scalars["Int"]
  readonly heroId: Maybe<Scalars["Short"]>
  readonly isDire: Scalars["Boolean"]
  readonly isRadiant: Scalars["Boolean"]
  readonly isVictory: Scalars["Boolean"]
  readonly item0Id: Maybe<Scalars["Short"]>
  readonly item1Id: Maybe<Scalars["Short"]>
  readonly item2Id: Maybe<Scalars["Short"]>
  readonly item3Id: Maybe<Scalars["Short"]>
  readonly item4Id: Maybe<Scalars["Short"]>
  readonly item5Id: Maybe<Scalars["Short"]>
  readonly kills: Maybe<Scalars["Byte"]>
  readonly lane: Maybe<MatchLaneType>
  readonly lastHits: Maybe<Scalars["Short"]>
  readonly level: Maybe<Scalars["Byte"]>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly matchUploadTeamId: Scalars["Int"]
  readonly networth: Scalars["Int"]
  readonly pickOrder: Maybe<Scalars["Byte"]>
  readonly playerSlot: Maybe<Scalars["Byte"]>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly role: Maybe<MatchPlayerRoleType>
  readonly stats: Maybe<MatchReplayUploadPlayerStatsType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly teamPickOrder: Maybe<MatchPlayerTeamPickOrderType>
  readonly teamSlot: Maybe<Scalars["Byte"]>
  readonly totalGoldSpent: Scalars["Int"]
  readonly towerDamage: Scalars["Int"]
  readonly towerKills: Maybe<Scalars["Short"]>
}

export type MatchReplayUploadStatsType = {
  readonly __typename?: "MatchReplayUploadStatsType"
  readonly pickBans: Maybe<ReadonlyArray<Maybe<MatchReplayUploadPickBanType>>>
  readonly spectators: Maybe<ReadonlyArray<Maybe<Scalars["Long"]>>>
}

export type MatchReplayUploadTeamMemberType = {
  readonly __typename?: "MatchReplayUploadTeamMemberType"
  readonly captainJackIdentityId: Maybe<Scalars["Guid"]>
  readonly isAdmin: Scalars["Boolean"]
  readonly isDefaultTeam: Scalars["Boolean"]
  readonly matchUploadTeamId: Scalars["Int"]
  readonly steamAccount: Maybe<SteamAccountType>
}

export type MatchReplayUploadTeamType = {
  readonly __typename?: "MatchReplayUploadTeamType"
  readonly creatorCaptainJackIdentityId: Maybe<Scalars["Guid"]>
  readonly email: Scalars["String"]
  readonly id: Scalars["Int"]
  readonly isDefault: Maybe<Scalars["Boolean"]>
  readonly members: Maybe<ReadonlyArray<Maybe<MatchReplayUploadTeamMemberType>>>
  readonly name: Scalars["String"]
  readonly team: Maybe<TeamType>
  readonly teamId: Scalars["Int"]
}

export type MatchStatsChatEventType = {
  readonly __typename?: "MatchStatsChatEventType"
  readonly fromHeroId: Maybe<Scalars["Short"]>
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly pausedTick: Maybe<Scalars["Int"]>
  readonly time: Maybe<Scalars["Int"]>
  readonly toHeroId: Maybe<Scalars["Short"]>
  readonly type: Maybe<Scalars["Int"]>
  readonly value: Maybe<Scalars["Short"]>
}

export type MatchStatsLaneReportFactionLaneObject = {
  readonly __typename?: "MatchStatsLaneReportFactionLaneObject"
  readonly denyCount: Scalars["Int"]
  readonly meleeCount: Scalars["Int"]
  readonly neutralCount: Scalars["Int"]
  readonly rangeCount: Scalars["Int"]
  readonly siegeCount: Scalars["Int"]
}

export type MatchStatsLaneReportFactionObjectType = {
  readonly __typename?: "MatchStatsLaneReportFactionObjectType"
  readonly midLane: Maybe<MatchStatsLaneReportFactionLaneObject>
  readonly offLane: Maybe<MatchStatsLaneReportFactionLaneObject>
  readonly safeLane: Maybe<MatchStatsLaneReportFactionLaneObject>
}

export type MatchStatsLaneReportType = {
  readonly __typename?: "MatchStatsLaneReportType"
  readonly dire: Maybe<ReadonlyArray<Maybe<MatchStatsLaneReportFactionObjectType>>>
  readonly radiant: Maybe<ReadonlyArray<Maybe<MatchStatsLaneReportFactionObjectType>>>
}

export type MatchStatsOutpostReportObjectType = {
  readonly __typename?: "MatchStatsOutpostReportObjectType"
  readonly isControlledByRadiant: Scalars["Boolean"]
  readonly isRadiantSide: Scalars["Boolean"]
  readonly npcId: Maybe<Scalars["Int"]>
}

export type MatchStatsPickBanType = {
  readonly __typename?: "MatchStatsPickBanType"
  readonly adjustedWinRate: Maybe<Scalars["Byte"]>
  readonly bannedHeroId: Maybe<Scalars["Short"]>
  readonly baseWinRate: Maybe<Scalars["Byte"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly isPick: Scalars["Boolean"]
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly letter: Maybe<Scalars["Int"]>
  readonly order: Maybe<Scalars["Int"]>
  readonly playerIndex: Maybe<Scalars["Int"]>
  readonly team: Maybe<Scalars["Int"]>
  readonly wasBannedSuccessfully: Maybe<Scalars["Boolean"]>
}

export type MatchStatsTowerDeathType = {
  readonly __typename?: "MatchStatsTowerDeathType"
  readonly attacker: Maybe<Scalars["Short"]>
  readonly isRadiant: Maybe<Scalars["Boolean"]>
  readonly npcId: Maybe<Scalars["Short"]>
  readonly time: Maybe<Scalars["Int"]>
}

export type MatchStatsTowerReportObjectType = {
  readonly __typename?: "MatchStatsTowerReportObjectType"
  readonly hp: Maybe<Scalars["Int"]>
  readonly npcId: Maybe<Scalars["Int"]>
}

export type MatchStatsTowerReportType = {
  readonly __typename?: "MatchStatsTowerReportType"
  /** This an index of every 5 minutes of the starting at minute 0. So Index 0 is Minute 0, Index 1 is 5 minutes, Index 2 is 10 minutes, etc. */
  readonly outposts: Maybe<ReadonlyArray<Maybe<MatchStatsOutpostReportObjectType>>>
  /** This an index of every 5 minutes of the starting at minute 0. So Index 0 is Minute 0, Index 1 is 5 minutes, Index 2 is 10 minutes, etc. */
  readonly towers: Maybe<ReadonlyArray<Maybe<MatchStatsTowerReportObjectType>>>
}

export type MatchStatsType = {
  readonly __typename?: "MatchStatsType"
  readonly chatEvents: Maybe<ReadonlyArray<Maybe<MatchStatsChatEventType>>>
  /** This begins at -60 to 0 seconds (Index 0). */
  readonly direKills: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly laneReport: Maybe<MatchStatsLaneReportType>
  readonly matchId: Maybe<Scalars["Long"]>
  /** This begins at -60 to 0 seconds (Index 0). */
  readonly pickBans: Maybe<ReadonlyArray<Maybe<MatchStatsPickBanType>>>
  readonly predictedWinRates: Maybe<ReadonlyArray<Maybe<Scalars["Decimal"]>>>
  /** This begins at -60 to 0 seconds (Index 0). */
  readonly radiantExperienceLeads: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  /** This begins at -60 to 0 seconds (Index 0). */
  readonly radiantKills: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  /** This begins at -60 to 0 seconds (Index 0). */
  readonly radiantNetworthLeads: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly towerDeaths: Maybe<ReadonlyArray<Maybe<MatchStatsTowerDeathType>>>
  readonly towerStatus: Maybe<ReadonlyArray<Maybe<MatchStatsTowerReportType>>>
  readonly winRates: Maybe<ReadonlyArray<Maybe<Scalars["Decimal"]>>>
}

export type MatchType = {
  readonly __typename?: "MatchType"
  readonly actualRank: Maybe<Scalars["Short"]>
  readonly analysisOutcome: Maybe<MatchAnalysisOutcomeType>
  readonly averageImp: Maybe<Scalars["Short"]>
  readonly averageRank: Maybe<Scalars["Short"]>
  readonly barracksStatusDire: Maybe<Scalars["Short"]>
  readonly barracksStatusRadiant: Maybe<Scalars["Short"]>
  readonly bottomLaneOutcome: Maybe<LaneOutcomeEnums>
  readonly bracket: Maybe<Scalars["Byte"]>
  readonly clusterId: Maybe<Scalars["Int"]>
  readonly didRadiantWin: Maybe<Scalars["Boolean"]>
  readonly direTeam: Maybe<TeamType>
  readonly direTeamId: Maybe<Scalars["Int"]>
  readonly durationSeconds: Maybe<Scalars["Int"]>
  readonly endDateTime: Maybe<Scalars["Long"]>
  readonly firstBloodTime: Maybe<Scalars["Int"]>
  readonly gameMode: Maybe<GameModeEnumType>
  readonly gameVersionId: Maybe<Scalars["Short"]>
  readonly id: Maybe<Scalars["Long"]>
  readonly isStats: Maybe<Scalars["Boolean"]>
  readonly league: Maybe<LeagueType>
  readonly leagueId: Maybe<Scalars["Int"]>
  readonly lobbyType: Maybe<LobbyTypeEnum>
  readonly midLaneOutcome: Maybe<LaneOutcomeEnums>
  readonly numHumanPlayers: Maybe<Scalars["Int"]>
  readonly parsedDateTime: Maybe<Scalars["Long"]>
  readonly playbackData: Maybe<MatchPlaybackDataType>
  readonly players: Maybe<ReadonlyArray<Maybe<MatchPlayerType>>>
  readonly predictedOutcomeWeight: Maybe<Scalars["Byte"]>
  readonly radiantTeam: Maybe<TeamType>
  readonly radiantTeamId: Maybe<Scalars["Int"]>
  readonly rank: Maybe<Scalars["Int"]>
  readonly regionId: Maybe<Scalars["Byte"]>
  readonly replaySalt: Maybe<Scalars["Long"]>
  readonly sequenceNum: Maybe<Scalars["Long"]>
  readonly series: Maybe<SeriesType>
  readonly seriesId: Maybe<Scalars["Long"]>
  readonly spectators: Maybe<ReadonlyArray<Maybe<MatchPlayerSpectatorType>>>
  readonly startDateTime: Maybe<Scalars["Long"]>
  readonly stats: Maybe<MatchStatsType>
  readonly statsDateTime: Maybe<Scalars["Long"]>
  readonly topLaneOutcome: Maybe<LaneOutcomeEnums>
  readonly tournamentId: Maybe<Scalars["Int"]>
  readonly tournamentRound: Maybe<Scalars["Short"]>
  readonly towerStatusDire: Maybe<Scalars["Int"]>
  readonly towerStatusRadiant: Maybe<Scalars["Int"]>
}

export type MatchTypePlayersArgs = {
  steamAccountId: InputMaybe<Scalars["Long"]>
}

export type MatchesDayType = {
  readonly __typename?: "MatchesDayType"
  readonly day: Scalars["Long"]
  readonly matchCount: Scalars["Int"]
}

export type MatchesGameVersionType = {
  readonly __typename?: "MatchesGameVersionType"
  readonly gameVersionId: Scalars["Short"]
  readonly matchCount: Scalars["Int"]
}

export type MatchesHourType = {
  readonly __typename?: "MatchesHourType"
  readonly hour: Scalars["Long"]
  readonly matchCount: Scalars["Int"]
}

export type MatchesMonthType = {
  readonly __typename?: "MatchesMonthType"
  readonly matchCount: Scalars["Int"]
  readonly month: Scalars["Long"]
}

export type MatchesWeekType = {
  readonly __typename?: "MatchesWeekType"
  readonly matchCount: Scalars["Int"]
  readonly week: Scalars["Long"]
}

export type MatchmakingStatsType = {
  readonly __typename?: "MatchmakingStatsType"
  readonly australia: Scalars["Int"]
  readonly austria: Scalars["Int"]
  readonly brazil: Scalars["Int"]
  readonly chile: Scalars["Int"]
  readonly dubai: Scalars["Int"]
  readonly europe: Scalars["Int"]
  readonly india: Scalars["Int"]
  readonly japan: Scalars["Int"]
  readonly perfectWorldTelecom: Scalars["Int"]
  readonly perfectWorldTelecomGuangdong: Scalars["Int"]
  readonly perfectWorldTelecomWuhan: Scalars["Int"]
  readonly perfectWorldTelecomZhejiang: Scalars["Int"]
  readonly perfectWorldUnicom: Scalars["Int"]
  readonly perfectWorldUnicomTianjin: Scalars["Int"]
  readonly peru: Scalars["Int"]
  readonly singapore: Scalars["Int"]
  readonly southAfrica: Scalars["Int"]
  readonly stockholm: Scalars["Int"]
  readonly taiwan: Scalars["Int"]
  readonly time: Scalars["Long"]
  readonly uSEast: Scalars["Int"]
  readonly uSWest: Scalars["Int"]
}

export type MatchplaybackDataCourierEventObjectType = {
  readonly __typename?: "MatchplaybackDataCourierEventObjectType"
  readonly didCastBoost: Maybe<Scalars["Boolean"]>
  readonly hp: Maybe<Scalars["Int"]>
  readonly isFlying: Maybe<Scalars["Boolean"]>
  readonly item0Id: Maybe<Scalars["Int"]>
  readonly item1Id: Maybe<Scalars["Int"]>
  readonly item2Id: Maybe<Scalars["Int"]>
  readonly item3Id: Maybe<Scalars["Int"]>
  readonly item4Id: Maybe<Scalars["Int"]>
  readonly item5Id: Maybe<Scalars["Int"]>
  readonly positionX: Maybe<Scalars["Int"]>
  readonly positionY: Maybe<Scalars["Int"]>
  readonly respawnTime: Maybe<Scalars["Int"]>
  readonly time: Scalars["Int"]
}

export type MergeProSteamAccountRequestType = {
  readonly name: Scalars["String"]
  readonly realName: InputMaybe<Scalars["String"]>
  readonly steamAccountId: InputMaybe<Scalars["Long"]>
}

export type ModifierType = {
  readonly __typename?: "ModifierType"
  readonly buffDuration: Maybe<Scalars["Int"]>
  readonly id: Maybe<Scalars["Short"]>
  readonly isArmorReduce: Maybe<Scalars["Boolean"]>
  readonly isAttackReduce: Maybe<Scalars["Boolean"]>
  readonly isAttackSlow: Maybe<Scalars["Boolean"]>
  readonly isBanished: Maybe<Scalars["Boolean"]>
  readonly isBlind: Maybe<Scalars["Boolean"]>
  readonly isBreak: Maybe<Scalars["Boolean"]>
  readonly isCyclone: Maybe<Scalars["Boolean"]>
  readonly isDamageAmplified: Maybe<Scalars["Boolean"]>
  readonly isDisarm: Maybe<Scalars["Boolean"]>
  readonly isEthereal: Maybe<Scalars["Boolean"]>
  readonly isHex: Maybe<Scalars["Boolean"]>
  readonly isInvisible: Maybe<Scalars["Boolean"]>
  readonly isItem: Maybe<Scalars["Boolean"]>
  readonly isKnockback: Maybe<Scalars["Boolean"]>
  readonly isMovementDebuff: Maybe<Scalars["Boolean"]>
  readonly isMovementSlow: Maybe<Scalars["Boolean"]>
  readonly isMute: Maybe<Scalars["Boolean"]>
  readonly isRoot: Maybe<Scalars["Boolean"]>
  readonly isShackle: Maybe<Scalars["Boolean"]>
  readonly isSilence: Maybe<Scalars["Boolean"]>
  readonly isSleep: Maybe<Scalars["Boolean"]>
  readonly isStun: Maybe<Scalars["Boolean"]>
  readonly isTaunt: Maybe<Scalars["Boolean"]>
  readonly isWeaken: Maybe<Scalars["Boolean"]>
  readonly name: Maybe<Scalars["String"]>
}

export type NewsItemType = {
  readonly __typename?: "NewsItemType"
  readonly author: Scalars["String"]
  readonly contents: Scalars["String"]
  readonly date: Maybe<Scalars["Long"]>
  readonly feedLabel: Scalars["String"]
  readonly feedName: Scalars["String"]
  readonly id: Maybe<Scalars["Long"]>
  readonly title: Scalars["String"]
  readonly uri: Scalars["String"]
}

export type NpcStatType = {
  readonly __typename?: "NpcStatType"
  readonly attackAnimationPoint: Maybe<Scalars["Float"]>
  readonly attackDamageMax: Maybe<Scalars["Float"]>
  readonly attackDamageMin: Maybe<Scalars["Float"]>
  readonly attackDesire: Maybe<Scalars["Float"]>
  readonly attackRange: Maybe<Scalars["Float"]>
  readonly attackRangeBuffer: Maybe<Scalars["Float"]>
  readonly attackRate: Maybe<Scalars["Float"]>
  readonly autoAttacksByDefault: Maybe<Scalars["Boolean"]>
  readonly canBeDominated: Maybe<Scalars["Boolean"]>
  readonly combatClassAttack: Maybe<Scalars["String"]>
  readonly combatClassDefend: Maybe<Scalars["String"]>
  readonly dayTimeVision: Maybe<Scalars["Float"]>
  readonly hasInventory: Maybe<Scalars["Boolean"]>
  readonly isAncient: Maybe<Scalars["Boolean"]>
  readonly isNeutralUnitType: Maybe<Scalars["Boolean"]>
  readonly level: Maybe<Scalars["Float"]>
  readonly movementSpeed: Maybe<Scalars["Float"]>
  readonly movementTurnRate: Maybe<Scalars["Float"]>
  readonly nightTimeVision: Maybe<Scalars["Float"]>
  readonly projectileSpeed: Maybe<Scalars["Float"]>
  readonly statusHealth: Maybe<Scalars["Float"]>
  readonly statusHealthRegen: Maybe<Scalars["Float"]>
  readonly statusMana: Maybe<Scalars["Float"]>
  readonly statusManaRegen: Maybe<Scalars["Float"]>
  readonly teamName: Maybe<Scalars["String"]>
  readonly unitRelationshipClass: Maybe<Scalars["String"]>
  readonly wakesNeutrals: Maybe<Scalars["Boolean"]>
}

export type NpcType = {
  readonly __typename?: "NpcType"
  readonly id: Maybe<Scalars["Short"]>
  readonly name: Maybe<Scalars["String"]>
  readonly stat: Maybe<NpcStatType>
}

export type PageAghanimQuery = {
  readonly __typename?: "PageAghanimQuery"
  /** Returns all the Abilities for a Hero on the TI10 (2020) summer event. */
  readonly heroAbility: Maybe<ReadonlyArray<Maybe<Ti2020CustomGameHeroAbilityType>>>
  /** Returns all the combinations of Heroes and their success on the TI10 (2020) summer event. */
  readonly heroComposition: Maybe<Ti2020CustomGameHeroCompositionType>
  /** Returns all the combinations of Heroes and their success on the TI10 (2020) summer event. */
  readonly heroCompositions: Maybe<
    ReadonlyArray<Maybe<Ti2020CustomGameHeroCompositionType>>
  >
  /** Returns a match by Id based on the TI10 (2020) summer event. */
  readonly match: Maybe<Ti2020CustomGameMatchType>
  /** Returns a list of matches by based on the TI10 (2020) summer event. */
  readonly matches: Maybe<ReadonlyArray<Maybe<Ti2020CustomGameMatchType>>>
  /** Returns all the Room Types by Difficulty for the TI10 (2020) summer event. */
  readonly room: Maybe<ReadonlyArray<Maybe<Ti2020CustomGameRoomType>>>
  /** Returns all the Room Modifiers by Difficulty for the TI10 (2020) summer event. */
  readonly roomModifier: Maybe<ReadonlyArray<Maybe<Ti2020CustomGameRoomModifierType>>>
  /** Returns the last 3 days winrate for each hero by Difficulty in the TI10 (2020) summer event. */
  readonly winRate: Maybe<Ti2020CustomGameHeroWinRateType>
}

export type PageAghanimQueryHeroAbilityArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType
}

export type PageAghanimQueryHeroCompositionArgs = {
  difficulty: Ti2020CustomGameMatchDifficultyType
  heroIds: ReadonlyArray<InputMaybe<Scalars["Short"]>>
}

export type PageAghanimQueryHeroCompositionsArgs = {
  request: FilterTi2020HeroCompositionRequestType
}

export type PageAghanimQueryMatchArgs = {
  id: Scalars["Long"]
}

export type PageAghanimQueryMatchesArgs = {
  request: InputMaybe<FilterTi2020MatchRequestType>
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
  readonly __typename?: "PageDireTide2020Query"
  /** Returns a match by Id based on the 2020 Halloween Event DireTide. */
  readonly match: Maybe<DireTide2020CustomGameMatchType>
  /** Returns a list of matches by based on the 2020 Halloween Event DireTide. */
  readonly matches: Maybe<ReadonlyArray<Maybe<DireTide2020CustomGameMatchType>>>
  /** Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id. */
  readonly winHour: Maybe<ReadonlyArray<Maybe<DireTide2020CustomGameHeroWinDayType>>>
}

export type PageDireTide2020QueryMatchArgs = {
  id: Scalars["Long"]
}

export type PageDireTide2020QueryMatchesArgs = {
  request: InputMaybe<FilterDireTide2020CustomMatchRequestType>
}

export type PageDireTide2020QueryWinHourArgs = {
  take: InputMaybe<Scalars["Int"]>
}

export type PageLeaguesQuery = {
  readonly __typename?: "PageLeaguesQuery"
  /** Returns the last 12 hours by hour showing the amount of matches. */
  readonly dpcPositionStats: Maybe<ReadonlyArray<Maybe<LeagueDpcPositionStatObjectType>>>
}

export type PageMatchesQuery = {
  readonly __typename?: "PageMatchesQuery"
  /** Returns the last 12 days by day showing the amount of matches. */
  readonly matchesStatsDay: Maybe<ReadonlyArray<Maybe<MatchesDayType>>>
  /** Returns the data by game version showing the amount of matches. */
  readonly matchesStatsGameVersion: Maybe<ReadonlyArray<Maybe<MatchesGameVersionType>>>
  /** Returns the last 12 hours by hour showing the amount of matches. */
  readonly matchesStatsHour: Maybe<ReadonlyArray<Maybe<MatchesHourType>>>
  /** Returns the data by month showing the amount of matches. */
  readonly matchesStatsMonth: Maybe<ReadonlyArray<Maybe<MatchesMonthType>>>
  /** Returns the last 12 weeks by week showing the amount of matches. */
  readonly matchesStatsWeek: Maybe<ReadonlyArray<Maybe<MatchesWeekType>>>
  /** Amount of players who are active and searching for a game in this region. */
  readonly matchmakingStats: Maybe<ReadonlyArray<Maybe<MatchmakingStatsType>>>
}

export type PageMatchesQueryMatchesStatsDayArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  take: InputMaybe<Scalars["Int"]>
}

export type PageMatchesQueryMatchesStatsGameVersionArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  take: InputMaybe<Scalars["Int"]>
}

export type PageMatchesQueryMatchesStatsHourArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  take: InputMaybe<Scalars["Int"]>
}

export type PageMatchesQueryMatchesStatsMonthArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  take: InputMaybe<Scalars["Int"]>
}

export type PageMatchesQueryMatchesStatsWeekArgs = {
  bracketIds: InputMaybe<ReadonlyArray<InputMaybe<RankBracket>>>
  gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<GameModeEnumType>>>
  regionIds: InputMaybe<ReadonlyArray<InputMaybe<BasicRegionType>>>
  take: InputMaybe<Scalars["Int"]>
}

export type PagePlayerQuery = {
  readonly __typename?: "PagePlayerQuery"
  /** Returns a general player summary of random set of predefinded filters. */
  readonly breakdown: Maybe<PlayerBreakdownType>
  /** Returns the violations commited by a player in their last 500 games. */
  readonly conduct: Maybe<PlayerConductResponseType>
  /** A more in depth at a single player's single hero performance. */
  readonly heroPerformance: Maybe<PlayerPerformanceType>
  /** Returns a list of all heroes played by the steam account id and contains data about the average performance. */
  readonly heroesPerformance: Maybe<ReadonlyArray<Maybe<PlayerHeroesPerformanceType>>>
  /** Returns a list of players that the player has played with. */
  readonly peers: Maybe<ReadonlyArray<Maybe<PlayerTeammateType>>>
  /** Provided in-depth look of a player and how they proform globally on all heroes. */
  readonly performance: Maybe<PlayerPerformanceType>
  /** Picked the top pros and annoucers and determines if you ever have played with them and when. */
  readonly playedWithPro: Maybe<PlayerPlayedWithProType>
  /** Get very simple data for the on-hover of a player icon. */
  readonly simpleSummary: Maybe<PlayerCardHoverType>
}

export type PagePlayerQueryBreakdownArgs = {
  request: PlayerBreakdownRequestType
}

export type PagePlayerQueryHeroPerformanceArgs = {
  heroId: Scalars["Short"]
  request: PlayerHeroPerformanceMatchesRequestType
}

export type PagePlayerQueryHeroesPerformanceArgs = {
  request: InputMaybe<PlayerHeroesPerformanceMatchesRequestType>
}

export type PagePlayerQueryPeersArgs = {
  request: PlayerTeammatesGroupByRequestType
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type PagePlayerQueryPerformanceArgs = {
  request: PlayerPerformanceMatchesRequestType
}

export type PagePlayersQuery = {
  readonly __typename?: "PagePlayersQuery"
  /** Endpoint which breaks down all the SteamAccounts in the database by their current season rank. */
  readonly steamAccountByRank: Maybe<ReadonlyArray<Maybe<SteamAccountByRankType>>>
}

export type PageQuery = {
  readonly __typename?: "PageQuery"
  /** Endpoints for the TI10 (2020) regarding the summer event. */
  readonly aghanim: Maybe<PageAghanimQuery>
  readonly direTide2020: Maybe<PageDireTide2020Query>
  /** Endpoints for Imp Related calls. */
  readonly imp: Maybe<ImpQuery>
  /** STRATZ specific endpoints found on the /leagues/ section of the website.  */
  readonly leagues: Maybe<PageLeaguesQuery>
  /** STRATZ specific endpoints found on the /matches/ section of the website.  */
  readonly matches: Maybe<PageMatchesQuery>
  /** STRATZ specific endpoints found on the /player/ section of the website. id is a required input field. */
  readonly player: Maybe<PagePlayerQuery>
  /** STRATZ specific endpoints found on the /players/ section of the website.  */
  readonly players: Maybe<PagePlayersQuery>
}

export type PageQueryPlayerArgs = {
  steamAccountId: Scalars["Long"]
}

export type PatchNoteLanguageType = {
  readonly __typename?: "PatchNoteLanguageType"
  readonly abilityId: Maybe<Scalars["Short"]>
  readonly gameVersionId: Maybe<Scalars["Short"]>
  readonly generalId: Maybe<PatchNoteType>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly id: Maybe<Scalars["String"]>
  readonly index: Maybe<Scalars["Byte"]>
  readonly itemId: Maybe<Scalars["Short"]>
  readonly languageId: Maybe<Scalars["Byte"]>
  readonly text: Maybe<Scalars["String"]>
}

export enum PatchNoteType {
  General = "GENERAL",
  Generic = "GENERIC",
  Hero = "HERO",
  Item = "ITEM",
  Npc = "NPC",
}

export type PlayerAbilityType = {
  readonly __typename?: "PlayerAbilityType"
  readonly abilityId: Scalars["Int"]
  readonly abilityType: Maybe<AbilityType>
  readonly gameVersionId: Maybe<Scalars["Short"]>
  readonly isTalent: Maybe<Scalars["Boolean"]>
  readonly level: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type PlayerAbilityTypeAbilityTypeArgs = {
  gameVerionId: InputMaybe<Scalars["Int"]>
  langaugeId: InputMaybe<Scalars["Int"]>
}

export type PlayerActivitySummaryHeroType = {
  readonly __typename?: "PlayerActivitySummaryHeroType"
  readonly heroId: Maybe<Scalars["Int"]>
  readonly lossCount: Maybe<Scalars["Int"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type PlayerActivitySummaryType = {
  readonly __typename?: "PlayerActivitySummaryType"
  readonly activity: Maybe<PlayerBehaviorActivity>
  readonly coreCount: Maybe<Scalars["Int"]>
  readonly heroes: Maybe<ReadonlyArray<Maybe<PlayerActivitySummaryHeroType>>>
  readonly imp: Maybe<Scalars["Int"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly supportCount: Maybe<Scalars["Int"]>
}

export type PlayerBadgeType = {
  readonly __typename?: "PlayerBadgeType"
  readonly badgeId: Maybe<Scalars["Byte"]>
  readonly createdDateTime: Maybe<Scalars["Long"]>
  readonly slot: Maybe<Scalars["Byte"]>
}

export type PlayerBattlePassResponseType = {
  readonly __typename?: "PlayerBattlePassResponseType"
  readonly accountsAbove75Count: Scalars["Int"]
  readonly accountsAbove195Count: Scalars["Int"]
  readonly accountsAbove225Count: Scalars["Int"]
  readonly accountsAbove275Count: Scalars["Int"]
  readonly accountsAbove330Count: Scalars["Int"]
  readonly accountsAbove500Count: Scalars["Int"]
  readonly accountsAbove1000Count: Scalars["Int"]
  readonly accountsAbove2000Count: Scalars["Int"]
  readonly playerCount: Scalars["Int"]
  readonly players: Maybe<ReadonlyArray<Maybe<PlayerBattlePassType>>>
}

export type PlayerBattlePassType = {
  readonly __typename?: "PlayerBattlePassType"
  readonly activity: Maybe<Scalars["Byte"]>
  readonly level: Scalars["Int"]
  readonly steamAccount: Maybe<SteamAccountType>
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
  readonly __typename?: "PlayerBreakdownObjectType"
  readonly id: Maybe<Scalars["Int"]>
  readonly imp: Maybe<Scalars["Int"]>
  readonly lastSeenDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Scalars["Int"]
  readonly win: Maybe<Scalars["Int"]>
}

export type PlayerBreakdownRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** Whether the match is a league match or not. */
  readonly isLeague: InputMaybe<Scalars["Boolean"]>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** Whether the specified player was on Radiant or not. */
  readonly isRadiant: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** Whether the match has a team assigned or not. */
  readonly isTeam: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  readonly maxDuration: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  readonly maxGameVersionId: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  readonly minDuration: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  readonly minGameVersionId: InputMaybe<Scalars["Int"]>
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  readonly partyCounts: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  readonly teamId: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type PlayerBreakdownType = {
  readonly __typename?: "PlayerBreakdownType"
  readonly dayOfWeekMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly durationMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly factionMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly gameModeMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly heroAttributeMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly impMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly isStatsMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly laneMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly lobbyMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly matches: Maybe<PlayerBreakdownObjectType>
  readonly partyMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly rankMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly regionMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly roleMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly timeOfDayMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
  readonly weekEndMatches: Maybe<ReadonlyArray<Maybe<PlayerBreakdownObjectType>>>
}

export type PlayerCardHoverHeroType = {
  readonly __typename?: "PlayerCardHoverHeroType"
  readonly heroId: Scalars["Int"]
  readonly lossCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
}

export type PlayerCardHoverType = {
  readonly __typename?: "PlayerCardHoverType"
  readonly activity: Maybe<Scalars["Byte"]>
  readonly coreCount: Maybe<Scalars["Int"]>
  readonly heroes: Maybe<PlayerCardHoverHeroType>
  readonly imp: Maybe<Scalars["Int"]>
  readonly lastUpdateDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly supportCount: Maybe<Scalars["Int"]>
}

export type PlayerCoachingLeaderboardResponseType = {
  readonly __typename?: "PlayerCoachingLeaderboardResponseType"
  readonly accounts: Scalars["Int"]
  readonly accountsAbove500: Scalars["Int"]
  readonly accountsAbove2500: Scalars["Int"]
  readonly players: Maybe<PlayerCoachingLeaderboardType>
}

export type PlayerCoachingLeaderboardType = {
  readonly __typename?: "PlayerCoachingLeaderboardType"
  readonly activity: Maybe<Scalars["Byte"]>
  readonly firstMatchDateTime: Maybe<Scalars["Long"]>
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Scalars["Int"]
  readonly rating: Scalars["Int"]
  readonly steamAccount: Maybe<SteamAccountType>
  readonly winCount: Scalars["Int"]
}

export type PlayerConductResponseType = {
  readonly __typename?: "PlayerConductResponseType"
  readonly behaviorScore: Maybe<Scalars["Short"]>
  readonly lastIncidentDateTime: Maybe<Scalars["Long"]>
  readonly lastIncidentMatchId: Maybe<Scalars["Long"]>
  readonly recentMatchIncidents: Maybe<ReadonlyArray<Maybe<Scalars["Short"]>>>
}

export type PlayerDraftHeroHighlightType = {
  readonly __typename?: "PlayerDraftHeroHighlightType"
  readonly impAllTime: Maybe<Scalars["Int"]>
  readonly impLastMonth: Maybe<Scalars["Int"]>
  readonly impLastSixMonths: Maybe<Scalars["Int"]>
  readonly lastPlayed: Maybe<Scalars["Long"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly matchCountLastMonth: Maybe<Scalars["Int"]>
  readonly matchCountLastSixMonths: Maybe<Scalars["Int"]>
  readonly mvpCountLastMonth: Maybe<Scalars["Int"]>
  readonly topCoreCountLastMonth: Maybe<Scalars["Int"]>
  readonly topSupportCountLastMonth: Maybe<Scalars["Int"]>
  readonly winCount: Maybe<Scalars["Int"]>
  readonly winCountLastMonth: Maybe<Scalars["Int"]>
  readonly winCountLastSixMonths: Maybe<Scalars["Int"]>
}

export type PlayerHeroDotaPlusLeaderboardRankResponseType = {
  readonly __typename?: "PlayerHeroDotaPlusLeaderboardRankResponseType"
  readonly players: Maybe<ReadonlyArray<Maybe<HeroDotaPlusLeaderboardRankType>>>
}

export type PlayerHeroPerformanceLongestStreakType = {
  readonly __typename?: "PlayerHeroPerformanceLongestStreakType"
  readonly currentStreak: Maybe<Scalars["Int"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly longestStreak: Maybe<Scalars["Int"]>
}

export type PlayerHeroPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** Whether the match is a league match or not. */
  readonly isLeague: InputMaybe<Scalars["Boolean"]>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** Whether the specified player was on Radiant or not. */
  readonly isRadiant: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** Whether the match has a team assigned or not. */
  readonly isTeam: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  readonly matchGroupOrderBy: InputMaybe<FilterMatchGroupOrderByEnum>
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  readonly maxDuration: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  readonly maxGameVersionId: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  readonly minDuration: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  readonly minGameVersionId: InputMaybe<Scalars["Int"]>
  /** If the return should be ordered by Ascending or Desending order. */
  readonly orderBy: InputMaybe<FindMatchPlayerOrderBy>
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  readonly partyCounts: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  readonly teamId: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type PlayerHeroesPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** Whether the match is a league match or not. */
  readonly isLeague: InputMaybe<Scalars["Boolean"]>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** Whether the specified player was on Radiant or not. */
  readonly isRadiant: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** Whether the match has a team assigned or not. */
  readonly isTeam: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  readonly maxDuration: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  readonly maxGameVersionId: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  readonly minDuration: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  readonly minGameVersionId: InputMaybe<Scalars["Int"]>
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  readonly partyCounts: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  readonly teamId: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type PlayerHeroesPerformanceScoreType = {
  readonly __typename?: "PlayerHeroesPerformanceScoreType"
  readonly id: Maybe<MatchPlayerPositionType>
  readonly imp: Maybe<Scalars["Int"]>
  readonly matchCount: Scalars["Int"]
  readonly score: Scalars["Float"]
  readonly winCount: Scalars["Int"]
}

export type PlayerHeroesPerformanceType = {
  readonly __typename?: "PlayerHeroesPerformanceType"
  readonly avgAssists: Maybe<Scalars["Float"]>
  readonly avgDeaths: Maybe<Scalars["Float"]>
  readonly avgKills: Maybe<Scalars["Float"]>
  readonly best: Maybe<Scalars["Float"]>
  readonly duration: Scalars["Int"]
  readonly experiencePerMinute: Scalars["Int"]
  readonly goldPerMinute: Scalars["Int"]
  readonly hero: Maybe<HeroType>
  readonly heroId: Scalars["Short"]
  readonly imp: Maybe<Scalars["Int"]>
  readonly kDA: Maybe<Scalars["Float"]>
  readonly lastPlayedDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Scalars["Int"]
  readonly positionScore: Maybe<ReadonlyArray<Maybe<PlayerHeroesPerformanceScoreType>>>
  readonly winCount: Scalars["Int"]
}

export type PlayerLeaderBoardByHeroType = {
  readonly __typename?: "PlayerLeaderBoardByHeroType"
  readonly changeInRanking: Maybe<Scalars["Short"]>
  readonly createdDateTime: Maybe<Scalars["Long"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly impAverage: Maybe<Scalars["Byte"]>
  readonly lane: Maybe<MatchLaneType>
  readonly losses: Maybe<Scalars["Byte"]>
  readonly regionId: Maybe<Scalars["Byte"]>
  readonly role: Maybe<MatchPlayerRoleType>
  readonly seasonBracket: Maybe<Scalars["Byte"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly winStreak: Maybe<Scalars["Byte"]>
  readonly wins: Maybe<Scalars["Byte"]>
}

export type PlayerMatchesGroupByRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  readonly bracketIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** Only used when doing matchesGroupBy endpoint.  This is how the data will be grouped and makes your return Id field. */
  readonly groupBy: FindMatchPlayerGroupBy
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  readonly maxGameVersionId: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  readonly minGameVersionId: InputMaybe<Scalars["Int"]>
  /** Determines if you want a single player returned, only the player by SteamAccountId, or if you want all 10 players in the match. */
  readonly playerList: FindMatchPlayerList
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  readonly take: Scalars["Int"]
  /** A team id to include in this query, excluding all results that do not have this team id. */
  readonly teamId: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type PlayerMatchesRequestType = {
  /** Only return matches after this match id. Can be used instead of Skip. */
  readonly after: InputMaybe<Scalars["Long"]>
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** Only return matches before this match id. Can be used instead of Skip. */
  readonly before: InputMaybe<Scalars["Long"]>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  readonly bracketIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  readonly maxGameVersionId: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  readonly minGameVersionId: InputMaybe<Scalars["Int"]>
  /** In what order the returned data will come in. */
  readonly orderBy: InputMaybe<FindMatchPlayerOrderBy>
  /** Determines if you want a single player returned, only the player by SteamAccountId, or if you want all 10 players in the match. */
  readonly playerList: InputMaybe<FindMatchPlayerList>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  readonly take: InputMaybe<Scalars["Int"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  readonly teamId: InputMaybe<Scalars["Int"]>
  /** When requesting matches with a primary SteamAccountId, this will ensure that player is on specific team Id being sent in. */
  readonly teamIdSteamAccount: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type PlayerPerformanceCompositionHeroType = {
  readonly __typename?: "PlayerPerformanceCompositionHeroType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly matchCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
}

export type PlayerPerformanceCompositionType = {
  readonly __typename?: "PlayerPerformanceCompositionType"
  readonly allies: Maybe<ReadonlyArray<Maybe<PlayerPerformanceCompositionHeroType>>>
  readonly foes: Maybe<ReadonlyArray<Maybe<PlayerPerformanceCompositionHeroType>>>
}

export type PlayerPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** Whether the match is a league match or not. */
  readonly isLeague: InputMaybe<Scalars["Boolean"]>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** Whether the specified player was on Radiant or not. */
  readonly isRadiant: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** Whether the match has a team assigned or not. */
  readonly isTeam: InputMaybe<Scalars["Boolean"]>
  /** Whether the match was a victory or not for the specified player. */
  readonly isVictory: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  readonly teamId: InputMaybe<Scalars["Int"]>
  /** When searching for a league, the tier the league must be in. Tiers: Amateur = 1, Professional = 2, Premium = 3, Pro Circuit = 4, Main Event = 5 */
  readonly tier: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type PlayerPerformancePositionObjectType = {
  readonly __typename?: "PlayerPerformancePositionObjectType"
  readonly laneMatchCount: Scalars["Int"]
  readonly laneType: Maybe<Scalars["Byte"]>
  readonly laneWinCount: Scalars["Int"]
}

export type PlayerPerformancePositionType = {
  readonly __typename?: "PlayerPerformancePositionType"
  readonly lanes: Maybe<ReadonlyArray<Maybe<PlayerPerformancePositionObjectType>>>
  readonly roleMatchCount: Scalars["Int"]
  readonly roleType: Maybe<Scalars["Byte"]>
  readonly roleWinCount: Scalars["Int"]
}

export type PlayerPerformanceType = {
  readonly __typename?: "PlayerPerformanceType"
  readonly assists: Maybe<Scalars["Int"]>
  readonly assistsAverage: Maybe<Scalars["Decimal"]>
  readonly awardMatchCount: Scalars["Int"]
  readonly composition: Maybe<PlayerPerformanceCompositionType>
  readonly cs: Maybe<Scalars["Int"]>
  readonly csAverage: Maybe<Scalars["Decimal"]>
  readonly deaths: Maybe<Scalars["Int"]>
  readonly deathsAverage: Maybe<Scalars["Decimal"]>
  readonly gpm: Maybe<Scalars["Int"]>
  readonly gpmAverage: Maybe<Scalars["Decimal"]>
  readonly hero: Maybe<HeroType>
  readonly heroId: Maybe<ReadonlyArray<Maybe<Scalars["Short"]>>>
  readonly imp: Maybe<Scalars["Int"]>
  readonly kills: Maybe<Scalars["Int"]>
  readonly killsAverage: Maybe<Scalars["Decimal"]>
  readonly matchCount: Scalars["Int"]
  readonly maxStreak: Scalars["Int"]
  readonly mmrBracket: Scalars["Int"]
  readonly mmrTier: Scalars["Int"]
  readonly mvpCount: Scalars["Int"]
  /** Contains an array of 6 items which are listed as index 0 - 1st Pick, Index 1 - Pick 2nd, 3rd, Index 2 - Pick 4th, 5th, Index 3 - Pick 6th, Pick 7th, Index 4 - Pick 8th, 9ths, Index 5 - Pick 10th */
  readonly pickOrder: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly position: Maybe<ReadonlyArray<Maybe<PlayerPerformancePositionType>>>
  readonly rank: Maybe<Scalars["Int"]>
  readonly streak: Scalars["Int"]
  readonly topCoreCount: Scalars["Int"]
  readonly topSupportCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
  readonly xpm: Maybe<Scalars["Int"]>
  readonly xpmAverage: Maybe<Scalars["Decimal"]>
}

export type PlayerPlayedWithProPlayerMatchType = {
  readonly __typename?: "PlayerPlayedWithProPlayerMatchType"
  readonly match: Maybe<MatchType>
  readonly matchId: Maybe<Scalars["Long"]>
}

export type PlayerPlayedWithProPlayerType = {
  readonly __typename?: "PlayerPlayedWithProPlayerType"
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamId: Maybe<Scalars["Long"]>
  readonly vs: Maybe<PlayerPlayedWithProPlayerMatchType>
  readonly with: Maybe<PlayerPlayedWithProPlayerMatchType>
}

export type PlayerPlayedWithProTeamType = {
  readonly __typename?: "PlayerPlayedWithProTeamType"
  readonly players: Maybe<ReadonlyArray<Maybe<PlayerPlayedWithProPlayerType>>>
  readonly teamId: Scalars["Int"]
  readonly teamLogo: Scalars["String"]
  readonly teamName: Scalars["String"]
}

export type PlayerPlayedWithProType = {
  readonly __typename?: "PlayerPlayedWithProType"
  readonly casters: Maybe<ReadonlyArray<Maybe<PlayerPlayedWithProPlayerType>>>
  readonly internationalWinners: Maybe<ReadonlyArray<Maybe<PlayerPlayedWithProTeamType>>>
  readonly playedCount: Scalars["Int"]
  readonly teams: Maybe<ReadonlyArray<Maybe<PlayerPlayedWithProTeamType>>>
  readonly totalCount: Scalars["Int"]
}

export type PlayerTeammateType = {
  readonly __typename?: "PlayerTeammateType"
  readonly avgAssists: Maybe<Scalars["Float"]>
  readonly avgDeaths: Maybe<Scalars["Float"]>
  readonly avgExperiencePerMinute: Maybe<Scalars["Int"]>
  readonly avgGoldPerMinute: Maybe<Scalars["Int"]>
  readonly avgImp: Maybe<Scalars["Int"]>
  readonly avgKDA: Maybe<Scalars["Float"]>
  readonly avgKills: Maybe<Scalars["Float"]>
  readonly firstMatchDateTime: Maybe<Scalars["Long"]>
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type PlayerTeammatesGroupByRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  readonly bracketIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  readonly matchGroupOrderBy: FilterMatchGroupOrderByEnum
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** Minimum amount of MatchCount required for a Duo to qualify */
  readonly matchLimitMax: InputMaybe<Scalars["Int"]>
  /** Minimum amount of MatchCount required for a Duo to qualify */
  readonly matchLimitMin: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  readonly maxGameVersionId: InputMaybe<Scalars["Int"]>
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  readonly minGameVersionId: InputMaybe<Scalars["Int"]>
  /** Include only results where the main player played with popular broadcasters. */
  readonly onlyCasters: InputMaybe<Scalars["Boolean"]>
  /** Include only results where main player played with popular professionals. */
  readonly onlyPros: InputMaybe<Scalars["Boolean"]>
  /** If the return should be ordered by Ascending or Desending order. */
  readonly orderBy: FindMatchPlayerOrderBy
  /** Only used when doing matchesGroupBy endpoint.  This is how the data will be grouped and makes your return Id field. */
  readonly playerTeammateSort: FilterPlayerTeammateEnum
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  readonly skip: InputMaybe<Scalars["Int"]>
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  readonly take: InputMaybe<Scalars["Int"]>
  /** A team id to include in this query, excluding all results that do not have this team id. */
  readonly teamId: InputMaybe<Scalars["Int"]>
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type PlayerType = {
  readonly __typename?: "PlayerType"
  readonly activity: Maybe<PlayerActivitySummaryType>
  readonly badges: Maybe<ReadonlyArray<Maybe<PlayerBadgeType>>>
  readonly behaviorScore: Maybe<Scalars["Short"]>
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  readonly dotaPlus: Maybe<ReadonlyArray<Maybe<HeroDotaPlusLeaderboardRankType>>>
  /** A list of the high achivement skills by a Player. */
  readonly feats: Maybe<ReadonlyArray<Maybe<FeatType>>>
  readonly firstMatchDate: Maybe<Scalars["Long"]>
  readonly guildMember: Maybe<GuildMemberType>
  readonly heroPerformance: Maybe<PlayerPerformanceType>
  /** A list of the current Streak and the Longest Streak for each Hero by a Player. */
  readonly heroStreaks: Maybe<
    ReadonlyArray<Maybe<PlayerHeroPerformanceLongestStreakType>>
  >
  /** Returns a list of all heroes played by the steam account id and contains data about the average performance. */
  readonly heroesPerformance: Maybe<ReadonlyArray<Maybe<PlayerHeroesPerformanceType>>>
  readonly identity: Maybe<CaptainJackIdentityPublicProfileType>
  readonly imp: Maybe<Scalars["Int"]>
  readonly isFollowed: Maybe<Scalars["Boolean"]>
  readonly languageCodes: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly lastMatchDate: Maybe<Scalars["Long"]>
  readonly lastMatchRegionId: Maybe<Scalars["Byte"]>
  readonly leaderboardRanks: Maybe<
    ReadonlyArray<Maybe<SteamAccountSeasonLeaderBoardRankType>>
  >
  readonly matchCount: Maybe<Scalars["Int"]>
  /** Find match details by steam account id. steamAccountId is a required input field. */
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchType>>>
  /** Find match details by steam account id. The return is modified to group the data by the GroupBy parameter. */
  readonly matchesGroupBy: Maybe<ReadonlyArray<Maybe<MatchGroupByType>>>
  readonly names: Maybe<ReadonlyArray<Maybe<SteamAccountNameType>>>
  readonly performance: Maybe<PlayerPerformanceType>
  /** Picked the top pros and annoucers and determines if you ever have played with them and when. */
  readonly playedWithPro: Maybe<PlayerPlayedWithProType>
  readonly ranks: Maybe<ReadonlyArray<Maybe<SteamAccountSeasonRankType>>>
  readonly simpleSummary: Maybe<PlayerCardHoverType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly team: Maybe<SteamAccountTeamMemberType>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type PlayerTypeFeatsArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type PlayerTypeHeroPerformanceArgs = {
  heroId: Scalars["Short"]
  request: PlayerHeroPerformanceMatchesRequestType
}

export type PlayerTypeHeroStreaksArgs = {
  request: InputMaybe<PlayerMatchesRequestType>
}

export type PlayerTypeHeroesPerformanceArgs = {
  request: InputMaybe<PlayerHeroPerformanceMatchesRequestType>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type PlayerTypeLeaderboardRanksArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type PlayerTypeMatchesArgs = {
  request: PlayerMatchesRequestType
}

export type PlayerTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType
}

export type PlayerTypeNamesArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type PlayerTypeRanksArgs = {
  seasonRankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
}

export type PlayerUpdateAttributeDetailType = {
  readonly __typename?: "PlayerUpdateAttributeDetailType"
  readonly agi: Scalars["Int"]
  readonly int: Scalars["Int"]
  readonly str: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type PlayerUpdateBattleDetailType = {
  readonly __typename?: "PlayerUpdateBattleDetailType"
  readonly damageBonus: Scalars["Int"]
  readonly damageMinMax: Scalars["Int"]
  readonly hpRegen: Scalars["Int"]
  readonly mpRegen: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type PlayerUpdateGoldDetailType = {
  readonly __typename?: "PlayerUpdateGoldDetailType"
  readonly gold: Scalars["Int"]
  readonly networth: Scalars["Int"]
  readonly networthDifference: Scalars["Int"]
  readonly time: Scalars["Int"]
  readonly unreliableGold: Scalars["Int"]
}

export type PlayerUpdateHealthDetailType = {
  readonly __typename?: "PlayerUpdateHealthDetailType"
  readonly hp: Scalars["Int"]
  readonly maxHp: Scalars["Int"]
  readonly maxMp: Scalars["Int"]
  readonly mp: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type PlayerUpdateLevelDetailType = {
  readonly __typename?: "PlayerUpdateLevelDetailType"
  readonly level: Scalars["Int"]
  readonly time: Scalars["Int"]
}

export type PlayerUpdatePositionDetailType = {
  readonly __typename?: "PlayerUpdatePositionDetailType"
  readonly time: Scalars["Int"]
  readonly x: Scalars["Int"]
  readonly y: Scalars["Int"]
}

export type PlusDraftMissingLetterPlayerObjectType = {
  /** When a player has selected a hero, this is the id. If a null is sent, we will send back a hero list of possible heroes. */
  readonly heroId: InputMaybe<Scalars["Short"]>
  /** To determine the missing letter, isPicking will determine the score before the hero was selected and after the hero is selected. Only 1 person can have isPicking = true. */
  readonly isPicking: InputMaybe<Scalars["Boolean"]>
  /** The lane this player will play. If a null is sent, we will assign the best possible lane. */
  readonly position: InputMaybe<MatchPlayerPositionType>
  /** The rank this played is.  In the event he is anonymous, use the lowest rank player in the game. */
  readonly rank: InputMaybe<Scalars["Int"]>
  /** The slot of player. It is required to be in order from 0-9. */
  readonly slot: Scalars["Int"]
}

export type PlusDraftMissingLetterRequestType = {
  /** A list of all of the banned hero ids in the draft. */
  readonly bans: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** The game mode for this type. We only support All Pick and Ranked All Pick. In the future Captain's Mode will be supported. */
  readonly gameMode: Scalars["Int"]
  /** Due to Valve changing the way Picking has happened in the past, we require the GameVersionId so we know what version of the network to call. */
  readonly gameVersionId: Scalars["Short"]
  /** A list of player request objects. */
  readonly players: ReadonlyArray<InputMaybe<PlusDraftMissingLetterPlayerObjectType>>
}

export type PlusDraftPlayerHeroObjectType = {
  readonly __typename?: "PlusDraftPlayerHeroObjectType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly letter: Maybe<PlusLetterType>
  readonly pickValue: Maybe<Scalars["Decimal"]>
  readonly score: Maybe<Scalars["Float"]>
  readonly winValues: Maybe<ReadonlyArray<Maybe<Scalars["Decimal"]>>>
}

export type PlusDraftPlayerRequestType = {
  /** When a player has selected a hero, this is the id. If a null is sent, we will send back a hero list of possible heroes. */
  readonly heroId: InputMaybe<Scalars["Short"]>
  /** The role this player will play. If a null is sent, we will assign the best possible role. */
  readonly position: InputMaybe<MatchPlayerPositionType>
  /** The rank this played is.  In the event he is anonymous, use the lowest rank player in the game. */
  readonly rank: InputMaybe<Scalars["Byte"]>
  /** The slot of player. It is required to be in order from 0-9. */
  readonly slot: Scalars["Int"]
  /** The steam id of the player. This will allow us to find player history on the player if he is not anonymous. */
  readonly steamAccountId: InputMaybe<Scalars["Long"]>
}

export type PlusDraftPlayerType = {
  readonly __typename?: "PlusDraftPlayerType"
  readonly heroes: Maybe<ReadonlyArray<Maybe<PlusDraftPlayerHeroObjectType>>>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly positionValues: Maybe<ReadonlyArray<Maybe<Scalars["Decimal"]>>>
  readonly slot: Maybe<Scalars["Byte"]>
}

export type PlusDraftRequestType = {
  /** A list of all of the banned hero ids in the draft. */
  readonly bans: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** The game mode for this type. We only support All Pick and Ranked All Pick. In the future Captain's Mode will be supported. */
  readonly gameMode: Scalars["Int"]
  /** Due to Valve changing the way Picking has happened in the past, we require the GameVersionId so we know what version of the network to call. */
  readonly gameVersionId: Scalars["Short"]
  /** The match Id or the lobby id of the match your sending.  This will cache data for the next calls to be quicker. */
  readonly matchId: Scalars["Long"]
  /** A list of player request objects. */
  readonly players: ReadonlyArray<InputMaybe<PlusDraftPlayerRequestType>>
}

export type PlusDraftType = {
  readonly __typename?: "PlusDraftType"
  readonly durationValues: Maybe<ReadonlyArray<Maybe<Scalars["Decimal"]>>>
  readonly midOutcome: Maybe<Scalars["Decimal"]>
  readonly offOutcome: Maybe<Scalars["Decimal"]>
  readonly players: Maybe<ReadonlyArray<Maybe<PlusDraftPlayerType>>>
  readonly safeOutcome: Maybe<Scalars["Decimal"]>
  readonly winValues: Maybe<ReadonlyArray<Maybe<Scalars["Decimal"]>>>
}

export type PlusHeroTeamStatusAveragesType = {
  readonly __typename?: "PlusHeroTeamStatusAveragesType"
  readonly cs: Maybe<Scalars["Decimal"]>
  readonly deaths: Maybe<Scalars["Decimal"]>
  readonly disableCount: Maybe<Scalars["Decimal"]>
  readonly disableDuration: Maybe<Scalars["Decimal"]>
  readonly healingAllies: Maybe<Scalars["Decimal"]>
  readonly magicalDamage: Maybe<Scalars["Decimal"]>
  readonly magicalDamageReceived: Maybe<Scalars["Decimal"]>
  readonly physicalDamage: Maybe<Scalars["Decimal"]>
  readonly physicalDamageReceived: Maybe<Scalars["Decimal"]>
  readonly pureDamage: Maybe<Scalars["Decimal"]>
  readonly pureDamageReceived: Maybe<Scalars["Decimal"]>
  readonly purgeModifiers: Maybe<Scalars["Decimal"]>
  readonly slowCount: Maybe<Scalars["Decimal"]>
  readonly slowDuration: Maybe<Scalars["Decimal"]>
  readonly stunCount: Maybe<Scalars["Decimal"]>
  readonly stunDuration: Maybe<Scalars["Decimal"]>
  readonly towerDamage: Maybe<Scalars["Decimal"]>
  readonly weakenCount: Maybe<Scalars["Decimal"]>
  readonly weakenDuration: Maybe<Scalars["Decimal"]>
}

export type PlusHeroTeamStatusDetailType = {
  readonly __typename?: "PlusHeroTeamStatusDetailType"
  readonly averages: Maybe<PlusHeroTeamStatusAveragesType>
  readonly basicBracket: Maybe<RankBracketHeroTimeDetail>
  readonly heroId: Scalars["Int"]
  readonly position: Maybe<MatchPlayerPositionType>
}

export type PlusHoverBanType = {
  readonly __typename?: "PlusHoverBanType"
  readonly flags: Maybe<Scalars["Byte"]>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly score: Maybe<Scalars["Decimal"]>
}

export type PlusHoverType = {
  readonly __typename?: "PlusHoverType"
  readonly bans: Maybe<ReadonlyArray<Maybe<PlusHoverBanType>>>
  readonly players: Maybe<ReadonlyArray<Maybe<PlusPlayerHoverType>>>
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
  readonly __typename?: "PlusPlayerHoverHeroType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly lossCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
}

export type PlusPlayerHoverPlayerType = {
  readonly __typename?: "PlusPlayerHoverPlayerType"
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Scalars["Int"]
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly winCount: Scalars["Int"]
}

export type PlusPlayerHoverRequestType = {
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** Should our Networks attempt to try to make Radiant Win the draft or Dire. */
  readonly shouldRadiantWin: InputMaybe<Scalars["Boolean"]>
  /** An array of steam account ids to limit the query to only return matches with these steam account ids. There is a maximum of 10 steam account ids allowed. */
  readonly steamAccountIds: ReadonlyArray<InputMaybe<Scalars["Long"]>>
  /** The amount of matches to have returned in your query. Max 1000 */
  readonly take: InputMaybe<Scalars["Int"]>
}

export type PlusPlayerHoverType = {
  readonly __typename?: "PlusPlayerHoverType"
  readonly activity: Maybe<Scalars["Byte"]>
  readonly behaviorScore: Maybe<Scalars["Short"]>
  readonly coreCount: Maybe<Scalars["Int"]>
  readonly enemies: Maybe<ReadonlyArray<Maybe<PlusPlayerHoverPlayerType>>>
  readonly friends: Maybe<ReadonlyArray<Maybe<PlusPlayerHoverPlayerType>>>
  readonly heroes: Maybe<ReadonlyArray<Maybe<PlusPlayerHoverHeroType>>>
  readonly heroesExperience: Maybe<ReadonlyArray<Maybe<Scalars["Short"]>>>
  readonly imp: Maybe<Scalars["Int"]>
  readonly languageCode: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly supportCount: Maybe<Scalars["Int"]>
  readonly winCount: Scalars["Int"]
}

export type PlusQuery = {
  readonly __typename?: "PlusQuery"
  /** The main call for STRATZ Plus. It will return back probability data based on a draft of players that were given. */
  readonly draft: Maybe<PlusDraftType>
  /** To save CPU cycles we limit the amount of heroes a person can play. If a player picks a hero outside the default list, we have no idea how good the hero would of been. You can call this endpoint to update the grade letter for that hero selection. */
  readonly draftMissingLetter: Maybe<PlusLetterType>
  /** Returns back basic data about the user playing a specific hero.  Used in the Draft app to show post-pick data. */
  readonly playerHeroHighlight: Maybe<PlayerDraftHeroHighlightType>
  /** Gets a list of data of the players in the match, can send a max of 10 people.  If a user blocks their data on STRATZ, that data will not be returned. */
  readonly playerMatchHistory: Maybe<PlusHoverType>
  /** Returns a set of events which contain each hero and their averages in each of the respected categories, sorted by rank bracket. */
  readonly teamHeroStatus: Maybe<ReadonlyArray<Maybe<PlusHeroTeamStatusDetailType>>>
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
  readonly __typename?: "ProPlayerFollowType"
  readonly activity: Maybe<Scalars["Int"]>
  readonly coreCount: Scalars["Int"]
  readonly matchCount: Scalars["Int"]
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly supportCount: Scalars["Int"]
}

export type ProSteamAccountType = {
  readonly __typename?: "ProSteamAccountType"
  readonly aliases: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly birthday: Maybe<Scalars["Long"]>
  readonly countries: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly facebookLink: Maybe<Scalars["String"]>
  readonly fantasyRole: Maybe<Scalars["Byte"]>
  readonly id: Maybe<Scalars["Long"]>
  readonly instagramLink: Maybe<Scalars["String"]>
  readonly isLocked: Scalars["Boolean"]
  readonly isPro: Scalars["Boolean"]
  readonly name: Maybe<Scalars["String"]>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly realName: Maybe<Scalars["String"]>
  readonly roles: Maybe<Scalars["Byte"]>
  readonly romanizedRealName: Maybe<Scalars["String"]>
  readonly signatureHeroes: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>
  readonly sponsor: Maybe<Scalars["String"]>
  readonly statuses: Maybe<Scalars["Byte"]>
  readonly team: Maybe<TeamType>
  readonly teamId: Maybe<Scalars["Int"]>
  readonly totalEarnings: Scalars["Int"]
  readonly twitchLink: Maybe<Scalars["String"]>
  readonly twitterLink: Maybe<Scalars["String"]>
  readonly vkLink: Maybe<Scalars["String"]>
  readonly weiboLink: Maybe<Scalars["String"]>
  readonly youTubeLink: Maybe<Scalars["String"]>
}

export type RabbitDetailType = {
  readonly __typename?: "RabbitDetailType"
  readonly isOnline: Scalars["Boolean"]
  readonly lastUpdated: Maybe<Scalars["Long"]>
  readonly matchDetail: Maybe<RabbitQueueDetailType>
  readonly matchDetailDelay: Maybe<RabbitQueueDetailType>
  readonly matchHistory: Maybe<RabbitQueueDetailType>
  readonly matchLive: Maybe<RabbitQueueDetailType>
  readonly matchStats: Maybe<RabbitQueueDetailType>
  readonly steamAccount: Maybe<RabbitQueueDetailType>
}

export type RabbitQueueDetailType = {
  readonly __typename?: "RabbitQueueDetailType"
  readonly queueCount: Scalars["Int"]
  readonly queueInRate: Maybe<Scalars["Decimal"]>
  readonly queueOutRate: Maybe<Scalars["Decimal"]>
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
  readonly __typename?: "RecentHighImpType"
  readonly imp: Maybe<Scalars["Short"]>
  readonly match: Maybe<MatchType>
  readonly matchId: Maybe<Scalars["Long"]>
}

export type RecentRampageType = {
  readonly __typename?: "RecentRampageType"
  readonly hero: Maybe<HeroType>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly heroesKilled: Maybe<ReadonlyArray<Maybe<Scalars["Short"]>>>
  readonly match: Maybe<MatchType>
  readonly matchId: Maybe<Scalars["Long"]>
}

export type RecentWinStreakType = {
  readonly __typename?: "RecentWinStreakType"
  readonly firstWonMatchDateTime: Maybe<Scalars["DateTime"]>
  readonly lastWonMatchDateTime: Maybe<Scalars["DateTime"]>
  readonly match: Maybe<MatchType>
  readonly matchId: Maybe<Scalars["Long"]>
  /** The status of the win streak, Ended (0) or Ongoing (1). */
  readonly status: Maybe<Scalars["Int"]>
  readonly winStreakCount: Maybe<Scalars["Int"]>
}

export type RegionType = {
  readonly __typename?: "RegionType"
  readonly clientName: Maybe<Scalars["String"]>
  readonly code: Maybe<Scalars["String"]>
  readonly displayName: Maybe<Scalars["String"]>
  readonly id: Maybe<Scalars["Byte"]>
  readonly langKey: Maybe<Scalars["String"]>
  readonly latitude: Maybe<Scalars["Decimal"]>
  readonly leaderboardDivision: Maybe<Scalars["String"]>
  readonly longitude: Maybe<Scalars["Decimal"]>
  readonly matchGroup: Maybe<Scalars["Byte"]>
  readonly name: Maybe<Scalars["String"]>
  readonly weekendTourneyDivision: Maybe<Scalars["String"]>
}

export type RoleType = {
  readonly __typename?: "RoleType"
  readonly langKey: Maybe<Scalars["String"]>
  readonly name: Maybe<Scalars["String"]>
  readonly roleId: Maybe<Scalars["Short"]>
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
  readonly __typename?: "SearchType"
  readonly casters: Maybe<ReadonlyArray<Maybe<SteamAccountType>>>
  readonly direTideMatches: Maybe<ReadonlyArray<Maybe<DireTide2020CustomGameMatchType>>>
  readonly guild: Maybe<GuildType>
  readonly leagues: Maybe<ReadonlyArray<Maybe<LeagueType>>>
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchType>>>
  readonly players: Maybe<ReadonlyArray<Maybe<SteamAccountType>>>
  readonly proPlayers: Maybe<ReadonlyArray<Maybe<SteamAccountType>>>
  readonly teams: Maybe<ReadonlyArray<Maybe<TeamType>>>
}

export enum Series {
  BestOfFive = "BEST_OF_FIVE",
  BestOfOne = "BEST_OF_ONE",
  BestOfThree = "BEST_OF_THREE",
  BestOfTwo = "BEST_OF_TWO",
}

export type SeriesType = {
  readonly __typename?: "SeriesType"
  readonly id: Scalars["Long"]
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  readonly league: Maybe<LeagueType>
  readonly leagueId: Maybe<Scalars["Int"]>
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchType>>>
  readonly teamOne: Maybe<TeamType>
  readonly teamOneId: Maybe<Scalars["Int"]>
  readonly teamOneWinCount: Maybe<Scalars["Short"]>
  readonly teamTwo: Maybe<TeamType>
  readonly teamTwoId: Maybe<Scalars["Int"]>
  readonly teamTwoWinCount: Maybe<Scalars["Short"]>
  readonly type: Maybe<Series>
  readonly winningTeamId: Maybe<Scalars["Int"]>
}

export type ServerStatusType = {
  readonly __typename?: "ServerStatusType"
  readonly isRedisOnline: Scalars["Boolean"]
  readonly rabbitDetail: Maybe<RabbitDetailType>
  readonly steamApiDetail: Maybe<SteamApiDetailType>
}

export type SpiritBearInventoryObjectType = {
  readonly __typename?: "SpiritBearInventoryObjectType"
  readonly itemId: Maybe<Scalars["Short"]>
}

export type SpiritBearInventoryType = {
  readonly __typename?: "SpiritBearInventoryType"
  readonly backPack0: Maybe<SpiritBearInventoryObjectType>
  readonly backPack1: Maybe<SpiritBearInventoryObjectType>
  readonly backPack2: Maybe<SpiritBearInventoryObjectType>
  readonly item0: Maybe<SpiritBearInventoryObjectType>
  readonly item1: Maybe<SpiritBearInventoryObjectType>
  readonly item2: Maybe<SpiritBearInventoryObjectType>
  readonly item3: Maybe<SpiritBearInventoryObjectType>
  readonly item4: Maybe<SpiritBearInventoryObjectType>
  readonly item5: Maybe<SpiritBearInventoryObjectType>
  readonly neutral0: Maybe<SpiritBearInventoryObjectType>
  readonly teleport0: Maybe<SpiritBearInventoryObjectType>
  readonly time: Scalars["Int"]
}

export type SteamAccountBattlePassType = {
  readonly __typename?: "SteamAccountBattlePassType"
  readonly eventId: Maybe<Scalars["Byte"]>
  readonly level: Maybe<Scalars["Int"]>
  readonly steamId: Maybe<Scalars["Long"]>
}

export type SteamAccountByRankType = {
  readonly __typename?: "SteamAccountByRankType"
  readonly playerCount: Maybe<Scalars["Int"]>
  readonly rank: Maybe<Scalars["Byte"]>
}

export type SteamAccountNameType = {
  readonly __typename?: "SteamAccountNameType"
  readonly lastSeenDateTime: Maybe<Scalars["Long"]>
  readonly name: Maybe<Scalars["String"]>
}

export type SteamAccountSeasonActiveLeaderboardRankType = {
  readonly __typename?: "SteamAccountSeasonActiveLeaderboardRankType"
  readonly avgImp: Maybe<Scalars["Short"]>
  readonly divisionId: Maybe<LeaderboardDivision>
  readonly lastUpdateDateTime: Maybe<Scalars["Long"]>
  readonly matchCount: Maybe<Scalars["Short"]>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly positionValue: Maybe<Scalars["Byte"]>
  readonly rank: Maybe<Scalars["Short"]>
  readonly rankShift: Maybe<Scalars["Short"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly topHeroOne: Maybe<Scalars["Short"]>
  readonly topHeroThree: Maybe<Scalars["Short"]>
  readonly topHeroTwo: Maybe<Scalars["Short"]>
  readonly winRate: Maybe<Scalars["Byte"]>
}

export type SteamAccountSeasonLeaderBoardRankType = {
  readonly __typename?: "SteamAccountSeasonLeaderBoardRankType"
  readonly asOfDateTime: Maybe<Scalars["Long"]>
  readonly rank: Maybe<Scalars["Short"]>
  readonly seasonLeaderBoardDivisionId: Maybe<Scalars["Byte"]>
  readonly seasonRankId: Maybe<Scalars["Byte"]>
  readonly steamAccountId: Maybe<Scalars["Long"]>
}

export type SteamAccountSeasonRankType = {
  readonly __typename?: "SteamAccountSeasonRankType"
  readonly asOfDateTime: Maybe<Scalars["Long"]>
  readonly isCore: Maybe<Scalars["Boolean"]>
  readonly rank: Maybe<Scalars["Byte"]>
  readonly seasonRankId: Maybe<Scalars["Byte"]>
}

export type SteamAccountTeamMemberType = {
  readonly __typename?: "SteamAccountTeamMemberType"
  readonly firstMatchDateTime: Maybe<Scalars["Long"]>
  readonly firstMatchId: Maybe<Scalars["Long"]>
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  readonly lastMatchId: Maybe<Scalars["Long"]>
  readonly player: Maybe<PlayerType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly team: Maybe<TeamType>
  readonly teamId: Maybe<Scalars["Long"]>
}

export type SteamAccountType = {
  readonly __typename?: "SteamAccountType"
  readonly avatar: Maybe<Scalars["String"]>
  readonly battlepass: Maybe<ReadonlyArray<Maybe<SteamAccountBattlePassType>>>
  readonly cityId: Maybe<Scalars["Int"]>
  readonly communityVisibleState: Maybe<Scalars["Int"]>
  readonly countryCode: Maybe<Scalars["String"]>
  readonly dotaAccountLevel: Maybe<Scalars["Short"]>
  readonly id: Maybe<Scalars["Long"]>
  readonly isAnonymous: Scalars["Boolean"]
  readonly isDotaPlusSubscriber: Maybe<Scalars["Boolean"]>
  readonly isStratzAnonymous: Scalars["Boolean"]
  readonly lastLogOff: Maybe<Scalars["Long"]>
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  readonly lastMatchRegionId: Maybe<Scalars["Byte"]>
  readonly name: Maybe<Scalars["String"]>
  readonly primaryClanId: Maybe<Scalars["Long"]>
  readonly proSteamAccount: Maybe<ProSteamAccountType>
  readonly profileUri: Scalars["String"]
  readonly realName: Maybe<Scalars["String"]>
  readonly seasonLeaderboardDivisionId: Maybe<Scalars["Byte"]>
  readonly seasonLeaderboardRank: Maybe<Scalars["Short"]>
  readonly seasonRank: Maybe<Scalars["Byte"]>
  readonly smurfFlag: Maybe<Scalars["Byte"]>
  readonly stateCode: Maybe<Scalars["String"]>
  readonly timeCreated: Maybe<Scalars["Long"]>
}

export type SteamApiDetailOutageType = {
  readonly __typename?: "SteamApiDetailOutageType"
  readonly dateTime: Maybe<Scalars["Long"]>
  readonly secondsOffline: Maybe<Scalars["Int"]>
}

export type SteamApiDetailType = {
  readonly __typename?: "SteamApiDetailType"
  readonly isOnline: Scalars["Boolean"]
  readonly outages: Maybe<ReadonlyArray<Maybe<SteamApiDetailOutageType>>>
}

export enum StratzApiType {
  DataCollector = "DATA_COLLECTOR",
  MultiKey = "MULTI_KEY",
}

export type StratzQuery = {
  readonly __typename?: "StratzQuery"
  readonly admin: Maybe<AdminQuery>
  /** Returns a list of Stratz blogs. */
  readonly blogs: Maybe<ReadonlyArray<Maybe<BlogType>>>
  /** Returns a list of languages and an Id for reference. This is used throughout the site. */
  readonly languages: Maybe<ReadonlyArray<Maybe<LanguageType>>>
  /** Returns a list of Stratz blogs. */
  readonly matchRetry: Maybe<Scalars["Boolean"]>
  /** Returns a list of News Items released by Dota 2 directly. */
  readonly news: Maybe<ReadonlyArray<Maybe<NewsItemType>>>
  readonly page: Maybe<PageQuery>
  readonly search: Maybe<SearchType>
  /** Shows the availability to major components required in the STRATZ foundation. */
  readonly status: Maybe<ServerStatusType>
  /** Home page data that shows the total count of players and matches in our database. */
  readonly ticker: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>
  readonly user: Maybe<UserQuery>
}

export type StratzQueryBlogsArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type StratzQueryMatchRetryArgs = {
  id: Scalars["Long"]
}

export type StratzQuerySearchArgs = {
  request: InputMaybe<FilterSearchRequestType>
}

export enum Streak {
  KillStreak = "KILL_STREAK",
  MultiKill = "MULTI_KILL",
}

export type StreakEventType = {
  readonly __typename?: "StreakEventType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
  readonly type: Maybe<Streak>
  readonly value: Scalars["Int"]
}

export type Ti2020CustomGameDepthListAscensionAbilitiesObjectType = {
  readonly __typename?: "TI2020CustomGameDepthListAscensionAbilitiesObjectType"
  readonly abilityId: Maybe<Scalars["Short"]>
  readonly modifierId: Maybe<Scalars["Short"]>
  readonly type: Maybe<Ti2020CustomGameDepthListAscensionAbilitiesType>
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
  readonly __typename?: "TI2020CustomGameHeroAbilityType"
  readonly customAbilityId: Maybe<Scalars["Short"]>
  readonly difficulty: Maybe<Ti2020CustomGameMatchDifficultyType>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly pickCount: Maybe<Scalars["Int"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type Ti2020CustomGameHeroCompositionType = {
  readonly __typename?: "TI2020CustomGameHeroCompositionType"
  readonly difficulty: Maybe<Ti2020CustomGameMatchDifficultyType>
  readonly duration: Maybe<Scalars["Int"]>
  readonly heroId1: Maybe<Scalars["Short"]>
  readonly heroId2: Maybe<Scalars["Short"]>
  readonly heroId3: Maybe<Scalars["Short"]>
  readonly heroId4: Maybe<Scalars["Short"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly wilsonScore: Maybe<Scalars["Decimal"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type Ti2020CustomGameHeroWinRateType = {
  readonly __typename?: "TI2020CustomGameHeroWinRateType"
  readonly difficulty: Maybe<Ti2020CustomGameMatchDifficultyType>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type Ti2020CustomGameMatchDepthListType = {
  readonly __typename?: "TI2020CustomGameMatchDepthListType"
  readonly ascensionAbilities: Maybe<
    ReadonlyArray<Maybe<Ti2020CustomGameDepthListAscensionAbilitiesObjectType>>
  >
  readonly selectedElite: Maybe<Scalars["Boolean"]>
  readonly selectedEncounter: Maybe<Ti2020CustomGameDepthListEncounterType>
  readonly selectedEncounterType: Maybe<Scalars["Byte"]>
  readonly selectedHidden: Maybe<Scalars["Boolean"]>
  readonly selectedReward: Maybe<Ti2020CustomGameDepthListRewardType>
  readonly unselectedElite: Maybe<Scalars["Boolean"]>
  readonly unselectedEncounter: Maybe<Ti2020CustomGameDepthListEncounterType>
  readonly unselectedHidden: Maybe<Scalars["Boolean"]>
  readonly unselectedReward: Maybe<Ti2020CustomGameDepthListRewardType>
}

export enum Ti2020CustomGameMatchDifficultyType {
  Apexmage = "APEXMAGE",
  Apprentice = "APPRENTICE",
  Grandmagus = "GRANDMAGUS",
  Magician = "MAGICIAN",
  Sorcerer = "SORCERER",
}

export type Ti2020CustomGameMatchType = {
  readonly __typename?: "TI2020CustomGameMatchType"
  readonly arcaneFragments: Maybe<Scalars["Short"]>
  readonly battlePoints: Maybe<Scalars["Short"]>
  readonly clusterId: Maybe<Scalars["Short"]>
  readonly depth: Maybe<Scalars["Byte"]>
  readonly depthList: Maybe<ReadonlyArray<Maybe<Ti2020CustomGameMatchDepthListType>>>
  readonly didWin: Maybe<Scalars["Boolean"]>
  readonly difficulty: Maybe<Ti2020CustomGameMatchDifficultyType>
  readonly durationSeconds: Maybe<Scalars["Short"]>
  readonly endDateTime: Maybe<Scalars["Long"]>
  readonly gameMode: Maybe<Scalars["Byte"]>
  readonly goldBags: Maybe<Scalars["Short"]>
  readonly id: Maybe<Scalars["Long"]>
  readonly lobbyType: Maybe<Scalars["Byte"]>
  readonly numDeaths: Maybe<Scalars["Short"]>
  readonly numHumanPlayers: Maybe<Scalars["Byte"]>
  readonly numKills: Maybe<Scalars["Short"]>
  readonly players: Maybe<ReadonlyArray<Maybe<Ti2020CustomGamePlayerType>>>
  readonly regionId: Maybe<Scalars["Byte"]>
  readonly replaySalt: Maybe<Scalars["Long"]>
  readonly score: Maybe<Scalars["Int"]>
  readonly seed: Maybe<Scalars["Int"]>
  readonly startDateTime: Maybe<Scalars["Long"]>
}

export type Ti2020CustomGameMatchTypePlayersArgs = {
  steamAccountId: InputMaybe<Scalars["Long"]>
}

export type Ti2020CustomGamePlayerBlessingObjectType = {
  readonly __typename?: "TI2020CustomGamePlayerBlessingObjectType"
  readonly type: Maybe<Ti2020CustomGamePlayerBlessingType>
  readonly value: Maybe<Scalars["Short"]>
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
  readonly __typename?: "TI2020CustomGamePlayerDepthListType"
  readonly goldBags: Maybe<Scalars["Short"]>
  readonly kills: Maybe<Scalars["Short"]>
  readonly level: Maybe<Scalars["Byte"]>
  readonly networth: Maybe<Scalars["Int"]>
  readonly numDeaths: Maybe<Scalars["Short"]>
  readonly rarity: Maybe<Scalars["Byte"]>
  readonly selectedRewardAbility: Maybe<AbilityCustomGameType>
  readonly selectedRewardAbilityId: Maybe<Scalars["Short"]>
  readonly selectedRewardImageAbilityId: Maybe<Scalars["Short"]>
  readonly unSelectedRewardAbility1: Maybe<AbilityCustomGameType>
  readonly unSelectedRewardAbility2: Maybe<AbilityCustomGameType>
  readonly unSelectedRewardAbilityId1: Maybe<Scalars["Short"]>
  readonly unSelectedRewardAbilityId2: Maybe<Scalars["Short"]>
}

export type Ti2020CustomGamePlayerDepthListTypeSelectedRewardAbilityArgs = {
  langaugeId: InputMaybe<Scalars["Int"]>
}

export type Ti2020CustomGamePlayerDepthListTypeUnSelectedRewardAbility1Args = {
  langaugeId: InputMaybe<Scalars["Int"]>
}

export type Ti2020CustomGamePlayerDepthListTypeUnSelectedRewardAbility2Args = {
  langaugeId: InputMaybe<Scalars["Int"]>
}

export type Ti2020CustomGamePlayerType = {
  readonly __typename?: "TI2020CustomGamePlayerType"
  readonly arcaneFragments: Maybe<Scalars["Short"]>
  readonly blessings: Maybe<
    ReadonlyArray<Maybe<Ti2020CustomGamePlayerBlessingObjectType>>
  >
  readonly bonusArcaneFragments: Maybe<Scalars["Short"]>
  readonly deaths: Maybe<Scalars["Byte"]>
  readonly depthList: Maybe<ReadonlyArray<Maybe<Ti2020CustomGamePlayerDepthListType>>>
  readonly experiencePerMinute: Maybe<Scalars["Short"]>
  readonly goldBags: Maybe<Scalars["Short"]>
  readonly goldPerMinute: Maybe<Scalars["Short"]>
  readonly goldSpent: Maybe<Scalars["Int"]>
  readonly hero: Maybe<HeroType>
  readonly heroId: Maybe<Scalars["Short"]>
  readonly isVictory: Scalars["Boolean"]
  readonly item0Id: Maybe<Scalars["Short"]>
  readonly item1Id: Maybe<Scalars["Short"]>
  readonly item2Id: Maybe<Scalars["Short"]>
  readonly item3Id: Maybe<Scalars["Short"]>
  readonly item4Id: Maybe<Scalars["Short"]>
  readonly item5Id: Maybe<Scalars["Short"]>
  readonly leaverStatus: Maybe<Scalars["Byte"]>
  readonly level: Maybe<Scalars["Byte"]>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly networth: Maybe<Scalars["Int"]>
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  readonly neutral0Id: Maybe<Scalars["Short"]>
  readonly neutralItemId: Maybe<Scalars["Short"]>
  readonly numLastHits: Maybe<Scalars["Short"]>
  readonly partyId: Maybe<Scalars["Byte"]>
  readonly playerSlot: Maybe<Scalars["Byte"]>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly steamAccountId: Maybe<Scalars["Long"]>
}

export type Ti2020CustomGameRoomModifierType = {
  readonly __typename?: "TI2020CustomGameRoomModifierType"
  readonly deathCount: Maybe<Scalars["Int"]>
  readonly difficulty: Maybe<Ti2020CustomGameMatchDifficultyType>
  readonly eliteDeathCount: Maybe<Scalars["Int"]>
  readonly eliteMatchCount: Maybe<Scalars["Int"]>
  readonly eliteWinCount: Maybe<Scalars["Int"]>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly modifierId: Maybe<Scalars["Short"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type Ti2020CustomGameRoomType = {
  readonly __typename?: "TI2020CustomGameRoomType"
  readonly deathCount: Maybe<Scalars["Int"]>
  readonly difficulty: Maybe<Ti2020CustomGameMatchDifficultyType>
  readonly eliteDeathCount: Maybe<Scalars["Int"]>
  readonly eliteMatchCount: Maybe<Scalars["Int"]>
  readonly elitePickCount: Maybe<Scalars["Int"]>
  readonly eliteWinCount: Maybe<Scalars["Int"]>
  readonly encounterId: Maybe<Ti2020CustomGameDepthListEncounterType>
  readonly matchCount: Maybe<Scalars["Int"]>
  readonly pickCount: Maybe<Scalars["Int"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export enum TableCalculateEnum {
  Average = "AVERAGE",
  Highest = "HIGHEST",
  Lowest = "LOWEST",
  Median = "MEDIAN",
}

export type TeamMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  readonly awardIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly endDateTime: InputMaybe<Scalars["Long"]>
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  readonly gameModeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  readonly gameVersionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  readonly hasAward: InputMaybe<Scalars["Boolean"]>
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  readonly heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  readonly isParsed: InputMaybe<Scalars["Boolean"]>
  /** Include all matches that are party games, excluding all others. */
  readonly isParty: InputMaybe<Scalars["Boolean"]>
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  readonly isStats: InputMaybe<Scalars["Boolean"]>
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  readonly laneIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A league id to include in this query, excluding all results that do not have this league id. */
  readonly leagueId: InputMaybe<Scalars["Int"]>
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  readonly lobbyTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  /** An array of Dota match ids to include in this query. */
  readonly matchIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Long"]>>>
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  readonly positionIds: InputMaybe<ReadonlyArray<InputMaybe<MatchPlayerPositionType>>>
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  readonly rankIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  readonly regionIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  readonly roleIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** A series id to include in this query, excluding all results that do not have this series id. */
  readonly seriesId: InputMaybe<Scalars["Long"]>
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  readonly skip: Scalars["Int"]
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  readonly startDateTime: InputMaybe<Scalars["Long"]>
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  readonly steamAccountId: InputMaybe<Scalars["Long"]>
  /** The amount of matches to have returned in your query. Max 1000 */
  readonly take: Scalars["Int"]
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  readonly withFriendHeroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  readonly withFriendSteamAccountIds: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["Long"]>>
  >
}

export type TeamPrizeType = {
  readonly __typename?: "TeamPrizeType"
  readonly league: Maybe<LeagueType>
  readonly leagueId: Maybe<Scalars["Int"]>
  readonly prizeAmount: Maybe<Scalars["Float"]>
  readonly standing: Maybe<Scalars["Int"]>
  readonly team: Maybe<TeamType>
  readonly teamId: Maybe<Scalars["Int"]>
}

export type TeamType = {
  readonly __typename?: "TeamType"
  readonly bannerLogo: Maybe<Scalars["String"]>
  readonly baseLogo: Maybe<Scalars["String"]>
  readonly coachSteamAccount: Maybe<SteamAccountType>
  readonly coachSteamAccountId: Maybe<Scalars["Long"]>
  readonly countryCode: Maybe<Scalars["String"]>
  readonly countryName: Maybe<Scalars["String"]>
  readonly dateCreated: Maybe<Scalars["Long"]>
  /** Find match details by team id. The return is modified to group the data by the GroupBy parameter. */
  readonly heroPickBan: Maybe<ReadonlyArray<Maybe<MatchPickBanGroupByType>>>
  readonly id: Scalars["Int"]
  readonly isLocked: Maybe<Scalars["Boolean"]>
  readonly isPro: Maybe<Scalars["Boolean"]>
  readonly lastMatchDateTime: Maybe<Scalars["Long"]>
  /** Find a list of all the leagues that this team has played in. */
  readonly leagues: Maybe<ReadonlyArray<Maybe<LeagueType>>>
  readonly logo: Maybe<Scalars["String"]>
  readonly lossCount: Maybe<Scalars["Int"]>
  /** Find match details by leauge id. */
  readonly matches: Maybe<ReadonlyArray<Maybe<MatchType>>>
  /** Find match details by team id. The return is modified to group the data by the GroupBy parameter. */
  readonly matchesGroupBy: Maybe<ReadonlyArray<Maybe<MatchGroupByType>>>
  /** A List of all the players for a team. */
  readonly members: Maybe<ReadonlyArray<Maybe<SteamAccountTeamMemberType>>>
  readonly name: Maybe<Scalars["String"]>
  /** Find match details by series id. */
  readonly series: Maybe<ReadonlyArray<Maybe<SeriesType>>>
  readonly tag: Maybe<Scalars["String"]>
  readonly url: Maybe<Scalars["String"]>
  readonly winCount: Maybe<Scalars["Int"]>
}

export type TeamTypeMatchesArgs = {
  request: TeamMatchesRequestType
}

export type TeamTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType
}

export type TeamTypeMembersArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type TeamTypeSeriesArgs = {
  request: FilterSeriesRequestType
}

export type TopPlayersByHeroType = {
  readonly __typename?: "TopPlayersByHeroType"
  readonly heroId: Maybe<Scalars["Short"]>
  readonly players: Maybe<ReadonlyArray<Maybe<PlayerLeaderBoardByHeroType>>>
}

export type TotalMatchCountType = {
  readonly __typename?: "TotalMatchCountType"
  readonly matchCount: Maybe<Scalars["Long"]>
}

export type TotalPlayerCountType = {
  readonly __typename?: "TotalPlayerCountType"
  readonly playerCount: Maybe<Scalars["Long"]>
}

export type TowerDamageDetailType = {
  readonly __typename?: "TowerDamageDetailType"
  readonly attacker: Maybe<Scalars["Short"]>
  readonly byAbility: Maybe<Scalars["Short"]>
  readonly byItem: Maybe<Scalars["Short"]>
  readonly damage: Scalars["Int"]
  readonly npcId: Maybe<Scalars["Short"]>
  readonly time: Scalars["Int"]
}

export type TwitchTrackerPlayerHeroType = {
  readonly __typename?: "TwitchTrackerPlayerHeroType"
  readonly heroId: Scalars["Int"]
  readonly matchCount: Scalars["Int"]
  readonly winCount: Scalars["Int"]
}

export type TwitchTrackerPlayerMatchType = {
  readonly __typename?: "TwitchTrackerPlayerMatchType"
  readonly assistCount: Maybe<Scalars["Short"]>
  readonly award: Maybe<Scalars["Byte"]>
  readonly deathCount: Maybe<Scalars["Short"]>
  readonly endDateTime: Maybe<Scalars["Long"]>
  readonly heroId: Scalars["Int"]
  readonly isVictory: Scalars["Boolean"]
  readonly killCount: Maybe<Scalars["Short"]>
  readonly lane: Maybe<MatchLaneType>
  readonly matchId: Maybe<Scalars["Long"]>
  readonly position: Maybe<MatchPlayerPositionType>
  readonly role: Maybe<MatchPlayerRoleType>
}

export type TwitchTrackerPlayerType = {
  readonly __typename?: "TwitchTrackerPlayerType"
  readonly activity: Maybe<PlayerBehaviorActivity>
  readonly avatar: Maybe<Scalars["String"]>
  readonly coreCountLast100: Scalars["Int"]
  readonly leaderboardRank: Maybe<Scalars["Int"]>
  readonly matchCountLast100: Scalars["Int"]
  readonly matches: Maybe<ReadonlyArray<Maybe<TwitchTrackerPlayerMatchType>>>
  readonly name: Maybe<Scalars["String"]>
  readonly proPlayerName: Maybe<Scalars["String"]>
  readonly rank: Maybe<Scalars["Int"]>
  readonly steamAccountId: Maybe<Scalars["Long"]>
  readonly topHeroLast100: Maybe<ReadonlyArray<Maybe<TwitchTrackerPlayerHeroType>>>
  readonly uniqueHeroLast100: Scalars["Int"]
  readonly winCountLast100: Scalars["Int"]
}

export type UpdateFollowerRequestType = {
  readonly dailyEmail: InputMaybe<Scalars["Boolean"]>
  readonly emailLevel: InputMaybe<Scalars["Byte"]>
  readonly feedLevel: InputMaybe<Scalars["Byte"]>
  readonly monthlyEmail: InputMaybe<Scalars["Boolean"]>
  readonly overrideAllUsers: Scalars["Boolean"]
  readonly weeklyEmail: InputMaybe<Scalars["Boolean"]>
}

export type UpdateMatchReplayMatchUploadPlayerObjectType = {
  readonly position: InputMaybe<MatchPlayerPositionType>
  readonly steamAccountId: Scalars["Long"]
}

export type UpdateMatchReplayUploadObjectType = {
  readonly direTeamId: InputMaybe<Scalars["Int"]>
  readonly isActive: InputMaybe<Scalars["Boolean"]>
  readonly leagueId: InputMaybe<Scalars["Int"]>
  readonly matchId: InputMaybe<Scalars["Long"]>
  readonly matchReplayUploadTeamId: Scalars["Int"]
  readonly notes: InputMaybe<Scalars["String"]>
  readonly players: InputMaybe<
    ReadonlyArray<InputMaybe<UpdateMatchReplayMatchUploadPlayerObjectType>>
  >
  readonly radiantTeamId: InputMaybe<Scalars["Int"]>
}

export type UserHomepageType = {
  readonly __typename?: "UserHomepageType"
  readonly activeLeagueGames: Maybe<ReadonlyArray<Maybe<MatchLiveType>>>
  /** A list of blog components to be displayed separately on the homepage. */
  readonly blogs: Maybe<ReadonlyArray<Maybe<BlogType>>>
  readonly inProgressLeagues: Maybe<ReadonlyArray<Maybe<LeagueType>>>
  readonly leagueMetas: Maybe<ReadonlyArray<Maybe<LeagueMetaType>>>
  readonly matchAwards: Maybe<ReadonlyArray<Maybe<MatchType>>>
  readonly recentHighImps: Maybe<ReadonlyArray<Maybe<RecentHighImpType>>>
  readonly recentMatches: Maybe<ReadonlyArray<Maybe<MatchPlayerType>>>
  readonly recentRampages: Maybe<ReadonlyArray<Maybe<RecentRampageType>>>
  readonly recentWinStreaks: Maybe<ReadonlyArray<Maybe<RecentWinStreakType>>>
  readonly topLiveGames: Maybe<ReadonlyArray<Maybe<MatchLiveType>>>
  readonly topPlayersByHeroType: Maybe<ReadonlyArray<Maybe<TopPlayersByHeroType>>>
  readonly topProPlayers: Maybe<ReadonlyArray<Maybe<ProPlayerFollowType>>>
  readonly topSynergiesByHero: Maybe<ReadonlyArray<Maybe<HomepageHeroSynergyType>>>
  readonly totalComponents: Maybe<Scalars["Int"]>
  readonly upcomingLeagues: Maybe<ReadonlyArray<Maybe<LeagueType>>>
}

export type UserHomepageTypeActiveLeagueGamesArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeBlogsArgs = {
  excludedBlogIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeInProgressLeaguesArgs = {
  excludedLeagueIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  includedLeagueIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  includedLeagueTierIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeLeagueMetasArgs = {
  excludedLeagueIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  includedLeagueIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  includedLeagueTierIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeMatchAwardsArgs = {
  matchPlayerAwardTypeIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeRecentHighImpsArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeRecentMatchesArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeRecentRampagesArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeRecentWinStreaksArgs = {
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeTopLiveGamesArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeTopPlayersByHeroTypeArgs = {
  heroComponentsTake: InputMaybe<Scalars["Int"]>
  heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  playersTake: InputMaybe<Scalars["Int"]>
  rankBracketIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Byte"]>>>
}

export type UserHomepageTypeTopProPlayersArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeTopSynergiesByHeroArgs = {
  heroIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Short"]>>>
  synergyComponentsTake: InputMaybe<Scalars["Int"]>
}

export type UserHomepageTypeUpcomingLeaguesArgs = {
  excludedLeagueIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  includedLeagueIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  includedLeagueTierIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars["Int"]>>>
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserQuery = {
  readonly __typename?: "UserQuery"
  /** Gets a list of completed tutorials from the logged in user. */
  readonly completedTutorials: Maybe<ReadonlyArray<Maybe<Scalars["Short"]>>>
  /** Returns a list of feed events for the logged in user. */
  readonly feed: Maybe<FeedResponseType>
  /** Gets the list of followers the person is following. */
  readonly followers: Maybe<ReadonlyArray<Maybe<FollowerType>>>
  /** Gets the list of followers the person is following. */
  readonly following: Maybe<ReadonlyArray<Maybe<FollowerType>>>
  /** Returns a list of Stratz blogs. */
  readonly homepage: Maybe<UserHomepageType>
  /** Find user details of the currently logged in user. */
  readonly profile: Maybe<UserType>
}

export type UserQueryFeedArgs = {
  skip: InputMaybe<Scalars["Int"]>
  take: InputMaybe<Scalars["Int"]>
}

export type UserQueryHomepageArgs = {
  take: Scalars["Int"]
}

export type UserType = {
  readonly __typename?: "UserType"
  readonly followerCount: Maybe<Scalars["Int"]>
  readonly followingCount: Maybe<Scalars["Int"]>
  readonly followingLeagueCount: Maybe<Scalars["Int"]>
  readonly followingTeamCount: Maybe<Scalars["Int"]>
  readonly profile: Maybe<CaptainJackIdentityPrivateProfileType>
  readonly recentMatch: Maybe<MatchType>
  readonly steamAccount: Maybe<SteamAccountType>
  readonly stratzApiApplications: Maybe<
    ReadonlyArray<Maybe<CaptainJackIdentityApiApplicationType>>
  >
}

export type VendorQuery = {
  readonly __typename?: "VendorQuery"
  readonly dotaNext: Maybe<DotaNextQuery>
  /** Used by the Dota 2 Twitch Tracker for Dota Stats */
  readonly twitchTracker: Maybe<TwitchTrackerPlayerType>
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
  readonly __typename?: "YogurtMutation"
  /** Add a member to a match replay upload team. steamAccountId and matchReplayUploadTeamId are required input fields. */
  readonly addTeamMember: Maybe<Scalars["Boolean"]>
  /** Create a new match replay upload team. teamName, emailAddress, and teamId are required input fields. */
  readonly createTeam: Maybe<MatchReplayUploadTeamType>
  /** Delete the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  readonly delete: Maybe<Scalars["Boolean"]>
  /** Import a public match as a match replay upload to the match replay upload team's data set. matchReplayUploadTeamId and matchId are required input fields. */
  readonly importMatch: Maybe<Scalars["Boolean"]>
  /** If the Picks and Bans for a match are missing or invalid, this allows you to update them. */
  readonly importPickBans: Maybe<Scalars["Boolean"]>
  /** Invalidate the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  readonly invalidate: Maybe<Scalars["Boolean"]>
  /** Delete the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  readonly linkSeriesId: Maybe<Scalars["Boolean"]>
  /** Remove the series id for all of the input matches. matchReplayUploadTeamId and matchIds are required input fields. */
  readonly removeSeriesId: Maybe<Scalars["Boolean"]>
  /** Remove a member of a match replay upload team. memberCaptainJackIdentityId and matchReplayUploadTeamId are required input fields. */
  readonly removeTeamMember: Maybe<Scalars["Boolean"]>
  /** Set the default team of a match replay upload team member. memberCaptainJackIdentityId and matchReplayUploadTeamId are required input fields. */
  readonly setTeamMemberDefaultTeam: Maybe<Scalars["Boolean"]>
  /** Update the data of a match replay upload. updateMatchReplayUploadObject is a required input field. */
  readonly update: Maybe<Scalars["Boolean"]>
  /** Update a new match replay upload team. matchReplayUploadTeamId is a required input field. */
  readonly updateTeam: Maybe<Scalars["Boolean"]>
  /** Update a member of a match replay upload team. memberCaptainJackIdentityId, matchReplayUploadTeamId, and isAdmin are required input fields. */
  readonly updateTeamMember: Maybe<Scalars["Boolean"]>
  /** Validate the data of a match replay upload, adding the match replay upload to the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  readonly validate: Maybe<Scalars["Boolean"]>
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
  pickBans: ReadonlyArray<InputMaybe<ImportPickBanType>>
}

export type YogurtMutationInvalidateArgs = {
  matchId: Scalars["Long"]
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationLinkSeriesIdArgs = {
  matchIds: ReadonlyArray<InputMaybe<Scalars["Long"]>>
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtMutationRemoveSeriesIdArgs = {
  matchIds: ReadonlyArray<InputMaybe<Scalars["Long"]>>
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
  matchReplayUploadTeamName: InputMaybe<Scalars["String"]>
  teamId: InputMaybe<Scalars["Int"]>
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
  readonly __typename?: "YogurtQuery"
  /** Find the defualt match replay upload team associated with the currently logged in user. */
  readonly defaultTeam: Maybe<MatchReplayUploadTeamType>
  /** Find the list of Hero's in the game and determine basic output by grouping them together. */
  readonly heroSummary: Maybe<ReadonlyArray<Maybe<MatchReplayUploadHeroSummaryType>>>
  /** Find match replay uploads by match replay upload team id. matchReplayUploadTeamId and request are required input fields. */
  readonly overview: Maybe<MatchReplayUploadOverviewType>
  /** Find a match replay upload team by match replay upload team id. matchReplayUploadTeamId is a required input field. */
  readonly team: Maybe<MatchReplayUploadTeamType>
  /** Find match replay upload team members by match replay upload team id. matchReplayUploadTeamId is a required input field. */
  readonly teamMembers: Maybe<ReadonlyArray<Maybe<MatchReplayUploadTeamMemberType>>>
  /** Find all match replay upload teams associated with the currently logged in user. */
  readonly teams: Maybe<ReadonlyArray<Maybe<MatchReplayUploadTeamType>>>
}

export type YogurtQueryHeroSummaryArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
  request: InputMaybe<FilterMatchReplayUploadRequestType>
}

export type YogurtQueryOverviewArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
  request: InputMaybe<FilterMatchReplayUploadRequestType>
}

export type YogurtQueryTeamArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
}

export type YogurtQueryTeamMembersArgs = {
  matchReplayUploadTeamId: Scalars["Int"]
}

export type TeamsQueryVariables = Exact<{
  ids: ReadonlyArray<Scalars["Int"]> | Scalars["Int"]
}>

export type TeamsQuery = {
  readonly __typename?: "DotaQuery"
  readonly teams: ReadonlyArray<{
    readonly __typename?: "TeamType"
    readonly id: number
    readonly name: string | null
    readonly series: ReadonlyArray<{
      readonly __typename?: "SeriesType"
      readonly id: number
      readonly type: Series | null
      readonly matches: ReadonlyArray<{
        readonly __typename?: "MatchType"
        readonly startDateTime: number | null
      } | null> | null
      readonly teamOne: {
        readonly __typename?: "TeamType"
        readonly id: number
        readonly name: string | null
      } | null
      readonly teamTwo: {
        readonly __typename?: "TeamType"
        readonly id: number
        readonly name: string | null
      } | null
      readonly league: {
        readonly __typename?: "LeagueType"
        readonly displayName: string | null
        readonly streams: ReadonlyArray<{
          readonly __typename?: "LeagueStreamType"
          readonly name: string | null
          readonly languageId: Language | null
          readonly streamUrl: string | null
        } | null> | null
      } | null
    } | null> | null
  } | null> | null
}
