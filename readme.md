# A babel plugin to replace import extensions

## Install

```bash
npm install babel-plugin-replace-import-extensions --save-dev
```

## How to use

add blow to babelrc file

```javascript
module.exports = {
  plugins: [
    ['replace-import-extensions', {
      '.(js|jsx|ts|tsx)$': ''
      // key is a string for match
      // value is a string to replace which matched
    }]
  ]
}
```