const express = require("express");

const {
  postdata,
  getdata,
  updatadate,
  deletedata,
} = require("../controller/school");
const router = express.Router();
router.post("/create", postdata);
router.get("/view", getdata);
router.put("/update/:id", updatadate);
router.delete("/delete/:id", deletedata);

module.exports = router;
