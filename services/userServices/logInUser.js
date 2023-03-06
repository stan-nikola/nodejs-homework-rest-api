const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const logInUser = async ({ email: userEmail, password: userPassword }) => {
  const user = await User.findOne({ email: userEmail });

  const { _id, password, createdAt } = user;

  if (!user || !(await bcrypt.compare(userPassword, password))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }

  const token = jwt.sign({ _id, createdAt }, process.env.JWT_SECRET);

  const { email, subscription } = await User.findByIdAndUpdate(
    { _id },
    { token }
  );

  return {
    token,
    user: { email, subscription },
  };
};

module.exports = { logInUser };
