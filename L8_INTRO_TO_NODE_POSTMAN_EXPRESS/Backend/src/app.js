const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true})) // body mein jo data aata hai wo readable format mein nahi hota


app.get("/",(req,res)=>{
    // res.send("Connection Established...")
    // res.send("GET Home Page")
    let {name,email} = req.query
    console.log(name)
    console.log(email)
    res.send("hello " + name )
})


app.post("/",(req,res)=>{
    let {firstname,surname,email} = req.body
    console.log(firstname)
    console.log(surname)
    console.log(email)
    res.send("Hello "+firstname+ " " +surname)
})

//DYNAMIC ROUTING
app.get("/user/:id",(req,res)=>{ //the content after the colon is dynamic part
    let {id} = req.params
    console.log("id : ",id)
    // res.send("ID Received")
    res.json({message : "id mil gyi" , id : id})
})
module.exports = app

// request to backend using get - request.query
// and with post - request.body

//Query Strings - anything after the question mark in the url is the query stroing information -> (GET)