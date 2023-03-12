const {
  getContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("./contactServices");

const {
  currentUser,
  changeUserSubscription,
  updateUserAvatar,
} = require("./userServices/");

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
  updateUserAvatar,
};
