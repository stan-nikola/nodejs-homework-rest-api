const { User } = require("../../models");

const { ConflictAuthorizedError } = require("../../helpers/errors");

const signUpUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (user) {
    throw new ConflictAuthorizedError("Email in use");
  }

  return await User.create({ email, password });
};

module.exports = { signUpUser };
