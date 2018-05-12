const express = require("express"); // remember to install your npm packages
const mongoose = require("mongoose");

const budgetRouter = require("./budget/budgetRouter.js");
const categoryRouter = require("./category/categoryRouter.js");
const expenseRouter = require("./expense/expenseRouter.js");

const server = express();

mongoose
  .connect("mongodb://localhost/sprintdb")
  
  .then(mongo => {
    console.log("connected to db");
  })
  .catch(err => {
    console.log("errorconnecting to db", err);
  });

server.use(express.json());

server.use("/api/budget", budgetRouter);
server.use("/api/expense", expenseRouter);
server.use("/api/category", categoryRouter);

server.get("/", (req, res) => res.send("API Running..."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
