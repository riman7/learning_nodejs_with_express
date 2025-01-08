//importing readFileSync, writeFileSync, readFile, writeFile function from fs module:
const {readFileSync, writeFileSync} = require('fs'); //synchronous
const {readFile, writeFile} = require('fs'); //asynchronous

//Synchronous Method:
const read = readFileSync('./built-in_module.txt', 'utf-8');
console.log(read);
writeFileSync(
    './write.txt', "Hello World;"
    //if file is not there, it will create one.
);

//Asynchronous Method: (Note: both do the same task)
readFile('./built-in_module.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    } 
    console.log(result)
});
writeFile(
    './write.txt', "Hello World;", (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
    }
);

//Synchronous:
//The code waits for the file operation to finish before proceeding to the next line of code.
//easy but slow

//Asynchronous:
//The code does not wait for the file operation to finish before proceeding to the next line of cod
//complex but fast program

// UTF-8 (Unicode Transformation Format - 8 bits) is a character encoding standard that is widely used to represent text in computers and digital devices.
// without UTF-8, it will give encoded value of file
// can also use UTF-16