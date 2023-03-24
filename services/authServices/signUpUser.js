const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const { User } = require("../../models");

const { ConflictAuthorizedError, sendEmail } = require("../../helpers/");

const signUpUser = async (data) => {
  const { email, password, subscription } = data;

  const avatarURL = gravatar.url(email).slice(2);

  const user = await User.findOne({ email });

  const verificationToken = uuidv4();

  if (user) {
    throw new ConflictAuthorizedError("Email in use");
  }
  sendEmail(email, verificationToken);

  return await User.create({
    email,
    password,
    subscription,
    avatarURL,
    verificationToken,
  });
};

module.exports = { signUpUser };
