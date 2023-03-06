const { logOutUser } = require("../../services");

const logOutController = async (req, res) => {
  const headerData = req.headers.authorization;

  await logOutUser(headerData);
  res.sendStatus(204);
};

module.exports = { logOutController };
