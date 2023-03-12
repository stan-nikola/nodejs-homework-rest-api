const { changeUserSubscription } = require("../../services");

const updateUserSubscriptionController = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const result = await changeUserSubscription(_id, { subscription });

  res.json(result);
};

module.exports = { updateUserSubscriptionController };
