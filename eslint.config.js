import antfu from "@antfu/eslint-config"

export default antfu({
  stylistic: false,
  vue: false,
  test: {
    overrides: {
      "test/prefer-lowercase-title": "off",
    },
  },
  typescript: {
    tsconfigPath: "tsconfig.json",
    overrides: {
      "no-console": "off",
      "ts/no-use-before-define": "off",
      "ts/consistent-type-definitions": "off",
      "ts/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "ts/no-unsafe-argument": "off",
      "ts/no-unsafe-assignment": "off",
      "ts/no-unsafe-member-access": "off",
    },
  },
})
