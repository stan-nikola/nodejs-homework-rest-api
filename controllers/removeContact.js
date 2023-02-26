const { Contact } = require("../models");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  await Contact.findByIdAndDelete(contactId);

  res.json({
    message: "contact deleted",
  });
};

module.exports = removeContact;
