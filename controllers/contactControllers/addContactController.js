const { addContact } = require("../../services");

const addContactController = async (req, res, next) => {
  const { _id: owner } = req.user;

  const result = await addContact(req.body, owner);

  res.status(201).json(result);
};

module.exports = { addContactController };
