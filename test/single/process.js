const hai2007_nodejs = require('../../index');
const hai2007_tool = require('@hai2007/tool');

hai2007_tool.animation(function (deep) {
    hai2007_nodejs.process(deep * 100);
}, 10000);