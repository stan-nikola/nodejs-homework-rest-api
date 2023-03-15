const gravatar = require("gravatar");
const { User } = require("../../models");

const { ConflictAuthorizedError } = require("../../helpers/errors");

const signUpUser = async (data) => {
  const { email, password, subscription } = data;

  const avatarURL = gravatar.url(email).slice(2);

  const user = await User.findOne({ email });

  if (user) {
    throw new ConflictAuthorizedError("Email in use");
  }

  return await User.create({
    email,
    password,
    subscription,
    avatarURL,
  });
};

module.exports = { signUpUser };
