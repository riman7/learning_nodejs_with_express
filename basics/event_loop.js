// Synchronous Code (Executed first in the call stack)
console.log('Start (Synchronous)');

// `process.nextTick` - Runs before any I/O tasks (next tick phase)
process.nextTick(() => {
    console.log('Next Tick (process.nextTick)');
});

// `Promise` - Executes after the current synchronous code, but before `setTimeout`
new Promise((resolve, reject) => {
    resolve('Promise (Resolved)');
}).then((message) => {
    console.log(message); // This will log after all synchronous and nextTick tasks
});

// `setTimeout` - Executes in the Timer phase, after I/O and Promise callbacks
setTimeout(() => {
    console.log('setTimeout (Macrotask - Timer Phase)');
}, 0);

// `setImmediate` - Executes in the Check phase, after I/O events
setImmediate(() => {
    console.log('setImmediate (Macrotask - Check Phase)');
});

// Synchronous Code (Executed last in the call stack)
console.log('End (Synchronous)');
