// oxlint-disable no-underscore-dangle
declare global {
  var __env__: Env
}

export const registerEnv = (env: Env) => {
  globalThis.__env__ = env
}
