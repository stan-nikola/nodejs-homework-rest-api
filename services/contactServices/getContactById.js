const { Contact } = require("../../models");

const { NonExistingParamsError } = require("../../helpers");

const getContactById = async (contactId, ownerId) => {
  const result = await Contact.findOne(
    { _id: contactId, owner: ownerId },
    { owner: 0 }
  );

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${contactId} not found`);
  }
  return result;
};

module.exports = { getContactById };
