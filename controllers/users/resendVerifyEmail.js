const { NotFound } = require("http-errors");
const { User } = require("../../models/user");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw NotFound();
  }
  if (user.verify) {
    throw error("Verification has already been passed");
  }
  const msg = {
    to: email,
    subject: "Confirm signup",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}," target="_blank">Confirm email</a>`,
  };
  await sendEmail(msg);
  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
