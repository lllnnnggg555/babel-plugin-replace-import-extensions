import * as t from '@babel/types'
import { types } from '@babel/core'
import { NodePath } from '@types/babel__traverse'
import { declare } from '@babel/helper-plugin-utils'

module.exports = declare((api, options: object): object => {
  api.assertVersion(7)

  const keys: string[] = Object.keys(options)
  const values: string[] = Object.values(options)

  return {
    name: 'replace-import-extensions',
    visitor: {
      ImportDeclaration(path: NodePath<t.ImportDeclaration>): void {
        path.traverse({
          StringLiteral(path: NodePath<t.StringLiteral>): void {
            const value = path.node.value
            let source: string
            const needReplace = keys.some((key, i): boolean => {
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
