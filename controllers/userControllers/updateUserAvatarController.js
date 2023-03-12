const { updateUserAvatar } = require("../../services");

const path = require("path");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateUserAvatarController = async (req, res) => {
  const { path: tempPath, originalname } = req.file;
  const { _id: userId } = req.user;

  const userIdAvatarName = `${userId}_${originalname}`;

  const publicPath = path.join(avatarsDir, userIdAvatarName);

  const avatarURL = path.join("public", "avatars", userIdAvatarName);

  const result = await updateUserAvatar(
    userId,
    tempPath,
    publicPath,
    avatarURL
  );

  res.json(result);
};

module.exports = { updateUserAvatarController };
