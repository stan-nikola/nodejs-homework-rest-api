const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string().min(7).max(10).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "uk", "ua", "org"] },
    })
    .required(),
  favorite: Joi.boolean(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .valid(true, false)
    .messages({ "any.required": "missing field favorite" }),
});

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      required: [true],
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = { Contact, joiSchema, favoriteJoiSchema };
