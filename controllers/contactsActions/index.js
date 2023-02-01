const addContact = require("./addContact");
const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const updateContactById = require("./updateContactById");
const removeContactById = require("./removeContactById");
const updateFavoriteById = require("./updateFavoriteById");

module.exports = {
  getContacts,
  addContact,
  getContactById,
  updateContactById,
  removeContactById,
  updateFavoriteById,
};
