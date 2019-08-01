const path = require('path')

module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'useJSXTextNode': true,
    'project': './tsconfig.json',
    'sourceType': 'module'
  },
  'plugins': ['react', '@typescript-eslint'],
  'extends': [
    'standard',
    'standard-react',
    'import'
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
    '@typescript-eslint/no-unused-vars': 2,
    'standard/no-callback-literal': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-max-props-per-line': [2, {
      'maximum': 5,
      'when': 'multiline'
    }],
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx', '.ts', '.tsx']
    }],
    'react/prop-types': [
      0, {
        ignore: ['children']
      }
    ]
  },
  'env': {
    'browser': true,
    'amd': true,
    'es6': true,
    'node': true,
    'mocha': true
  },
  'settings': {
    'import/resolver': {
      [path.resolve('./plugin/resolver')]: {
        fish: '@sdp.nd/fish'
      }
    }
  }
}
