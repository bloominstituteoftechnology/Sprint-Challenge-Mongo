const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

const budgetRouter = require("./budget/budgetController");
const categoryRouter = require("./category/categoryController");
const expenseRouter = require("./expense/expenseController");

// mongoose
mongoose
  .connect("mongodb://localhost/budget")
  .then(mongo => {
    console.log("-- connected to mongo database --");
  })
  .catch(err => {
    console.log("!Error, trouble connecting to mongo DB!");
  });

const server = express();

// add your server code
server.use(helmet());
server.use(cors());
server.use(express.json());

// routes
server.use("/api/budgets", budgetRouter);
server.use("/api/categories", categoryRouter);
server.use("/api/expenses", expenseRouter);

server.get("/", (req, res) => {
  res.status(200).json({ API: "running" });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`== Server up and running on ${port} ==`);
});
