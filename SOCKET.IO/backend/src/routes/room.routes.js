const express = require("express")
const roomModel = require("../models/room.model")
const router = express.Router()

router.post("/create", async (req, res) => {
    const { name } = req.body
    const newRoom = new roomModel({
        name: name
    })
    await newRoom.save()
    res.status(201).json({ message: "Room Created" })
})

router.get("/allroom", async (req, res) => {
    const rooms = await roomModel.find()
    res.status(200).json({ message: "room found" ,rooms})
})

module.exports = router