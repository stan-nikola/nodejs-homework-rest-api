const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const removeContact = async (id) => {
  const result = await Contact.findByIdAndDelete(id);

  if (!result) {
    throw new NotFound(`Contact with id: ${id} not found`);
  }

  return result;
};

module.exports = { removeContact };
