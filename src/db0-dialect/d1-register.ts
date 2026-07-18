declare global {
  // oxlint-disable-next-line no-underscore-dangle
  var __env__: Env
}

export const registerEnv = (env: Env) => {
  // oxlint-disable-next-line no-underscore-dangle
  globalThis.__env__ = env
}
