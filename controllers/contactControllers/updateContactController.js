const { updateContact } = require("../../services");

const updateContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: ownerId } = req.user;

  const result = await updateContact(contactId, ownerId, req.body);
  res.json(result);
};

module.exports = { updateContactController };
