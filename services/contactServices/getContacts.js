const { Contact } = require("../../models");

const getContacts = async (owner, skip, limit, favorite) => {
  console.log(favorite);

  return await Contact.find({ owner }).skip(skip).limit(+limit);
};

module.exports = { getContacts };
