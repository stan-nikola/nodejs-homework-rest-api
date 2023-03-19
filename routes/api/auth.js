const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  signUpController,
  logInController,
  logOutController,
  verificationController,
} = require("../../controllers");

const { authMiddleware, addAndUpdateValidation } = require("../../middlewares");

const { joiRegisterSchema } = require("../../models");

const router = express.Router();

router.post(
  "/signup",
  addAndUpdateValidation(joiRegisterSchema),
  asyncWrapper(signUpController)
);
router.post("/login", asyncWrapper(logInController));
router.post("/logout", authMiddleware, asyncWrapper(logOutController));
router.get(
  "/verify/:verificationToken",

  asyncWrapper(verificationController)
);

module.exports = { authRouter: router };
