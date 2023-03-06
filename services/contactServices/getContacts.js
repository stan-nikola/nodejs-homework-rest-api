const { Contact } = require("../../models");

const getContacts = async (owner) => {
  return await Contact.find({ owner });
};

module.exports = { getContacts };
