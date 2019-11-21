const { cache } = require('../config/default');
const cacheManager = require('cache-manager');
const memoryCache = cacheManager.caching(cache);

const user = require('../models/user');
const userModel = new user();

class UsersController {
    static getAll(req, res) {
        userModel
            .getAll()
            .then(snapshot => {
                const users = snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data()['name'],
                    email: doc.data()['email']
                }));
                return res.json({ users });
            })
            .catch(err => res.sendStatus(500).json(err));
    }

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
                    
                    const userObject = {
                        id: user.id,
                        ...user.data()
                    };
                    delete userObject.password;

                    memoryCache.set(key, userObject);
                    return res.json(userObject);
                })
                .catch(err => {
                    return res.sendStatus(500).json(err);
                });
        });
    }

    static add(req, res) {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        userModel
            .add(newUser)
            .then(() => res.sendStatus(201))
            .catch(err => res.sendStatus(500).json(err));
    }

    static update(req, res) {
        const id = req.params.id;
        const updateUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        userModel
            .update(id, updateUser)
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(500).json(err));
    }

    static delete(req, res) {
        const id = req.params.id;

        userModel
            .delete(id)
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(500).json(err));
    }
}

module.exports = UsersController