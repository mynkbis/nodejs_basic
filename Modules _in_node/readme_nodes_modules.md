# Modules in Node.js

Modules in Node.js are a way to organize and structure your code into reusable components. They allow you to split your application into smaller, manageable pieces, each with its own functionality. This modular approach helps in maintaining and scaling your codebase.

## Importing and Exporting in Node

1. We have two files: math.js and utils.js. In utils, we have a logic, and in 
math, we are using it. Let's see how we use import/export modules.

2. To use ES6 import/export, at the top we need to define the following in package.json:

json
{
  "type": "module"
}*

3. Alternatively, use the .mjs extension instead of .js.

4. Else, we can use require and module.exports = "name of function to be imported" for CommonJS modules.

5. To use the imported functions, access them as math.add, unlike the previous method where we used it as math only.

Important Points
1. ES6 Modules are part of modern JavaScript and offer a cleaner syntax.
Backward Compatibility: For older projects, you may need to stick with require and module.exports.
2. File Extensions Matter: Use .mjs for ES6 modules and .js for CommonJS modules.
3. module.export  can only be used once as it overites the values if used twice or more.


# Built-in packages in Node

# file-handling

doing operation on files like read, write, create.

1. first we need to import the module from node only. like
    const fs = require("fs")
    rest check file.js for more operations.


# http module

1. inside server folder there is index.js file where server is initiated. 
const http = require("http") we have imported http in built module of node. Rest check the file

2. #handling the url's 
    a. you can use npm url
    it will give info of the url/ req url.

# http methods:

1. GET, POST, PUT, PATCH, DELETE. 

    a. when we want to get data from server we will use get request.
    b. when we want to send some data and mutate some data in server we use Post req.
    c. when we want to update the whole data or create a new if doesn't exist we use put while for a portion/partial update we use patch.
    d. for deleting something we use Delete req.

## Express js 