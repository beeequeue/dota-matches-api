declare const getMiniflareBindings: () => Env
declare const getMiniflareFetchMock: () => import("undici-types").MockAgent
declare const setupMiniflareIsolatedStorage: () => import("vitest").SuiteAPI
