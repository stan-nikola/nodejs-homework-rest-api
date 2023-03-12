const { signUpUser } = require("../../services");

const signUpController = async (req, res) => {
  const { email, subscription, avatarURL } = await signUpUser(req.body);

  res.status(201).json({ user: { email, subscription, avatarURL } });
};

module.exports = { signUpController };
