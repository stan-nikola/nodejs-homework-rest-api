const { Contact } = require("../../models");

const getContactsController = async (req, res, next) => {
  const contacts = await Contact.find({});
  return res.json({ contacts, message: "success" });
};

module.exports = { getContactsController };
