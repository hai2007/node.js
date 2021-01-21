/*!
 * 🔨 - 文件操作相关
 * https://github.com/hai2007/node.js/blob/master/scripts/file.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

const fs = require('fs');
const path = require('path');
const linelog = require('./print').linelog;

/**
 * 
 * 移动文件或文件夹
 * 
 * @param {path} source 需要移动的文件或文件夹绝对路径
 * @param {path} target 移动的目标文件夹
 * 
 */
function moveSync(source, target, needLog) {

  // 如果是文件，直接剪切即可
  if (!fs.lstatSync(source).isDirectory()) {
    fs.copyFileSync(source, target);
    fs.unlinkSync(source);
  } else {

    // 读取子文件
    const subFiles = fs.readdirSync(source);

    // 如果文件夹不存在，创建
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target);
    }

    // 移动子文件或文件夹
    subFiles.forEach(function (file) {
      moveSync(path.join(source, "./" + file), path.join(target, "./" + file), needLog);
    });

    // 移动完子文件或文件夹以后（移动完毕也意味着子文件或文件夹被删除了）
    fs.rmdirSync(source);
  }

  // 打印操作日志
  if (needLog) {
    linelog('【move】' + source + " → " + target);
  }
};

/**
 * 
 * 复制文件或文件夹
 * 
 * @param {path} source 需要复制的文件或文件夹绝对路径
 * @param {path} target 移动的目标文件夹
 * 
 */
function copySync(source, target, needLog) {

  // 如果是文件，直接复制即可
  if (!fs.lstatSync(source).isDirectory()) {
    fs.copyFileSync(source, target);
  } else {

    // 读取子文件
    const subFiles = fs.readdirSync(source);

    // 如果文件夹不存在，创建
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target);
    }

    // 复制子文件或文件夹
    subFiles.forEach(function (file) {
      copySync(path.join(source, "./" + file), path.join(target, "./" + file), needLog);
    });

  }

  // 打印操作日志
  if (needLog) {
    linelog('【copy】' + source + " → " + target);
  }
};

/**
 * 
 * 删除文件或文件夹
 * 
 * @param {path} target 需要删除的文件或文件夹绝对路径
 * 
 */
function deleteSync(target, needLog) {

  // 如果是文件，直接删除即可
  if (!fs.lstatSync(target).isDirectory()) {
    fs.unlinkSync(target);
  } else {

    // 读取子文件
    const subFiles = fs.readdirSync(target);

    subFiles.forEach(function (file) {

      // 调用这个方法，删除子文件或文件夹
      const curPath = path.join(target, "./" + file);
      deleteSync(curPath, needLog);

    });

    // 等子文件或文件夹删除完毕以后，删除本文件夹
    fs.rmdirSync(target);
  }

  // 打印操作日志
  if (needLog) {
    linelog('【delete】' + target);
  }
};

// 导出
exports.moveSync = moveSync;
exports.copySync = copySync;
exports.deleteSync = deleteSync;