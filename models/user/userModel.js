const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
// const { Joi } = require("joi");

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

// TODO:add Joi schema

// const joiRegisterSchema = Joi.object({

// });
// const joiLoginSchema = Joi.object({});

const User = model("user", userSchema);

module.exports = { User };
