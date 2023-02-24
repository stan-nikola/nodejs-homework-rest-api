const { getContacts, writeContacts } = require("../models");

const removeContact = async (req, res, next) => {
  try {
    const contacts = await getContacts();

    const newContacts = contacts.filter(
      (contact) => contact.id !== req.params.contactId
    );

    writeContacts(newContacts);

    res.json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
