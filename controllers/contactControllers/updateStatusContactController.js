const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const updateStatusContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const { favorite } = req.body;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
  if (!result) {
    throw new NotFound(`Contact with id: ${contactId} not found`);
  }

  res.status(201).json(result);
};

module.exports = { updateStatusContactController };