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


---

# Projects

Here are some small projects included in this repository:

## Major Projects
> Will be updated soon...

## Minor Projects
> Will be updated soon...

---

# Setup and Usage

To clone and run the code in this repository, follow these steps:

Clone the repository:
   ```bash
   git clone https://github.com/riman7/learning_nodejs_with_express.git
   ```

Install dependencies:
   ```bash
   npm install
   ```
Run the server:
   ```bash
   node app.js
   ```
Open your browser or use a tool like Postman to test the server at:



---

# npm
npm (Node Package Manager) is a tool that comes with Node.js, used to install, manage, and share JavaScript packages.   ```arduino
   http://localhost:3000
   ```
In general, npm is bundled with Node.js, **so installing Node.js usually installs npm as well.**

## Check if npm is Installed
You can verify if npm is installed by running the following command in the terminal:

```bash
npm -v
```

## Handling Errors
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

##  Methods to Install npm Packages
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

# Uninstall npn package
```bash
npm uninstall <package-name>
```
---

## Event loop
JavaScript is blocking, synchronous, and single-threaded by design. This means JavaScript normally executes code line by line in a single thread.
However, in Node.js, the Event Loop enables non-blocking and asynchronous operations.
- Asynchronous methods are offloaded to libuv during execution.
- Once these operations are complete, their callbacks are added to the Event Loop for execution.
- **libuv** is a C library that provides core non-blocking I/O functionality in Node.js, such as file I/O, networking, and timers.
- The Event Loop, a part of *libuv* that coordinates the execution of asynchronous and synchronous code in Node.js, ensuring smooth operation despite JavaScript's single-threaded nature.
- This mechanism allows Node.js to handle asynchronous tasks efficiently while maintaining the single-threaded nature of JavaScript.

### Execuation order:
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



