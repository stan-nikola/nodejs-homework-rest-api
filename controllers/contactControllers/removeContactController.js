const { removeContact } = require("../../services");

const removeContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: ownerId } = req.user;

  await removeContact(contactId, ownerId);

  res.json({
    message: "contact deleted",
  });
};

module.exports = { removeContactController };
