const { Contact } = require("../../models");
const { NonExistingParamsError } = require("../../helpers");

const updateContact = async (contactId, owner, body) => {
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    body,
    {
      new: true,
    }
  );

  if (!result) {
    throw new NonExistingParamsError(`Contact with id: ${contactId} not found`);
  }

  return result;
};

module.exports = { updateContact };
