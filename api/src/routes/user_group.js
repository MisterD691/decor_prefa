const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByUser,
  getByGroup,
  getAll,
  update,
  remove
} = require("../controllers/user_group");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByUser/:user", getByUser);
router.get("/getByGroup/:group", getByGroup);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/id", remove);

module.exports = router;
