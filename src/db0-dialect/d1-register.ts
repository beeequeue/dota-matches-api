declare global {
  // eslint-disable-next-line vars-on-top
  var __env__: Env
}

export const registerEnv = (env: Env) => {
  globalThis.__env__ = env
}
