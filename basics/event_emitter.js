const EventEmitter = require('events'); //returns class

const CustomEvent = new EventEmitter(); // creates object

CustomEvent.on('response', ()=>{
    console.log('Hello world!');
});
// on is used to define what to do for 'response'

//Note: First we have to write on and then emit ie. first define then call
// We can have multiple on and multiple emit for same name

CustomEvent.emit('response');
