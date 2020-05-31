module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
  ],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": 0,
    "react/no-danger": 0,
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
    "react/destructuring-assignment": 0,
    "no-console": "off",
    "import/no-unresolved": 0,
    "max-len": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "interactive-supports-focus": 0,
    "global-require": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "react/require-default-props": 0,
    "no-unused-expressions": [0, { "allowTernary": true }],
    "jsx-a11y/anchor-is-valid": 0,
  },
};
