const { getContacts, writeContacts } = require("../models");
const { uid } = require("uid");

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  const newContact = {
    id: uid(),
    name,
    email,
    phone,
  };

  try {
    const contacts = await getContacts();

    writeContacts([...contacts, newContact]);

    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
