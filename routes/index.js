const express = require('express');
const users = require('./users')
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');

router.use('/users', verifyToken, users);

module.exports = router