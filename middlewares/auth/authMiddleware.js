const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../../helpers/errors");

const authMiddleware = (req, res, next) => {
  const [, token] = req.headers.authorization.split(" ");

  if (!token) {
    next(new NotAuthorizedError("Not authorized"));
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    throw new NotAuthorizedError("Not authorized");
  }
};

module.exports = { authMiddleware };
