const { Contact } = require("../../models");

const getContacts = async (owner, query) => {
  let { page = 1, limit, favorite } = query;

  limit = parseInt(limit) > 20 ? 20 : parseInt(limit);

  const skip = (page - 1) * limit;

  let isFavorite = {};

  if (favorite) {
    isFavorite = { favorite: JSON.parse(favorite) };
  }

  return await Contact.find({
    owner,
  })
    .skip(skip)
    .limit(+limit)
    .where(isFavorite);
};

module.exports = { getContacts };
