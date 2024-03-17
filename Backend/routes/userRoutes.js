const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');


router.get('/', auth, userController.getAllUsers);
router.get('/:userId', auth, userController.getUser);
router.delete('/:userId', auth, userController.deleteUser);
//router.put('/:userId', userController.updateUser);

module.exports = router;