const express = require("express")
const productModel = require("../models/product.model")
const router = express.Router()

router.get("/:id", async (req, res) => {
    let {id} = req.params
    const products = await productModel.find()
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if (element.id == id) {
            res.render("productDetail.ejs",{product : element,title : "Product Detail"})
        }
    }
})
module.exports = router