const fs = require('fs');
const stream = new fs.createReadStream('./test.txt'); 
stream.on('data', (result)=>{
    console.log(result);

})