const app = require("./src/app")
const connect = require("./src/db/db")
app.listen(3000, () => {
    console.log("..SERVER RUNNING..")
    connect()
})