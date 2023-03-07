const { Contact } = require("../../models");

const getContacts = async (owner, skip, limit, isFavorite) => {
  return await Contact.find({
    owner,
    favorite: { $ne: !isFavorite },
  })
    .skip(skip)
    .limit(+limit);
};

module.exports = { getContacts };
