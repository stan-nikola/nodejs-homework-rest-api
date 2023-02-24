const Joi = require("joi");
const { getContacts } = require("../models");

const schema = Joi.object({
  name: Joi.string().min(3).max(26).required(),
  phone: Joi.string().min(7).max(10).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
});

const addAndUpdateValidation = (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    const [errorMessage] = validationResult.error.details;
    return res.status(400).json({ message: errorMessage.message });
  }
  next();
};

const isValidId = async (req, res, next) => {
  const contacts = await getContacts();

  const isIdInContacts = contacts.every(
    (item) => item.id !== req.params.contactId
  );
  if (isIdInContacts) return res.status(404).json({ message: "Not found" });
  next();
};

module.exports = {
  addAndUpdateValidation,
  isValidId,
};
