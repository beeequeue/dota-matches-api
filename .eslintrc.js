module.exports = {
  root: true,
  ignorePatterns: ["src/dota/types.ts"],
  extends: ["plugin:@beequeue/base", "plugin:@beequeue/typescript"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/no-extraneous-dependencies": "off",
  },
}
