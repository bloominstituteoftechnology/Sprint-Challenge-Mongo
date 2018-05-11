const express = require("express"); // remember to install your npm packages
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const server = express();

const budgetRouter = require("./Routers/budgetRouter");
const categoryRouter = require("./Routers/categoryRouter");
const expenseRouter = require("./Routers/expenseRouter");

server.use(bodyParser.json());
server.use("/budgets", budgetRouter);
server.use("/categories", categoryRouter);
server.use("/expenses", expenseRouter);

mongoose
  .connect("mongodb://localhost/budgetdb")
  .then(() => {
    console.log("connected to database");
  })
  .catch(error => {
    console.error("database connection failed");
  });

server.get("/", (req, res, next) => {
  res.send("API running");
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
