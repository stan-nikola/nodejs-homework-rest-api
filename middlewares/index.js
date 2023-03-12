const { addAndUpdateValidation } = require("./validation");
const { authMiddleware } = require("./auth/authMiddleware");
const { uploadMiddleware, resizeAvatar } = require("./upload/uploadMiddleware");

module.exports = {
  addAndUpdateValidation,
  authMiddleware,
  uploadMiddleware,
  resizeAvatar,
};
