const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const removeContact = async (id) => {
  const result = await Contact.findByIdAndDelete(id);

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${id} not found`);
  }

  return result;
};

module.exports = { removeContact };
