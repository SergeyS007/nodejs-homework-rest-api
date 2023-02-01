const { Contact } = require("../../models");

const updateFavoriteById = async (req, res) => {
  const id = req.params.contactId;
  const { favorite } = req.body;
  const contact = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );
  if (!favorite) {
    res.status(400).json({
      message: "missing field favorited",
      code: 400,
    });
  }
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

module.exports = updateFavoriteById;
