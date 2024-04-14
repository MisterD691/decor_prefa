const express = require("express");
const router = express.Router();

const {
  signUp,
  signIn,
  getById,
  getAll,
  update,
  remove
} = require("../controllers/user");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/getById/:id", getById);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
