const presets = []
const plugins = []
const env = process.env.BABEL_ENV
const polyfill = process.env.USE_POLYFILL !== 'false'

const presetList = {
  lib: [
    '@babel/preset-env', {
      modules: 'cjs'
    }
  ],
  module: [
    '@babel/preset-env', {
      modules: false
    }
  ],
  modern: [
    '@babel/preset-env', {
      targets: {
        esmodules: true
      },
      modules: false
    }
  ],
  umd: [
    '@babel/preset-env', {
      targets: {
        ie: '9'
      },
      loose: true,
      useBuiltIns: polyfill && 'usage',
      corejs: polyfill && 3
    }
  ]
}

const pluginList = {
  lib: ['add-module-exports']
}

pluginList[env] && plugins.push(...pluginList[env])

presets.push(presetList[env])

module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    ...presets
  ],
  plugins: [
    ...plugins,
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', {
      legacy: true
    }],
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }],
    ['import', {
      'libraryName': 'fish',
      'libraryDirectory': 'es',
      'style': true
    }],
    ['./plugin/replace-import-extensions.js', {
      '.(js|jsx|ts|tsx)$': ''
    }]
  ]
}
