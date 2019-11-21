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
    
    get(id) {
        return this.collection.doc(id).get();
    }
}

module.exports = User