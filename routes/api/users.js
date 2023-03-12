const express = require("express");

const multer = require("multer");

const path = require("path");

const fs = require("fs/promises");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  currentUserController,
  subscriptionUserController,
} = require("../../controllers");

const { authMiddleware, addAndUpdateValidation } = require("../../middlewares");

const { joiUserSubscriptionSchema } = require("../../models");

const router = express.Router();

//

// const tempPath = path.join(path.resolve("./"), "tmp");

// const multerConfig = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tempPath);
//   },

//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },

//   limits: {
//     fileSize: 2048,
//   },
// });

// const upload = multer({ storage: multerConfig });

// router.post("/avatars", upload.single("image"), async (req, res) => {
//   const { path: tempUpload, originalname } = req.file;

//   try {
//     await fs.rename(
//       tempUpload,
//       path.resolve(`./public/avatars/${originalname}`)
//     );
//   } catch (error) {
//     fs.unlink(tempUpload);
//   }
// });

// router.get("/avatars");

// ++++++++++++++++++++++++++++++++++++++++++++

router.get("/current", authMiddleware, asyncWrapper(currentUserController));
router.patch(
  "/subscription",
  authMiddleware,
  addAndUpdateValidation(joiUserSubscriptionSchema),
  asyncWrapper(subscriptionUserController)
);

router.patch("/avatars");

module.exports = { usersRouter: router };
