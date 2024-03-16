const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const config = require("config");

const Admin = require('../models/Admin');
const { authValidation } = require('../validators/authValidation');


exports.authAdmin = async (req, res) => {
  try {
      // Validate the auth data
      const { error } = authValidation(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let admin = await Admin.findOne({ username: req.body.username });
      if (!admin) return res.status(400).send("Invalid request. Who are you?");

      const validPassword = await bcrypt.compare(req.body.password, admin.password);
      if (!validPassword) return res.status(400).send("Invalid request. Who are you?");

      const token = admin.generateAuthToken();

      res.send(token);
  } catch (err) {
      console.error(err); // Log the error for debugging purposes
      res.status(500).send({ message: 'Error creating admin', error: err.message });
  }
}

