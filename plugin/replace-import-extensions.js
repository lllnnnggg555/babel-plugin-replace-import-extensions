const { types } = require('@babel/core')
const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare((api, options) => {
  api.assertVersion(7)

  const keys = Object.keys(options)
  const values = Object.values(options)

  return {
    name: 'replace-import-extensions',
    visitor: {
      ImportDeclaration(path) {
        path.traverse({
          StringLiteral(path) {
            const value = path.node.value
            let source
            const needReplace = keys.some((key, i) => {
              const reg = new RegExp(key)
              const matched = reg.test(value)
              if (matched) {
                source = value.replace(reg, values[i])
              }
              return matched
            })
            if (needReplace) {
              path.replaceWith(types.StringLiteral(source))
            }
          }
        })
      }
    }
  }
})
