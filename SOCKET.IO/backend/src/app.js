const express = require("express")
const roomRouter = require("./routes/room.routes")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", roomRouter)
module.exports = app