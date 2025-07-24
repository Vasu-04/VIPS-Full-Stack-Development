const express = require("express") //requiring express to add fucntionality
const productModel = require("../models/product.model")
const router = express.Router() // object for creating routes
const multer = require("multer")
const ImageKit = require("imagekit")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.use((req,res,next)=>{
    req.name = "Router Middleware"
    next()
})
router.get("/", (req, res) => {  // router for product GET request
    res.render("productForm.ejs")

})

router.post("/add", upload.single("image"), async (req, res) => {

    // SDK initialization

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
    console.log(result)
    const { title, description, category, price } = req.body
    const product = new productModel({
        title: title,
        description: description,
        category: category,
        price: price,
        image : result.url,
        imageName : result.name
    })
    await product.save()
    res.redirect("/")
})
module.exports = router