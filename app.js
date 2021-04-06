const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Connecting to MongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to MongoDB")
);
app.listen(3000);

//Account Routes
app.use(express.json());
const account = require("./routes/account");
app.use("/account", account);
