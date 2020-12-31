const hai2007_nodejs = require('../index');
const fs = require('fs');
const hai2007_tool = require('@hai2007/tool');

module.exports = function (configUrl, taskName) {
  taskName = taskName || "default";

  // 如果配置文件存在，且是.js文件
  if (/\.js$/.test(configUrl) && fs.existsSync(configUrl) && !fs.lstatSync(configUrl).isDirectory()) {

    let configFile = require(configUrl);

    // 获取package.json文件
    let packageJSON = JSON.parse(fs.readFileSync(hai2007_nodejs.fullPath(configFile.pkg + '/package.json', configFile.path)));

    if (hai2007_tool.isFunction(configFile.task)) {
      configFile.task['default'] = configFile.task;
    }

    // 执行任务
    configFile.task[taskName](hai2007_nodejs, packageJSON, configFile.path);

  } else {
    hai2007_nodejs.error('No config file:' + configUrl);
  }
};