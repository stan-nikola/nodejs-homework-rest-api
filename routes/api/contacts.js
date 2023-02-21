const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
} = require("../../models/contacts");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", removeContact);

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = { contactsRouter: router };
