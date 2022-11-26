import migrationSql from "../migrations/0000_init.sql?raw"

export const initDb = async (env: Env) => {
  await env.__D1_BETA__MATCHES.batch(
    migrationSql
      .replace(/\n\s*/g, " ")
      .replace(/ {2,}/g, " ")
      .split(" CREATE ")
      .map((s, i) => env.__D1_BETA__MATCHES.prepare(`${i !== 0 ? "CREATE " : ""}${s}`)),
  )
}
