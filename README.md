# Learning Nodejs with Expressjs
> **Note:** This repository is a work in progress. I am actively learning and updating the content. It is not yet complete, but feel free to explore and contribute!

Welcome to my **Learning Node.js with Express** repository! This is a personal project to document my journey as I learn and explore the fundamentals of backend development using **Node.js** and **Express.js**. 
This is more like my notebook while learning **Node.js** and **Express.js**. 


The repository includes hands-on examples, solutions to practice problems, and small projects to solidify my understanding.

---

# Table of Contents
1. [Introduction](#introduction)
2. [Why Node.js and Express.js?](#why-nodejs-and-expressjs)
3. [Topics Covered](#topics-covered)
4. [Projects](#projects)
5. [Setup and Usage](#setup-and-usage)
6. [Resources](#resources)

---

# Introduction

Node.js is a powerful, open-source runtime environment for executing JavaScript on the server side. Express.js is a minimalist web framework built on top of Node.js that simplifies creating web servers and APIs.

Through this repository, I aim to:
- Learn the basics of Node.js and its ecosystem.
- Understand how to build web servers using Express.js.
- Work on real-world projects to practice backend development.

---

## Why Node.js and Express.js?

Here’s why I chose to learn Node.js and Express.js:
- **Fast and Scalable**: Node.js is designed for building high-performance, scalable applications.
- **JavaScript Everywhere**: Use the same language for both frontend and backend development.
- **Express.js Flexibility**: A lightweight framework that simplifies creating robust APIs and web applications.

---

# Topics Covered

This repository is organized into sections covering the following topics:

- **Node.js Basics**
  - [Introduction to Node.js]()
  - [Modules]()
  - [Built-in Modules(os, fs(sync, async), path, http)](./basics/module/built-in_module)
  - [npm(node package manager)](#npm) 
  - [Event Loop](#event-loop)
  - [Promises](#understanding-promises-in-javascriptpromise)
  - [Event]
  - [Streams]
  - [Express]
  - [Middleware]
  - [Postman]
  - [Socket.io]

---

# Projects

Here are some small projects included in this repository:

## Major Projects
> Will be updated soon...

## Minor Projects
> Will be updated soon...

---

# Setup and Usage

## Install nodejs
Go to http://nodejs.org/, download node.js installer and follow instructions. Mac OS, Windows, and Linux are supported.


To clone and run the code in this repository, follow these steps:

Clone the repository:
   ```bash
   git clone https://github.com/riman7/learning_nodejs_with_express.git
   ```

Install dependencies:
   ```bash
   npm install
   ```

---

# npm
npm (Node Package Manager) is a tool that comes with Node.js, used to install, manage, and share JavaScript packages.   

```arduino
   http://localhost:3000
```

### Check if npm is Installed
In general, npm is bundled with Node.js, **so installing Node.js usually installs npm as well.**  
You can verify if npm is installed by running the following command in the terminal:

```bash
npm -v
```

### Handling Errors
If you encounter an error like this:
> "npm : cannot be loaded because running scripts is disabled on this system."
It likely means that your system's PowerShell Execution Policy is set to restrict script execution, which prevents npm from running in PowerShell.

To fix this, check your current execution policy by running:

```bash
Get-ExecutionPolicy
```
If it returns Restricted, temporarily allow script execution by running:

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
```
This change applies only to the current PowerShell session and does not permanently modify your system settings.

### Reinstall Node.js (if npm is missing)
If npm is not installed on your system, reinstall Node.js from the Node.js official website. npm will be included with the installation.

###  Methods to Install npm Packages
1. ***Local Installation:***
Installs the package in the current project directory and adds it to the node_modules folder. This is used for project-specific dependencies.
```bash
npm install <package-name>
```
Example:
```bash
npm install express
```
The package will only be accessible within the project.

2. ***Global Installation:***
Installs the package globally, making it accessible system-wide through the terminal. This is used for CLI tools or utilities.
```bash
npm install -g <package-name>
```
Example:
```bash
npm install -g nodemon
```
You can now use nodemon globally in any project.

***Install Required Dependencies***
```bash
npm install
```
will install all the dependency required for the project which are mentiones in the package.json file.

### Uninstall npn package
```bash
npm uninstall <package-name>
```
---

# Event loop
JavaScript is blocking, synchronous, and single-threaded by design. This means JavaScript normally executes code line by line in a single thread.
However, in Node.js, the Event Loop enables non-blocking and asynchronous operations.
- Asynchronous methods are offloaded to libuv during execution.
- Once these operations are complete, their callbacks are added to the Event Loop for execution.
- **libuv** is a C library that provides core non-blocking I/O functionality in Node.js, such as file I/O, networking, and timers.
- The Event Loop, a part of *libuv* that coordinates the execution of asynchronous and synchronous code in Node.js, ensuring smooth operation despite JavaScript's single-threaded nature.
- This mechanism allows Node.js to handle asynchronous tasks efficiently while maintaining the single-threaded nature of JavaScript.

### Execuation order:
First of all, all synchronous tasks are executed.  
Then,[Micro tasks(nextTick and Promise)] nextTick queue and then Promise queue. After that Event Loop [Macro Tasks] starts.
 Event Loop is composed of the following six phases, which are repeated for as long as the application still has code that needs to be executed:
1. ***Timers*** (eg. setTimeout, setInterval(if their timer is finished))
2. ***I/O Callbacks***
3. ***Waiting / Preparation***
4. ***I/O Polling***
5. ***setImmediate() callbacks***
6. ***Close events***

Example Execution Order
```javascript
console.log('Start');

setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
Promise.resolve().then(() => console.log('Promise'));
process.nextTick(() => console.log('Next Tick'));

console.log('End');
```

**Output:**  
   Start (Synchronous)  
   End (Synchronous)  
   Next Tick (process.nextTick)  
   Promise (Resolved Promise)  
   setImmediate (Macrotask - Check Phase)  
   setTimeout (Macrotask - Timer Phase)


**Explaination:**
- **Synchronous Code:** Executes first, in the order it's written.
- **process.nextTick:** Executes immediately after synchronous code, before any I/O tasks or other asynchronous code.
- **Promise:** Executes after the synchronous code and nextTick, but before setTimeout and setImmediate.
- **setTimeout:** Executes in the Timer Phase of the event loop, after microtasks.
- **setImmediate:** Executes in the Check Phase of the event loop, after I/O tasks.
---

## Understanding Promises in JavaScript

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. It allows handling asynchronous operations in a cleaner and more manageable way compared to callbacks.

### Key Points:
- A promise represents a value that isn’t immediately available but will be in the future, after the asynchronous operation completes.
- The promise guarantees that once it's resolved, it will either provide the result of the operation or indicate an error.

### Example of Creating and Using a Promise

```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to simulate success or failure
    if (success) {
      resolve("Operation was successful!"); // Fulfilling the promise
    } else {
      reject("Operation failed!"); // Rejecting the promise
    }
  });
```
Once a promise is created, we can use .then() for handling success and .catch() for handling errors..

```javascript
myPromise
  .then((message) => {
    console.log(message); // Success: prints "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // Failure: prints "Operation failed!"
  });
```

To make it look simpler, we have **async** and **await**.
The await keyword can only be used inside an async function. It pauses the execution of the async function and waits for the promise to resolve or reject.  
Instead of above code, we can do:
```javascript
async function func() {
    try{
    msg = await myPromise;
    console.log(msg);
    }
    catch(error){
        console.log(error);
    }
}
func();
```
[**CODE**](./basics/promise.js)

---

# HTTP Message
An HTTP message is the communication format used in the HTTP protocol between a client (e.g., browser, API consumer) and a server. It comes in two forms: **requests** (sent by clients to servers) and **responses** (sent by servers to clients).  

## HTTP Request
A client sends an HTTP request to perform an action, such as retrieving a webpage, submitting data, or querying an API.
<details>
  <summary><strong>more</strong></summary>
 Structure:<br>
    <b>Start Line:</b> Specifies the HTTP method (e.g., GET, POST), the target URL, and the HTTP version.<br>
    Headers: Provide metadata like the type of content being sent or accepted (Content-Type, Authorization).<br>
    <b>Blank Line:</b> Separates headers from the body.<br>
    <b>Body (Optional):</b> Includes data sent with methods like POST or PUT (e.g., form submissions or JSON payloads).<br>

    Example:
        ```
        POST /login HTTP/1.1
        Host: example.com
        Content-Type: application/json
        Content-Length: 27

        { "username": "JohnDoe", "password": "1234" }
        ```
</details>

## HTTP Response
 A server sends an HTTP response to inform the client about the outcome of the request and optionally includes data.
 <details>
  <summary><strong>more</strong></summary>
 Structure:<br>
    <b>Status Line:</b> Includes the HTTP version, status code, and a short reason phrase (e.g., 200 OK, 404 Not Found).<br>
    <b>Headers:</b> Metadata about the response (e.g., Content-Type, Content-Length).<br>
    <b>Blank Line:</b> Separates headers from the body.<br>
    <b>Body (Optional):</b> Contains the data requested, like an HTML page or JSON object.<br>

    Example:
        ```
        HTTP/1.1 200 OK
        Content-Type: text/html
        Content-Length: 24

        <h1>Welcome, John!</h1>
        ```
  </details>

---

# HTTP Methods

In Node.js, HTTP methods are used to define the type of request a client makes to the server. These methods can be handled using the built-in `http` module or frameworks like Express.js. Below are the common HTTP methods and their usage in a Node.js server.

## Common HTTP Methods

1. **GET**  
   - **Purpose:** Retrieve data from the server.  
2. **POST**  
   - **Purpose:** Send data to the server to create a resource.  
3. **PUT**  
   - **Purpose:** Update an existing resource or create a new one.  
4. **DELETE**  
   - **Purpose:** Remove a resource from the server.  
  
### Using Express.js for HTTP Methods

Using Express.js simplifies handling HTTP methods:

1. **GET**

   ``` javascript
   const express = require('express');
   const app = express();

   app.get('/users', (req, res) => {
     res.json([{ name: 'John Doe' }]);
   });

   app.listen(3000, () => console.log('Express server running on port 3000'));
   ```

---

# Middleware  
Middleware in Express is a function that gets executed during the request-response cycle. It has access to the request (req), response (res), and the next middleware function in the application's request-response cycle.
```
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Pass control to the next middleware
});
```

## Built-in and Third Party Middleware
Express comes with some built-in middleware functions like 
- express.json()
- express.urlencoded()
- express.static()
  ```
  app.use(express.static('public'));
  ```
  used to serve static files (like CSS, JavaScript, and images) from the public directory.
- body-parser
- multer
  used for uploading files.


---

# JavaScript Concepts and Solutions

<details>
  <summary><strong>What does the <code>new</code> keyword do in JavaScript?</strong></summary>
  The `new` keyword in JavaScript is used to create an instance of an object from a constructor function.
  It Creates object of the class.  
  It is actually concept of OOP(Object-Oriented Programming).

  Example:
  ```javascript
  function Person(name) {
      this.name = name;
  }

  const john = new Person("John");
  console.log(john.name); // Output: John

  ```
</details>

<details>
  <summary><strong>What is <code>__dirname</code> keyword?</strong></summary>
  __dirname is a special variable in Node.js that represents the directory name of the current module (the current file's directory). It is a global variable that gives you the absolute path to the directory where the currently executing script is located.
</details>

<details>
  <summary><strong>How event-emitter differ from function?</strong></summary>
  In JavaScript, both EventEmitter and functions can be used to handle and manage logic, but they serve different purposes and are designed for different use cases.  
  You would use an EventEmitter instead of a function when you need to handle multiple events or asynchronous behavior. A function executes synchronously and returns a result directly, while an EventEmitter allows you to emit events and have multiple listeners handle those events independently, enabling more complex, asynchronous workflows and decoupling the event producers from event consumers.
</details>

---

# FAQ

<details>
  <summary><strong>What is this repository about?</strong></summary>
  This repository is focused on learning Node.js and Express.js. It includes example code, explanations, and practice projects to help understand the concepts better.
</details>

<details>
  <summary><strong>How do I run the project locally?</strong></summary>
  1. Clone the repository: `git clone https://github.com/username/repo.git`  
  2. Navigate to the project folder: `cd repo`  
  3. Install dependencies: `npm install`  
  4. Run the project: `npm start`
</details>

<details>
  <summary><strong>Can I contribute to this repository?</strong></summary>
  Yes, contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.
</details>

---

# Resources
Here are some resources I’m using to learn Node.js and Express.js:
1. freeCodeCamp - Backend Development
2. Node.js Official Documentation
3. Express.js Official Documentation
4. Chat-gpt


# Contributions
This repository is primarily for my personal learning, but suggestions and contributions are welcome! Feel free to fork this repository or open an issue for any recommendations.

# Acknowledgments
Special thanks to the open-source community and the creators of Node.js and Express.js for making backend development accessible and enjoyable.

Happy Coding! 🚀



