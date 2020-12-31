module.exports = {

  // 当前配置文件的相对路径上下文
  path: __dirname,

  // package.json路径
  pkg: '.',

  // 注册任务
  task: {

    // 任务一
    // 执行命令：hai2007_nodejs --config ./hai2007_nodejs.config.js demo1
    demo1: function (hai2007_nodejs, pkg, path) {

      hai2007_nodejs.log('执行任务一');
      hai2007_nodejs.print(hai2007_nodejs);
      hai2007_nodejs.print(pkg);
      hai2007_nodejs.print(path);

    },

    // 任务二
    // 执行命令：hai2007_nodejs --config ./hai2007_nodejs.config.js demo2
    demo2: function (hai2007_nodejs, pkg, path) {

      hai2007_nodejs.log('执行任务二');
      hai2007_nodejs.print(hai2007_nodejs);
      hai2007_nodejs.print(pkg);
      hai2007_nodejs.print(path);

    },

    // 默认任务
    // 执行命令：hai2007_nodejs --config ./hai2007_nodejs.config.js
    default: function (hai2007_nodejs, pkg, path) {

      hai2007_nodejs.log('执行默认任务');
      hai2007_nodejs.print(hai2007_nodejs);
      hai2007_nodejs.print(pkg);
      hai2007_nodejs.print(path);

    },

  }

  // // 除了定义有名称的任务，也可以只定义一个任务
  // //执行命令：hai2007_nodejs --config ./hai2007_nodejs.config.js
  // task:function(hai2007_nodejs, pkg, path){
  //   hai2007_nodejs.log('执行缺省任务');
  //     hai2007_nodejs.print(hai2007_nodejs);
  //     hai2007_nodejs.print(pkg);
  //     hai2007_nodejs.print(path);
  // }

};