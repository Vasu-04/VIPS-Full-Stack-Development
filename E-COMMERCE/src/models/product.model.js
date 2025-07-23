const mongoose = require("mongoose")
// creating schema
// mongodb provides unique id itself for the new product inserted
const productSchema = new mongoose.Schema({
    title : {
        type : String
    },
    description :{
        type : String
    },
    category : {
        type : String
    },
    price : {
        type : String
    },
    image : {
        type : String
    }
})
// for the collection name mongo itself applies letter "s" at the end of collection name
const productModel = mongoose.model("product",productSchema)

module.exports = productModel