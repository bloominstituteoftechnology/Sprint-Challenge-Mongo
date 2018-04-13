const express = require('express'); // remember to install your npm packages

const budgetController = require('./budgets/budgetController.js');
const categoryController = require('./categories/categoryController.js');
const expenseController = require('./expenses/expenseController.js');
const mongoose = require('mongoose');


mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n===API Connected to the DataBase===\n'))
  .catch(error => console.log('Error Connecting to the database'));

const server = express();

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

server.use(express.json());
server.use('/budgets', budgetController);
server.use('/categories', categoryController);
server.use('/expenses', expenseController);
server.get('/', (req, res) => res.send('API running....'));
