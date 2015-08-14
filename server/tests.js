
module.exports = {
  plugins: [
    'mocha'
  ],

  rules: {
    'max-depth': 0,
    'max-len': 0,
    'mocha/no-exclusive-tests': 2,
    'no-unused-expressions': 0 // fix chai property assertions at the end of the chain
  }
}
