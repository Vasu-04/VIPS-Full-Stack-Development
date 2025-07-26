const express = require("express")
const app = express()
const path = require("path")
const logInScreenRouter = require("./routes/logInScreen.router.js")
const homeScreenRouter = require("./routes/homeScreen.router")


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"../public")))
// app.use("/users",userRouter)
app.use("/",logInScreenRouter)

module.exports = app