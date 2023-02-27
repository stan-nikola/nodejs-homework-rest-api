const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const updateStatusContact = async (id, favorite) => {
  const result = await Contact.findByIdAndUpdate(id, favorite, { new: true });

  if (!result) {
    throw new NotFound(`Contact with id: ${id} not found`);
  }

  return result;
};

module.exports = { updateStatusContact };
