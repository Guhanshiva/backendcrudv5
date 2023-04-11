const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    icons: {
      type: String,
    },
    navbartitle: {
      type: String,
    },
    userstatus: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("school", schoolSchema);
// name,location first there and changed
