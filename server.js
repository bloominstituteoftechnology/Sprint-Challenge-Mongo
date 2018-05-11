const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
// add your server code

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n===Connected to BudgetDB ===\n'))
  .catch(error => console.log('error connected to BudgetDB'));

const budgetController = require('./budget/budgetController');
const categoryController = require('./category/categoryController');
const expenseController = require('./expense/expenseController');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Running' });
});
server.use('/api/budgets', budgetController);
server.use('/api/expenses', expenseController);
server.use('/api/categories', categoryController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
