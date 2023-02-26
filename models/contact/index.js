const { Contact, joiSchema, favoriteJoiSchema } = require("./contact");
const { connectToContactsDb } = require("./connection");

module.exports = {
  Contact,
  connectToContactsDb,
  joiSchema,
  favoriteJoiSchema,
};
