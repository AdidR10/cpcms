const Admin = require('../models/Admin');
const { adminValidation } = require('../validators/adminValidation');


exports.createAdmin = async (req, res) => {
  try {
      // Validate the Admin data
      const { error } = adminValidation(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let admin = await Admin.findOne({ email: req.body.email });
      if (admin) return res.status(400).send("Admin already exists");

      admin = new Admin({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
      });
      await admin.save();

      res.send(admin);
  } catch (err) {
      console.error(err); // Log the error for debugging purposes
      res.status(500).send({ message: 'Error creating admin', error: err.message });
  }
}

