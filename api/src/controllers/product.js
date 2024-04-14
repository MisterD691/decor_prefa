const Product = require("../models/product");

exports.add = async (req, res) => {
  try {
    console.log("Request to add product...");
    const data = filterProduct(req.body);
    const product = new Product(data);
    product.save(data).then(
      (doc) => res.status(200).json(doc),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      });
  } catch (e) {
    return res.status(500).json(e.message);
  }
}

exports.getById = async (req, res) => {
  try {
    console.log("Request to get product by Id...");
    const result = await Product.findById(req.params.id)
    .populate("category").execPopulate();
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.getByCategory = async (req, res) => {
  try {
    console.log("Request to get product by category...");
    const result = await Product.find({user: req.params.categoryId})
    .populate("category").execPopulate();
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all products...");
    const result = await Product.find().populate("category").execPopulate();
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update product...");
    const data = filterProduct(req.body);
    Product.findOneAndUpdate({ _id: req.params.id }, data).then(
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
    console.log("Request to delete product...");
    Product.deleteOne({ _id: req.params.id }).then(
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

function filterProduct(input) {
  var product = {
    "title": input.title,
    "quantity": input.quantity,
    "price": input.price,
    "description": input.description,
    "picture": input.picture,
    "category": input.categoryId
  };
  return product;
}
