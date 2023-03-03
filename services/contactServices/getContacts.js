const { Contact } = require("../../models");

const getContacts = async (id) => {
  return await Contact.find({ owner: id }, { owner: 0 });
};

module.exports = { getContacts };
