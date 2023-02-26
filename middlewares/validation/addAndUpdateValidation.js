const addAndUpdateValidation = (schema) => {
  return (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      const [errorMessage] = validationResult.error.details;

      return res.status(400).json({ message: errorMessage.message });
    }
    next();
  };
};

module.exports = { addAndUpdateValidation };
