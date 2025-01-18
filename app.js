const http = require('http');

const server = http.createServer((req, res)=>{
//this callback function will be called everytime user hits our server
    console.log("user hit the server");
    res.end('home page')
});
server.listen(3000);
//4:15