const product = require('../models/product');
const productModel = new product();

class ProductsController {
    static getAll(req, res) {
        productModel
            .getAll()
            .then(snapshot => {
                const products = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data() 
                }));
                return res.json({ products });
            })
            .catch(err => res.status(500).json(err));
    }

    static get(req, res) {
        const id = req.params.id;

        productModel
            .get(id)
            .then(product => res.json(product.data()))
            .catch(err => res.status(500).json(err));
    }

    static add(req, res) {
        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            price: parseFloat(req.body.price)
        };

        productModel
            .add(newProduct)
            .then(() => res.sendStatus(201))
            .catch(err => res.sendStatus(500).json(err));
    }

    static update(req, res) {
        const id = req.params.id;
        const updateProduct = {
            name: req.body.name,
            description: req.body.description,
            price: parseFloat(req.body.price)
        }

        productModel
            .update(id, updateProduct)
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(500).json(err));
    }

    static delete(req, res) {
        const id = req.params.id;

        productModel
            .delete(id)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).json(err));
    }
}

module.exports = ProductsController