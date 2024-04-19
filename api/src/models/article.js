const mongoose = require("mongoose");

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    picture: {
      type: String,
    }
  },
  {
    timestamps: true,
  },
);

const article = mongoose.model("Article", articleSchema);
module.exports = article;
