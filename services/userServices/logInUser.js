const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const logInUser = async (email, password) => {
  const user = await User.findOne({ email });

  const {
    _id: userId,
    email: userEmail,
    password: userPassword,
    subscription,
    createdAt: userCreatedAt,
  } = user;

  if (!user || !(await bcrypt.compare(password, userPassword))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }

  const token = jwt.sign(
    { _id: userId, createdAt: userCreatedAt },
    process.env.JWT_SECRET
  );

  return {
    token,
    user: {
      email: userEmail,
      subscription,
    },
  };
};

module.exports = { logInUser };
