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
  currentUserController,
} = require("./userControllers");

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
  currentUserController,
};
