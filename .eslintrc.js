module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': ['@typescript-eslint'],
  'extends': [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  'rules': {
    'no-var': 2,
    'no-debugger': 2,
    'no-unused-vars': 0,
    'semi': [2, 'never'],
    'linebreak-style': 0,
    'object-curly-newline': 0,
    'space-before-function-paren': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'prefer-const': [2, {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-var-requires': 1,
    'standard/no-callback-literal': 0
  },
  'env': {
    'browser': true,
    'amd': true,
    'es6': true,
    'node': true,
    'mocha': true
  }
}
