const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const signUpUser = async (email, password) => {
  const user = new User({ email, password });

  await user.save();
  return user;
};

module.exports = { signUpUser };
