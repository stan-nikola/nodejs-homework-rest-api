const { User } = require("../../models");

const changeUserSubscription = async (_id, subscription) => {
  const result = await User.findByIdAndUpdate({ _id }, subscription, {
    new: true,
    fields: { email: 1, subscription: 1 },
  });

  return result;
};

module.exports = { changeUserSubscription };
