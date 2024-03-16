const Joi = require('joi');

exports.announcementValidation = (data) => {
  const schema = Joi.object({
    date: Joi.date().required(),
    body: Joi.string().required(),
    userId: Joi.string().required()
  });

  return schema.validate(data);
};