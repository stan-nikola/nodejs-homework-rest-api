const { Contact } = require("../../models");

const listContacts = async (req, res, next) => {
  const contacts = await Contact.find({});
  return res.json({ contacts, message: "success" });
};

module.exports = listContacts;
