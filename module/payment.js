const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
  userid: {
    type: String,
  },

  Date: {
    type: Date,
  },
  PaymentMethod: {
    type: String,
  },
  Registration: {
    type: String,
  },
  Transaction: {
    type: String,
  },
});
module.exports = mongoose.model("payment", paymentSchema);
