const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");

const db = require("./data/db.js");
const budgetsRouter = require("./budget/budgetsRouter.js");
const categoriesRouter = require(".category/categoriesRouter.js");
const expensesRouter = require("./expense/expensesRouter.js");

const server = express();

// add your server code

db.connectTo("budgetTracker")
  .then(() => console.log("\n ...budgetTracker API connected to Database...\n"))
  .catch(err => console.log("/n *** Error connecting to Database *** \n"));

server.use(helmet());
server.use(express.json());

server.use("./budgets", budgetsRouter);
server.use("/categories", categoriesRouter);
server.use("/expenses", expensesRouter);

server.get("/", (req, res) => res.send("budgetTracker API Running..."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
