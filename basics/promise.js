// Promise is an object representing a promise that a certain operation will eventually complete (either successfully or with an error).
// It is a way to handle asynchronous operations in JavaScript in a cleaner and more manageable way compared to callbacks.
//  A promise in JavaScript signifies a value that isn't available immediately but will be in the future, after the asynchronous operation completes. It promises that, once it's resolved, it will either provide the result of the operation or indicate an error.

// Creating Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to simulate success or failure
    if (success) {
      resolve("Operation was successful!"); // Fulfilling the promise
    } else {
      reject("Operation failed!"); // Rejecting the promise
    }
  });

// Once a promise is created, we can use .then() for handling success and .catch() for handling errors.
myPromise
  .then((message) => {
    console.log(message); // Success: prints "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // Failure: prints "Operation failed!"
  });
