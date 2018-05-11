const express = require('express');
const mongoose = require('mongoose'); // remember to install your npm packages
const helmet = require('helmet');
const server = express();

mongoose
  .connect('mongodb://localhost/budgets')
    .then(mongo => {
      console.log('Connected to database');
    })
    .catch(err => {
      console.log('Error connecting database', err)
    })

const budgetsRouter = require('./budgets/budgetsRouter');
const expensesRouter = require('./expenses/expensesRouter');
const categoriesRouter = require('./categories/categoriesRouter');

// add your server code
server.use(helmet());
server.use(express.json());

server.use('/budgets', budgetsRouter);
server.use('/expenses', expensesRouter);
server.use('/categories', categoriesRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
