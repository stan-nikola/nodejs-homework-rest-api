const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const signUpUser = async (email, password) => {
  const user = new User({ email, password });

  await user.save();

  //  TODO:Registration conflict error
  return user;
};

module.exports = { signUpUser };
