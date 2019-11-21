const baseModel = require('./baseModel');
const operators = require('../utils/operators');

class User extends baseModel {
    constructor() {
        super();
        this.collection = this.db.collection('users');
    }

    auth(email, password) {
        return this.collection
                    .where('email', operators.EQUAL, email)
                    .where('password', operators.EQUAL, password)
                    .get();
    }

    getAll() {
        return this.collection.get();
    }
    
    get(id) {
        return this.collection.doc(id).get();
    }

    add(user) {
        return this.collection.add(user);
    }

    update(id, user) {
        return this.collection.doc(id).update(user);
    }

    delete(id) {
        return this.collection.doc(id).delete();
    }
}

module.exports = User