const Order = require("../models/order");
const User = require("../models/user");

exports.add = async (req, res) => {
  try {
    console.log("Request to add order...");
    const data = filterOrder(req.body);
    const order = new Order(data);
    order.save()
    .then((doc) => doc.populate(["client"])).then(
      (doc) => {
        console.log(doc);
        return res.status(200).json(doc);
      },
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      });
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getById = async (req, res) => {
  try {
    console.log("Request to get order by Id...");
    const result = await Order.findById(req.params.id)
    .populate("client");
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getByClient = async (req, res) => {
  try {
    console.log("Request to get order by client...");
    const result = await Order.find({ client: req.params.clientId })
    .sort([['updatedAt', 'desc']]).populate("client");
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all orders...");
    const result = await Order.find().sort([['updatedAt', 'desc']])
    .populate("client");
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update order...");
    const data = filterOrder(req.body);
    Order.findOneAndUpdate({ _id: req.params.id }, data).then(
      (doc) => res.status(200).json(doc),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    );
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.remove = async (req, res) => {
  try {
    console.log("Request to delete order...");
    Order.deleteOne({ _id: req.params.id }).then(
      (doc) => res.status(200).json(doc),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    )
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.accept = async (req, res) => {
  try {
    console.log("Request to accept order...");
    const order = await Order.findById(req.params.id);
    if (order.responded == false) { // Order not responded
      order.responded = true;
      order.response = true;
      order.save().then((doc) => doc.populate(["client"]))
      .then(
        (doc) => res.status(200).json(doc),
        (reason) => {
          console.log(reason);
          res.status(400).json(reason);
        }
      );
    } else { // Order responded already
      return res.status(500).json({ message: "Cette commande a déjà été traitée" });
    }
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.reject = async (req, res) => {
  try {
    console.log("Request to reject order...");
    const order = await Order.findById(req.params.id);
    if (order.responded == false) { // Order not responded
      order.responded = true;
      order.response = false;
      order.save().then((doc) => doc.populate(["client"]))
      .then(
        (doc) => res.status(200).json(doc),
        (reason) => {
          console.log(reason);
          res.status(400).json(reason);
        }
      );
    } else { // Order responded already
      return res.status(500).json({ message: "Cette commande a déjà été traitée" });
    }
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json({message: e});
  }
}

function filterOrder(input) {
  var order = {
    "reference": input.reference,
    "clientId": input.clientId,
    "responded": input.responded,
    "response": input.response
  };
  return order;
}
