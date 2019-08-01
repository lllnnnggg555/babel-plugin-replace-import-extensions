# sdk、组件、工具库打包工具库

## 简介

- lib 包使用 gulp 进行打包，目前使用 babel 对 js|jsx|ts|tsx 进行打包，其他资源使用复制的形式

- umd 包使用 rollup 进行打包，支持 js|jsx|ts|tsx，默认会对 less 文件进行打包，输出为一个 css 文件

## 主要功能

- 打包 lib、module、modern 包

lib 为 es5 代码，module 为包含 esmodule 语法代码，modern 为支持 [script tag module](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type) 的代码

如无需打包 modern，需要在 build script 中删除 modern script

- 打包 umd

使用 rollup 打包 umd 可以通过 [rollup treeshaking](https://rollup.docschina.org/#tree-shaking) 特性精简代码

- 支持 ts

默认支持 ts，使用 babel 处理 ts 可以在 js 代码中引用 ts，也可以在 ts 中引用 js

## 拓展功能

目前该工具库打包 lib 暂不支持 less、sass、stylus 等文件处理，如需处理这些文件，可以通过 gulpfile 中增加相应的任务实现，后续该工具库会提供一些简易示例
