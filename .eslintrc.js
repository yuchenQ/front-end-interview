module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'no-new-wrappers': 'off',
    'no-return-assign': 'off',
    'no-prototype-builtins': 'off'
  },
};
