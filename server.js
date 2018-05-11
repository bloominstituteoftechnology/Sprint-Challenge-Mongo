const express = require("express"); // remember to install your npm packages
const mongoose = require("mongoose");

const budgetRouter = require("./budget/budgetRouter.js");
const categoryRouter = require("./category/categoryRouter.js");
const expenseRouter = require("./expense/expenseRouter.js");

const server = express();

const db = mongoose.connect(`mongodb://localhost/sprint`);

db
  .connectTo("starwars")
  .then(() => console.log("\n... API Connected to Database ...\n"))
  .catch(err => console.log("\n*** ERROR Connecting to Database ***\n", err));

server.use(express.json());

server.use("/api/budget", budgetRouter);
server.use("/api/expense", expenseRouter);
server.use("/api/category", categoryRouter);

server.get("/", (req, res) => res.send("API Running..."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
