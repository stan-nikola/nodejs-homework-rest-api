const { Contact } = require("../../models");

const addContact = async (body) => {
  return await Contact.create(body);
};

module.exports = { addContact };
