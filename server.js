const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();

const budgetRouter = require('./budget/budgetController')
const categoryRouter = require('./category/categoryController');
const expenseRouter = require('./expense/expenseController');

const port = process.env.PORT || 5000;

// add your server code
server.use(helmet());
server.use(express.json());

server.use('/budget', budgetRouter);
server.use('/category', categoryRouter);
server.use('/expense', expenseRouter);

mongoose.connect('mongodb://localhost/budget-keeper')
  .then(() => {
    console.log('\n\nConnected to MongoDB');
  })
  .catch(err => {
    console.error('database connection failed');
  });

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
