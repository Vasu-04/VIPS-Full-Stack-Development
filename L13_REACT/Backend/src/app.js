const express = require ("express")
const productRouter = require("./routes/product.router")
const indexRouter = require ("./routes/index.router")
const productDetailRouter = require ("./routes/details.router")
const UserRouter = require ("./routes/user.router")
const app = express()
const path = require("path")
const morgan = require("morgan")
const cors = require("cors")

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"../public")))

app.use("/",indexRouter)
app.use("/product",productRouter)
app.use("/productDetails",productDetailRouter)
app.use("/user",UserRouter)

module.exports = app