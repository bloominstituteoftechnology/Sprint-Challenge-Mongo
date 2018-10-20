const express = require('express');
const mongoose = require('mongoose');

const BudgetRouter = require('./budgets/BudgetRouter.js');
const CategoryRouter = require('./categories/CategoryRouter.js');
const ExpenseRouter = require('./expenses/ExpenseRouter.js');

const server = express();
server.use(express.json());
server.use('/budget', BudgetRouter);
server.use('/category', CategoryRouter);
server.use('/expense', ExpenseRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Running' });
});

mongoose
  .connect('mongodb://localhost/budgettracker')
  .then(() => console.log('Connected to Mongo'))
  .catch(() => console.log('Error Connecting to Mongo'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
