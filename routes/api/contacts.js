const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  getContactsController,
  getContactByIdController,
  removeContactController,
  addContactController,
  updateContactController,
  updateStatusContactController,
} = require("../../controllers");

const { joiSchema, favoriteJoiSchema } = require("../../models");

const { addAndUpdateValidation } = require("../../middlewares/");

const router = express.Router();

router.get("/", asyncWrapper(getContactsController));

router.get("/:contactId", asyncWrapper(getContactByIdController));

router.delete("/:contactId", asyncWrapper(removeContactController));

router.post(
  "/",
  addAndUpdateValidation(joiSchema),
  asyncWrapper(addContactController)
);

router.put(
  "/:contactId",
  addAndUpdateValidation(joiSchema),
  asyncWrapper(updateContactController)
);
router.patch(
  "/:contactId/favorite",
  addAndUpdateValidation(favoriteJoiSchema),
  asyncWrapper(updateStatusContactController)
);

module.exports = { contactsRouter: router };
