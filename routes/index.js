const express = require('express');
const users = require('./users');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.use('/users', verifyToken, users);

module.exports = router