const express = require('express');
const users = require('./users');
const products = require('./products');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.use('/users', verifyToken, users);
router.use('/products', verifyToken, products);

module.exports = router