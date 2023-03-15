const { User } = require("../../models");

const currentUser = async (_id) => {
  const user = await User.findOne(
    { _id },
    { email: 1, subscription: 1, avatarURL: 1, _id: 0 }
  );

  return user;
};

module.exports = { currentUser };
