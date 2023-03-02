const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const { signUpController, logInController } = require("../../controllers");

const router = express.Router();

router.post("/signup", asyncWrapper(signUpController));
router.post("/login", asyncWrapper(logInController));

module.exports = { usersRouter: router };
