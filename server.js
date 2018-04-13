const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// add your server code
const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');
const expenseRouter = require('./expense/expenseRouter');

mongoose
  .connect('mongodb://localhost/Budgetstracker')
  .then(connect => console.log('\n====Connected to DB ====\n'))
  .catch(error => console.log('\n****Error connecting****\n'));

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/budgets', budgetRouter);
server.use('/categories', categoryRouter);
server.use('/expenses', expenseRouter);

server.get('/', (req, res) => {
  res.json('API running');
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
