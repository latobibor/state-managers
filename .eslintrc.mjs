module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', '@getify/eslint-plugin-proper-arrows', 'eslint-plugin-prettier'],
  rules: {
    // set it to a lower severity so our eyes won't bleed out from all the red lines
    'prettier/prettier': 1,
    curly: 'error',
    'no-unused-vars': 'off',
    // `no-undef` should be turned off for ESLint projects according to the official FAQ
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
  },
  ignorePatterns: ['.eslintrc.mjs', '/build/**/*', '_temp_/**/*'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
