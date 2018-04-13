const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const budgetController = require("./budget/budgetController");
const categoryController = require("./category/categoryController");
const expenseController = require("./expense/expenseController");
const server = express();

mongoose
  .connect("mongodb://localhost/budgets")
  .then(() => {
    console.log("Connected to Mongo.");
  })
  .catch(err => {
    console.log("Error connecting to the database");
  });


server.use(helmet());
server.use(express.json());
server.use("/api/budgets", budgetController);
server.use("/api/categories", categoryController);
server.use("/api/expenses", expenseController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server running on ${port}`);
});