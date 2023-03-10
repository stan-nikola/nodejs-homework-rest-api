const { User } = require("../../models");

const changeUserSubscription = async (_id, subscription) => {
  const result = await User.findByIdAndUpdate({ _id }, subscription, {
    new: true,
    fields: { _id: 0, password: 0, token: 0 },
  });

  return result;
};

module.exports = { changeUserSubscription };
