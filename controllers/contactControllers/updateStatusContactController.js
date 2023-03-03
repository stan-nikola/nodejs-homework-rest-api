const { updateContact } = require("../../services");

const updateStatusContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id: ownerId } = req.user;

  const result = await updateContact(contactId, ownerId, { favorite });

  res.json(result);
};

module.exports = { updateStatusContactController };
