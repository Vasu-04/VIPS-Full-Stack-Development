const adminApp = require("./src/adminApp")
const userApp = require("./src/UserApp")
const connect = require("./src/db/db")
adminApp.listen(3000, () => {
    console.log("..SERVER RUNNING AT PORT NUMBER :",3000)
    connect()
})

userApp.listen(5000,()=>{
    console.log("..SERVER RUNNING AT PORT NUMBER :",5000)
    connect()
})