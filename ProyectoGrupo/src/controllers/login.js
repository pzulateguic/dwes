const jwt = require("jsonwebtoken");

function getToken(req, res) {
            const user = {
            id: 1,
            nombre : "usuario",
            email: "usuario@email.com"
        }
        jwt.sign({user}, 'usuario', {expiresIn: '32s'}, (err, token) => {
            res.json({
                token
            });
        });
}

module.exports = {getToken};
