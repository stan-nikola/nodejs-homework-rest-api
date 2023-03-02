const { Contact, joiContactSchema, favoriteJoiSchema } = require("./contact");

const { User } = require("./user/userModel");

const { connectToContactsDb } = require("./connection");

module.exports = {
  Contact,
  connectToContactsDb,
  joiContactSchema,
  favoriteJoiSchema,
  User,
};
