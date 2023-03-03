const { Contact } = require("../../models");

const addContact = async ({ name, email, phone, favorite }, id) => {
  const newContact = Contact.create({
    name,
    email,
    phone,
    favorite,
    owner: id,
  });
  return newContact;
};

module.exports = { addContact };
