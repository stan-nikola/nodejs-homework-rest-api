// const { changeUserSubscription } = require("../../services");

const updateUserAvatarController = async (req, res) => {
  // const { _id } = req.user;
  // const { subscription } = req.body;

  // const result = await changeUserSubscription(_id, { subscription });

  res.json({ message: "updateUserAvatarController" });
};

module.exports = { updateUserAvatarController };
