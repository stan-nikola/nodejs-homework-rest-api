const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  signUpController,
  logInController,
  logOutController,
  verificationController,
  reVerificationController,
} = require("../../controllers");

const { authMiddleware, validationMiddleware } = require("../../middlewares");

const { joiRegisterSchema } = require("../../models");
const { joiLoginSchema, joiReVerifySchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validationMiddleware(joiRegisterSchema),
  asyncWrapper(signUpController)
);
router.post(
  "/login",
  validationMiddleware(joiLoginSchema),
  asyncWrapper(logInController)
);
router.post("/logout", authMiddleware, asyncWrapper(logOutController));
router.get("/verify/:verificationToken", asyncWrapper(verificationController));
router.post(
  "/verify",
  validationMiddleware(joiReVerifySchema),
  asyncWrapper(reVerificationController)
);

module.exports = { authRouter: router };
