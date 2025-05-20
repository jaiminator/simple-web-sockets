import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {
    
    console.log("CONNECTION ESTABLISHED", socket.id);
    // server to client
    /* socket.emit("Hello", "people"); */
    // listen from client
    socket.on("mensaje", (arg) => {
        io.emit("Respuesta", `${socket.id} escribió: ${arg}`)
    });
});