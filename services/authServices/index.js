const { logInUser } = require("./logInUser");
const { signUpUser } = require("./signUpUser");
const { logOutUser } = require("./logOutUser");
const { verifyUser } = require("./verifyUser");
const { reVerifyUser } = require("./reVerifyUser");

module.exports = {
  signUpUser,
  logInUser,
  logOutUser,
  verifyUser,
  reVerifyUser,
};
