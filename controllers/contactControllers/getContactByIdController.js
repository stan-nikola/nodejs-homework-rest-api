const { getContactById } = require("../../services");

const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;

  const result = await getContactById(contactId, _id);

  return res.json(result);
};

module.exports = { getContactByIdController };
