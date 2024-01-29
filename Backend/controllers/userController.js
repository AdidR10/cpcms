const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    await User.deleteOne({ _id: req.params.userId });
    res.json({ message: 'Deleted User' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

