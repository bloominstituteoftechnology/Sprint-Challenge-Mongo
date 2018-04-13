const express = require('express');
const mongoose = require("mongoose");

const budgetRouter = require("./Budget/budgetRouter.js");
const categoriesRouter = require("./Category/categoryRouter.js");
const expensesRouter = require("./Expense/expenseRouter.js");

const server = express();
mongoose
  .connect("mongodb://localhost/budgetdb")
  .then(() => console.log("\n=== Connected to mongo ===\n"))
  .catch(err => console.log("Error connecting to mongo"));
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "API running" });
});

server.use("/api/budgets", budgetRouter);
server.use("/api/categories", categoriesRouter);
server.use("/api/expenses", expensesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
