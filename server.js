const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const budgetRouter = require('./budget/BudgetRouter');
const categoryRouter = require('./category/CategoryRouter');
const expenseRouter = require('./expense/ExpenseRouter');
const server = express();

// add your server code

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/budget");
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
