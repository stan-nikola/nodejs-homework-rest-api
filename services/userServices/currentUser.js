const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");
const { decodeToken } = require("../../helpers/decodeToken");

const currentUser = async (token) => {
  const { _id } = decodeToken(token);

  const user = await User.findOne(
    { _id },
    { email: 1, subscription: 1, _id: 0 }
  );

  if (!user) {
    throw new NotAuthorizedError("Not authorized");
  }

  return user;
};

module.exports = { currentUser };
