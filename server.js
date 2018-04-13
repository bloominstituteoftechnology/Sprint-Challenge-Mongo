const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n=== connected to mongo ===\n'))
  .catch(err => console.log('error conecting to mongo'))

const budgetController = require('./budget/budgetController')
const categoryController = require('./category/categoryController')
const expenseController = require('./expense/expenseController')

const server = express();

// add your server code

server.use(helmet());
server.use(express.json());



server.get('/', (req, res) => {
  res.status(200).json({api: 'running'});
});

server.use('/api/budget', budgetController);
server.use('/api/category', categoryController);
server.use('/api/expense', expenseController);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n\nAPI running on http://localhost:${port}`)
});
