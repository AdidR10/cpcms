const Joi = require('joi');

exports.contestValidation = (data) => {
  const schema = Joi.object({
    link: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    duration: Joi.string().required(),
    type: Joi.string().valid('team', 'individual').required(),
    description: Joi.string().optional(),
  });

  return schema.validate(data);
};