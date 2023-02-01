const Joi = require("joi");

const contactsJoiSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().min(5).max(50).required().email(),
  phone: Joi.string().min(10).max(30).required(),
  favorite: Joi.boolean().required(),
});

const contactsFavoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required().error(new Error("missing field favorite")),
});

module.exports = { contactsJoiSchema, contactsFavoriteJoiSchema };
