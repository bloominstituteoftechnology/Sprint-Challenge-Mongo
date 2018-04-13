const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");

const budgetRouter = require("./budget/budgetRouter.js");
const categoriesRouter = require("./categories/categoriesRouter.js");
const expensesRouter = require("./expenses/expensesRouter.js");

const server = express();

mongoose
    .connect("mongodb://localhost/budgetTrackerDB")
    .then(() => console.log("\n=== Connected to mongo ===\n"))
    .catch(err => console.log("Error connecting to mongo"));

server.use(helmet());
server.use(express.json());

// add your server code
server.get("/", (req, res) => {
    res.status(200).json({ api: "running" });
});

server.use("/api/budgets", budgetRouter);
server.use("/api/categories", categoriesRouter);
server.use("/api/expenses", expensesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n=== Server up and running on ${port} ===\n`);
});
