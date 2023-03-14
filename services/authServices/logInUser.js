const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const logInUser = async (requestBody) => {
  if (Object.keys(requestBody).length < 2) {
    throw new NotAuthorizedError("Email or password is absent");
  }

  const { email: userEmail, password: userPassword } = requestBody;

  const user = await User.findOne({ email: userEmail });
  // const user = await User.exists({ email: userEmail });

  const { _id, password, createdAt } = user;

  if (!user || !(await bcrypt.compare(userPassword, password))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }

  const token = jwt.sign({ _id, createdAt }, process.env.JWT_SECRET);

  const {
    email,
    subscription,
    avatarURL,
    token: userToken,
  } = await User.findByIdAndUpdate({ _id }, { token });

  return {
    token: userToken,
    user: { email, subscription, avatarURL },
  };
};

module.exports = { logInUser };
