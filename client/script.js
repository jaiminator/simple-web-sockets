let socket = io("http://192.168.50.46:3000", {
    cors: {
        origin: "*"
    }
});

const inputMessage = document.getElementById("inputMessage");
const btnSend = document.getElementById("btnSend");
const listMessages = document.getElementById("listMessages");

const username = prompt("Your username");
socket.emit("set-username", username);


const listenMessages = (message) => {
    listMessages.innerHTML += `<li>${message}</li>`;
}

const sendMessage = () => {
    const message = inputMessage.value;
    socket.emit("mensaje", message);
}

socket.on("respuesta", listenMessages);
btnSend.addEventListener("click", sendMessage);
inputMessage.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
        inputMessage.value = "";
    }
});