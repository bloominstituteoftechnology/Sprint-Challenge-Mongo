const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const host = 'localhost';
const database = 'budgettracker';

const server = express();

mongoose
  .connect(`mongodb://${host}/${database}`)
  .then(() => console.log("\n=== API Connected to Database ===\n"))
  .catch(err => console.log("\n*** ERROR Connecting to Database ***\n"));

server.use(helmet());
server.use(express.json());

server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});