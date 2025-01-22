const express = require('express');
const app = express.Router();

app.get('/', (req, res)=>{
    res.send('Hello User 2!');
});

module.exports = app;