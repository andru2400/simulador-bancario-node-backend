const { privateKey, expiresIn } = require("../config/auth.config");
const connection = require("../config/mysql.connection");
var jwt = require("jsonwebtoken");

const signToken = (userData) => {
    return jwt.sign(userData, privateKey, { expiresIn });
};

const checkUserDB = async (email) => {
    try {
        const sql = "select * from usuarios where email=?";
        const [rows] = await connection.query(sql, [email]);
        return rows;
    } catch (error) {
        return error;
    }
};

const checkValidToken = (token) => {
    try {
        var decoded = jwt.verify(token, privateKey);
        console.log(`decoded`, decoded);
        if (decoded) return decoded;
    } catch (error) {
        console.log(error);
    }

    return false;
};

const isAuthenticated = (req) => {
    if (req.headers.authorization && checkValidToken(req.headers.authorization)) {
        return checkValidToken(req.headers.authorization);
    }
    return false;
};

module.exports = { checkUserDB, isAuthenticated, signToken };
