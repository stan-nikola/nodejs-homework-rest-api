const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../controllers");

const { idValidation, addAndUpdateValidation } = require("../../middlewares/");

const router = express.Router();

router.get("/", asyncWrapper(listContacts));

router.get("/:contactId", idValidation, asyncWrapper(getContactById));

router.post("/", addAndUpdateValidation, asyncWrapper(addContact));

router.delete("/:contactId", idValidation, asyncWrapper(removeContact));

router.put(
  "/:contactId",
  idValidation,
  addAndUpdateValidation,

  asyncWrapper(updateContact)
);

module.exports = { contactsRouter: router };
