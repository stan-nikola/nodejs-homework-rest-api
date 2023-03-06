const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  signUpController,
  logInController,
  logOutController,
} = require("../../controllers");

const { tokenCheckMiddleware } = require("../../middlewares");

const router = express.Router();

router.post("/signup", asyncWrapper(signUpController));
router.post("/login", asyncWrapper(logInController));
router.get("/logout", tokenCheckMiddleware, asyncWrapper(logOutController));

module.exports = { usersRouter: router };
