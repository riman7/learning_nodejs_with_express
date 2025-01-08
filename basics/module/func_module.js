//every file in a node is module
//note: if we call a function inside a module, the function will be called when you are importing that module in other file using require

sayHi = (name)=> {
    console.log(`Hello ${name}`);
}
module.exports = sayHi;