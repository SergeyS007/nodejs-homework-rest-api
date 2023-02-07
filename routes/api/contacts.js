const express = require("express");
const {
  contactsJoiSchema,
  contactsFavoriteJoiSchema,
} = require("../../validations/contacts.js");
const { contacts: ctrl } = require("../../controllers");

const { auth, ctrlWrapper, validation } = require("../../middlewares");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  auth,
  validation(contactsJoiSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeContactById));

router.put(
  "/:contactId",
  validation(contactsJoiSchema),
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  validation(contactsFavoriteJoiSchema),
  ctrlWrapper(ctrl.updateFavoriteById)
);

module.exports = router;
