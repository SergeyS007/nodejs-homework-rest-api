const { User } = require("../../models");
const { v4 } = require("uuid");
const gravatar = require("gravatar");
const sendEmail = require("../../helpers/sendEmail");

const Conflict = require("http-errors");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} is already in use`);
  }
  const verificationToken = v4();
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({
    email,
    password: hashPassword,
    verificationToken,
    avatarURL,
  });
  const msg = {
    to: email,
    subject: "Sending with SendGrid is Fun",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}," target="_blank">Confirm email</a>`,
  };
  await sendEmail(msg);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = signup;
