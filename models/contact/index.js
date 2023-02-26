const { Contact, joiSchema } = require("./contact");
const { connectToContactsDb } = require("./connection");

module.exports = {
  Contact,
  connectToContactsDb,
  joiSchema,
};
