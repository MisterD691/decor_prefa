require("dotenv").config();
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./src/helpers/mongoose");

const app = express();

const category = require("./src/routes/category");
const article = require("./src/routes/article");
const orderProduct = require("./src/routes/order_product");
const product = require("./src/routes/product");
const order = require("./src/routes/order");
const user = require("./src/routes/user");

app.use(express.static("public"));
app.use(cors());
app.use(
  express.json({
    extended: true,
    limit: "60mb",
  }),
);
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/user", user);
app.use("/product", product);
app.use("/category", category);
app.use("/article", article);
app.use("/orderProduct", orderProduct);
app.use("/order", order);
app.use("*", (_, res, __) => res.status(404).send("Resource not found"));

const port = process.env.PORT || 3006;

db.once("open", () => {
  app.listen(port, () =>
    console.log(`Listening on port ${port} ...`),
  );
});
