const schoolSchema = require("../module/school");
const router = require("../router/school");

const postdata = async (req, res) => {
  const data = new schoolSchema({
    name: req.body.name,
    location: req.body.location,
  });
  const savedata = await data.save();
  res.json(savedata);
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

module.exports = { postdata, getdata, updatadate, deletedata };
