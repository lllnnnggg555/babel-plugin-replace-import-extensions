import less from 'rollup-plugin-less'
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import svgSprite from 'rollup-plugin-svg-sprite'
import typescript from 'rollup-plugin-typescript'
import importAlias from 'rollup-plugin-import-alias'
// import visualizer from 'rollup-plugin-visualizer'

const path = require('path')
const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv, {
  string: [
    'name'
  ],
  boolean: [
    'polyfill'
  ],
  default: {
    name: 'test',
    polyfill: false
  }
})

process.env.BABEL_ENV = 'umd'
process.env.USE_POLYFILL = args.polyfill

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: args.name,
    file: 'dist/index.js',
    globals: {
      react: 'React',
      'react-dom': 'ReactDom',
      'prop-types': 'PropTypes'
    }
  },
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    less({
      option: {
        compress: true,
        javascriptEnabled: true
      },
      output: 'dist/rollup.build.css',
      exclude: []
    }),
    typescript(),
    importAlias({
      Paths: {
        fish: path.resolve(__dirname, 'node_modules', '@sdp.nd/fish')
      },
      Extensions: ['js']
    }),
    cjs({
      include: 'node_modules/**'
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    svgSprite({
      outputFolder: 'dist',
      prettify: true
    }),
    resolve(),
    terser()
    // visualizer({
    //   filename: './dist/statistics.html',
    //   title: 'My Bundle'
    // })
  ]
}
