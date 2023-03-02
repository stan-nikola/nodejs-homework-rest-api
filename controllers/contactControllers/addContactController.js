const { addContact } = require("../../services");

const addContactController = async (req, res, next) => {
  const result = await addContact(req.body);

  res.status(201).json(result);
};

module.exports = { addContactController };
