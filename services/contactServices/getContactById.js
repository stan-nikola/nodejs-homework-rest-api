const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const getContactById = async (id) => {
  const result = await Contact.findById(id);

  if (!result) {
    throw new NotFound(`Contact with id: ${id} not found`);
  }
  return result;
};

module.exports = { getContactById };
