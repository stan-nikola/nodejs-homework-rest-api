const { signUpUser } = require("../../services");

const signUpController = async (req, res) => {
  const { email, password } = req.body;

  const RequestBody = await signUpUser(email, password);

  res.status(201).json({ RequestBody });
};

module.exports = { signUpController };
