const express = require("express") //requiring express to add fucntionality
const productModel = require("../models/product.model")

const router = express.Router() // object for creating routes

router.get("/", (req, res) => {  // router for product GET request
    res.render("productForm.ejs")

})

router.post("/add",async (req, res) => {
    const { title, description, category, price } = req.body
    const product = new productModel({
        title: title,
        description: description,
        category: category,
        price: price
    })
    await product.save()
    res.redirect("/")
})
module.exports = router