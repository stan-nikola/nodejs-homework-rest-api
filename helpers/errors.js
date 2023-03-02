class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NonExistingParamsError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  ValidationError,
  NonExistingParamsError,
  NotAuthorizedError,
};
