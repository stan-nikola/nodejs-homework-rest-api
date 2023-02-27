const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await Contact.findById(contactId);

  if (!result) {
    throw new NotFound(`Contact with id: ${contactId} not found`);
  }

  console.log(result);

  return res.json(result);
};

module.exports = { getContactByIdController };
