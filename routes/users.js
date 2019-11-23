const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController')
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, controller.getAll);
router.get('/:id', verifyToken, controller.getById);
router.post('/', controller.add);
router.put('/:id', verifyToken, controller.update);
router.delete('/:id', verifyToken, controller.delete);

module.exports = router
