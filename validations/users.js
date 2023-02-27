const Joi = require("joi");

const usersJoiSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().min(5).required().email(),
  subscription: Joi.string(),
  token: Joi.string(),
});

module.exports = { usersJoiSchema };
