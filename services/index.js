const {
  getContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("./contactServices");

const { currentUser, changeUserSubscription } = require("./userServices/");

const { signUpUser, logInUser, logOutUser } = require("./authServices");

module.exports = {
  getContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
  signUpUser,
  logInUser,
  logOutUser,
  currentUser,
  changeUserSubscription,
};
