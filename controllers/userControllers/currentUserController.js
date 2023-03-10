const { currentUser } = require("../../services");

const currentUserController = async (req, res) => {
  const { _id } = req.user;

  const result = await currentUser(_id);

  res.json(result);
};

module.exports = { currentUserController };
