const { Contact } = require("../../models");

const addContact = async ({ name, email, phone, favorite }, id) => {
  const contact = new Contact({
    name,
    email,
    phone,
    favorite,
    owner: id,
  });

  return await contact.save();
};

module.exports = { addContact };
