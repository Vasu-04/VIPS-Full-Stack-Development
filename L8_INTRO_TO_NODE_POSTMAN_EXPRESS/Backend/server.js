// CALL STACK and CALL BACK QUEUE and THREAD POOL
/*
1. Asynchronous fucntions move from normal execution flow(call stack) to thread pool or libuv libraray when ever event loop recoginses an async functions.
2. After the timeout attached with asynchronous functions passes, the fucntion moves to the callback queue where the program is executed in FIFO order. and then the output from the call back queue is passed to the call stack only when the call stack is empty(that means all sync fucntions have been executed).
This is EVENT LOOP (call stack -> thread pool -> call back).
*/

// CREATING SERVER
/*
1. port -> an entry gate point to a server
2. localhost -> when the client's system is the server only
3. http -> hypertext transfer protocol used to ttrasfer files over a network having ceratin rules and standards
*/

const http = require("http")

let server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("GET home route")
    }
    else{
        res.end("POST home route")
    }
    if (req.url === "/about") {
        res.end("About route")
    }
})

server.listen(3000, () => {
    console.log("Server is running on port number 3000")
}) //optional callback functions


//POSTMAN - to test the connection with server
//HTTP Status Code - 
/*
1. Informational response (100-199)
2. Successfull response (200-299)
    - 200 OK
    - 201 CREATED
    - 202 ACCEPTED
3. Redirection Response (300-399)
4. Client error responses (400-499)
    - 400 BAD REQUEST
    - 401 UNAUTHORIZED
    - 404 NOT FOUND
5. Server error responses (500-599)
    - 500 INTERNAL SERVER ERROR
    - 503 SERVICE UNAVAILABLE
*/

//HTTP METHODS
/*
1. GET - to retrieve or extrcat information from server
2. POST - to send data to the server
3. PUT - to update the entire portion
4. PATCH  - to update a small portion
5. DELETE
*/

//EXPRESS.JS - Library
/*
1. can use another developers program
2. provides middleware and REST APIs
3. makes it easier to write program not only in one file
4. helps in creating a server 
*/

// NODE PACKAGE MANAGER - NPM
// develoeprs can deploy their program to make it open source for other developers 
// INITIALIZING NPM - npm init or npm init -y -----> package.json (meta data about project eg: author, github, etc.)
// INSTALLING EXPRESS - npm i express -----> package-lock.json (exact version of npm packages)
//                                     |---> node_modules (stores dependencies of all third-party files)


//requiring the export file app.js
const app = require("./src/app")


let port = 3000
app.listen(port,()=>{
    console.log("Server is running on "+port)
})


// REST and RESTFUL APIs
// API - recieves requests from frontend and send the response from backend to the frontend
// REST - Representational state transfer - set of rules and instructions to create APIs
// RESTful APIs - APIs which follows the standards of REST