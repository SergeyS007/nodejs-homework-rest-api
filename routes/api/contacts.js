const express = require("express");
const toDo = require("../../models/contacts.js");
const { v4: uuidv4 } = require("uuid");
const { contactValidation } = require("../../validations/contacts.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await toDo.listContacts();
  console.table(contacts);
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
  });
});

router.get("/:contactId", async (req, res, next) => {
  const id = req.params.contactId;
  const contact = await toDo.getContactById(id);
  if (!contact) {
    res.status(404).json({
      message: "Not found",
      code: 404,
    });
  } else {
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        contact,
      },
    });
  }
});

router.post("/", async (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.json({ message: "missing required name field" });
  } else {
    const contact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    const contacts = await toDo.addContact(contact);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { contacts },
    });
  }
});

router.delete("/:contactId", async (req, res, next) => {
  const id = req.params.contactId;
  const deletedContact = await toDo.removeContact(id);
  if (!deletedContact) {
    res.status(404).json({
      message: "Not found",
      code: 404,
    });
  } else {
    res.status(200).json({
      message: "contact deleted",
      code: 200,
      data: { deletedContact },
    });
  }
});

router.put("/:contactId", async (req, res, next) => {
  const { error } = contactValidation(req.body);
  if (error) {
    res.status(400).json({
      message: error.details,
      code: 400,
    });
  }
  const id = req.params.contactId;
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({
      message: "missing fields",
      code: 400,
    });
  } else {
    const updatedContact = await toDo.updateContact(id, req.body);
    if (!updatedContact) {
      res.status(404).json({
        message: "Not found",
        code: 404,
      });
    } else {
      res.json({
        status: "success",
        code: 200,
        data: updatedContact,
      });
    }
  }
});

module.exports = router;
