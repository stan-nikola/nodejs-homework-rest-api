const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const { decodeToken } = require("../../helpers/decodeToken");

const logOutUser = async (headerData) => {
  const decodedToken = decodeToken(headerData);

  console.log(decodedToken);

  if (!decodedToken) throw new NotAuthorizedError("Not authorized");

  const { _id } = decodedToken;

  const user = await User.findOneAndUpdate({ _id }, { token: null });

  if (!user) {
    throw new NotAuthorizedError("Not authorized");
  }
};

module.exports = { logOutUser };
