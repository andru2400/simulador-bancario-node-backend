/* Defaul de la libreria express */
const express = require("express");
const router = express.Router();

// Importamos las funcionalidades
const { getOneOrAll, createClient, updateClient, changeStatusClient, deleteClient } = require("./controller/simuladorController");
const { checkUser } = require("./controller/authController");

/* Moddleware para saber si esta autenticado */
const { checkAutentication } = require("./middleware.js");

/* ----------------------------     Aqui van las Rutas ----------------------------------------- */

router.get("/obtenerCliente/:id?", getOneOrAll);                                        /* Obtener un cliente por id  , si no lo trae obiene todos  */
router.post("/crearCliente", createClient);                                             /* Crea un cliente */
router.put("/editarCliente/:id?", updateClient);                                        /* Editar cliente */
router.patch("/cambiarEstado/:id?", changeStatusClient);                                /* Cambiar Estado cliente */
router.delete("/eliminarCliente/:id?", deleteClient);                                   /* Eliminar cliente */

router.post("/login", checkUser);                                                       /* Revisa las credenciales del cliente */

router.get("/obtenerClienteJwt/:id?", [checkAutentication], getOneOrAll);               /* Obtener un cliente por id  , si no lo trae obiene todos  con TOKEN !*/
router.post("/crearClienteJwt", [checkAutentication], createClient);                    /* Crea un cliente con TOKEN */

/* ------------------------------------------------------------------------------------------------ */

// Exportar el router para usarlo en el archivo principal
module.exports = router;