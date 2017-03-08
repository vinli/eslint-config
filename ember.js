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
    'ember/order-in-controllers' : [2, {
      order: [
        'service',
        'property',
        'single-line-function',
        'multi-line-function',
        'lifecycle-hook',
        'method',
        'actions',
      ]
    }],
    'ember/order-in-components' : [2, {
      order: [
        'service',
        'property',
        'single-line-function',
        'multi-line-function',
        'lifecycle-hook',
        'method',
        'actions',
      ]
    }],
    'ember/order-in-routes' : [2, {
      order: [
        'service',
        'inherited-property',
        'property',
        [ 'model', 'lifecycle-hook' ],
        'method',
        'actions',
      ]
    }]
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: 2
    }
  }
});
