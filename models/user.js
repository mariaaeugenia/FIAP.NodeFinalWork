const baseModel = require('./baseModel');
const OPERATORS = {
    MINOR: '<',
    MONIOR_EQUAL: '<=',
    EQUAL: '==',
    GRATER_EQUAL: '>=',
    GRATER: '>',
    CONTAIN: 'array-contains'
};

class User extends baseModel {
    constructor() {
        super()
        this.collection = this.db.collection('users');
    }

    auth(email, password) {
        return this.collection
                    .where('email', OPERATORS.EQUAL, email)
                    .where('password', OPERATORS.EQUAL, password)
                    .get()
    }
    
    get(id) {
        return this.collection
            .doc(id).get()
    }
}

module.exports = User