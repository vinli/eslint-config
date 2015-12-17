var merge = require('lodash.merge');

module.exports = merge({}, require('./index'), {
  env: {
    'browser': false,
    'node': true,
    'amd': false,
    'mocha': true,
    'jasmine': false
  },

  globals: {
    'Promise': false,
    'console': true
  },

  rules: {
    // possible errors
    'no-console': 0,

    // Node.js and CommonJS
    'callback-return': 2,
    'global-require': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-restricted-modules': 0,
    'no-sync': 2
  }
});
