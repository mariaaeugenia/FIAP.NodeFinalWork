const baseModel = require('./baseModel');
const operators = require('../utils/operators');

class Product extends baseModel {
    constructor() {
        super();
        this.collection = this.db.collection('products');
    }

    getAll() {
        return this.collection.get();
    }

    get(id) {
        return this.collection.doc(id).get();
    }

    add(product) {
        return this.collection.add(product);
    }

    update(id, product) {
        return this.collection.doc(id).update(product);
    }

    delete(id) {
        return this.collection.doc(id).delete();
    }
}

module.exports = Product