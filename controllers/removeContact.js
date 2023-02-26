// const { getContacts, writeContacts } = require("../models");

const removeContact = async (req, res, next) => {
  res.json({
    message: "contact deleted",
  });
};

module.exports = removeContact;
