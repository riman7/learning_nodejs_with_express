const express = require('express');
const app = express();
const port = 4000;
const user1 = require('./routes/user1');
const user2 = require('./routes/user2');

app.use('/user1', user1);
app.use('/user2', user2);

app.listen(port, ()=>{
    console.log('listening at 4000');
});