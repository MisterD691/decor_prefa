const Category = require("../models/category");

exports.add = async (req, res) => {
  try {
    console.log("Request to add category...");
    const data = filterCategory(req.body);
    const category = new Category(data);
    category.save().then(
      (doc) => res.status(200).json(doc),
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
    console.log("Request to get category by Id...");
    const result = await Category.findById(req.params.id);
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all categorys...");
    const result = await Category.find();
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update category...");
    const data = filterCategory(req.body);
    Category.findOneAndUpdate({ _id: req.params.id }, data).then(
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
    console.log("Request to delete category...");
    Category.deleteOne({ _id: req.params.id }).then(
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

function filterCategory(input) {
  var category = {
    "label": input.label,
  };
  return category;
}
