const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByCategory,
  getAll,
  update,
  remove
} = require("../controllers/product");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByCategory/:categoryId", getByCategory);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
