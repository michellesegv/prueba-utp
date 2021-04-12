module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  globals: {
    module: true,
    require: true,
    methods: true,
    events: true,
    data: true,
    tailwind: true
  },
  plugins: [
    'react'
  ],
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
};
