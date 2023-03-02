class NodeContactsAppError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends NodeContactsAppError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NonExistingParamsError extends NodeContactsAppError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorizedError extends NodeContactsAppError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  NodeContactsAppError,
  ValidationError,
  NonExistingParamsError,
  NotAuthorizedError,
};
