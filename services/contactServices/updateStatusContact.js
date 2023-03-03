const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const updateStatusContact = async (contactId, ownerId, favorite) => {
  const result = await Contact.findByIdAndUpdate(
    { contactId, ownerId },
    favorite,
    { new: true, owner: 0 }
  );

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${contactId} not found`);
  }

  return result;
};

module.exports = { updateStatusContact };
