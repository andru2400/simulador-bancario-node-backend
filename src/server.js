// Por defecto de la libreria express
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// por defecto 3000, podemos cambiar en las variables de entorno
const port = process.env.PORT || 3000;

// Se usa para apartar las rutas y verse mas organizado, en vez de definirlas aqui, se deja que el archivo router sea quien maneje la logica de rutas
const router = require("./router");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Y usamos las rutas
app.use(router);

// Por defecto de la libreria express
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});