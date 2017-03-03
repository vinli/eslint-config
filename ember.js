var merge = require('lodash.merge');

module.exports = merge({}, require('./index'), {
  env: {
    browser: true
  },

  extends: [
    'plugin:ember/base',
    'plugin:ember-best-practices/recommended'
  ],

  globals: {
    Promise: false,
    console: true
  },

  rules: {
    'ember/named-functions-in-promises': 0,
    'ember/no-empty-attrs': 0,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: 2 
    }
  }
});
