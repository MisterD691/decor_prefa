const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    reference: {
      type: String,
      required: true,
      unique: true
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    responded: {
      type: Boolean,
      default: false,
    },
    response: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", schema);
module.exports = Order;
