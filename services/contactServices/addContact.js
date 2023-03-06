const { Contact } = require("../../models");

const addContact = async ({ name, email, phone, favorite }, owner) => {
  const newContact = await Contact.create({
    name,
    email,
    phone,
    favorite,
    owner,
  });
  return newContact;
};

module.exports = { addContact };
