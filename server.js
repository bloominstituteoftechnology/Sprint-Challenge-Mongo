const express = require("express");
const mongoose = require("mongoose");

const budgetsRouter = require("./budget/budgetsRouter");
const categoriesRouter = require("./category/categoriesRouter");
const expensesRouter = require("./expense/expensesRouter");

const server = express();

server.use(express.json());

server.use("/api/budgets", budgetsRouter);
server.use("/api/categories", categoriesRouter);
server.use("/api/expenses", expensesRouter);

server.get("/", (req, res) => res.send("Welcome to the Budget Tracker"));

mongoose.connect(
  "mongodb://localhost/budget_tracker",
  {},
  err => {
    if (err) console.log("Database connection failed");
    console.log("Successfully Connected to MongoDB");
  }
);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
