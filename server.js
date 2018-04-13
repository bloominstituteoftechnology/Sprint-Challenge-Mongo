const express = require('express'); // remember to install your npm packages

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetTrackerdb')
  .then(() => console.log('\n connected to mongo \n'))
  .catch(err => console.log('error connecting to mongo'));
  
const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');
const expenseRouter = require('./expense/expenseRouter');

const server = express();
server.use(express.json());

server.use('/api/budget', budgetRouter);
server.use('/api/category/', categoryRouter);
server.use('/api/expense', expenseRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
