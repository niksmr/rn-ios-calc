module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'flowtype',
  ],
  rules: {
    'quotes': ['error', 'single'],
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': [
      'off',
      { ignorePureComponents: true },
    ],
    'flowtype/delimiter-dangle': [
      'error',
      'always-multiline'
    ],
    'flowtype/semi': [
      'error',
      'always'
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
