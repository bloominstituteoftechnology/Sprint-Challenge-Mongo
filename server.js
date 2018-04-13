// Express
const express = require('express'); // remember to install your npm packages
// Mongoose
const mongoose = require('mongoose');

// Controller
const budgetsController = require('./budgets/Budget');
const categoriesController = require('./categories/Category');
const expensesController = require('./expenses/Expense');

// Server
const server = express();

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n=== Connected to Mongo === \n'))
  .catch(() => console.log('Error connecting to Mongo'));

// Middleware
server.use(express.json());

server.use('/api/budgets', budgetsController);
server.use('/api/categories', categoriesController);
server.use('/api/expenses', expensesController);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Running...' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
