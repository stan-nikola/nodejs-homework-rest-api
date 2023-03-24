const { reVerifyUser } = require("../../services");

const reVerificationController = async (req, res) => {
  await reVerifyUser(req.body);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = { reVerificationController };
