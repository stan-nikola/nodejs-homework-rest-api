const { getContactById } = require("../../services");

const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  const result = await getContactById(contactId, owner);

  return res.json(result);
};

module.exports = { getContactByIdController };
