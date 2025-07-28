const app = require("./src/app")
const http = require("http")
const connect = require("./src/db/db")
const {Socket} = require("socket.io")

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', socket => {
    const rooomId = socket.handshake.query.rooomId;
    socket.join(rooomId);

    console.log('New client connected');

    socket.on("chacha", msg => {
        console.log(msg);
        socket.emit('chacha', msg);
    });
});


const port = 3000;

server.listen(port,()=>{
    console.log("..SERVER STARTED..")
    connect()
})