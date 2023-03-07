const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const { decodeToken } = require("../../helpers/decodeToken");

const logOutUser = async (token) => {
  const decodedToken = decodeToken(token);

  const { _id } = decodedToken;

  const user = await User.findOneAndUpdate({ _id }, { token: null });

  if (!user.token) {
    throw new NotAuthorizedError("Not authorized");
  }
};

module.exports = { logOutUser };
