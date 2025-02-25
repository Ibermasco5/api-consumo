const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const electrodomesticosRoutes = require('./routes/electrodomesticos');
const calculoRoutes = require('./routes/calculo');
const tarifaRoutes = require('./routes/tarifa');
const historialRoutes = require('./routes/historial');

app.use(bodyParser.json());

app.use('/electrodomesticos', electrodomesticosRoutes);
app.use('/calculo', calculoRoutes);
app.use('/tarifa', tarifaRoutes);
app.use('/historial', historialRoutes);


//-- para dar accesos desde cualquier servidor​
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

//cargamos el archivo del controlador​
//app.use(require('./routes/rutas'));
app.listen(process.env.PORT||3300,() => {
    console.log("Servidor corriendo en el puerto 3300");
    console.log("Ejecute el navegador en la siguiente dirección, http://localhost:3300/");
});
module.exports = app;
