const names = require('./4-Modules.js');
const sayHi  = require('./5-Modules.js')
console.log(names);


sayHi('Anurag');
sayHi(names.john);
sayHi(names.peter);