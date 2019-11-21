const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsersController')

router.get('/:id', controller.getById)

module.exports = router
