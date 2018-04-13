const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/Mongo-Sprint')
  .then(() => '\n\n===Connected to MongoDB===\n\n')
  .catch(() => 'There was an issue connecting to the DataBase.');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');
const expenseRouter = require('./expense/expenseRouter');

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
