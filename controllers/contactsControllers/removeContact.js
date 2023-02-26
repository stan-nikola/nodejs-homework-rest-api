const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) {
    throw new NotFound(`Contact with id: ${contactId} not found`);
  }

  res.json({
    message: "contact deleted",
  });
};

module.exports = removeContact;
