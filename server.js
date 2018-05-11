const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('connected to mongo'))
  .catch(err => console.log('could not connect to mongo'));

// const budgetController = require('');
// const categoryController = require('');
// const expenseController = require('');

// remember to install your npm packages

const server = express();

// add your server code

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

// server.use('/api/budgets', budgetController);
// server.use('/api/categories', categoryController);
// server.use('/api/expenses', expenseController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
