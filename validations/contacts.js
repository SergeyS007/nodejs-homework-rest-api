const Joi = require("joi");

exports.contactValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().min(5).max(50).required().email(),
    phone: Joi.string().min(10).max(30).required(),
  });
  return schema.validate(data);
};
