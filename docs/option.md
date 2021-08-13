解析命令行参数
======================

- 解析命令行传递的参数，转换为更容易处理的结构： 

```js
// 其中shortHands是缩写到全拼的映射
// 例子：{'-c':'--copy','-d':'--delete'}
const parsed = hai2007_nodejs.option(shortHands, process.argv);
```

返回格式如下：

```js
// 命令 creaste  --name 名字 -c 文件1 文件2
{ 
  __terminal__: [ 'creaste' ], 
  name: [ '名字' ], 
  copy: [ '文件1', '文件2' ]
}
```

[<< 返回首页](../README.md)