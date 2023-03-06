const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { NotAuthorizedError } = require("../../helpers/errors");

const logOutUser = async (headerData) => {
  const [, token] = headerData.split(" ");

  const decodeToken = jwt.decode(token, process.env.JWT_SECRET);

  if (!decodeToken) {
    throw new NotAuthorizedError("Not authorized");
  }

  const { _id } = decodeToken;

  const user = await User.findOneAndUpdate({ _id, token }, { token: null });

  if (!user) {
    throw new NotAuthorizedError("Not authorized");
  }
};

module.exports = { logOutUser };
