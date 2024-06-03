/* El controlador es el intermediario entre logica y consumo de la bd */

/* Repository es donde hacemos las sentencias sql para hacer el crud*/
const { getClientById, getAllClients, createUserBD, updateUserBD, changeStatus, deleteDB } = require("../repository/simuladorRepository");

/* Obtener uno o todos */
const getOneOrAll = async (req, res) => {

    const { query, params } = req;
    let response = [];

    if (params.id) {
        response = await getClientById(params.id);
        if (!response) {
            response = {
                state: false,
                message: "No se encontró información con los parámetros de búsqueda.",
            };
        }
    } else {
        /* Si no hay parametro, significa que debe obtener todos */
        response = await getAllClients();
    }

    res.send(response);
};

/* Crear Cliente */
const createClient = async (req, res) => {
    let response = {};

    try {

        /* desestructuración */
        const { body } = req;

        if (body.accountNumber && body.name && body.age && body.accountType && body.email) {
            response = await createUserBD(body.accountNumber, body.name, body.age, body.accountType, body.email);
        }

    } catch (error) {
        response = {
            state: false,
            message: "Ocurrió un error inesperado, consulta al administrador",
        };
        console.log(error);
    }

    res.send(response);
}

/* Actualizar todas las propiedades del cliente */
const updateClient = async (req, res) => {
    let response = {
        state: false,
    };

    try {
        const {
            params: { id },
        } = req;

        const { body: { accountNumber, name, age, status, type, saldo, accountType } } = req;

        console.log(req.body);

        debugger;

        if (id && accountNumber && name && age && accountType) {
            const updateProcess = await updateUserBD(
                id,
                accountNumber,
                name,
                age,
                accountType
            );

            console.log(updateProcess);
            response.state = true;
            response.process = updateProcess;

        } else {
            response.message = "No indicó un id o una prioridad o una descripción a actualizar";
        }
    } catch (error) {
        response = {
            state: false,
            message: "Ocurrió un error inesperado, consulta al administrador",
        };
        console.log(error);
    }

    res.send(response);
};

/* Cambiar solo una propiedad del cliente */
const changeStatusClient = async (req, res) => {
    let response = {
        state: false,
    };
    try {
        const { params: { id }, } = req;
        const { body: { status } } = req;

        if (id) {
            const completeProcess = await changeStatus(id, status);
            response.state = true;
            response.process = completeProcess;
        } else {
            response.message = "No indicó un id o una prioridad a actualizar";
        }
    } catch (error) {
        response = {
            state: false,
            message: "Ocurrió un error inesperado, consulta al administrador",
        };
        console.log(error);
    }

    res.send(response);
};


/* Eliminar un cliente por id */
const deleteClient = async (req, res) => {
    let response = {
        state: false,
    };
    try {
        const { params: { id }, } = req;

        if (id) {
            const deleteProcess = await deleteDB(id);
            response.state = true;
            response.process = deleteProcess;

        } else {
            response.message = "No indicó un id a eliminar";
        }
    } catch (error) {
        response = {
            state: false,
            message: "Ocurrió un error inesperado, consulta al administrador",
        };
        console.log(error);
    }

    res.send(response);
};

/* Exportamos las funciones para que esten disponibles */
module.exports = {
    getOneOrAll, createClient, updateClient, changeStatusClient, deleteClient
};
