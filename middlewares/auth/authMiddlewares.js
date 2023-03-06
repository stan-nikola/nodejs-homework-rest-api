const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../../helpers/errors");

const authMiddleware = (req, res, next) => {
  const headerData = req.headers.authorization;

  if (!headerData) {
    throw new NotAuthorizedError("Not authorized");
  }

  const [, token] = headerData.split(" ");

  if (!token) {
    next(new NotAuthorizedError("Please, provide a token"));
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    if (!user) {
      throw new NotAuthorizedError("Not authorized");
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    throw new NotAuthorizedError("Not authorized");
  }
};

const tokenCheckMiddleware = async (req, res, next) => {
  const headerData = req.headers.authorization;

  if (!headerData) {
    next(new NotAuthorizedError("Please, provide a token"));
  }

  next();
};

module.exports = { authMiddleware, tokenCheckMiddleware };
