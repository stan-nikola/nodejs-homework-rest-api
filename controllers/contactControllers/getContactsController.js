const { getContacts } = require("../../services");

const getContactsController = async (req, res, next) => {
  const contacts = await getContacts();
  return res.json({ contacts, message: "success" });
};

module.exports = { getContactsController };
