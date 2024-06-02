/* 
    Nombre base de datos db_simuladorbancario
    Nombre tabla usuarios
*/

const connection = require("../config/mysql.connection");

/* Obtener un cliente */
const getClientById = async (id) => {
    try {
        const sql = "select * from usuarios where id = ?";

        const [rows] = await connection.query(sql, [id]);

        return rows;
    } catch (error) {
        return error;
    }
};

/* Obtener todos los clientes */
const getAllClients = async () => {
    try {
        const sql = "select * from usuarios";

        const [rows] = await connection.query(sql);

        return rows;
    } catch (error) {
        return error;
    }
};

/* Crear un usuario */
const createUserBD = async (accountNumber, name, age, accountType) => {
    try {
        const sql = "insert into usuarios (accountNumber,name, age, accountType) values (?,?,?,?);";
        const [rows] = await connection.query(sql, [accountNumber, name, age, accountType]);

        return rows;
    } catch (error) {
        return error;
    }
}

/* Editar un usuario */
const updateUserBD = async (id, accountNumber, name, age, accountType) => {

    const sql = "update usuarios set accountNumber=?, name=?, age=?, accountType=? where id=?";

    const [rows] = await connection.query(sql, [
        accountNumber,
        name,
        age,
        accountType,
        id,
    ]);

    return rows;
};

/* Cambia el estado del cliente */
const changeStatus = async (id, currentStatus) => {

    let newStatus = "";
    if (currentStatus === 'active') {
        newStatus = 'inactive';
    } else {
        newStatus = 'active';
    }

    const sql = "update usuarios set status=? where id =?";
    const [rows] = await connection.query(sql, [newStatus, id]);
    return rows;
};


/* Eliminacion del cliente */
const deleteDB = async (id) => {
    const sql = "delete from usuarios where id=?";
    const [rows] = await connection.query(sql, [id]);
    return rows;
};


/* Siempre exportar para que los demas la usen */
module.exports = {
    getClientById,
    getAllClients,
    createUserBD,
    updateUserBD,
    changeStatus,
    deleteDB
};