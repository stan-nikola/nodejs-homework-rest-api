const express = require("express");

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

router.get("/:contactId", isValidId, getContactById);

router.post("/", addAndUpdateValidation, addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put("/:contactId", addAndUpdateValidation, isValidId, updateContact);

module.exports = { contactsRouter: router };
