const express = require("express");
const { users: ctrl } = require("../../controllers");
const { usersJoiSchema } = require("../../validations/users");
const { ctrlWrapper, validation, auth } = require("../../middlewares");

const router = express.Router();

router.post("/signup", validation(usersJoiSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(usersJoiSchema), ctrlWrapper(ctrl.login));
router.post("/logout", auth, ctrlWrapper(ctrl.logout));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch(
  "/:id",
  validation(usersJoiSchema),
  ctrlWrapper(ctrl.updateUserById)
);

module.exports = router;
