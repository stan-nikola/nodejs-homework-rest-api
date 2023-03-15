const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  currentUserController,
  updateUserSubscriptionController,
  updateUserAvatarController,
} = require("../../controllers");

const {
  authMiddleware,
  addAndUpdateValidation,
  uploadMiddleware,
  cropImageMiddleware,
} = require("../../middlewares");

const { joiUserSubscriptionSchema } = require("../../models");

const router = express.Router();

router.get("/current", authMiddleware, asyncWrapper(currentUserController));

router.patch(
  "/subscription",
  authMiddleware,
  addAndUpdateValidation(joiUserSubscriptionSchema),
  asyncWrapper(updateUserSubscriptionController)
);

router.patch(
  "/avatars",
  authMiddleware,

  uploadMiddleware.single("avatar"),
  cropImageMiddleware,

  asyncWrapper(updateUserAvatarController)
);

module.exports = { usersRouter: router };
