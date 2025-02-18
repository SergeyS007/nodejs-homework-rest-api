const { Contact } = require("../../models");

const getContacts = async (req, res, next) => {

  const { _id } = req.user;
  const { page = 1, limit = 1 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email");

  res.json(contacts);
};

module.exports = getContacts;
