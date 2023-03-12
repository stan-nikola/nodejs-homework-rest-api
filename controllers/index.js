const {
  getContactsController,
  getContactByIdController,
  removeContactController,
  addContactController,
  updateContactController,
  updateStatusContactController,
} = require("./contactControllers");

const {
  currentUserController,
  subscriptionUserController,
} = require("./userControllers");

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
  currentUserController,
  subscriptionUserController,
};
