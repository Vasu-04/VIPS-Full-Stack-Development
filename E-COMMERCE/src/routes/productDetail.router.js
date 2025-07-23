const express = require("express")
const productModel = require("../models/product.model")
const router = express.Router()
const multer = require("multer")
const ImageKit = require("imagekit")
const storage = multer.memoryStorage()
const upload = multer({storage : storage})

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

router.get("/update/:id",async (req,res)=>{
    const productId = req.params.id
    const product = await productModel.findById(productId)
    res.render("updateForm.ejs",{product : product})
})

router.post("/update/:id",upload.single("image"),async (req,res)=>{
    const productId = req.params.id
    const {title,description,category,price} = req.body
    const imagekit = new ImageKit({
        publicKey : "public_S+ST09/gOs0FkUTh+N2x5r9nFCM=",
        privateKey : "private_JUWmGKwe4JamYPR0/iuLeyP3KEo=",
        urlEndpoint : "https://ik.imagekit.io/dv0jyi1v0"
    })
    const result = await imagekit.upload({
        file : req.file.buffer,
        fileName : req.file.originalname,
        isPrivateFile : false,
        isPublished : true
    })
    await productModel.findByIdAndUpdate(productId,{
        title : title,
        description : description,
        category : category,
        price  :price,
        image : result.url,
        imageName : result.name
    })
    res.redirect(`/productDetail/${productId}`)
})
router.get("/delete/:id",async (req,res)=>{
    const productId = req.params.id
    await productModel.findByIdAndDelete(productId)
    res.redirect("/")
})
module.exports = router