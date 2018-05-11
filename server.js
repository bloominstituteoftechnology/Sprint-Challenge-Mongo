const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongosprint")
  .then(() => console.log("\n... API Connected to Database ...\n"))
  .catch(err => console.log("\n*** ERROR Connecting to Database ***\n", err));

const budgetsRouter = require("./budgets/budgetsRouter");
const expensesRouter = require("./expenses/expensesRouter");
const categoriesRouter = require("./categories/categoriesRouter");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => res.send("API Running..."));

server.use("/api/budgets", budgetsRouter);
server.use("/api/expenses", expensesRouter);
server.use("/api/categories", categoriesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
