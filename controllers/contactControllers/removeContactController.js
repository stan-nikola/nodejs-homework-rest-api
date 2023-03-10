const { removeContact } = require("../../services");

const removeContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  await removeContact(contactId, owner);

  res.json({
    message: "contact deleted",
  });
};

module.exports = { removeContactController };
