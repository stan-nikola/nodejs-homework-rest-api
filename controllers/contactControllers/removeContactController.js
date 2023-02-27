const { removeContact } = require("../../services");

const removeContactController = async (req, res, next) => {
  const { contactId } = req.params;
  await removeContact(contactId);

  res.json({
    message: "contact deleted",
  });
};

module.exports = { removeContactController };
