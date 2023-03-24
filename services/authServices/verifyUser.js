const { User } = require("../../models");

const { VerificationError } = require("../../helpers/errors");

const verifyUser = async ({ verificationToken }) => {
  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw new VerificationError("User not found");
  }
  await User.findOneAndUpdate(
    { verificationToken },
    { verify: true, verificationToken: null }
  );
};

module.exports = { verifyUser };
