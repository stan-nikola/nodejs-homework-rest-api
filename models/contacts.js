const fs = require("fs/promises");

const path = require("path");
const contactsPath = path.resolve("./models/contacts.json");

const contactItems = async (req, res, next) => {
  try {
    return JSON.parse(await fs.readFile(contactsPath, "utf8"));
  } catch (error) {
    return res.status(500).send(error);
  }
};

const listContacts = async (req, res, next) => {
  try {
    const contacts = await contactItems();
    return res.json(contacts);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getContactById = async (req, res, next) => {
  const contacts = await contactItems();

  if (contacts.every((item) => item.id !== req.params.contactId)) {
    return res.status(400).send("Bad request");
  }

  const contactById = contacts.filter(
    (contact) => contact.id === req.params.contactId
  );

  return res.json(contactById);
};

const removeContact = async (req, res, next) => {
  const contacts = await contactItems();
  try {
    if (contacts.every((item) => item.id !== req.params.contactId)) {
      return res.status(400).send("Bad request");
    }

    const newContacts = contacts.filter(
      (contact) => contact.id !== req.params.contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContacts), (err) => {
      if (err) console.log(err);
    });
    res.json({
      message: `contact with id:${req.params.contactId} removed successfully`,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
