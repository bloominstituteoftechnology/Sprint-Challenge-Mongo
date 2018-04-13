const express = require("express"); // remember to install your npm packages
const mongoose = require("mongoose");

// add your server code
const budgetRouter = require("./Budget/budgetRouter.js");
const categoryRouter = require("./Category/categoryRouter.js");
const expenseRouter = require("./Expense/expenseRouter.js");
const server = express();
server.use(express.json());

mongoose
  .connect("mongodb://localhost/budgetdb")
  .then(() => console.log("API CONNECTED DO DATABASE"))
  .catch(err => console.log('ERROR CONNECTING TO DB'))

server.get("/", (req, res) => res.send("Api running..."));

server.use("/api/budget", budgetRouter);
server.use("/api/categories", categoryRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
