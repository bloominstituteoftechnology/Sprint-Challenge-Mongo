const express = require('express'); 
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n=== Connected to Budget Database ===\n'))
  .catch(err => console.log('\n=== Error Connecting to Budget Database ===\n'))

const budgetController = require('./budget/budgetController');
const categoryController = require('./categories/categoryController');
const expenseController = require('./expenses/expenseController');

const server = express();

server.use(helmet());
server.use(express.json());

server
  .get('/', (req, res) => {
    res.status(200).json({ api: "Server Running...."});
  })

server.use('/api/budget', budgetController);
server.use('/api/categories', categoryController);
server.use('/api/expenses', expenseController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
