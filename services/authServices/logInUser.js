const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers");

const logInUser = async (requestBody) => {
  const { email: userEmail, password: userPassword } = requestBody;

  const user = await User.findOne({ email: userEmail });

  if (!user || !(await bcrypt.compare(userPassword, user.password))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }

  const { _id, createdAt, verify } = user;

  if (!verify) {
    throw new NotAuthorizedError("User not verified");
  }

  const token = jwt.sign({ _id, createdAt }, process.env.JWT_SECRET);

  const {
    email,
    subscription,
    avatarURL,
    token: userToken,
  } = await User.findByIdAndUpdate({ _id }, { token }, { new: true });

  return {
    token: userToken,
    user: { email, subscription, avatarURL },
  };
};

module.exports = { logInUser };
