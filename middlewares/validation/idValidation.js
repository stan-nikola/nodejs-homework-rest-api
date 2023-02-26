const { Contact } = require("../../models");

const idValidation = async (req, res, next) => {
  const contacts = await Contact.find({});
  const isIdInContacts = contacts.every(
    (item) => item.id !== req.params.contactId
  );
  if (isIdInContacts) return res.status(400).json({ message: "Not found" });
  next();
};

module.exports = { idValidation };
