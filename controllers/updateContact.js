const { getContacts, writeContacts } = require("../models");

const updateContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  let updatedContact;

  try {
    const contacts = await getContacts();

    const updatedContacts = contacts.map((contact) => {
      if (contact.id === req.params.contactId) {
        updatedContact = { ...contact, name, email, phone };
        return updatedContact;
      }
      return contact;
    });
    writeContacts(updatedContacts);

    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
