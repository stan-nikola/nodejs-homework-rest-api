const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../controllers/contactsController");

const {
  addAndUpdateContactValidation,
  isValidId,
} = require("../../middlewares/validationMiddleware");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", addAndUpdateContactValidation, addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put(
  "/:contactId",
  addAndUpdateContactValidation,
  isValidId,
  updateContact
);

module.exports = { contactsRouter: router };
