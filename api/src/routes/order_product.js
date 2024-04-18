const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByOrder,
  getByProduct,
  getAll,
  update,
  remove
} = require("../controllers/order_product");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByOrder/:orderId", getByOrder);
router.get("/getByProduct/:productId", getByProduct);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
