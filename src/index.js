const http = require('./app');

//http.listen(process.env.PORT || 3000, () => {
  //  console.log('Servidor en el puerto 3000');
//})

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`app corriendo en el puerto ${ PORT }`);
});


//let port = process.env.PORT || 3000;