const mongoose = require("mongoose");

const { DB_HOST_CONTACTS } = process.env;

const connectToContactsDb = () => {
  mongoose.set("strictQuery", false);

  return mongoose.connect(DB_HOST_CONTACTS);
};

module.exports = { connectToContactsDb };
