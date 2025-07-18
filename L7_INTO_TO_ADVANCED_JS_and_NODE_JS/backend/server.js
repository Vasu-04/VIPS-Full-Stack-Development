//-----------------------------------------------------------------
//Node JS
//-----------------------------------------------------------------
//Node js is a Javascript Runtime Environment used to create server for javascript and makes it easy for us to write program in the native language only
//it was written in c++ language by google for chrom
//the javascript code runs on server rather than browser
//it is multi-threaded , increaes the performance of program execution

//Blocking vs Non-Blocking:

//Blocking :-
//Blocks the execution of further code until the current operation completes.
//Other operations must wait.
//Typically used in synchronous functions.

//Non-blocking :-
//Doesn’t block execution.
// Other operations can continue while it’s running in the background.
// Typically uses callbacks, promises, or async/await.

console.log("Node.js")


//module.require and module.export are synchronous tasks
//import -> export is default (async)
//require -> module.export (sync)

//importing module math.js
const sum = require("./math")
console.log(sum(10,20))


//module  :-
//os
//FileSystem
//core 
//http


//File System:- (READING)
const fs = require("fs") 
fs.readFile("math.js","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(data)
    }
})
// (WRITING) -doesn't mean that it adds value to a file rather it creates one
fs.writeFile("text.txt","Kya haal chaal","utf8",(err)=>{
    console.log(err)
})
// (UPDATE)
fs.appendFile("text.txt","Appending this file","utf8",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("data Appended")
})
// (DELETE)
fs.unlink("text.txt",(err)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log("Deleted Succesfully")
})


// Folder System
// (CREATION)
fs.mkdirSync("sample",(err)=>{
    if(err){
        console.log(err)
        retrun
    }
    console.log("Folder Created")
})

// (READING)
fs.readdirSync("sample",(err,file)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(file)
})

// (DELETION)
fs.rmdir("sample",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Deletion Done")
})