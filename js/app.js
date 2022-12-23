const cleverbot = require("cleverbot-api-free");
const angiebot = new cleverbot();

let textoUsuario=document.getElementById("textoUsuario").value;

angiebot.send(
    textoUsuario,
    async response => {
        console.log(response);
    },
);
