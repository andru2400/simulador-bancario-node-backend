const express = require("express");
const router = express.Router();

// Importamos las funcionalidades
const { getOneOrAll, createClient, updateClient, changeStatusClient } = require("./controller/simuladorController");

/* ----------------------------     Aqui van las Rutas ----------------------------------------- */
// router.get('/', (req, res) => {
//     res.send('¡Hola, mundo!');
// });

router.get("/obtenerCliente/:id?", getOneOrAll);            /* Obtener un cliente por id  , si no lo trae obiene todos  */
router.post("/crearCliente", createClient);                 /* Crea un cliente */
router.put("/editarCliente/:id?", updateClient);            /* Editar cliente */
router.patch("/cambiarEstado/:id?", changeStatusClient);    /* Cambiar Estado cliente */


















/* ------------------------------------------------------------------------------------------------ */

// Exportar el router para usarlo en el archivo principal
module.exports = router;