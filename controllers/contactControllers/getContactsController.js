const { getContacts } = require("../../services");

const getContactsController = async (req, res, next) => {
  const { _id } = req.user;
  const contacts = await getContacts(_id);
  return res.json({ contacts, message: "success" });
};

module.exports = { getContactsController };
