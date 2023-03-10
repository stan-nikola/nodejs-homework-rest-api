const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  signUpController,
  logInController,
  logOutController,
  currentUserController,
  subscriptionUserController,
} = require("../../controllers");

const { authMiddleware, addAndUpdateValidation } = require("../../middlewares");

const {
  joiRegisterSchema,
  joiUserSubscriptionSchema,
} = require("../../models");

const router = express.Router();

router.post(
  "/signup",
  addAndUpdateValidation(joiRegisterSchema),
  asyncWrapper(signUpController)
);
router.post("/login", asyncWrapper(logInController));
router.get("/logout", authMiddleware, asyncWrapper(logOutController));
router.get("/current", authMiddleware, asyncWrapper(currentUserController));
router.patch(
  "/subscription",
  authMiddleware,
  addAndUpdateValidation(joiUserSubscriptionSchema),
  asyncWrapper(subscriptionUserController)
);

module.exports = { usersRouter: router };
