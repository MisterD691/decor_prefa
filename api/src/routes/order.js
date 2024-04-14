const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByClient,
  getAll,
  update,
  remove,
  accept,
  reject
} = require("../controllers/request");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByClient/:clientId", getByClient);
router.get("/getAll", getAll);
router.get("/accept/:id", accept);
router.get("/reject/:id", reject);
router.put("/update/:id", update);
router.delete("/delete/id", remove);

module.exports = router;
