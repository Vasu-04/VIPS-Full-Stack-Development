const mongoose = require("mongoose")
// code for connection
const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/VIPS")
    .then(()=>{
        console.log("..DATABASE CONNECTED SUCCESFULLY..")
    })
    .catch(()=>{
        console.log("..ERROR OCCURED IN DATABASE CONNECTION..")
    })
}
// passing connection to the server for connection
module.exports = connect