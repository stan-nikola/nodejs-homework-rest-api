const { log } = require("console");
const fs = require("fs/promises");

const path = require("path");
const { uid } = require("uid");
const contactsPath = path.resolve("./models/contacts.json");

const contactItems = async () => {
  return JSON.parse(await fs.readFile(contactsPath, "utf8"));
};

const listContacts = async (req, res, next) => {
  try {
    const contacts = await contactItems();
    return res.json({ contacts, message: "success" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

function isValidId(arr, id) {
  return arr.every((item) => item.id !== id);
}

const getContactById = async (req, res, next) => {
  try {
    const contacts = await contactItems();

    if (isValidId(contacts, req.params.contactId)) {
      return res.status(400).json({ message: "Bad request" });
    }

    const [contactById] = contacts.filter(
      (contact) => contact.id === req.params.contactId
    );

    return res.json([{ contactById }, { message: "success" }]);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const contacts = await contactItems();

    if (isValidId(contacts, req.params.contactId)) {
      return res.status(400).json({ message: "Bad request" });
    }

    const newContacts = contacts.filter(
      (contact) => contact.id !== req.params.contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContacts), (err) => {
      if (err) console.log(err);
    });
    res.json({
      message: "success",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  const newContact = {
    id: uid(),
    name,
    email,
    phone,
  };

  try {
    const contacts = await contactItems();
    await fs.writeFile(
      contactsPath,
      JSON.stringify([...contacts, newContact]),
      (err) => {
        if (err) console.log(err);
      }
    );

    res.json({ message: "success" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  try {
    const contacts = await contactItems();
    if (isValidId(contacts, req.params.contactId)) {
      return res.status(400).json({ message: "Bad request" });
    }

    const updateContacts = contacts.map((contact) =>
      contact.id === req.params.contactId && name && email && phone
        ? { ...contact, name, email, phone }
        : contact
    );
    await fs.writeFile(contactsPath, JSON.stringify(updateContacts), (err) => {
      if (err) console.log(err);
    });

    res.json({ updateContacts, message: "success" });
  } catch (error) {}
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
