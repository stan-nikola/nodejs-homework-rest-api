const { logInUser } = require("../../services");

const logInController = async (req, res) => {
  const { email, password } = req.body;
  const result = await logInUser(email, password);

  res.json(result);
};

module.exports = { logInController };
