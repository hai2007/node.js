const fs = require('fs');
const path = require('path');

// 读取当前路径下的文件，方便服务器404的时候导航
module.exports = function (fullUrl) {

  let files, content = fullUrl;
  try {
    files = fs.readdirSync(fullUrl);
  } catch (e) {
    content = path.resolve(fullUrl, '../');
    files = fs.readdirSync(content);
  }

  let list = "";

  for (let i in files) {
    let isDirTemplate = fs.lstatSync(path.join(content, files[i])).isDirectory() ? "/" : "";
    list += "<li><a href='./" + files[i] + isDirTemplate + "'>" + files[i] + "</a></li>"
  }

  return `<!DOCTYPE html>
  <html lang="zh-cn">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>404</title>
    <style>
      a{
        line-height:2em;
      }
    </style>
  </head>
  <body>
    <ul>
      <li><a href='../'>..</a></li>
      `+ list + `
    </ul>
  </body>
  </html>`;
};