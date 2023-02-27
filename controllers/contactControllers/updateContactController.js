const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const updateContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw new NotFound(`Contact with id: ${contactId} not found`);
  }

  res.json(result);
};

module.exports = { updateContactController };
