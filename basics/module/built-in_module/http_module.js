const http = require('http');
const server = http.createServer((req, res) =>{
    res.write("Welcome");
    res.end();
})
server.listen(3000);
//Creates webserver at port 3000 ie. localhost:3000
//To end the server: ctrl + c in terminal