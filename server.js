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
  }
});
