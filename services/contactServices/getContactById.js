const { Contact } = require("../../models");

const { NonExistingParamsError } = require("../../helpers");

const getContactById = async (id) => {
  const result = await Contact.findById(id);

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${id} not found`);
  }
  return result;
};

module.exports = { getContactById };
