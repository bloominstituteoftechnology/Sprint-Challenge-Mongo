const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const logger = require('morgan');
const helmet = require('helmet');

const budgetsRouter = require('./budgets/budgetsRouter');
const expensesRouter = require('./expenses/expensesRouter');
const categoriesRouter = require('./categories/categoriesRouter');

mongoose
  .connect('mongodb://localhost/budgettracker')
  .then(() => console.log(`\n=== connected to mongo ===\n`))
  .catch(err => res.status(500).json(err));

const server = express();

// add your server code
server.use(logger('dev'));
server.use(helmet());
server.use(express.json());

server.use('/api/budgets', budgetsRouter);
server.use('/api/expenses', expensesRouter);
server.use('/api/categories', categoriesRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
