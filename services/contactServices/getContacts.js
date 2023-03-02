const { Contact } = require("../../models");

const getContacts = async (id) => {
  return await Contact.find({ owner: id });
};

module.exports = { getContacts };
