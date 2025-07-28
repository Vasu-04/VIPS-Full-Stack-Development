const app =require("./src/app")
const connect = require("./src/db/db")
let PORT = 3000
let PORT2 = 5000
app.listen(PORT,()=>{
    console.log("Server running.....");
    connect()
})
app.listen(PORT2,()=>{
    console.log("Server running.....");
    connect()
})