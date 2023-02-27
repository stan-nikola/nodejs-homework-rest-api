const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const updateStatusContact = async (id, favorite) => {
  const result = await Contact.findByIdAndUpdate(id, favorite, { new: true });

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${id} not found`);
  }

  return result;
};

module.exports = { updateStatusContact };
