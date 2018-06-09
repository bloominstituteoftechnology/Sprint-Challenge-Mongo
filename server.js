const express = require('express'); // remember to install your npm packages
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const Budget = require('./Budget/budget.js');
const budgetRouter = require('./Budget/budgetRouter.js');
const Category = require('./Category/category.js');
const categoryRouter = require('./Category/categoryRouter.js');
const Expense = require('./Expense/expense.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

mongoose.connect("mongodb://localhost/budget-tracker");

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("=== API connected to Database ===")
});

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

server.use("/budgets", budgetRouter);
server.use("/categories", categoryRouter);
