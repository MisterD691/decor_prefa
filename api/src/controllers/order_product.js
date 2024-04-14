const { OrderProduct } = require("../models/order_product");

exports.add = async (req, res) => {
  try {
    console.log("Request to add order_product...");
    const data = filterProdReq(req.body);
    const order_product = new OrderProduct(data);
    order_product.save().then(
      (doc) => res.status(200).json(doc),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      });
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.getById = async (req, res) => {
  try {
    console.log("Request to get order_product by Id...");
    const result = await OrderProduct.findById(req.params.id)
    .populate(["client"]).populate(["product"]);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.getByClient = async (req, res) => {
  try {
    console.log("Request to get order_product by client...");
    const result = await Order.find({ client: req.params.clientId })
    .sort([['updatedAt', 'desc']])
    .populate(["client"]).populate(["product"]);
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getByProduct = async (req, res) => {
  try {
    console.log("Request to get order_product by product...");
    const result = await Order.find({ product: req.params.productId })
    .sort([['updatedAt', 'desc']])
    .populate(["client"]).populate(["product"]);
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all order_products...");
    const result = await OrderProduct.find()
    .populate(["client"]).populate(["product"]);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update order_product...");
    const data = filterProdReq(req.body);
    OrderProduct.findOneAndUpdate({ _id: req.params.id }, data).then(
      (doc) => res.status(200).json(doc),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    );
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.remove = async (req, res) => {
  try {
    console.log("Request to delete order_product...");
    OrderProduct.deleteOne({ _id: req.params.id }).then(
      (doc) => res.status(200).json(doc),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    )
  } catch (e) {
    return res.status(500).json(e);
  }
}

function filterProdReq(input) {
  var order_product = {
    "product": input.productId,
    "order": input.orderId,
    "quantity": input.quantity,
  };
  return order_product;
}
