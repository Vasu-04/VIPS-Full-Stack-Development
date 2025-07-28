const express = require("express")
const productModel = require("../models/product.model")
const multer = require("multer")
const ImageKit = require("imagekit")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const router = express.Router()
router.get("/", (req, res) => {
    res.render("productForm.ejs")
})
router.post("/add", upload.single("image"), async (req, res) => {
    console.log(req.file);
    
    
    
    const Imagekit = new ImageKit({
        publicKey: "public_hGqnIw/zaPq+PSUOOTfP0vCTstQ=",
        privateKey: "private_7ymoi5WyJJNRcQDj9BoHe2fsYDg=",
        urlEndpoint: "https://ik.imagekit.io/islandofzealot",
    });

    const result = await Imagekit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname,
        isPrivateFile: false,
        isPublished: true
        
    })
    console.log(result);
    const imgurl = result.url
    console.log(imgurl);
    
    
    
    const { title, description, category, image, price } = req.body // we are giving variable to all values which are received from form
    const product = new productModel({
        title: title,
        description: description,
        category: category,
        image: imgurl,
        price: price
    })
    console.log(product);
    await product.save()
    res.status(201).json({message : "data save"})
})



module.exports = router 
