const User = require("../models/user");

exports.signUp = async (req, res) => {
  try {
    console.log("Request to sign up ...");
    var data = filterUser(req.body);
    const user = new User(data);
    user.save().then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}

exports.signIn = async (req, res) => {
  try {
    console.log("Request to sign in ...");
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });
    return res.status(200).json({datas: user});
  } catch (e) {
    return res.status(500).json(e);
  }
};

exports.getById = async (req, res) => {
  try {
    console.log("Request to get user by Id...");
    const result = await User.findById(req.params.id);
    return res.status(200).json({datas: result});
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.getAll = async (req, res) => {
  try {
    console.log("Request to get all users...");
    const result = await User.find();
    return res.status(200).json({datas: result});
  } catch (e) {
    return res.status(500).json(e);
  }
}

exports.update = async (req, res) => {
  try {
    console.log("Request to update user...");
    const data = filterUser(req.body);
    User.findOneAndUpdate({ _id: req.params.id }, data).then(
      (doc) => res.status(200).json({datas: doc}),
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
    console.log("Request to delete user...");
    User.deleteOne({ _id: req.params.id }).then(
      (doc) => res.status(200).json({datas: doc}),
      (reason) => {
        console.log(reason);
        res.status(400).json(reason);
      }
    )
  } catch (e) {
    return res.status(500).json(e);
  }
}

// Change attributes
function filterUser(input) {
  var user = {
    "firstName": input.firstName,
    "lastName": input.lastName,
    "email": input.email,
    "password": input.password,
    "role": input.role,
    "phone": input.phone,
    "address": input.address,
    "picture": input.picture,
  };
  return user;
}