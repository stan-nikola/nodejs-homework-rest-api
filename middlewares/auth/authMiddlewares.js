const { decodeToken, NotAuthorizedError } = require("../../helpers");

const { User } = require("../../models");

const authMiddleware = async (req, res, next) => {
  const headerData = req.headers.authorization;

  !headerData && next(new NotAuthorizedError("Please, provide a token"));

  try {
    const [, token] = headerData.split(" ");

    const { token: userToken } = await User.findOne({ token });

    const decodedToken = decodeToken(" " + " " + userToken);

    !decodedToken && next(new NotAuthorizedError("Not authorized"));

    req.user = decodedToken;

    next();
  } catch (error) {
    next(new NotAuthorizedError("Not authorized"));
  }
};

const tokenCheckMiddleware = async (req, res, next) => {
  const headerData = req.headers.authorization;

  if (!headerData) {
    next(new NotAuthorizedError("Please, provide a token"));
    return;
  }

  const decodedToken = decodeToken(headerData);

  !decodedToken && next(new NotAuthorizedError("Not authorized"));

  next();
};

module.exports = { authMiddleware, tokenCheckMiddleware };
