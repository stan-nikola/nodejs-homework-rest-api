const { logInUser } = require("../../services");

const logInController = async (req, res) => {
  const result = await logInUser(req.body);

  res.json(result);
};

module.exports = { logInController };
