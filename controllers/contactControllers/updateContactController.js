const { updateContact } = require("../../services");

const updateContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  const result = await updateContact(contactId, owner, req.body);
  res.json(result);
};

module.exports = { updateContactController };
