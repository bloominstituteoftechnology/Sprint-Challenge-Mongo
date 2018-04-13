const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/budgettrackerdb")
	.then(() => console.log("\n=== connected to mongo ===\n"))
	.catch(err => console.log("error connecting to mongo"));


const budgetRouter = require("./Budget/budgetRouter");
const categoryRouter = require("./Category/categoryRouter");
const expenseRouter = require("./Expense/expenseRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/budgets", budgetRouter);
server.use("/api/categories", categoryRouter);
server.use("/api/expenses", expenseRouter);


server.get("/", function(req, res) {
	res.status(200).json({ api: "running" });
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`Server up and running on ${port}`);
});
