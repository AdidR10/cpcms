const Announcement = require('../models/announcement');
const contest = require('../models/contest');
const { announcementValidation } = require('../validators/announcementValidation');

exports.createAnnouncement = async (req, res) => {
  // Validate the announcement data
  const { error } = announcementValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create a new announcement
  const announcement = new Announcement({
    date: req.body.date,
    body: req.body.body,
    userId: req.body.userId,
  });

  try {
    // Save the announcement to the database
    const savedAnnouncement = await announcement.save();
    res.send(savedAnnouncement);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllAnnouncements = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 0;
  
    try {
      const announcements = await Announcement.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(announcements);
    } catch (err) {
        res.status(500).send({ message: 'Server problem: Unable to delete announcement.' });

    }
};

exports.getAnnouncement = async (req, res) => {
    try {
      const announcement = await Announcement.findById(req.params.announcementId);
      if (!announcement) return res.status(404).send({ message: 'Announcement not found.' });
      res.send(announcement);
    } catch (err) {
        res.status(500).send({ message: 'Server problem: Unable to delete announcement.' });

    }
  };

exports.deleteAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.announcementId);
        if (!announcement) return res.status(404).send({ message: 'Announcement not found.' });

        await Announcement.deleteOne({ _id: req.params.announcementId });
        res.send({ message: 'Announcement deleted successfully.' });
    } catch (err) {
        res.status(500).send({ message: 'Server problem: Unable to delete announcement.' });
    }
};

exports.updateAnnouncement = async (req, res) => {
    // Validate the announcement data
    const { error } = announcementValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const announcement = await Announcement.findByIdAndUpdate(
            req.params.announcementId,
            req.body,
            { new: true }
        );
        if (!announcement) return res.status(404).send({ message: 'Announcement not found.' });
        res.send(announcement);
    } catch (err) {
        res.status(500).send({ message: 'Server problem: Unable to delete announcement.' });

    }
};
