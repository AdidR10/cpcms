const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');

router.get('/announcements', announcementController.getAllAnnouncements);
router.post('/announcements', announcementController.createAnnouncement);
router.get('/announcements/:announcementId', announcementController.getAnnouncement);
router.delete('/announcements/:announcementId', announcementController.deleteAnnouncement);
router.put('/announcements/:announcementId', announcementController.updateAnnouncement);

module.exports = router;