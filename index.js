/* eslint-env node */
/* eslint quotes: [ 2, "single" ] */

module.exports = {
  configs: {
    'base': require('./rules/base'),
    'ember': require('./rules/ember'),
    'ember-tests': require('./rules/ember-tests'),
    'server': require('./rules/server'),
    'server-tests': require('./rules/server-tests')
  }
};
