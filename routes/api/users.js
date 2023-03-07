const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  signUpController,
  logInController,
  logOutController,
  currentUserController,
  subscriptionUserController,
} = require("../../controllers");

const { authMiddleware } = require("../../middlewares");

const router = express.Router();

router.post("/signup", asyncWrapper(signUpController));
router.post("/login", asyncWrapper(logInController));
router.get("/logout", authMiddleware, asyncWrapper(logOutController));
router.get("/current", authMiddleware, asyncWrapper(currentUserController));
router.patch(
  "/subscription",
  authMiddleware,
  asyncWrapper(subscriptionUserController)
);

module.exports = { usersRouter: router };
