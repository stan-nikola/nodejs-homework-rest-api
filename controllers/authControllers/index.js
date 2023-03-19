const { signUpController } = require("./signUpController");
const { logInController } = require("../authControllers/logInController");
const { logOutController } = require("./logOutController");
const { verificationController } = require("./verificationController");
const { reVerificationController } = require("./reVerificationController");

module.exports = {
  signUpController,
  logInController,
  logOutController,
  verificationController,
  reVerificationController,
};
