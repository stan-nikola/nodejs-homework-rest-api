const { addAndUpdateValidation } = require("./validation");
const { authMiddleware } = require("./auth/authMiddleware");
const { uploadMiddleware } = require("./upload/uploadMiddleware");

module.exports = {
  addAndUpdateValidation,
  authMiddleware,
  uploadMiddleware,
};
