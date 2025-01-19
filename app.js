const http = require('http');

const server = http.createServer((req, res)=>{
//this callback function will be called everytime user hits our server
    url = req.url;
    if(url=='/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>Hello World</h1>');
        res.end();
    }
    else{
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});
server.listen(3000);
//Visit http://localhost:3000/