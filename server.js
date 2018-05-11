const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");
const mongoose = require("mongoose");

const budgetController = require("./budget/budgetController.js");
const categoryController = require("./category/categoryController.js");
const expenseController = require("./expense/expenseController.js");

mongoose
  .connect("mongodb://localhost/budgetdb")
  .then(() => {
    console.log("Connected to Mongo.");
  })
  .catch(err => {
    console.log("Error connecting to the database");
  });

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/budgets", budgetController);
server.use("/api/categories", categoryController);
server.use("/api/expenses", expenseController);

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n\nAPI running on http://localhost:${port}`)
);