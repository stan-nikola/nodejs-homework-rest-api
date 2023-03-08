const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const joiRegisterSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "uk", "ua", "org"] },
    })
    .required(),
  password: Joi.string().min(6).alphanum().required(),

  subscription: Joi.string().valid("starter", "pro", "business"),
});

const joiUserSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = model("user", userSchema);

module.exports = { User, joiRegisterSchema, joiUserSubscriptionSchema };
