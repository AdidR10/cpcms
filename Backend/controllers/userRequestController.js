const UserRequest = require('../models/UserRequest');
const { userRequestValidation } = require('../validators/userRequestValidation');
const User = require('../models/User');
const  getCodeforcesData  = require('../services/codeforcesData');
const  getCodechefData  = require('../services/codechefData');
const  getAtcoderData  = require('../services/atcoderData');
const { assert } = require('joi');


exports.signupUserRequests = async (req, res) => {
  // Validate the user request data
  const { error } = userRequestValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create a new user request
  const userRequest = new UserRequest({
    name: req.body.name,
    universityId: req.body.universityId,
    email: req.body.email,
    gender: req.body.gender,
    CodeforcesID: req.body.CodeforcesID,
    CodechefID: req.body.CodechefID,
    AtcoderID: req.body.AtcoderID,
  });

  try {
    // Save the user request to the database
    const savedUserRequest = await userRequest.save();
    res.send(savedUserRequest);
  } catch (err) {
    res.status(400).send(err);
  }
};
// write the getAllUserRequests, approveUserRequest, and deleteUserRequest functions here
exports.getAllUserRequests = async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 0;
    
        try {
            const userRequests = await UserRequest.find()
                .skip((page - 1) * limit)
                .limit(limit);
            res.send(userRequests);
        } catch (err) {
            res.status(500).send({ message: 'Server problem: Unable to retrieve contests.' });
        }
};
exports.deleteUserRequest = async (req, res) => {
    try {
      const userRequest = await UserRequest.findById(req.params.userRequestId);
      if (!userRequest) return res.status(404).send({ message: 'User Request not found.' });
  
      await UserRequest.deleteOne({ _id: req.params.userRequestId });
      res.send({ message: 'User Request deleted successfully.' });
    } catch (err) {
      res.status(500).send(err);
    }
};

exports.approveUserRequest = async (req, res) => {
  try {
    const userRequest = await UserRequest.findById(req.params.userRequestId);
    if (userRequest == null) {
      return res.status(404).json({ message: 'Cannot find user request' });
    }
    
    const codeforcesData = await getCodeforcesData(userRequest.CodeforcesID);
    const codechefData = await getCodechefData(userRequest.CodechefID);
    const atcoderData = await getAtcoderData(userRequest.AtcoderID);
    console.log(userRequest);
    
    const newUser = new User({
      name: userRequest.name,
      universityId: userRequest.universityId,
      email: userRequest.email,
      gender: userRequest.gender,
      codeforces: {
        handle: userRequest.CodeforcesID,
        data: codeforcesData,
      },
      codechef: {
        handle: userRequest.CodechefID,
        data: codechefData,
      },
      atcoder: {
        handle: userRequest.AtcoderID,
        data: atcoderData,
      },
    });

    await newUser.save();
    await UserRequest.deleteOne({ _id: req.params.userRequestId });

    res.json(newUser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};