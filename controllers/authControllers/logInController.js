const { logInUser } = require("../../services");

const logInController = async (req, res) => {
  const { email, password } = req.body;
  const RequestBody = await logInUser(email, password);

  res.json({ RequestBody });
};

module.exports = { logInController };
