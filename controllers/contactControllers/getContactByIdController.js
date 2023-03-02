const { getContactById } = require("../../services");

const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await getContactById(contactId);

  return res.json(result);
};

module.exports = { getContactByIdController };
