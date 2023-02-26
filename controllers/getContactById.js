const { Contact } = require("../models");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;

  const contactById = await Contact.findById(contactId);

  return res.json(contactById);
};

module.exports = getContactById;
