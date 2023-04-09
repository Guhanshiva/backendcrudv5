const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("school", schoolSchema);
