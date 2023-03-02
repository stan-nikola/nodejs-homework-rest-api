const { signUpUser } = require("../../services");

const signUpController = async (req, res) => {
  const { email, password } = req.body;

  const RequestBody = await signUpUser(email, password);

  res.json({ RequestBody });
};

module.exports = { signUpController };
