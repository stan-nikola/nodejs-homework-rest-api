const { updateUserAvatar } = require("../../services");

const path = require("path");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateUserAvatarController = async (req, res) => {
  const { path: tempPath, originalname } = req.file;
  const { _id: userId } = req.user;

  const userAvatarName = `${userId}_${originalname}`;

  const publicPath = path.join(avatarsDir, userAvatarName);

  const avatarURL = path.join("avatars", userAvatarName).replace(/\\/g, "/");

  const result = await updateUserAvatar(
    userId,
    tempPath,
    publicPath,
    avatarURL
  );

  res.json(result);
};

module.exports = { updateUserAvatarController };
