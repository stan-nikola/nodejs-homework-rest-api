const { updateContact } = require("../../services");

const updateStatusContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id: owner } = req.user;

  const result = await updateContact(contactId, owner, { favorite });

  res.json(result);
};

module.exports = { updateStatusContactController };
