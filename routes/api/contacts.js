const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../controllers");

const {
  addAndUpdateValidation,
  isValidId,
} = require("../../middlewares/validationMiddleware");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", isValidId, asyncWrapper(getContactById));

router.post("/", addAndUpdateValidation, asyncWrapper(addContact));

router.delete("/:contactId", isValidId, asyncWrapper(removeContact));

router.put(
  "/:contactId",
  addAndUpdateValidation,
  isValidId,
  asyncWrapper(updateContact)
);

module.exports = { contactsRouter: router };
