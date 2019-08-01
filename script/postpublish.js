const { execSync } = require('child_process')

execSync('cnpm sync babel-plugin-replace-import-extensions --registry=https://registry.npm.taobao.org/ || exit 0', {
  stdio: ['inherit', 'inherit', 'inherit']
})
execSync('cnpm sync babel-plugin-replace-import-extensions --registry=http://registry.npm.sdp.nd/ || exit 0', {
  stdio: ['inherit', 'inherit', 'inherit']
})
