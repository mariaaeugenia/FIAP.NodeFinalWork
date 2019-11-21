const baseModel = require('./baseModel');
const operators = require('../utils/operators');

class Product extends baseModel {
    constructor() {
        super();
        this.collection = this.db.collection('products');
    }

    get(id) {
        return this.collection.doc(id).get();
    }
}

module.exports = Product