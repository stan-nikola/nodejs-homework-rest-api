const { User } = require("../../models");

const logOutUser = async (_id) => {
  await User.findOneAndUpdate({ _id }, { token: null });
};

module.exports = { logOutUser };
