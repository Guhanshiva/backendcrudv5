const express = require("express");

const {
  postdata,
  getdata,
  updatadate,
  deletedata,
  postdatapayment,
  getuserdetails,
} = require("../controller/school");
const router = express.Router();
router.post("/create", postdata);
router.post("/creat", postdatapayment);
router.get("/view", getdata);
router.get("/viewmerge", getuserdetails);
router.put("/update/:id", updatadate);
router.delete("/delete/:id", deletedata);

module.exports = router;
