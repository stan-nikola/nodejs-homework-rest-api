const { Contact } = require("../models");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;

  const updateContact = await Contact.findByIdAndUpdate(contactId, req.body);

  res.json(updateContact);
};

module.exports = updateContact;
