const express = require('express');
const router = express.Router();
const userRequestController = require('../controllers/userRequestController');

router.post('/signup', userRequestController.signupUserRequests);

router.get('/', userRequestController.getAllUserRequests);
router.get('/:userRequestId', userRequestController.approveUserRequest);
router.delete('/:userRequestId', userRequestController.deleteUserRequest);

module.exports = router;