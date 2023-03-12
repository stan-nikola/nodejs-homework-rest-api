const { signUpController } = require("./signUpController");
const { logInController } = require("../authControllers/logInController");
const { logOutController } = require("./logOutController");

module.exports = {
  signUpController,
  logInController,
  logOutController,
};
