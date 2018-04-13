const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");

const db = require("./data/db.js");
const budgetRouter = require(".budget/budgetRouter.js");
const categoryRouter = require(".category/categoryROuter.js");
const expenseRouter = require("expense/expenseRouter.js");

const server = express();

// add your server code

db
  .connectTo("expdb")
  .then(() => console.log("\nSuccessfull connection to database!"))
  .catch(err => console.log("/Error connecting to database...\n"));

server.use(helmet());
server.use(express.json());
server.use("/api/budget", budgetRouter);
server.use("/api/category", categoryRouter);
server.use("/api/expense", expenseRouter);

server.get("/", (req, res) => res.send("API running.."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
