const express = require("express")
const productRouter = require("./routes/product.router")
const indexRouter = require("./routes/index.router")
const productDetailRouter = require("./routes/productDetail.router")
const app = express()
const path = require("path")
const morgan = require("morgan")


app.use(morgan("dev"))
// http://localhost:3000/products    -> productRouter
// http://localhost:3000/    -> indexRouter
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"../public")))
app.use("/product",productRouter)
app.use("/productDetail",productDetailRouter)

app.use("/",indexRouter)
module.exports = app