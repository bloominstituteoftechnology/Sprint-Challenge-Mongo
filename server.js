const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();

// add your server code
const budgetsRouter = require('./budgets/budgetsRouter');
const categoriesRouter = require('./categories/categoriesRouter');
const expensesRouter = require('./expenses/expensesRouter');

mongoose
  .connect('mongodb://localhost/budgetTrackerdb')
  .then(mongo => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('Error connecting to database', err);
  });

server.use(helmet());
server.use(cors());
server.use(express.json());





server.use('/api/budgets', budgetsRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/expenses', expensesRouter);

server.get('/', function (req, res) {
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
