const express = require('express'); // remember to install your npm packages
const helmet = require("helmet");
const mongoose = require("mongoose");


const budgets = require("./routes/budgets");
const categories = require("./routes/categories");
const expenses = require("./routes/expenses");

const server = express();

mongoose.connect("mongodb://localhost/budgetTracker")
  .then(() => {
    console.log("Mongoose connected to Mongo Database");
  })
  .catch(err => {
    console.log("There is an error connecting Mongoose to Mongo", err);
  })

server.use(helmet());
server.use(express.json());

server.use("/api/budgets", budgets);
server.use("/api/categories", categories);
server.use("/api/expenses", expenses);


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
