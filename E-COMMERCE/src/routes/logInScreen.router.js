const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const userModel = require("../models/user.model")

router.get("/",(req,res)=>{
    res.render("logInScreen.ejs")
})
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body

    try {
        if (!username) return res.status(400).json({ message: "Username is required" })
        if (!email) return res.status(400).json({ message: "Email is required" })
        const hashedPass = await bcrypt.hash(password, 10)
        const user = new userModel({
            username: username,
            email: email,
            password: hashedPass
        })

        await user.save()
        res.send("User Registered Succesfully")
    }
    catch (error) {
        console.log("..ERROR OCCURED..")
        res.status(500).json({ message: "Internal Server Occured", error: error.message })
    }
})


router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        if (!password) return res.status(400).json({ message: "Password is required" })
        if (!email) return res.status(400).json({ message: "Email is required" })

        const user = await userModel.findOne({ email: email })
        if (!user) return res.status(400).json({ message: "User not Registered" })
        const isValidated = await bcrypt.compare(password, user.password)
        if (isValidated) {
            res.send("User Logged in :)")
        }
        else {
            res.status(400).json({ message: "Email or Password is incorrect :(" })
        }
    }
    catch (error) {
        console.log("..ERROR OCCURED..")
        res.status(500).json({ message: "Internal Server Occured", error: error.message })
    }
})
module.exports = router