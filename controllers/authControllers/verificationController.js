const { verifyUser } = require("../../services");

const verificationController = async (req, res) => {
  await verifyUser(req.params);

  res.json({
    message: "Verification successful",
  });
};

module.exports = { verificationController };
