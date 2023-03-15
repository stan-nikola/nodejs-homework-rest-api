const { logOutUser } = require("../../services");

const logOutController = async (req, res) => {

  const { _id } = req.user;

  await logOutUser(_id);
  res.sendStatus(204);
};

module.exports = { logOutController };
