const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const budgetRouter = require("./budget/budgetRouter");
const categoryRouter = require("./category/categoryRouter");
const expenseRouter = require("./expense/expenseRouter");

// add your server code

const server = express();
server.use(helmet());
server.use(bodyParser.json());

server.use("/budget", budgetRouter);
//server.use("/category", categoryRouter);
//server.use("/expense", expenseRouter);

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
