const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const logInUser = async (email, password) => {
  const user = await User.findOne({ email });

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!user || !matchPassword) {
    throw new NotAuthorizedError({ message: "Email or password is wrong" });
  }

  const token = jwt.sign(
    { _id: user._id, createdAt: user.createdAt },
    process.env.JWT_SECRET
  );

  return token;
};

module.exports = { logInUser };
