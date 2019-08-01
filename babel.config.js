const presets = [
  '@babel/preset-env', {
    targets: {
      node: 8.0
    },
    modules: 'cjs'
  }
]

module.exports = {
  presets: [
    '@babel/preset-typescript',
    presets
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', {
      legacy: true
    }],
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }]
  ]
}
