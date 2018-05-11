const express = require('express'); // remember to install your npm packages

const server = express();

// add your server code
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/sprintDB')
  .then(mongo => {
    console.log('Connected to database.');
  })
  .catch(err => {
    console.log('Error connecting to database.', err);
  });

const budgetsRouter = require('./budget/budgetsRouter');
const expensesRouter = require('./expense/expensesRouter');
const categoriesRouter = require('./category/categoriesRouter');

server.use(express.json());

server.get('/', function(req, res) {
  res.json({ api: 'running' });
});

server.use('/budgets', budgetsRouter);
server.use('/categories', categoriesRouter);
server.use('/expenses', expensesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
