const { currentUser } = require("../../services");

const currentUserController = async (req, res) => {
  const { authorization = "" } = req.headers;

  const [, token] = authorization.split(" ");

  const result = await currentUser(token);

  res.json(result);
};

module.exports = { currentUserController };
