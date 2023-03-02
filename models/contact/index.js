const { Contact, joiSchema, favoriteJoiSchema } = require("./contactModel");
const { connectToContactsDb } = require("./connection");

module.exports = {
  Contact,
  connectToContactsDb,
  joiSchema,
  favoriteJoiSchema,
};
