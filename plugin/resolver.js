const path = require('path')
const resolve = require('resolve')

exports.interfaceVersion = 2

exports.resolve = function (source, file, config) {
  if (resolve.isCore(source)) return { found: true, path: null }
  try {
    const alias = Object.keys(config)
    if (alias.includes(source)) {
      return { found: true, path: require.resolve(config[source]) }
    }
    return {
      found: true,
      path: resolve.sync(source,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          basedir: path.dirname(path.resolve(file))
        }
      )
    }
  } catch (err) {
    return { found: false }
  }
}
