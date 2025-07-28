const express = require("express")
const roomModel = require("../models/room.model")
const router = express.Router()

router.post("/create", async (req, res) => {
    const { name } = req.body
    await roomModel.create({
        name: name
    })

    res.status(201).json({ message: "Room Created" })
})

router.get("/allRoom", async (req, res) => {
    const rooms = await roomModel.find()
    res.status(200).json({ message: "room found" })
})

module.exports = router