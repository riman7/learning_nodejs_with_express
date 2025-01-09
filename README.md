# learning_nodejs_with_express
> **Note:** This repository is a work in progress. I am actively learning and updating the content. It is not yet complete, but feel free to explore and contribute!

Welcome to my **Learning Node.js with Express** repository! This is a personal project to document my journey as I learn and explore the fundamentals of backend development using **Node.js** and **Express.js**.  


The repository includes hands-on examples, solutions to practice problems, and small projects to solidify my understanding.

---

## Table of Contents
1. [Introduction](#introduction)
2. [Why Node.js and Express.js?](#why-nodejs-and-expressjs)
3. [Topics Covered](#topics-covered)
4. [Projects](#projects)
5. [Setup and Usage](#setup-and-usage)
6. [Resources](#resources)

---

## Introduction

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

## Topics Covered

This repository is organized into sections covering the following topics:

### **Node.js Basics**
- Introduction to Node.js
- Modules
- Built-in Modules(os, fs(sync, async), path, http)
- npm(node package manager)

---

### Projects

Here are some small projects included in this repository:
...

---

## Setup and Usage

To clone and run the code in this repository, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/riman7/learning-nodejs-express.git
   cd learning-nodejs-express

Install dependencies:
```bash
npm install
```
Run the server:
```bash
node app.js
```
Open your browser or use a tool like Postman to test the server at:

```arduino
http://localhost:3000
```

## npm
In general, npm is bundled with Node.js, so installing Node.js usually installs npm as well.

# Check if npm is Installed
You can verify if npm is installed by running the following command in the terminal:

```bash
npm -v
```

# Handling Errors
If you encounter an error like this:
"npm : cannot be loaded because running scripts is disabled on this system."
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

# Reinstall Node.js (if npm is missing)
If npm is not installed on your system, reinstall Node.js from the Node.js official website. npm will be included with the installation.

## Resources
Here are some resources I’m using to learn Node.js and Express.js:
The Odin Project
freeCodeCamp - Backend Development
Node.js Official Documentation
Express.js Official Documentation
Traversy Media YouTube Tutorials

## Contributions
This repository is primarily for my personal learning, but suggestions and contributions are welcome! Feel free to fork this repository or open an issue for any recommendations.

## Acknowledgments
Special thanks to the open-source community and the creators of Node.js and Express.js for making backend development accessible and enjoyable.

Happy Coding! 🚀



