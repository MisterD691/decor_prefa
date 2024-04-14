const express = require("express");
const router = express.Router();

const {
  init,
  getById,
  getByUser,
  getAll,
  update,
  remove
} = require("../controllers/balance");

router.post("/init", init);
router.get("/getById/:id", getById);
router.get("/getByUser/:user", getByUser);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
