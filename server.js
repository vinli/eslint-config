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
  }
});
