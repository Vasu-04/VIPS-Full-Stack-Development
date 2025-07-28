const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const userModel = require("../models/user.model")

router.post("/register",async (req,res)=>{
    const {email,password} = req.body
    try {
        // if (!username) return res.status(400).json({message:"Username is required"})
        if (!email) return res.status(400).json({message:"Email is required"})
        if (!password) return res.status(400).json({message:"Password is required"})
        
        const hashedPass = await bcrypt.hash(password,10)
        console.log(hashedPass);
        const user = new userModel({
            // username:username,
            email:email,
            password:hashedPass
        })
        await user.save()
        res.send("Registered Successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error",error:error.message})
        
    }
})
router.get("/login",async (req,res)=>{
    const user = await userModel.find()
    res.render("login",{user:user})
})
router.get("/register",async (req,res)=>{
    const user = await userModel.find()
    res.render("register",{user:user})
})
router.post("/login",async (req,res)=>{
    const {email,password} = req.body
    try {
        if (!email) return res.status(400).json({message:"Email is required"})
        if (!password) return res.status(400).json({message:"Password is required"})
        const user = await userModel.findOne({email:email})
        if(!user) res.send("User is not registered")
        const isValidated = await bcrypt.compare(password,user.password)
        if (isValidated){   
            res.send("Login successful")
        }
        else{
            res.status(400).json({message:"Email or password is incorrect"})
            res.redirect("/")
            res.redirect("/")
        }
    } catch (error) {
        console.log(error);
        
    }
})
module.exports = router