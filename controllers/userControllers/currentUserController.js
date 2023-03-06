const { currentUser } = require("../../services");

const currentUserController = async (req, res) => {
  const headerData = req.headers.authorization;
  const result = await currentUser(headerData);

  res.json(result);
};

module.exports = { currentUserController };
