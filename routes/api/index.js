const { contactsRouter } = require("./contacts");
const { usersRouter } = require("./users");
const { authRouter } = require("./auth");

module.exports = { usersRouter, contactsRouter, authRouter };
