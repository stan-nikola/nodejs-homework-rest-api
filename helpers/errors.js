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
class VerificationError extends NodeContactsAppError {
  constructor(message) {
    super(message);
    this.status = 404;
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
class ConflictAuthorizedError extends NodeContactsAppError {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

class UnsupportedUploadFileError extends NodeContactsAppError {
  constructor(message) {
    super(message);
    this.status = 415;
  }
}

module.exports = {
  NodeContactsAppError,
  ValidationError,
  NonExistingParamsError,
  NotAuthorizedError,
  ConflictAuthorizedError,
  UnsupportedUploadFileError,
  VerificationError,
};
