const OrderProduct  = require("../models/order_product");

exports.add = async (req, res) => {
  try {
    console.log("Request to add order_product...");
    const data = filterOrderProdArray(req.body);
    let docs = [];

    console.log(data);

    for (var i=0; i<data.length; i++) {
      const order_product = new OrderProduct(data[i]);
      let doc;
      try {
        doc = await order_product.save();
      } catch (e) {
        return res.status(500).json(e);
      }
      docs.push(doc);
      if (i == (data.length-1)) {
        console.log("Finished");
        res.status(200).json({datas: docs});
      }
    }
    // order_product.save().then(
    //   (doc) => res.status(200).json(doc),
    //   (reason) => {
    //     console.log(reason);
    //     res.status(400).json(reason);
    //   });
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

exports.getByOrder = async (req, res) => {
  try {
    console.log("Request to get order_product by order...");
    const result = await Order.find({ client: req.params.orderId })
    .sort([['updatedAt', 'desc']])
    .populate(["order"]).populate(["product"]);
    return res.status(200).json({datas: result});
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
    .populate(["order"]).populate(["product"]);
    return res.status(200).json({datas: result});
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
    return res.status(200).json({datas: result});
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update order_product...");
    const data = filterOrderProd(req.body);
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

function filterOrderProd(input) {
  var order_product = {
    "product": input.productId,
    "order": input.orderId,
    "quantity": input.quantity,
  };
  return order_product;
}

function filterOrderProdArray(input) {
  var items = [];
  for (var i=0; i<input.length; i++) {
    var item = filterOrderProd(input[i])
    items.push(item);
  }
  return items;
}
