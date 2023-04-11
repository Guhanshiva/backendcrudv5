const schoolSchema = require("../module/school");
const paymentSchema = require("../module/payment");

const router = require("../router/school");

const postdata = async (req, res) => {
  const data = new schoolSchema({
    ...req.body,
  });
  const savedata = await data.save();
  res.json(savedata);
};
const postdatapayment = async (req, res) => {
  const datapost = new paymentSchema({
    ...req.body,
  });
  const savedataa = await datapost.save();
  res.json(savedataa);
};

const getuserdetails = async (req, res) => {
  // let date = new Date(req.body.date);
  // const schoolSchema = paymentSchema
  const payment = paymentSchema
    .aggregate([
      {
        $lookup: {
          from: "payment",
          localField: "id",
          foreignField: "userid",
          as: "userdetails",
        },
      },
    ])
    .exec((error, result) => {
      if (error) {
        console.log("error", error);
      } else {
        // console.log(result);
        res.json(result);
      }
    });
  // const getdetails = await paymentSchema.find();
  // res.json(getdetails);
};

const getdata = async (req, res) => {
  const data = await schoolSchema.find();
  res.json(data);
};
const updatadate = async (req, res) => {
  const data = await schoolSchema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json({ msg: "updated successfully", data: data });
};
const deletedata = async (req, res) => {
  const data = await schoolSchema.findByIdAndDelete(req.params.id);
  res.json({ msg: "deleted successfully" });
};

module.exports = {
  postdata,
  getdata,
  updatadate,
  deletedata,
  postdatapayment,
  getuserdetails,
};
