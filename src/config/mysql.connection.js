const mysql = require("mysql2/promise");

/* TEST */
// MySQL connection
// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "db_simuladorbancario",
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

/* PRODUCTION */
const pool = mysql.createPool({
    host: "monorail.proxy.rlwy.net",
    user: "root",
    password: "tiZOCaRooMQrrXCAlWajWbsTouMaiZww",
    database: "railway",
    port: 44543,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;
