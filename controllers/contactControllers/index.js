const { getContactsController } = require("./getContactsController");
const { getContactByIdController } = require("./getContactByIdController");
const { removeContactController } = require("./removeContactController");
const { addContactController } = require("./addContactController");
const { updateContactController } = require("./updateContactController");
const {
  updateStatusContactController,
} = require("./updateStatusContactController");

module.exports = {
  getContactsController,
  getContactByIdController,
  removeContactController,
  addContactController,
  updateContactController,
  updateStatusContactController,
};
