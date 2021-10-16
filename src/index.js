const http = require('./app');

http.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
})


//let port = process.env.PORT || 3000;