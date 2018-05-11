const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');
const connect = require('./data/connect.js');
const categoryController = require('./MVC/Category/categoryController.js');
const budgetController = require('./MVC/Budget/budgetController.js');
const expenseController = require('./MVC/Expense/expenseController.js');

const server = express();

connect
  .connectTo('budgetTracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());
// add your server code
server.use('/api/categorys', categoryController);
server.use('/api/budgets', budgetController);
server.use('/api/expenses', expenseController);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
