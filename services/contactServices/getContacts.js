const { Contact } = require("../../models");

const getContacts = async () => {
  return await Contact.find({});
};

module.exports = { getContacts };
