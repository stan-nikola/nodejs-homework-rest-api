const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const logInUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }

  const token = jwt.sign(
    { _id: user._id, createdAt: user.createdAt },
    process.env.JWT_SECRET
  );

  return { token, user };
};

module.exports = { logInUser };
