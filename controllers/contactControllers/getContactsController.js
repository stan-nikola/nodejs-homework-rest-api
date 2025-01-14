const { getContacts } = require("../../services");

const getContactsController = async (req, res, next) => {
  const { _id: owner } = req.user;

  const contacts = await getContacts(owner, req.query);

  return res.json({ contacts, message: "success" });
};

module.exports = { getContactsController };
