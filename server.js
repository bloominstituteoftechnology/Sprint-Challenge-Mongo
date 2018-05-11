const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");

const db = require("./data/db");
const budgetRouter = require("./budget/budgetRouter");
const expenseRouter = require("./expense/expenseRouter");

const server = express();

// add your server code
db
  .connectTo("budgetTracker")
  .then(() => console.log("\n=== API Connected to Budget DB ===\n"))
  .catch(error => console.log("\n*** Error Connecting to Budget DB!!! ***\n"));

server.use(helmet());
server.use(express.json());

server.use("/api/budgets", budgetRouter);
server.use("/api/expenses", expenseRouter);

server.get("/", (req, res) => res.send("... API Running ..."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
