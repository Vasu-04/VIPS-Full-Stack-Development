const express = require("express")
const router = express.Router()
const productModel = require("../models/product.model")
router.get("/:id",async (req,res)=>{
    console.log(req.params);
    const productId = req.params.id
    const product = await productModel.findById(productId)
    
    res.render("productDetail.ejs",{product:product})
})
router.get("/update/:id",async(req,res)=>{
    const productId = req.params.id
    const product = await productModel.findById(productId)

    res.render("UpdateForm.ejs",{product:product})

})
router.post("/update/:id",async(req,res)=>{
    const productId = req.params.id

    console.log(req.body);
    
    const {title,description,category,price} = req.body
    const product = await productModel.findByIdAndUpdate(productId,{
        title:title,
        description:description,
        category:category,
        price:price,
    })
    console.log(product);
    
    res.redirect("/")
})
router.get("/delete/:id",async(req,res)=>{
      const productId = req.params.id
          await productModel.findByIdAndDelete(productId)

        res.redirect("/")
    })

module.exports = router