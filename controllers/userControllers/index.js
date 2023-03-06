const { signUpController } = require("./signUpController");
const { logInController } = require("./logInController");
const { logOutController } = require("./logOutController");
const { currentUserController } = require("./currentUserController");

module.exports = {
  signUpController,
  logInController,
  logOutController,
  currentUserController,
};
