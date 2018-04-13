const express = require('express');
const mongoose = require('mongoose');
const budgetRouter = require('./Connect/Budget/budgetRouter');
const categoryRouter = require('./Connect/Category/categoryRouter');
const expenseRouter = require('./Connect/Expense/expenseRouter');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'yee' });
});

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

mongoose
  .connect('mongodb://localhost/Connect')
  .then(connected => {
    console.log('We Got Mongo Baby! :)');
  })
  .catch(err => {
    console.log('We DONT got Mongo Baby :(');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
