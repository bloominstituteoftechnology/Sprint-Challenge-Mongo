const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");
const mongoose = require("mongoose");

const db = require("./data/db");
const budgetsRouter = require("./budget/budgetRouter.js");
const categoriesRouter = require("./category/categoryRouter.js");
const expensesRouter = require("./expense/expenseRouter.js");

const server = express();

// add your server code

db.connectTo("budgetTrackerDB")
  .then(() => console.log("\n ...budgetTracker API connected to Database...\n"))
  .catch(err => console.log("/n *** Error connecting to Database *** \n"));

server.use(helmet());
server.use(express.json());

server.use("/budgets", budgetsRouter);
server.use("/categories", categoriesRouter);
server.use("/expenses", expensesRouter);

mongoose.Promise = global.Promise;

server.get("/", (req, res) => res.send("budgetTracker API Running..."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n ...Derrick's server up and running on Port ${port}...`);
});
