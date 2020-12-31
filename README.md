# @hai2007/nodejs - 🔨 node.js常用的基础方法汇总

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@hai2007/nodejs"><img src="https://img.shields.io/npm/dm/@hai2007/nodejs.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=@hai2007/nodejs"><img src="https://packagephobia.now.sh/badge?p=@hai2007/nodejs" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/@hai2007/nodejs"><img src="https://data.jsdelivr.com/v1/package/npm/@hai2007/nodejs/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/@hai2007/nodejs"><img src="https://img.shields.io/npm/v/@hai2007/nodejs.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/node.js/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@hai2007/nodejs.svg" alt="License"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/node.js/issues)！

## How to use?
首先，这是一个辅助你开发node.js脚本的东西（比如对webpack或rollup等打包的补充），你有两种方式可以使用：

- 第一种：通过命令行或package.json命令的方式；
- 第二种：使用[hai2007_nodejs.config.js](https://github.com/hai2007/node.js/blob/master/test/demo/hai2007_nodejs.config.js)配置文件方式。

我们内置了一些方法来辅助你编辑自定义插件或配置文件，首先需要获得```hai2007_nodejs```（配置文件中已经帮你注入了）：

```js
const hai2007_nodejs = require('@hai2007/nodejs');
```

- [解析命令行参数](https://github.com/hai2007/node.js/blob/master/docs/option.md)
- [文件操作相关](https://github.com/hai2007/node.js/blob/master/docs/file.md)
- [日志打印](https://github.com/hai2007/node.js/blob/master/docs/print.md)
- [路径](https://github.com/hai2007/node.js/blob/master/docs/path.md)
- [服务器](https://github.com/hai2007/node.js/blob/master/docs/server.md)

## 联系我们

- QQ: 2501482523
- Email: 2501482523@qq.com

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/node.js/blob/master/LICENSE)

Copyright (c) 2020 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
