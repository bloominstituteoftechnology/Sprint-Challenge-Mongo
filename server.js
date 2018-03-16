const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");
const mongoose = require("mongoose");

const server = express();

// add your server code

server.use(helmet());
server.use(express.json());

mongoose
  .connect("mongodb://localhost/BudgetTracker")
  .then(conn => {
    console.log("connected to mongo");
  })
  .catch(err => {
    console.log("error connecting to mongo");
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
