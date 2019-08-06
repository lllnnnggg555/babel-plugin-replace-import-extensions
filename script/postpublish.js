const { execSync } = require('child_process')

const { name } = require('../package.json')

execSync(`cnpm sync ${name} --registry=https://registry.npm.taobao.org/ || exit 0`, {
  stdio: ['inherit', 'inherit', 'inherit']
})
execSync(`cnpm sync ${name} --registry=http://registry.npm.sdp.nd/ || exit 0`, {
  stdio: ['inherit', 'inherit', 'inherit']
})
