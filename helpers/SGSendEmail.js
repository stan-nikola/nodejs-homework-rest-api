const sgMail = require("@sendgrid/mail");
const { mailTemplate } = require("./mailTemplate");

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (userMail, verifyToken) => {
  const msg = {
    to: userMail,
    from: "no-reply-node.js-app@meta.ua",
    subject: " Verify Email Address node.js App",
    html: mailTemplate(verifyToken),
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
