const express = require('express');
const app = express.Router();

app.get('/', (req, res)=>{
    res.send('Hello User 1!');
});

module.exports = app;