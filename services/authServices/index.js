const { logInUser } = require("./logInUser");
const { signUpUser } = require("./signUpUser");
const { logOutUser } = require("./logOutUser");
const { verifyUser } = require("./verifyUser");

module.exports = {
  signUpUser,
  logInUser,
  logOutUser,
  verifyUser,
};
