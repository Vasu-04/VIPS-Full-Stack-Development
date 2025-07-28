const mongoose = require("mongoose")
const roomSchema = new mongoose.Schema({
    name:{
        type : String
    }
});


const roomModel = mongoose.model("room",roomSchema)

module.exports = roomModel