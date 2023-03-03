const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const updateContact = async (contactId, ownerId, body) => {
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner: ownerId },
    body,
    {
      new: true,
      owner: 0,
    }
  );

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${contactId} not found`);
  }

  return result;
};

module.exports = { updateContact };
