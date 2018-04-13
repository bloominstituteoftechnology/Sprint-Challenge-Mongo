const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

server.get('/', (req, res) => res.send('API RUNNING...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
