const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  signUpController,
  logInController,
  logOutController,
  currentUserController,
} = require("../../controllers");

const { tokenCheckMiddleware } = require("../../middlewares");

const router = express.Router();

router.post("/signup", asyncWrapper(signUpController));
router.post("/login", asyncWrapper(logInController));
router.get("/logout", tokenCheckMiddleware, asyncWrapper(logOutController));
router.get(
  "/current",
  tokenCheckMiddleware,
  asyncWrapper(currentUserController)
);

module.exports = { usersRouter: router };
