const { addContact } = require("../../services");

const addContactController = async (req, res, next) => {
  const { _id } = req.user;

  const result = await addContact(req.body, _id);

  res.status(201).json(result);
};

module.exports = { addContactController };
