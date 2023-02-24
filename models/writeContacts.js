const path = require("path");
const fs = require("fs/promises");
const contactsPath = path.resolve("./models/contacts.json");

const writeContacts = async (data) => {
  await fs.writeFile(contactsPath, JSON.stringify(data), (err) => {
    if (err) throw new Error({ message: "file write error" });
  });
};

module.exports = writeContacts;
