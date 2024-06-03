const { isAuthenticated } = require("./repository/authRepository");

const checkAutentication = (req, res, next) => {
    if (!isAuthenticated(req)) {
        res.send({ state: false, message: "NO está autenticado" });
        return;
    } else {
        next();
    }
};

module.exports = {
    checkAutentication,
};
