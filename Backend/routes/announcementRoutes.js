const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');
const auth = require('../middleware/auth');


router.get('/', announcementController.getAllAnnouncements);
router.post('/', auth, announcementController.createAnnouncement);
router.get('/:announcementId', announcementController.getAnnouncement);
router.delete('/:announcementId', auth, announcementController.deleteAnnouncement);
router.put('/:announcementId', auth, announcementController.updateAnnouncement);

module.exports = router;