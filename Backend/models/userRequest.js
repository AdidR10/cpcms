const mongoose = require('mongoose');

const UserRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  universityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  CodeforcesID: {
    type: String,
    required: true,
  },
  CodechefID: {
    type: String,
    required: true,
  },
  AtcoderID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('UserRequest', UserRequestSchema);