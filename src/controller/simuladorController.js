const { getClientById, getAllClients, createUserBD } = require("../repository/simuladorRepository");

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


const createClient = async (req, res) => {
    let response = {};

    try {

        /* desestructuración */
        const { body } = req;

        if (body.accountNumber && body.name && body.age && body.accountType) {
            response = await createUserBD(body.accountNumber, body.name, body.age, body.accountType);
        }

        //lógica para crear un todo
        // let response = {
        //     state: true,
        //     itemCreated: body,
        // };
    } catch (error) {
        response = {
            state: false,
            message: "Ocurrió un error inesperado, consulta al administrador",
        };
        console.log(error);
    }

    res.send(response);
}

module.exports = {
    getOneOrAll, createClient
};
