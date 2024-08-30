module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  plugins: ['import', 'node', '@typescript-eslint'],
  rules: {
    'no-unused-vars': ['error', { args: 'none', vars: 'all' }],
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'warn',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=14.0.0',
        ignores: ['modules'],
      },
    ],
  },
}
