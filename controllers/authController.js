const createToken = require('../utils/createToken');
const user = require('../models/user');

const userModel = new user();

class AuthController {
    static auth(req, res) {
        userModel.auth(req.body.email, req.body.password)
            .then(user => {
                if (user.empty) {
                    return res.status(401).send({ message: 'Login failed.' });
                }

                const [{ id }] = user.docs;
                return res.json({ 
                    token: createToken({ id }) 
                });
            })
            .catch(err => {
                return res.json(err);
            });
    }
}

module.exports = AuthController