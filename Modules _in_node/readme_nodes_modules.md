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

2. handling the url's 
    1. you can use npm url
    it will give info of the url/ req url.

# http methods:

1. GET, POST, PUT, PATCH, DELETE. 

    1. when we want to get data from server we will use get request.
    2. when we want to send some data and mutate some data in server we use Post req.
    3. when we want to update the whole data or create a new if doesn't exist we use put while for a portion/partial update we use patch.
    4. for deleting something we use Delete req.

## Express js 

1. What problem express solves?
   server created with http module have a callback function which handles the whole server. so for each route we need to create cases and we have to handle each method for each case differetly which is a pain. Further to use query params we need external package i.e url, similary for headers and json we need to install different modules and we need to handle everything at scratch level. So, now these issue are resolved by express. Express, is fast unopinionated, minimalist web framework for nodejs.

2. How to install Express and use it?
    on terminal use npm i express. import the express from package rest follow the file inside server (index.js)

3. How versioning work in Nodejs?
     let say we have a package as 
     "express":"^4.19.2"
     1st part--->4:
     2nd part--->18:
     3rd part--->2: 

     // 3rd part means minor fixes and its a optional update
     // 2nd part means its recommended/ security fix like if version was 4.19 and its latest is 4.20 it means something big is fixed.

     //1st part means complete new things added/ major update/ breaking update. one must be careful while updating this. it might old code not work on updated one.

     ^ means the 1st part must not change while later of its part can be updated automatically.

     ~ this part means only update the last part not the second one.

4. Key Differences Between REST and SOAP
    # Format: 
    REST typically uses JSON or XML, while SOAP uses XML exclusively.
    # Transport: 
    REST operates over HTTP/HTTPS, while SOAP can use multiple protocols, including HTTP/HTTPS, SMTP, etc.
    # Complexity: 
    REST is simpler and more lightweight, whereas SOAP is more rigid and provides more extensive built-in error handling and security features.
    # State: 
    REST is stateless, meaning each request from the client to the server must contain all the information the server needs to fulfill that request. SOAP can be stateful depending on the design.

# In layman's terms, a REST API (Representational State Transfer Application Programming Interface) is like a waiter in a restaurant who takes your order (your request), tells the kitchen (the server) what you want, and then brings back the food (the response) to you.

5. What are Middlewares?
    Middleware is like a bridge or a middleman (function) that (has access to req and res object) sits between the request coming from the user and the response sent by the server in a web application. Its job is to handle certain tasks along the way, such as checking if the user is authorized, logging information, or modifying the request or response. it has req, res and next. 

6. headers?
    they are important part of the api  request and response as they represent the meta data associated with the api request and response. Header is field in HTTP request that passes additional context and metadata about the req and res. We can pass or send a header (custom) in res as res.setHeader("X-example", "testing custom header")
