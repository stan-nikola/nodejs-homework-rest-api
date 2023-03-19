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
  updateUserSubscriptionController,
  updateUserAvatarController,
} = require("./userControllers");

const {
  signUpController,
  logInController,
  logOutController,
  verificationController,
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
  updateUserSubscriptionController,
  updateUserAvatarController,
  verificationController,
};
