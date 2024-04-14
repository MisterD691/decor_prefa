const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getBySender,
  getByReceiver,
  getRespBySender,
  getRespByReceiver,
  getAll,
  update,
  remove,
  accept,
  reject
} = require("../controllers/request");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getAll", getAll);
router.get("/accept/:id", accept);
router.get("/reject/:id", reject);
router.get("/getBySender/:sender", getBySender);
router.get("/getRespBySender/:sender", getRespBySender);
router.get("/getRespByReceiver/:receiver", getRespByReceiver);
router.get("/getByReceiver/:receiver", getByReceiver);
router.put("/update/:id", update);
router.delete("/delete/id", remove);

module.exports = router;
