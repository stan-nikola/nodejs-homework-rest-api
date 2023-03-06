const { Contact } = require("../../models");

const { NonExistingParamsError } = require("../../helpers");

const getContactById = async (contactId, owner) => {
  const result = await Contact.findOne({ _id: contactId, owner });

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${contactId} not found`);
  }
  return result;
};

module.exports = { getContactById };
