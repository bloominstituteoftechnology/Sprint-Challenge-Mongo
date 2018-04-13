const express = require('express'); // remember to install your npm packages

const mongoose = require('mongoose')
const server = express();

const BudgetRouter = require('./Routers/BudgetRouter');
const ExpenseRouter = require('./Routers/ExpenseRouter');
const CategoryRouter = require('./Routers/CategoryRouter.js');

mongoose
  .connect('mongodb://localhost')
  .then(() => console.log('\n=== Connected to Mongo  ===\n'))
  .catch(err => console.log('\n=== Error Connecting to Mongo ===\n')
  );

server.use('/api/budget', BudgetRouter);
server.use('/api/expense', ExpenseRouter);
server.use('/api/category', CategoryRouter);

server.get('/', function(req, res) {
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});