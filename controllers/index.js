const {
  getContactsController,
  getContactByIdController,
  removeContactController,
  addContactController,
  updateContactController,
  updateStatusContactController,
} = require("./contactControllers");

const {
  signUpController,
  logInController,
  logOutController,
} = require("./authControllers");

module.exports = {
  getContactsController,
  getContactByIdController,
  removeContactController,
  addContactController,
  updateContactController,
  updateStatusContactController,
  signUpController,
  logInController,
  logOutController,
};
