const { updateContact } = require("../../services");

const updateStatusContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await updateContact(contactId, { favorite });

  res.json(result);
};

module.exports = { updateStatusContactController };
