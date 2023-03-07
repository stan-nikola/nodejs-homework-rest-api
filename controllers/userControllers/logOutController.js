const { logOutUser } = require("../../services");

const logOutController = async (req, res) => {
  const { authorization = "" } = req.headers;

  const [, token] = authorization.split(" ");

  await logOutUser(token);
  res.sendStatus(204);
};

module.exports = { logOutController };
