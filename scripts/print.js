/*!
 * 🔨 - 日志打印
 * https://github.com/hai2007/node.js/blob/master/scripts/print.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

/**
 * 
 * 打印一些重要提示信息
 * 
 * @param {string} txt 需要打印的文字
 * 
 */
exports.log = function (txt) {
  console.log("\x1B[33m" + txt + "\x1B[39m");
};

/**
 * 
 * 打印最普通的提示
 * 
 * @param {string} txt 需要打印的文字
 * 
 */
exports.print = function (txt) {
  console.log(txt);
};

/**
 * 
 * 打印错误提示
 * 
 * @param {string} txt 需要打印的文字
 * 
 */
exports.error = function (txt) {
  console.log("\x1B[35m" + txt + "\x1B[39m");
};

// 计算字符串长度的方法
const stringwidth = function (str) {
  return str.length;
};

// 预定义的常量
const MOVE_LEFT = Buffer.from('1b5b3130303044', 'hex').toString();
const MOVE_UP = Buffer.from('1b5b3141', 'hex').toString();
const CLEAR_LINE = Buffer.from('1b5b304b', 'hex').toString();

/**
 * 
 * 不换行打印
 * 
 * @param {string} stream 需要打印的文字
 * 
 */
exports.linelog = (function (stream) {

  // 用来记录前置有多少行需要回退
  let prevLineCount = 0;

  // 返回实际同行打印的方法
  return function (nextStr) {
    let txt = "";

    // 清除屏幕
    for (let i = 0; i < prevLineCount; i++) {
      txt += MOVE_LEFT + CLEAR_LINE + (i < prevLineCount - 1 ? MOVE_UP : '');
    }

    // 写入屏幕
    stream.write(txt + nextStr);

    // 重新计算需要回滚多少行
    let prevLines = nextStr.split('\n');
    prevLineCount = 0;
    for (let i = 0; i < prevLines.length; i++) {
      // 因为有时候文字过多，因此拿总长度除以一行长度得出真实的行数
      prevLineCount += (Math.ceil(stringwidth(prevLines[i]) / stream.columns) || 1);
    }

  };
})(process.stdout);