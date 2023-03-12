const { User } = require("../../models");

const fs = require("fs/promises");

const updateUserAvatar = async (userId, tempPath, publicPath, avatarURL) => {
  try {
    await fs.rename(tempPath, publicPath);

    const result = await User.findByIdAndUpdate(
      userId,
      { avatarURL },
      {
        new: true,
      }
    );

    return { avatarURL: result.avatarURL };
  } catch (error) {
    await fs.unlink(tempPath, (err) => {
      if (err) throw new Error(err);
    });
  }
};

module.exports = { updateUserAvatar };
