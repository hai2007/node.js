const path = require('path');

/**
 * 
 * 获取文件的全路径
 * 
 * @param {path|string} pathString 需要变成全路径的路径
 * @param {path|string} contextPath 拼接上下文路径，可选，默认当前命令行路径
 * 
 * @returns {path} 返回拼接的全路径
 * 
 */
exports.fullPath = function (pathString, contextPath) {

  if (/^\//.test(pathString) || /^[A-Za-z]:\\/.test(pathString)) {
    // 如果传递的就是全路径
    return pathString;
  }

  if (arguments.length <= 1) {
    // 默认把当前命令行作为上下文路径
    contextPath = process.cwd();
  }

  // 拼全路径
  return path.join(contextPath, pathString);
};