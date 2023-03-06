const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");
const { decodeToken } = require("../../helpers/decodeToken");

const currentUser = async (headerData) => {
  const { _id } = decodeToken(headerData);

  const user = await User.findOne(
    { _id },
    { email: 1, subscription: 1, _id: 0 }
  );

  if (!user) {
    throw new NotAuthorizedError("Not autvdsvdsdhorized");
  }

  return user;
};

module.exports = { currentUser };
