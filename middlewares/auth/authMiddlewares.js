const { decodeToken, NotAuthorizedError } = require("../../helpers");

const { User } = require("../../models");

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");

  bearer !== "Bearer" && next(new NotAuthorizedError("Not authorized"));

  try {
    const user = await User.findOne({ token });

    !user.token && new NotAuthorizedError();

    const decodedToken = decodeToken(user.token);

    if (!decodedToken) {
      next(new NotAuthorizedError("Not authorized"));
      return;
    }

    if (req.path !== "/logout") {
      req.user = decodedToken;
    }

    next();
  } catch (error) {
    next(new NotAuthorizedError("Not authorized"));
  }
};

module.exports = { authMiddleware };
