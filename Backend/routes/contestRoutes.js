const express = require('express');
const router = express.Router();
const contestController = require('../controllers/contestController');
const auth = require('../middleware/auth');



router.get('/', contestController.getAllContests);
router.post('/', auth, contestController.createContest);
router.get('/:contestId', contestController.getContest);
router.delete('/:contestId', auth, contestController.deleteContest);
router.put('/:contestId', auth, contestController.updateContest);

module.exports = router;