const { Contact } = require("../models");

const addContact = async (req, res, next) => {
  // const { name, email, phone } = req.body;
  const newContact = await Contact.create(req.body);

  res.status(201).json(newContact);
};

module.exports = addContact;
