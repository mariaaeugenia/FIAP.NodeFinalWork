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
        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            price: parseFloat(req.body.price)
        };

        productModel.add(newProduct)
            .then(() => {
                return res.sendStatus(201);
            })
            .catch(err => {
                return res.sendStatus(500).json(err);
            });
    }

    static delete(req, res) {
        const id = req.params.id;

        productModel.delete(id)
            .then(() => {
                return res.sendStatus(200);
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    }
}

module.exports = ProductsController