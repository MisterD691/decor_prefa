const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "client"],
    },
    phone: {
      unique: true,
      type: String,
    },
    address: {
      type: String,
    },
    picture: {
      type: String,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// function to generate email verification token
userSchema.methods.generateEmailVerificationToken = async function () {
  const user = this;
  const hashed = await bcrypt.hash(user.email, 8);
  const token = jwt.sign(
    {
      token: hashed,
    },
    "ilovepizzastheyaremyfavoritemealandiwouldlovetoeatthemdayinandout1234567890",
    {
      expiresIn: 60 * 30,
    },
  );

  user.token = token;
  await user.save();

  return token;
};

const user = mongoose.model("User", userSchema);
module.exports = user;
