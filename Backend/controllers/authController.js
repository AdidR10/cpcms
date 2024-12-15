const bcrypt = require('bcrypt');
const Admin = require('../models/admin');
const { authValidation } = require('../validators/authValidation');
const jwt = require('jsonwebtoken');

exports.authAdmin = async (req, res) => {
  try {
    // Validate the auth data
    const { error } = authValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Find the admin by username
    let admin = await Admin.findOne({ username: req.body.username });
    if (!admin) return res.status(400).send("Invalid username or password.");

    // Compare passwords
    const validPassword = await bcrypt.compare(req.body.password, admin.password);
    if (!validPassword) return res.status(400).send("Invalid username or password.");

    // Generate JWT token
    const token = admin.generateAuthToken();

    // Send token in response
    res.send({ token });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).send({ message: 'Error authenticating admin', error: err.message });
  }
};
