const { signUpUser } = require("../../services");

const signUpController = async (req, res) => {
  const { email, subscription } = await signUpUser(req.body);

  res.status(201).json({ user: { email, subscription } });
};

module.exports = { signUpController };
