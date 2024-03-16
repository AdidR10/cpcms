const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  universityId: {
    type: String,
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
  codeforces: {
    handle: {
      type: String,
      required: true,
    },
    data: {
      lastName: String,
      lastOnlineTimeSeconds: Number,
      rating: Number,
      friendOfCount: Number,
      titlePhoto: String,
      avatar: String,
      firstName: String,
      contribution: Number,
      organization: String,
      rank: String,
      maxRating: Number,
      registrationTimeSeconds: Number,
      maxRank: String,
    },
  },
  codechef: {
    handle: {
      type: String,
      required: true,
    },
    data: {
      profile: String,
      name: String,
      currentRating: Number,
      highestRating: Number,
      countryFlag: String,
      countryName: String,
      globalRank: Number,
      countryRank: Number,
      stars: Number,
    },
  },
  atcoder: {
    handle: {
      type: String,
      required: true,
    },
    data: {
      birthYear: String,
      country: String,
      rank: String,
      rating: String,
      highestRating: String,
      ratedMatches: String,
    },
  },
});

module.exports = mongoose.model('User', userSchema);