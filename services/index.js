const {
  getContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("./contactServices");

const { signUpUser, logInUser, logOutUser } = require("./userServices/");

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
};
