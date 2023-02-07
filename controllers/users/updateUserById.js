const { User } = require("../../models");

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!user) {
    res.status(404).json({
      message: "Not found",
      code: 404,
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      user,
    },
  });
};

module.exports = updateUserById;
