const express = require("express")
const router = express.Router()
const productModel = require("../models/product.model")

router.get("/", async (req, res) => {
    const products = await productModel.find()
    res.render("homeScreen.ejs", { products: products, title: "Home Screen" })
})

module.exports = router