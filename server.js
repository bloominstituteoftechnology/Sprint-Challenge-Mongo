const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');

const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');
const expenseRouter = require('./expense/expenseRouter');

const server = express();

// add your server code

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(mongo => {
    console.log('\n... API Connected to Database ...\n');
  })
  .catch(err => {
    console.log('\n*** ERROR Connecting to Database ***\n', err);
  });

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

server.get('/', (res, req) => res.send('API IS LIT'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
