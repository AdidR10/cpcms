const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const config = require("config");


const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    unique: true
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
});

adminSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id:this._id}, process.env.CPCMS_jwtPrivateKey);
  return token;
}

module.exports = mongoose.model('Admin', adminSchema);
