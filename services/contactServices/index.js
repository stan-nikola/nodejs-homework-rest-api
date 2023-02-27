const { getContacts } = require("./getContacts");
const { getContactById } = require("./getContactById");
const { removeContact } = require("./removeContact");
const { addContact } = require("./addContact");
const { updateContact } = require("./updateContact");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
