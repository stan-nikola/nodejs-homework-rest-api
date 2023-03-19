const { signUpController } = require("./signUpController");
const { logInController } = require("../authControllers/logInController");
const { logOutController } = require("./logOutController");
const { verificationController } = require("./verificationController");

module.exports = {
  signUpController,
  logInController,
  logOutController,
  verificationController,
};
