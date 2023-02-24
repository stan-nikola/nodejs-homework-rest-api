const { getContacts } = require("../models");

const getContactById = async (req, res, next) => {
  try {
    const contacts = await getContacts();

    const [contactById] = contacts.filter(
      (contact) => contact.id === req.params.contactId
    );

    return res.json(contactById);
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
