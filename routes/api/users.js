const express = require("express");
const { users: ctrl } = require("../../controllers");
const { usersJoiSchema } = require("../../validations/users");
const { ctrlWrapper, validation, auth, upload } = require("../../middlewares");

const router = express.Router();

router.post("/signup", validation(usersJoiSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(usersJoiSchema), ctrlWrapper(ctrl.login));
router.post("/logout", auth, ctrlWrapper(ctrl.logout));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
router.patch(
  "/:id",
  auth,
  validation(usersJoiSchema),
  ctrlWrapper(ctrl.updateUserById)
);

module.exports = router;
