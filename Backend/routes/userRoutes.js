const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUser);
router.delete('/:userId', userController.deleteUser);
//router.put('/:userId', userController.updateUser);

module.exports = router;