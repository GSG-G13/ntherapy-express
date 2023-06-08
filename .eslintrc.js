module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'standard-with-typescript',
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
