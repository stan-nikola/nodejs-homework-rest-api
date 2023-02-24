const { getContacts } = require("../models");

const listContacts = async (req, res, next) => {
  try {
    const contacts = await getContacts();
    return res.json({ contacts, message: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
