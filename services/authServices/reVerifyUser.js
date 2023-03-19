const { User } = require("../../models");

const {
  VerificationError,
  ValidationError,
  sendEmail,
} = require("../../helpers");

const reVerifyUser = async ({ email }) => {
  if (!email) {
    throw new ValidationError("Missing required field email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new VerificationError("User not found");
  }
  const { email: userEmail, verificationToken, verify } = user;

  if (verify) {
    throw new VerificationError("Verification has already been passed");
  }

  sendEmail(userEmail, verificationToken);
};

module.exports = { reVerifyUser };
