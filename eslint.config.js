module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
    },
    rules: {
      indent: ["error", 2],
      "comma-spacing": ["error", { before: false, after: true }],
      "space-infix-ops": "error",
      camelcase: ["error", { properties: "never", ignoreDestructuring: false }],
      "no-var": "error",
      "brace-style": ["error", "1tbs", { allowSingleLine: false }],
      "no-alert": "error",
      "id-match": ["error", "^[a-z][a-zA-Z0-9]{0,11}$", { onlyDeclarations: true }],
    },
  },
];
