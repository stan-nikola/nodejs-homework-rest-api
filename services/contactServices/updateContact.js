const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const updateContact = async (id, body) => {
  const result = await Contact.findByIdAndUpdate(id, body, {
    new: true,
  });

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${id} not found`);
  }

  return result;
};

module.exports = { updateContact };
