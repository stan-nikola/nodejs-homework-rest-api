const addAndUpdateValidation = (req, res, next) => {
  const { joiSchema } = require("../../models");

  console.log(joiSchema);

  const validationResult = joiSchema.validate(req.body);
  if (validationResult.error) {
    const [errorMessage] = validationResult.error.details;

    return res.status(400).json({ message: errorMessage.message });
  }
  next();
};

module.exports = { addAndUpdateValidation };
