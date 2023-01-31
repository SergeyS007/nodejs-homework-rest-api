const { Contact } = require("../../models");

const removeContactById = async (req, res) => {
  const id = req.params.contactId;
  const contact = await Contact.findByIdAndRemove(id);
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
};

module.exports = removeContactById;
