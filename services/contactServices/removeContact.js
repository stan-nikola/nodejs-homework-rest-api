const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const removeContact = async (contactId, owner) => {
  const result = await Contact.findOneAndDelete({
    _id: contactId,
    owner,
  });

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${contactId} not found`);
  }
};

module.exports = { removeContact };
