const { updateContact } = require("../../services");

const updateContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await updateContact(contactId, req.body);
  res.status(201).json(result);
};

module.exports = { updateContactController };
