// every file in a node is module
const names = require('./name_module');
const sayHi = require('./func_module');
sayHi(names.s1);
sayHi(names.s2);

/*
Equilvalent to:
const s1 = "Rhyam";
const s2 = "Rahul";
function sayHi (name) {
   console.log(`Hello ${name}`);
}
sayHi(s1);
sayHi(s2);
*/
