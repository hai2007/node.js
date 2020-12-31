const http = require('http');
const fs = require('fs');
const log = require('./print').log;
const fullPath = require('./path').fullPath;
const mineTypes = require('./assets/mime.types.js');
const responseFileList = require('./assets/responseFileList');

module.exports = function (config) {

  const port = config.port || 8080; // 端口号
  const basePath = config.contentBase || process.cwd();// 根路径

  let index = 0;

  let server = http.createServer(function (request, response) {

    log("[" + index++ + "]" + request.url);

    request.url = request.url.replace(/(\?_=[0-9]+)$/, '');

    // 请求的文件路径
    let filePath = fullPath(request.url == "/" ? "index.html" : request.url.replace(/^\//, ""), basePath);

    let dotName = /\./.test(filePath) ? filePath.match(/\.([^.]+)$/)[1] : "";

    let content = "",
      status = 200,

      // 文件类型
      type = mineTypes[dotName];

    // 如果需要读取的文件存在
    if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
      content = fs.readFileSync(filePath);
    } else {
      status = 404;
      content = responseFileList(filePath);
    }

    response.writeHead(status, {
      'content-type': type || "UN-KNOW"
    });
    response.write(content);
    response.end();
  });

  server.listen(port);
  log('Server running on port:' + port);

};