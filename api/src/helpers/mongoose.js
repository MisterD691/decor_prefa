const mongoose = require("mongoose");
const connectionUrl = process.env.MONGODBURL;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
