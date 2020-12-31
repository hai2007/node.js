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