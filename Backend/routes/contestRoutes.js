const express = require('express');
const router = express.Router();
const contestController = require('../controllers/contestController');

router.get('/', contestController.getAllContests);
router.post('/', contestController.createContest);
router.get('/:contestId', contestController.getContest);
router.delete('/:contestId', contestController.deleteContest);
router.put('/:contestId', contestController.updateContest);

module.exports = router;