const Joi = require('joi');

exports.authValidation = (data) => {
    const schema = Joi.object({
      username: Joi.string().min(5).max(50).required(),
      password: Joi.string().min(5).max(1024).required() // Fix password maxlength
    });
  
    return schema.validate(data);
};
