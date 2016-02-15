var merge = require('lodash.merge');

module.exports = merge({}, require('./index'), {
  env: {
    'browser': false,
    'node': true,
    'amd': false,
    'mocha': true,
    'jasmine': false,
    'es6': true
  },

  globals: {
    'Promise': false,
    'console': true
  },

  rules: {
    // possible errors
    'no-console': 0,

    // Node.js and CommonJS
    'object-shorthand': 0,
    'arrow-body-style': 0,
    'callback-return': 2,
    'global-require': 0,
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-restricted-modules': 0,
    'no-sync': 2
  }
});
