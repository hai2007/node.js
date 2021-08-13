const hai2007_nodejs = require('../../index');

const parsed = hai2007_nodejs.option({ '-c': '--copy', '-d': '--delete' }, process.argv);

console.log(parsed);