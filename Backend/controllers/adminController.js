const _ = require('lodash');
const bcrypt = require('bcrypt');


const Admin = require('../models/Admin');
const { adminValidation } = require('../validators/adminValidation');


exports.createAdmin = async (req, res) => {
  try {
      // Validate the Admin data
      const { error } = adminValidation(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let admin = await Admin.findOne({ username: req.body.username });
      if (admin) return res.status(400).send("Calm down. You already registered.");

      admin = new Admin(_.pick(req.body, ['username', 'email', 'password']));

      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(admin.password, salt);
      await admin.save();

      const token = admin.generateAuthToken();

      res.header('x-auth-token',token).send(_.pick(admin, ['username', 'email']));

  } catch (err) {
      console.error(err); // Log the error for debugging purposes
      res.status(500).send({ message: 'Error creating admin', error: err.message });
  }
}

