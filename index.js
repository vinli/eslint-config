module.exports = {
  env: {
    es6: true
  },

  rules: {
    // possible errors
    'comma-dangle': [ 2, 'never' ],
    'no-cond-assign': [ 2, 'always' ],
    'no-console': 1,
    'no-constant-condition': 2, // Edge case -> put comment,
    'no-control-regex': 1,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [ 2, 'functions' ],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,

    // best practices
    'accessor-pairs': 1,
    'block-scoped-var': 2,
    'complexity': [ 0, 11 ],
    'consistent-return': 2,
    'curly': [ 2, 'all' ],
    'default-case': 2,
    'dot-location': [ 2, 'property' ],
    'dot-notation': [ 2, { allowKeywords: true } ],
    'eqeqeq': 2,
    'guard-for-in': 0,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 0,
    'no-else-return': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 1,
    'no-implied-eval': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 0,
    'no-process-env': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 0,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 1,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': [ 0, { terms: [ 'todo', 'fixme', 'xxx' ], location: 'start' } ],
    'no-with': 2,
    'radix': 0,
    'vars-on-top': 0,
    'wrap-iife': 1,
    'yoda': [ 2, 'never' ],

    // strict mode
    'strict': [ 2, 'global' ],

    // variables
    'init-declarations': [ 0, 'always' ],
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': [ 2, { vars: 'all', args: 'after-used' } ],
    'no-use-before-define': 2,

    // stylistic issues
    'array-bracket-spacing': [ 2, 'always', { objectsInArrays: false } ],
    'block-spacing': [ 2, 'always' ],
    'brace-style': [ 2, '1tbs', { 'allowSingleLine': false } ],
    'camelcase': [ 2, { 'properties': 'never' } ],
    'comma-spacing': [ 2, { 'before': false, 'after': true } ],
    'comma-style': 2,
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [ 2, 'self' ],
    'eol-last': 0,
    'func-names': 0,
    'func-style': [ 2, 'expression' ],
    'id-length': 0,
    'id-match': 0,
    'indent': [ 2, 2, { SwitchCase: 1 } ],
    'key-spacing': [ 2, { beforeColon: false, afterColon: true } ],
    'keyword-spacing': 2,
    'linebreak-style': [ 2, 'unix' ],
    'lines-around-comment': 0,
    'max-depth': [ 1, 4 ],
    'max-len': [ 1, 120 ],
    'max-nested-callbacks': 0,
    'max-params': [ 0, 4 ],
    'max-statements': [ 0, 10 ],
    'new-cap': 2,
    'new-parens': 2,
    'newline-after-var': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 1,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': [ 2, false ],
    'no-multiple-empty-lines': [ 2, { max: 1 } ],
    'no-negated-condition': 2,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [ 2, 'always' ],
    'one-var': [ 2, 'never' ],
    'operator-assignment': [ 0, 'always' ],
    'operator-linebreak': [ 1, 'before' ],
    'padded-blocks': [ 2, 'never' ],
    'quote-props': [ 2, 'as-needed' ],
    'quotes': [ 2, 'single' ],
    'require-jsdoc': 0,
    'semi-spacing': 2,
    'semi': 2,
    'sort-vars': [ 2, { 'ignoreCase' : true } ],
    'space-before-blocks': 2,
    'space-before-function-paren': [ 2, 'never' ],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': [ 2, { words: true, nonwords: false } ],
    'spaced-comment': [ 2, 'always' ],
    'wrap-regex': 0,

    // ECMAScript 6
    'arrow-body-style': [ 2, 'as-needed' ],
    'arrow-parens': [ 2, 'always' ],
    'arrow-spacing': [ 2, { before: true, after: true } ],
    'constructor-super': 2,
    'generator-star-spacing': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-confusing-arrow': 0,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': [ 2, 'methods' ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-reflect': 0,
    'prefer-spread': 0,
    'prefer-template': 2,
    'require-yield': 2,
  }
};
