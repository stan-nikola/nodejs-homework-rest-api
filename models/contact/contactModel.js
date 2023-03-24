const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");

const joiContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string().min(7).max(10).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "uk", "ua", "org"] },
    })
    .required(),
  favorite: Joi.boolean(),
}).options({ abortEarly: false });

const joiFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .valid(true, false)
    .messages({ "any.required": "missing field favorite" }),
}).options({ abortEarly: false });

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
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = { Contact, joiContactSchema, joiFavoriteSchema };
