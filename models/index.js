const { Contact, joiContactSchema, joiFavoriteSchema } = require("./contact");

const { User } = require("./user/userModel");

const { connectToContactsDb } = require("./connection");

module.exports = {
  Contact,
  connectToContactsDb,
  joiContactSchema,
  joiFavoriteSchema,
  User,
};
