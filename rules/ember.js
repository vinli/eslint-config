/* eslint-env node */
/* eslint quotes: [ 2, "single" ] */

module.exports = {
  env: {
    browser: true
  },

  extends: [
    'plugin:ember/base'
  ],

  globals: {
    Promise: false,
    console: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: 2
    }
  },

  rules: {
    'func-style': 0,

    'ember/named-functions-in-promises': 0,
    'ember/no-empty-attrs': 0,
    'ember/order-in-components': [2, {
      order: [
        'service',
        'property',
        'single-line-function',
        'multi-line-function',
        'lifecycle-hook',
        'method',
        'actions'
      ]
    }],
    'ember/order-in-controllers': [2, {
      order: [
        'service',
        'query-params',
        'inherited-property',
        'property',
        'single-line-function',
        'multi-line-function',
        'method',
        'actions'
      ]
    }],
    'ember/order-in-models': [2, {
      order: [
        'service',
        'attribute',
        'relationship',
        'single-line-function',
        'multi-line-function'
      ]
    }],
    'ember/order-in-routes': [2, {
      order: [
        'service',
        'inherited-property',
        'property',
        [ 'model', 'lifecycle-hook' ],
        'method',
        'actions'
      ]
    }],
    'ember/use-ember-get-and-set': 2
  }
};
