const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router/school");
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("db connected");
  })
  .catch(() => {
    console.log("db not connected");
  });

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.listen(process.env.PORT, () => {
  console.log("server running:", process.env.PORT);
});
