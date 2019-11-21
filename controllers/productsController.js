const product = require('../models/product');
const productModel = new product();

class ProductsController {
    static getAll(req, res) {
        productModel.getAll()
            .then(snapshot => {
                const products = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data() 
                }));
                return res.json({ products });
            })
            .catch(err => {
                return res.sendStatus(500).json(err);
            });
    }

    static add(req, res) {
        const newObj = {
            name: 'MacBook',
            price: 100
        };

        productModel.add(newObj)
            .then(product => {
                return res.sendStatus(201).send({ message: 'ok' });
            })
            .catch(err => {
                return res.sendStatus(500).json(err);
            })
    }
}

module.exports = ProductsController