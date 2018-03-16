//importing modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//import models

//starting mongoose and express
mongoose.connect("mongodb://localhost:27017/sprint")
.then(() => {
  const port = process.env.port || 3000;
  const app = express();
  app.listen(port)
  console.log(`The server is listening on port ${port}`)
});

