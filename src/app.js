const express = require ('express');
const app = express ();


//creamos un servidor http apartir de la libreria de express

const http = require ('http').Server(app);
//para generar una comunicacion vamos a trabajar con socket.io
const io = require('socket.io')(http);


//routes

app.use(require('./routes/littlezoom.routes'));

//donde cargamos los html con lo quue vamos a trabajar 
app.use(express.static(__dirname + "/public"));



//aqui creamos los socket
io.on('connection', (socket) => {
    socket.on('stream', (image) =>{
        ///emitir el evento a los sockets conectados
            socket.broadcast.emit('stream',image);
    })
})

module.exports = http;