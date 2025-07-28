const mongoose = require("mongoose")    
const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/Island")
    .then(()=>{
        console.log(".database connected");
        
    })
    .catch((err)=>{
        console.log("Error occured in database conection");
        
    }
    )
}
module.exports= connect