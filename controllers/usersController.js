const { cache } = require('../config/default');
const cacheManager = require('cache-manager');
const memoryCache = cacheManager.caching(cache);

const user = require('../models/user');
const userModel = user();

class UsersController {
    static getById(req, res) {
        const id = req.params.id;
        const key = `user_${id}`;

        memoryCache.get(key, (err, result) => {
            if (result) {
                return res.json(result);
            }

            userModel.get(id)
                .then(user => {
                    if (user.empty) {
                        return res.sendStatus(404).send({ message: 'User not found.' });
                    }
                    
                    const userData = user.data();
                    memoryCache.set(key, userData);
                    return res.json(userData);
                })
                .catch(err => {
                    return res.sendStatus(500).json(err);
                });
        });
    }
}

module.exports = UsersController