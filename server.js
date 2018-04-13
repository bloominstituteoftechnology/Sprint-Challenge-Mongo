const express = require('express'); // remember to install your npm packages
const helmet = require('helmet'); //security
const cors = require('cors'); //middleware
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n===Connected to Budget Database ===\n'))
  .catch(error => console.log('error connected to budget db'));

const budgetController = require('./budget/budgetController');
const categoryController = require('./category/categoryController');
const expenseController = require('./expense/expenseController');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Running' });
});
// add your server code
server.use('/api/budgets', budgetController);
server.use('/api/expenses', expenseController);
server.use('/api/categories', categoryController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
