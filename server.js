const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

const budgetController = require("./budget/budgetController.js");
const expenseController = require("./expense/expenseController.js");
const categoryController = require("./category/categoryController.js");

const server = express();
const port = process.env.PORT || 5000;
server
  .get("/", (req, res) => res.send(`API Running on port: ${port}`))
  .listen(port, () => console.log(`\n API up on port: ${port} `));

mongoose
  .connect("mongodb://localhost/budgetTracker")
  .then(() => console.log("\n... API Connected to MongoDB at localhost/27017 ...\n"))
  // .then(() => console.log('\n... API Connected to global MongoDB atlas...\n'))
  .catch(err => console.log("\n*** ERROR Connecting to Database ***\n", err));

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/budget", budgetController);
server.use("/expense", expenseController);
server.use("/category", categoryController);
