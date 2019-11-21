const express = require('express');
const users = require('./users')
const router = express.Router();

router.use('/users', verifyToken, users);

module.exports = router