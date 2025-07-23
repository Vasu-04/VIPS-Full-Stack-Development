const express = require("express")
const productModel = require("../models/product.model")
const router = express.Router()

router.get("/", async (req, res) => {
    // res.send("Index Router")
    const products = await productModel.find()
    // console.log("products : ",products)
    res.render("index.ejs",{products : products,title : "Home Page"}) // to display the html file in this case, index.ejs
})

module.exports = router