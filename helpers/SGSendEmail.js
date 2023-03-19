const sgMail = require("@sendgrid/mail");

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (userMail, verifyToken) => {
  const msg = {
    to: userMail,
    from: "no-reply-node.js-app@meta.ua",
    subject: "node.js App",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verifyToken}" >Click to verification your email</a>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendEmail };
