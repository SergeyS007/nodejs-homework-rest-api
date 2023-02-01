const { Contact } = require("../../models");

const updateContactById = async (req, res) => {
  const id = req.params.contactId;
  const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  // console.log(contact);
  if (!contact) {
    res.status(404).json({
      message: "Not found",
      code: 404,
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      contact,
    },
  });
};

module.exports = updateContactById;
