const Joi = require('joi');

exports.adminValidation = (data) => {
    const schema = Joi.object({
      username: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(1024).required() // Fix password maxlength
    });
  
    return schema.validate(data);
};
