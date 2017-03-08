module.exports = {
  env: {
    embertest: true
  },

  globals: {
    server: true
  },

  plugins: [
    'mocha'
  ],

  rules: {
    'max-depth': 0,
    'max-len': 0,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-global-tests': 2,
    'mocha/no-identical-title': 2,
    'mocha/no-mocha-arrows': 2,
    'mocha/no-nested-tests': 2,
    'no-unused-expressions': 0, // fix chai property assertions at the end of the chain
    'prefer-arrow-callback': 0, // rule conflicts with mocha function style
    'ember/use-ember-get-and-set': 0 // this breaks tests
  }
}
