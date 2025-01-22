const express = require('express');
const app = express();
const http = require('http');
const ioSocket = require('socket.io');

const server = http.createServer(app);
const io = ioSocket(server);

app.get('/', (req, res)=>{
    var option = {
        root: __dirname
    }
    var filename = 'index.html'
    res.sendFile(filename, option);

});
var user = 0;

io.on('connection', (socket)=>{
    console.log('a user connected');
    user++;
    socket.emit('newUserConnect', `Welcome`);
    socket.broadcast.emit('newUserConnect', `${user} user connected`)
    socket.on('disconnect', ()=>{
        console.log('a user disconnected');
        user--;
        socket.broadcast.emit('newUserConnect', `${user} user connected`)
    })
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})