const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const updateContact = async (id, body) => {
  const result = await Contact.findByIdAndUpdate(id, body, {
    new: true,
  });

  if (!result) {
    throw new NotFound(`Contact with id: ${id} not found`);
  }

  return result;
};

module.exports = { updateContact };
