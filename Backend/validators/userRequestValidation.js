const Joi = require('joi');

exports.userRequestValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    universityId: Joi.string().required(),
    email: Joi.string().email().required(),
    gender: Joi.string().valid('male', 'female').required(),
    CodeforcesID: Joi.string().required(),
    CodechefID: Joi.string().required(),
    AtcoderID: Joi.string().required(),
  });

  return schema.validate(data);
};