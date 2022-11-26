declare const getMiniflareBindings: () => Env
declare const getMiniflareFetchMock: () => import("undici").MockAgent
declare const setupMiniflareIsolatedStorage: () => import("vitest").SuiteAPI
