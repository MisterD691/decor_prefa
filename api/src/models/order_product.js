const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderProduct = mongoose.model("OrderProduct", schema);
module.exports = OrderProduct;
