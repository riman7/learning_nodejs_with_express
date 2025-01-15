const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end('Home Page');
    }
    else if(req.url == "/about"){
        res.end('About Page');
    }
    else if(req.url == "/contact"){
        res.end('Contact Page');
    }
    else{
        res.end('404 Not Found');
    }
})
server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
// Creates webserver at port 3000 ie. localhost:3000

// About Page: http://localhost:3000/about Contact Page: http://localhost:3000/about
// Any Other: (let) http://localhost:3000/xyz -> 404 Not Found

// To end the server: ctrl + c in terminal