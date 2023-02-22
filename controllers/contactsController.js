const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./models/contacts.json");
const { uid } = require("uid");

const contactItems = async () =>
  JSON.parse(await fs.readFile(contactsPath, "utf8"));

const listContacts = async (req, res, next) => {
  try {
    const contacts = await contactItems();
    return res.json({ contacts, message: "success" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const contacts = await contactItems();

    const [contactById] = contacts.filter(
      (contact) => contact.id === req.params.contactId
    );

    return res.json(contactById);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const contacts = await contactItems();

    const newContacts = contacts.filter(
      (contact) => contact.id !== req.params.contactId
    );

    await fs.writeFile(contactsPath, JSON.stringify(newContacts), (err) => {
      if (err) return res.status(500).send(err);
    });

    res.json({
      message: "contact deleted",
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
        if (err) return res.status(500).send(err);
      }
    );

    res.status(201).json(newContact);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  try {
    const contacts = await contactItems();

    const updateContacts = contacts.map((contact) =>
      contact.id === req.params.contactId
        ? { ...contact, name, email, phone }
        : contact
    );
    await fs.writeFile(contactsPath, JSON.stringify(updateContacts), (err) => {
      if (err) return res.status(500).send(err);
    });

    const [updateContact] = updateContacts.filter(
      (contact) => contact.id === req.params.contactId
    );

    res.json(updateContact);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  contactItems,
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
