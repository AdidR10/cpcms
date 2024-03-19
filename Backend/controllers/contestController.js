
const Contest = require('../models/contest');
const { contestValidation } = require('../validators/contestValidation');

exports.createContest = async (req, res) => {
  // Validate the contest data
 
  const { error } = contestValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create a new contest
  const contest = new Contest({
    link: req.body.link,
    name: req.body.name,
    password: req.body.password,
    date: req.body.date,
    time: req.body.time,
    duration: req.body.duration,
    type: req.body.type,
    description: req.body.description
  });

  try {
    // Save the contest to the database
    const savedContest = await contest.save();
    res.send(savedContest);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllContests = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 0;

  try {
    const contests = await Contest.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.send(contests);
  } catch (err) {
    res.status(500).send({ message: 'Server problem: Unable to retrieve contests.' });
  }
};

exports.getContest = async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.contestId);
    if (!contest) return res.status(404).send({ message: 'Contest not found.' });
    res.send(contest);
  } catch (err) {
    res.status(500).send({ message: 'Server problem: Unable to retrieve contest.' });
  }
}

exports.deleteContest = async (req, res) => {
    try {
      const contest = await Contest.findById(req.params.contestId);
      if (!contest) return res.status(404).send({ message: 'Contest not found.' });
  
      await Contest.deleteOne({ _id: req.params.contestId });
      res.send({ message: 'Contest deleted successfully.' });
    } catch (err) {
      res.status(500).send(err);
    }
};
exports.updateContest = async (req, res) => {
  try {
    // Validate the contest data
    const { error } = contestValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const updatedContest = await Contest.updateOne(
      { _id: req.params.contestId },
      {
        $set: {
          link: req.body.link,
          name: req.body.name,
          password: req.body.password,
          date: req.body.date,
          time: req.body.time,
          duration: req.body.duration,
          type: req.body.type,
          description: req.body.description,
        },
      }
    );
    res.send(updatedContest);
  } catch (err) {
    res.status(404).send({ message: 'Contest not found.' });
  }
}