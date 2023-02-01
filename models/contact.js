const { Schema, model } = require("mongoose");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
};

// const fs = require("fs/promises");
// const path = require("path");
// const contactsPath = path.resolve("./models/contacts.json");

// const listContacts = async () => {
//   try {
//     const data = await fs.readFile(contactsPath);
//     const contacts = JSON.parse(data);
//     return contacts;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getContactById = async (contactId) => {
//   try {
//     const contacts = await listContacts();
//     const contact = contacts.find((item) => item.id === contactId);
//     if (!contact) {
//       return null;
//     }
//     return contact;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const removeContact = async (contactId) => {
//   try {
//     const contacts = await listContacts();
//     const index = contacts.findIndex((contact) => contact.id === contactId);
//     if (index === -1) {
//       return null;
//     }
//     const filteredContacts = contacts.filter((_, ind) => ind !== index);
//     await fs.writeFile(contactsPath, JSON.stringify(filteredContacts));
//     return contacts[index];
//   } catch (error) {
//     console.log(error);
//   }
// };

// const addContact = async (body) => {
//   try {
//     const contacts = await listContacts();
//     contacts.push(body);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts));
//     return contacts;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updateContact = async (contactId, body) => {
//   try {
//     const contacts = await listContacts();
//     const index = contacts.findIndex((contact) => contact.id === contactId);
//     if (index === -1) {
//       return null;
//     }
//     contacts[index] = { id: contactId, ...body };
//     await fs.writeFile(contactsPath, JSON.stringify(contacts));
//     return contacts[index];
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };
