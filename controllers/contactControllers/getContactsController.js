const { getContacts } = require("../../services");

const getContactsController = async (req, res, next) => {
  const { _id: owner } = req.user;

  let { page = 1, limit = 20, favorite } = req.query;

  limit = parseInt(limit) > 20 ? 20 : parseInt(limit);

  const skip = (page - 1) * limit;

  let isFavorite = null;

  if (favorite) {
    isFavorite = JSON.parse(favorite);
  }

  const contacts = await getContacts(owner, skip, limit, isFavorite);

  return res.json({ contacts, message: "success" });
};

module.exports = { getContactsController };
