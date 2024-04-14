require("dotenv").config();
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const socket = require("socket.io");
const db = require("./src/helpers/mongoose");

const app = express();

const balance = require("./src/routes/balance");
const group = require("./src/routes/group");
const prodReq = require("./src/routes/prod_req");
const product = require("./src/routes/product");
const request = require("./src/routes/request");
const userGroup = require("./src/routes/user_group");
const user = require("./src/routes/user");
const cron = require('node-cron');

const { initExpiredUserBalances } = require("./src/controllers/user")

/* Sockets configuration */

let io;

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
app.use("/group", group);
app.use("/balance", balance);
app.use("/userGroup", userGroup);
app.use("/prodReq", prodReq);
app.use("/request", request);
app.use("*", (_, res, __) => res.status(404).send("Resource not found"));

const port = process.env.PORT || 3006;

cron.schedule('* * * * *', async () => {
  await initExpiredUserBalances();
  io.emit("user_init");
  console.log('Users refreshed');
});

db.once("open", () => {
  const server = app.listen(port, () =>
    console.log(`Listening on port ${port} ...`),
  );
  io = socket(server, { cors: "*" });
  io.on("connection", (socket) => {
    console.log("connection established");

    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    socket.on("new_req", (receiverId) => {
      console.log("New request");
      io.emit("new_req", receiverId);
    });

    socket.on("req_accepted", (receiverId) => {
      io.emit("req_accepted", receiverId);
    });

    socket.on("req_rejected", (receiverId) => {
      io.emit("req_rejected", receiverId);
    });
  });
});
