const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');

router.get('/', announcementController.getAllAnnouncements);
router.post('/', announcementController.createAnnouncement);
router.get('/:announcementId', announcementController.getAnnouncement);
router.delete('/:announcementId', announcementController.deleteAnnouncement);
router.put('/:announcementId', announcementController.updateAnnouncement);

module.exports = router;