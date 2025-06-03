interface ImportMeta {
  env: {
    NODE_ENV?: "development" | "production" | "test"
  }
}

declare module "*?raw" {
  const src: string
  export default src
}
