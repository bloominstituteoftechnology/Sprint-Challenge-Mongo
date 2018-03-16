const express = require('express');
const mongoose = require('mongoose');

const BudgetRouter = require('./budgets/BudgetRouter.js');

const server = express();

server.use('/budget', BudgetRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Running' });
});

mongoose
  .connect('mongodb://localhost/budgettracker')
  .then(connection => console.log('Connected to Mongo'))
  .catch(error => console.log('Error Connecting to Mongo'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
