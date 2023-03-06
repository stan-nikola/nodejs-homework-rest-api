const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const updateStatusContact = async (contactId, owner, favorite) => {
  const result = await Contact.findByIdAndUpdate(
    { contactId, owner },
    favorite,
    { new: true }
  );

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${contactId} not found`);
  }

  return result;
};

module.exports = { updateStatusContact };
