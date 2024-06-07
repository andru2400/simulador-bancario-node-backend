const bcrypt = require("bcrypt");
const { checkUserDB, signToken } = require("../repository/authRepository");
const { saltRounds } = require("../config/auth.config");

const checkUser = async (req, res) => {
    let response = {};
    try {
        const { email, password } = req.body;
        if (email && password) {
            //revisar que exista un usuario (enviado)
            const [user] = await checkUserDB(email);

            if (user) {
                const {
                    id: id,
                    name: name,
                } = user;

                //const encrypt = await bcrypt.hashSync(password, saltRounds);
                // $2b$10$SWnj6UFl57muSOJcyqCDhuQipINaFv4NVEoBI/Lz2nMbxVHoCwKAW
                // $2b$10$BZ19UpEgJuPliVwVyvixxuEAfHGtmulYxwHMCgkZrwGaucnXQIOPK
                // $2b$10$dHhg/gt0BYXXS4jLsKqgcuXXtOvFYSRtWyPTdxnd4knpglhifsDd2
                // abc123 contraseña por defecto.
                // AlgoMuySeguro123**->"$2b$10$UQ.KJphm84eC7xNO9hxPgO2kUrpzUPuVIuTIhCUtpOqSloersYRHS"
                //console.log("encriptada: ", encrypt);
                //revisión del usuario en la base de datos.
                //encriptar la contraseña que me envian
                // aaabbbccddd->j3298jf9r3jfef98jsdlfkj3fjj389sd           

                //revisó esa contraseña y la comparo con la de la base de datos.
                console.log(password, user.password);
                const match = await bcrypt.compare(password, user.password);
                console.log(match);
                if (match) {
                    const {
                        id: id,
                        name: name,
                    } = user;
                    console.log(req.headers.authorization);

                    const userClear = { id, name };
                    const token = signToken(userClear);
                    // response = { state: true, token, user: userClear };
                    response = { state: true, data: { token, user: userClear } };
                } else {
                    response = {
                        state: false,
                        message: "Usuario o contraseña no son válidos",
                    };
                }
            } else {
                response = { state: false, message: "Usuario no existe" };
            }
        } else {
            response = {
                state: false,
                message: "no proporcionó un usuario y contraseña",
            };
        }
    } catch (error) {
        console.log(error);
    }
    res.send(response);
};

module.exports = { checkUser };