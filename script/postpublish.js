const { execSync } = require('child_process')

const { name } = require('../package.json')

const n = String.fromCharCode(110)
const p = String.fromCharCode(112)

const SXP = `sd${p}`
const SXP_NPM = `registry.npm.${SXP}.${n}d`

execSync(`cnpm sync ${name} --registry=https://registry.npm.taobao.org/ || exit 0`, {
  stdio: ['inherit', 'inherit', 'inherit']
})
execSync(`cnpm sync ${name} --registry=http://${SXP_NPM}/ || exit 0`, {
  stdio: ['inherit', 'inherit', 'inherit']
})
