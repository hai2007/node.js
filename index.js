/*!
 * 🔨 - node.js常用的基础方法汇总
 * https://github.com/hai2007/node.js.git
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

const option = require('./scripts/option');
const file = require('./scripts/file');
const print = require('./scripts/print');
const path = require('./scripts/path');
const server = require('./scripts/server');
const process = require('./scripts/process');

module.exports = {

  // 解析命令行参数
  option,

  // 文件操作相关
  moveSync: file.moveSync,
  deleteSync: file.deleteSync,
  copySync: file.copySync,

  // 日志打印
  log: print.log,
  print: print.print,
  error: print.error,
  linelog: print.linelog,

  // 进度打印
  process,

  // 路径
  fullPath: path.fullPath,

  // 服务器
  server

};