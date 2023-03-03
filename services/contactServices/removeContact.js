const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const removeContact = async (contactId, ownerId) => {
  const result = await Contact.findOneAndDelete({
    _id: contactId,
    owner: ownerId,
  });

  console.log(result);

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${contactId} not found`);
  }
};

module.exports = { removeContact };
