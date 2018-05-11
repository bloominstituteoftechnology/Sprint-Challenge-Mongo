const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const BudgetRouter = require('./Budget/BudgetRouter');
const CategoryRouter = require('./Category/CategoryRouter');
const ExpenseRouter = require('./Expense/ExpenseRouter');

const server = express();



mongoose
  .connect('mongodb://localhost/BudgetTracker')
  .then(mongo => {
    console.log('connected to db');
  })
  .catch(err => {
    console.log('Error connecting to the db', err);
  });
// add your server code
server.use(helmet());
server.use(express.json());

server.use('/api/Budget', BudgetRouter);
server.use('/api/Category', CategoryRouter);
server.use('/api/Expense', ExpenseRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
