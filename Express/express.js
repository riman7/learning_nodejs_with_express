const express = require('express');
const app = express(); //express function returns object, so app is an object

app.get('/', (req, res)=>{
    res.json([{name:"Riman"}, {name:"ABC"}])
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});